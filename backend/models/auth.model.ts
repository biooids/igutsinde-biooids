import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  profilePic: {
    type: String,
    default:
      "https://firebasestorage.googleapis.com/v0/b/soft-biooid.appspot.com/o/xi-biooid.jpg?alt=media&token=cc88392f-090c-4361-a8a5-d5dab8d7d846",
  },
});

const Auth = mongoose.model("Auth", authSchema);

export default Auth;
