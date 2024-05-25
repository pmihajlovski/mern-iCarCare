import mongoose from "mongoose";
import bcrypt from "bcryptjs";

//The user type help us when building the front end part and will help us 
//if the usertype change typescript will give us an error

//string for typescript. String for mongoose
export type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
//require it means that is necessary and unique that can create two profile withe same email
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true},
  lastName: { type: String, required: true}
});

//Middelware for MongoDB, this tell mongo before any updates to the document get saved
//i want to check if the password has changed i want to bcrypt to Hash it.
userSchema.pre("save", async function (next){
  if(this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8)
  }
  next();//This just tell MongoDb to do the next action that he was going to do
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;