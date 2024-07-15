import express, {Request, Response} from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import Car from "../models/car";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";
import { CarType } from "../shared/types";

const router = express.Router();
//store any images in memory
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits:{
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

//when we want to create something we use post
router.post("/", verifyToken, 
[
  body("city").notEmpty().withMessage("La citta è richiesta"),
  body("brand").notEmpty().withMessage("Il brand è richiesto"),
  body("model").notEmpty().withMessage("Il modello è richiesto"),
  body("description").notEmpty().withMessage("La descrizione è richiesta"),
  body("type").notEmpty().withMessage("Il tipo di macchina è richiesto"),
  body("targa").notEmpty().withMessage("La targa è richieste"),
  body("anno").notEmpty().withMessage("L'anno è richiesto"),
],
upload.array("imageFiles", 6),async(req: Request, res: Response) => {
  //need to handle images now
  try {
    const imageFiles = req.files as Express.Multer.File[];
    const newCar: CarType = req.body;//bradn car,model,price
    //1. Upload the images to cloudinary
    const imageUrls = await uploadImages(imageFiles);//wait for all the images to be uploaded before going on
    newCar.imageFiles = imageUrls;
    newCar.lastUpdate = new Date();
    newCar.userId = req.userId;

    //3. save the car in our database
    const car = new Car(newCar);
    await car.save();

    //4. return a 201 status
    res.status(201).send(car);
  } catch (error) {
    console.log("Error adding car: ", error);
    res.status(500).json({ message: "Qualcosa è andato storto"});
  }
});

router.get("/" , verifyToken, async(req: Request, res: Response)=> {

  try {
    const cars = await Car.find({userId: req.userId})
    res.json(cars);
  } catch (error) {
    res.status(500).json({message: "Errore con le macchine"})
  }
});

router.get("/:id", verifyToken, async(req: Request, res: Response)=> {
  // /api/my-cars/98r937894
  const id = req.params.id.toString();
  try {
    const car = await Car.findOne({
      _id: id,
      userId: req.userId,
    });
    res.json(car);
  } catch (error) {
    res.status(500).json({message: "Errore con le macchine"})
  }
});

router.put("/:carId",verifyToken ,upload.array("imageFiles"), async(req: Request, res: Response)=>{
  try {
    const updatedCar: CarType = req.body;
    updatedCar.lastUpdate = new Date();

    const car = await Car.findOneAndUpdate({
      _id: req.params.carId,
      userId: req.userId,
    }, updatedCar,{new:true}
  );
  if(!car){
      return res.status(404).json({message: "Macchina non trovata"})
    }

  const files = req.files as Express.Multer.File[];
  const updateImageUrls = await uploadImages(files);

  car.imageFiles = [...updateImageUrls, ...(updatedCar.imageFiles || []), ];

  await car.save();
  res.status(201).json(car);
  } catch (error) {
    res.status(500).json({message: "Qualcosa è andato storto"});
  }
})



async function uploadImages(imageFiles: Express.Multer.File[]) {
  const uploadPromises = imageFiles.map(async (image) => {
    //convert image to a b64 so can be converted from cloudinary
    const b64 = Buffer.from(image.buffer).toString("base64");
    let dataURI = "data:" + image.mimetype + ";base64," + b64;
    const res = await cloudinary.v2.uploader.upload(dataURI); //upload to cloudinary
    return res.url;
  });

  //2. if upload was successful, add the URLs
  const imageUrls = await Promise.all(uploadPromises); //wait for all the images to be uploaded before going on
  return imageUrls;
}

export default router;
