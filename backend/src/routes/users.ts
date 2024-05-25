import express, {Request, Response} from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import  {check, validationResult}  from "express-validator";


const router = express.Router();

// /api/users/register
router.post("/register", [
  //this is going to check every line if its correct. if no return error status 400.
  check("firstName", "Il Nome è richiesto").isString(),
  check("lastName", "Il Cognome è richiesto").isString(),
  check("email", "L'Email è richiesta").isEmail(),
  check("password", "Password con 6 o più caratteri è necessaria.").isLength({ 
    min:  6,
  }),
], async (req: Request, res: Response)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({message: errors.array() });
  }
  try {
    //Check user module or user document in our database and we ar going to FINDONE where the email matches
    // the email that we recive at the body of the request
    let user = await User.findOne({
      email: req.body.email,
    });

    if(user) {
      return res.status(400).json({ message: "Utente già registrato "});//This indicates to the front end or the client this is a bad request
    }

    user = new User(req.body);//this will take password email firstname and lastname to create a new user
    await user.save();
    //create the token that got the userID and the key
    const token = jwt.sign(
      {userId: user.id }, 
      process.env.JWT_SECRET_KEY as string,//Need to create the property in .env file for JWT
      {
        expiresIn: "1d",//The token is valid only for 1 day 
      });
    //Returning the response cookie after creating the token
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",//Only accetps cookies over HTTPS IMPORTANT, but in local host you dont want beacuse usually you dont have it
      maxAge: 86400000,
    });
    return res.status(200).send({ message: "User registered OK "});//make all the response in json
  } catch (error) {
    //dont write any specific in the message because the errore can contain some sentitive information from mongodb database
    console.log(error);//write the message on the back end so you kwon what whent wrong
    res.status(500).send({message: "Qualcosa è andato storto"})//500 something got really really bad
  }
});

export default router;