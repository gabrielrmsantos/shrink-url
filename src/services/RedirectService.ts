import { getCustomRepository } from "typeorm";
import { LinksRepositories } from "../repositories/LinkRepositories";

class RedirectService {

  async execute(hash: string) {
    const linkRepositories = getCustomRepository(LinksRepositories);

    if(!hash) {
      throw new Error("Invalid short code");
    }

    const link = await linkRepositories.findOne({
      shrinked: hash
    });

    if(!link) {
      throw new Error("Link not found");
    }

    await linkRepositories.increment({ shrinked: hash }, "redirections", 1);

    return link;
  }
}

export { RedirectService };