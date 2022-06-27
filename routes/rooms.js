import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", createRoom);
//UPDATE
router.put("/:id", updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//DELETE
router.delete("/:id/:hotelid", deleteRoom);
//GET
router.get("/:id", getRoom);
//GET All
router.get("/", getRooms);

export default router;
