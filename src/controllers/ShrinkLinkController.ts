import { Request, Response } from "express";
import { ShrinkLinkService } from "../services/ShrinkLinkService";

class ShrinkLinkController {

  async handle(request: Request, response: Response) {
    const { url } = request.body;

    const shrinkLinkService = new ShrinkLinkService();

    const link = await shrinkLinkService.execute(url);

    return response.json(link);
  }
}

export { ShrinkLinkController };