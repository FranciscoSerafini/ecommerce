import jwt from "jsonwebtoken";

import User from "../models/User.js";
import AsyncHandler from 'express-async-handler';


const protect = AsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRECT);
      req.user = await User.findById(decodedToken.id).select("-password");
      next();
    } catch (err) {
      console.log(err);
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized bro..!");
  }
});

export default protect
