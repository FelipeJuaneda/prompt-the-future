import { Router } from "express";
import {
  createOrder,
  receiveWebHook,
  onSuccess,
  onFailure,
  onPending,
} from "../controllers/payment.controller.js";
const router = Router();

router.post("/create-order", createOrder);

router.get("/success", onSuccess);

router.get("/failure", onFailure);

router.get("/pending", onPending);

router.post("/webhook", receiveWebHook);

export default router;
