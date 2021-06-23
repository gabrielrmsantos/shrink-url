import { Router } from "express";
import { RedirectController } from "./controllers/RedirectController";
import { ShrinkLinkController } from "./controllers/ShrinkLinkController";

const router = Router();

const shrinkLinkController = new ShrinkLinkController();
const redirectController = new RedirectController();

router.get("/:hash", redirectController.handle);
router.post("/shrink", shrinkLinkController.handle);

export { router };