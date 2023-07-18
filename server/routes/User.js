const express = require("express");
const router = express.Router();
const { userById, read, getAllUsers } = require("../controllers/User");

router.get("/", getAllUsers);

router.get("/:userId", read);

router.param("userId", userById);
module.exports = router;
