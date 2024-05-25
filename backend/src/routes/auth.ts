import express, {Request, Response} from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";

const router = express.Router();
//validation that checak if there is any email or password
router.post("/login", [
  check("email", "L'Email è richiesta").isEmail(),
  check("password", "Password cone 6 o più caratteri è necessaria.").isLength({
    min: 6,
  }),
], async (req: Request, res: Response)=> {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() })
  }

  const { email, password } = req.body;//separate email and password into two variables

  try {
    const user = await User.findOne({ email })//find someone with that email
    if(!user) {
      return res.status(400).json({ message: "Credenziali errate" });
    }
    //check if the password that user give you is the same of the password in the database. still use bcrypt because the password is encrypted.
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) {
      return res.status(400).json({ message: "Credenziali errate" })
    }
    //now create the token and the cookie like users.ts
    const token = jwt.sign(
      {userId: user.id}, 
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });
    res.status(200).json({userId: user._id});//convinience thing for the front end if the user need to do.
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Qualcosa è andato storto "});
  }
});

router.get("/validate-token", verifyToken, (req: Request, res: Response) => {
  res.status(200).send({userId: req.userId})//When we make a request "/validate-token" verifyToken will check the HTTP cookie
});

router.post("/logout", (req: Request, res: Response)=>{
  res.cookie("auth_token", "", {//pass an emppy token after the logout
    expires: new Date(0),
  });
  res.send();
});
export default router;