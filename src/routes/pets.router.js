import {Router} from "express";
import {uploader} from "../utils.js";
const router = Router();
const pets = [];

router.get("/api/pets", (req, res) => {
  res.send({pets});
});

router.post("/api/pets", uploader.single("thumbnail"), (req, res) => {
  if (!req.file) {
    res.status(400).send({status: "error", error: "download failed"});
  } else {
    const {petName, petRace} = req.body;
    const thumbnail = req.file.destination;
    const newPet = {
      petName,
      petRace,
      thumbnail,
    };
    pets.push(newPet);
    res.send({status: "ok", message: "Pet added successfully"});
  }
});

export default router;
