import { Schema, model, models } from "mongoose";

// user schema
const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    requried: true,
    unique: true,
  },
  username: {
    type: String,
    requried: true,
    unique: true,
  },
  photo: {
    type: String,
    requried: true,
  },
  firstName: { type: String },
  lastName: { type: String },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
});

// export the user model
const User = models?.User || model("User", UserSchema);
export default User;

// user interface, it will be used in frontend so that editor help us
export interface IUser {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName?: string;
  lastName?: string;
  planId?: number;
  creditBalance?: number;
}
