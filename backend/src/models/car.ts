import mongoose, { mongo } from "mongoose";
export type CarType ={
  _id: string;
  userId: string;
  city: string;
  brand: string;
  model: string;
  description: string;
  type: string;
  imageFiles: string[];
  lastUpdate: Date;
  targa: string;
  anno: number;
}

const carScehma = new mongoose.Schema<CarType>({
  userId: { type: String, required: true},
  city: { type: String, required: true},
  model: { type: String, required: true},
  brand: { type: String, required: true},
  description: { type: String, required: true},
  type: { type: String, required: true},
  imageFiles: [{ type: String, required: true}],
  lastUpdate: { type: Date, required: true},
  targa: { type: String, required: true},
  anno: { type: Number, required: true},

});

const Car = mongoose.model<CarType>("Car", carScehma);
export default Car;