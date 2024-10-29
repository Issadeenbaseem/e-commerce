import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signUp", register);
router.get("/signIn", login);
router.get("/logout", logout);

export default router;

const paster = () => {
  console.log("pater container not beloge to one person.. ");
};

const out_fLimit = () => {
  const value = {
    name: "baseem",
    age: 25,
    address: ["demo", "demo2"],
  };

  if (value.name === "baseem") {
    const Looper = () => {};
  }
};
