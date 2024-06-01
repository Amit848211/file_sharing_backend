import express from "express"
import {uploadImage,getImage} from "../controller/imageController.mjs"
import upload from "../utils/upload.js";


const router = express.Router()

router.post("/upload",upload.single("file"),uploadImage)
router.get('/file/:fileId', getImage);


export default router;
