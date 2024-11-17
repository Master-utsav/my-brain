import { Response } from "express";
import { AuthenticatedRequest } from "../../middleware/auth.middleware";
import User from "../../models/User.model";
import mongoose from "mongoose";
import VideoModel from "../../models/Video.model";
import CourseModel from "../../models/Course.model";

export async function handleUserCourseBookmarkfunction(req: AuthenticatedRequest , res: Response){
    const userId = req.userId

    if(!userId){
        return res.status(401).json({success: false , message: 'userId not found'})
    }

    const {courseId} = req.body;

    if(!courseId){
        return res.status(400).json({success: false , message: 'courseId not found'})
    }
    
    try {
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({success: false , message: 'user not found'})
        }
        
        const courseIndex = user.bookmarks.course.findIndex((id: string) => id === courseId);
    
        if (courseIndex !== -1) {
          user.bookmarks.course.splice(courseIndex, 1);
          await user.save();
    
          const courseBookmarks = user.bookmarks.course; 
          return res.status(200).json({
            success: true,
            message: 'Removed from bookmarks',
            courseBookmarks,
          });
        } else {
          user.bookmarks.course.push(courseId);
          await user.save();
    
          const courseBookmarks = user.bookmarks.course;
          return res.status(200).json({
            success: true,
            message: 'Added to bookmarks',
            courseBookmarks,
          });
        }

    } catch (error) {
        return res.status(500).json({success: false , message: "Internal server error"})
    }
}

export async function handleUserVideoBookmarkfunction(req: AuthenticatedRequest , res: Response){
    const userId = req.userId

    if(!userId){
        return res.status(401).json({success: false , message: 'userId not found'})
    }

    const {videoId} = req.body;

    if(!videoId){
        return res.status(400).json({success: false , message: 'videoId not found'})
    }
    
    try {
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({success: false , message: 'user not found'})
        }
        
        const videoIndex = user.bookmarks.video.findIndex((id : string) => id === videoId);
    
        if (videoIndex !== -1) {
          user.bookmarks.video.splice(videoIndex, 1);
          await user.save();
    
          const videoBookmarks = user.bookmarks.video; 
          return res.status(200).json({
            success: true,
            message: 'Removed from bookmarks',
            videoBookmarks,
          });
        } else {
          user.bookmarks.video.push(videoId);
          await user.save();
    
          const videoBookmarks = user.bookmarks.video;
          return res.status(200).json({
            success: true,
            message: 'Added to bookmarks',
            videoBookmarks,
          });
        }

    } catch (error) {
        return res.status(500).json({success: false , message: "Internal server error"})
    }
}

export async function handleUserUnenrolledCourseFunction(req: AuthenticatedRequest, res: Response) {
    const { userId, userUniqueId: uniqueId } = req;
    const { courseId } = req.body;

    if (!courseId || !userId || !uniqueId) {
        return res.status(401).json({ success: false, message: 'Unauthorized: Missing required information' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const userCourseIndex = user.enrolledIn.indexOf(courseId);
        if (userCourseIndex === -1) {
            return res.status(400).json({ success: false, message: "Course not found in user's enrolled courses" });
        }

        user.enrolledIn.splice(userCourseIndex, 1);
        await user.save();

        const course = await CourseModel.findOne({courseId});
        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        const enrolledByIndex = course.enrolledBy.indexOf(uniqueId);
        if (enrolledByIndex !== -1) {
            course.enrolledBy.splice(enrolledByIndex, 1);
            await course.save();
        }

        return res.status(200).json({ success: true, message: "User unenrolled from course successfully" });

    } catch (error) {
        console.error("Error unenrolling user from course:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export async function handleRemoveHistoryVideo(req: AuthenticatedRequest , res: Response){
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'User ID not found' });
  }

  const { videoId } = req.body;

  if (!videoId) {
    return res.status(400).json({ success: false, message: 'Video ID or Course ID not found' });
  }
  
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const videoIndex = user.history.findIndex((item : any) => item.video === videoId);

    if (videoIndex !== -1) {
      
      user.history.splice(videoIndex, 1);
      await user.save();
    
      return res.status(200).json({
        success: true,
        message: 'Removed from history',
      });
    }

    return res.status(404).json({
      success: false,
      message: 'Video not found in history',
    });

  } catch (error) {
    return res.status(500).json({success: false , message: "Internal server error"})
  }

}

export async function handleRemoveUserEntireHistory(req: AuthenticatedRequest, res: Response){
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'User ID not found' });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    user.history = [];
    await user.save();

    return res.status(200).json({ success: true, message: 'Removed history' });
    
  } catch (error) {
    return res.status(500).json({success: false , message: "Internal server error"})
  }
}


export async function handleUserHistoryVideoOrder(req: AuthenticatedRequest, res: Response) {
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'User ID not found' });
  }

  const { videoId } = req.body;
  if (!videoId) {
    return res.status(400).json({ success: false, message: 'Video ID or Course ID not found' });
  }

  try {
    const user = await User.findById(userId);
    
    const videoIndex = user.history.findIndex((item: any) => item.video === videoId);

    if (videoIndex !== -1) {
      // If it exists, update the timestamp 
      user.history[videoIndex].time = new Date();
    } else {
      // Add new entry if not found
      user.history.push({ video: videoId, time: new Date() });
    }
    
    await user.save();


  } catch (error) {
    console.error("Error updating user history:", error);
  }
}

export async function handleUserCourseProgress(req: AuthenticatedRequest, res: Response) {
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'User ID not found' });
  }

  const { videoId, courseId } = req.body;

  if (!videoId || !courseId) {
    return res.status(400).json({ success: false, message: 'Video ID or Course ID not found' });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    let courseProgress = user.progress.find((p: any) => p.courseId === courseId);

    if (courseProgress) {
      const videoIndex = courseProgress.completedVideos.findIndex((id: string) => id === videoId);

      if (videoIndex > -1) {
        courseProgress.completedVideos.splice(videoIndex, 1);
      } else {
        courseProgress.completedVideos.push(videoId);
      }
      await user.save();

    } else {
      user.progress.push({
        courseId: courseId,
        completedVideos: [videoId],
      });
      await user.save();
    }
   
    let updateCount = user.progress.find((p: any) => p.courseId === courseId);
 
    updateCount.count = await calculateProgress(courseId , userId);
    await user.save();
   
    
    return res.status(200).json({
      success: true,
      message: courseProgress ? 'Progress updated' : 'Marked as complete',
    });

  } catch (error) {
    console.error('Error handling course progress:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}


export async function calculateProgress(courseId: string, userId: string) {
  try {
   
    const totalVideos = await VideoModel.find({ courseId }).countDocuments();

    if (totalVideos === 0) return 0; 

    const user = await User.findById(userId);
    const courseProgress = user.progress.find((p: any) => p.courseId === courseId);

    const completedVideosCount = courseProgress?.completedVideos.length || 0;

    const progress = (completedVideosCount / totalVideos) * 100;

    return parseFloat(progress.toFixed(0)); 

  } catch (error) {
    console.error('Error calculating progress:', error);
    return 0; 
  }
}
