import express from "express"
import { create, getall, getOne, userupdate, userDelete } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getall);
route.get("/getone/:id", getOne);
route.put("/userUpdate/:id", userupdate);
route.delete("/userDelete/:id", userDelete);

export default route