import { Request, Response } from "express";
import { RedirectService } from "../services/RedirectService";

class RedirectController {

  async handle(request: Request, response: Response) {
    const { hash } = request.params;

    const redirectService = new RedirectService();
    
    const link = await redirectService.execute(hash);

    return response.redirect(302, link.original);
  }
}

export { RedirectController };