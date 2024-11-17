import mongoose, { Schema, Document, model } from "mongoose";

export enum CourseType {
  PERSONAL = "PERSONAL",
  REDIRECT = "REDIRECT",
  YOUTUBE = "YOUTUBE",
}

export interface IRating {
  by: string;
  rate: number;
}

export interface ICourse extends Document {
  courseName: string;
  courseId: string;
  tutorName: string;
  courseType: CourseType;
  description: string;
  currency: string;
  sellingPrice: number;
  originalPrice: number;
  thumbnail: string;
  isVerified: boolean;
  uploadedBy: string;
  ratings?: IRating[];
  ratingCount?: number;
  rating?: number;
  likedBy?: string[];
  likedCount?: number;
  markdownContent?: string;
  redirectLink?: string;
  enrolledBy?: string[];
  enrolledCount?: number;
  videos?: string[];
}

const ratingSchema = new Schema<IRating>(
  {
    by: { type: String, ref: "User", required: true },
    rate: { type: Number, required: true, min: 0, max: 5 },
  },
  { _id: false }
);

const courseSchema = new Schema<ICourse>(
  {
    courseName: { type: String, required: true, trim: true },
    tutorName: { type: String, required: true, trim: true },
    courseType: {
      type: String,
      enum: Object.values(CourseType),
      required: true,
    },
    description: { type: String, required: true, trim: true },
    courseId: {type : String , required: true , unique: true},
    currency: { type: String, required: true, trim: true },
    sellingPrice: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, required: true, min: 0 },
    thumbnail: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    ratings: [ratingSchema],
    uploadedBy: { type: String, ref: "User", required: true },
    likedBy: [{ type: String, ref: "User" }],
    markdownContent: { type: String },
    redirectLink: { type: String, trim: true },
    enrolledBy: [{ type: String, ref: "User" }],
    videos: [{ type: String, ref: "Video" }],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

courseSchema.virtual("ratingCount").get(function (this: ICourse) {
  return this.ratings?.length ?? 0;
});

courseSchema.virtual("rating").get(function (this: ICourse) {
  if (!this.ratings || this.ratings.length === 0) return 0;
  const total = this.ratings.reduce((sum, rating) => sum + rating.rate, 0);
  return Number((total / this.ratings.length).toFixed(2));
});

courseSchema.virtual("likedCount").get(function (this: ICourse) {
  return this.likedBy?.length ?? 0;
});

courseSchema.virtual("enrolledCount").get(function (this: ICourse) {
  return this.enrolledBy?.length ?? 0;
});

const CourseModel = mongoose.models.Course || model<ICourse>("Course", courseSchema);

export default CourseModel;
