import rateLimit from 'express-rate-limit';

export const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login requests per 15 minutes
  message: {
    success: false,
    message: "Too many login attempts. Please try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const userUpdateRateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login requests per 15 minutes
  message: {
    success: false,
    message: "Too many update attempts. Please try again after 10 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
