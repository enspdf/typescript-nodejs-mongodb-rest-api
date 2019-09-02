import { Router } from "express";
import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from "../controllers/photo.controller";
const router = Router();
import multer from "../libs/multer";

router.route("/photos")
    .post(multer.single("image"), createPhoto)
    .get(getPhotos);

router.route("/photos/:id")
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto);

export default router;