import mongoose, { Schema, Document, model } from "mongoose";

export enum ContentType {
  link = "link",
  tag = "tag",
  image = "image",
  note = "note",
  tweet = "tweet",
}

export interface IContent extends Document {
  title: string;
  cardId: string;
  type: ContentType;
  description?: string;
  link?: string | string[];
  tags?: string[];
  list?: string[];
  image?: string;
  isShareable: boolean;
  createdById: string;
  addedOn: Date;
}

const contentSchema = new Schema<IContent>(
  {
    title: { type: String, required: true, trim: true },
    cardId: { type: String, required: true, unique: true, trim: true },
    type: {
      type: String,
      enum: Object.values(ContentType),
      required: true,
    },
    image: {type: String},
    list: {type: String, trim: true},
    description: { type: String, trim: true },
    link: { type: Schema.Types.Mixed }, 
    tags: [{ type: String, trim: true }],
    isShareable: { type: Boolean, default: true },
    createdById: { type: String, required: true, ref: "User" },
    addedOn: { type: Date, default: Date.now },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true, 
  }
);

const ContentModel =
  mongoose.models.Content || model<IContent>("Content", contentSchema);

export default ContentModel;
