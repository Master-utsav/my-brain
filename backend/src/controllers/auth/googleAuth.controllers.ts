// googleAuth.controller.ts
import { Request, Response } from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import User from '../../models/User.model';
import { generateDummyPassword } from '../../validchecks/checkAuthConstraints';
import { sendGoogleAuthPasswordMail } from '../../helpers/mailer';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const BACKEND_DOMAIN = process.env.BACKEND_DOMAIN!;
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: `${BACKEND_DOMAIN}/user/signup-google/callback`
}, async (accessToken, refreshToken, profile, done) => {
  try {

    let googleEmail: string;
    let profileImageUrl: string | undefined;
    let randomPassword: string;
    let hashedPassword: string;
    if (profile && profile.emails) {
      googleEmail = profile.emails[0].value;
      randomPassword = generateDummyPassword(googleEmail);
      hashedPassword = await bcrypt.hash(randomPassword, 10);
    } else {
      return done(new Error('No email found in Google profile'), undefined);
    }

    if (profile.photos && profile.photos.length > 0) {
      profileImageUrl = profile.photos[0].value; 
    } else {
      profileImageUrl = undefined; 
    }

    let user = await User.findOne({ email: googleEmail });
    
    const { nanoid } = await import('nanoid');
    if (!user) {
      user = new User({
        uniqueId: nanoid(),
        firstName: profile.name?.givenName || 'User',
        lastName: profile.name?.familyName || 'LastName',
        userName: profile.displayName.replace(/ /g, '_'),
        email: googleEmail.toLowerCase(),
        role: "STUDENT",
        password: hashedPassword,
        profileImageUrl: profileImageUrl,  
        emailVerificationStatus: true
      });
      await user.save();  

      await sendGoogleAuthPasswordMail(user.email, randomPassword);
    }

    done(null, user); 
  } catch (error) {
    done(error, undefined);
  }
}));

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export function handleGoogleSignUpFunction(req: Request, res: Response, next: Function) {
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
}

export function handleGoogleSignUpCallbackFunction(req: Request, res: Response, next: Function) {
  
const FRONTEND_HOME_ROUTE = process.env.PUBLIC_FRONTEND_DOMAIN!;
const FRONTEND_SIGNUP_ROUTE = process.env.PUBLIC_FRONTEND_SIGNUP_ROUTE!;
  passport.authenticate('google', { 
    failureRedirect: FRONTEND_SIGNUP_ROUTE, 
    successRedirect: FRONTEND_HOME_ROUTE, }, async (err, user, info) => {
    if (err || !user) {
      return res.redirect(FRONTEND_SIGNUP_ROUTE);
    }

    const token = jwt.sign({
      id: user._id,
      uniqueId: user.uniqueId,
    }, process.env.JWT_SECRET!, { expiresIn: '15d' });

    res.redirect(`${FRONTEND_HOME_ROUTE}?success=true&message=Login successful&token=${token}`);

  })(req, res, next);
}


 // const userData = {
    //   userName: user.userName,
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   email: user.email,
    //   emailVerificationStatus: user.emailVerificationStatus,
    //   profileImageUrl: user.profileImageUrl
    // };

    // res.redirect(`${FRONTEND_HOME_ROUTE}?success=true&message=Login successful&token=${token}&email=${userData.email}&firstName=${userData.firstName}&userName=${userData.userName}&lastName=${userData.lastName}&emailVerificationStatus=${userData.emailVerificationStatus}&profileImageUrl=${userData.profileImageUrl}`);