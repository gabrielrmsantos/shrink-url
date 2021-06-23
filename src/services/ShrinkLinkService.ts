import { getCustomRepository } from "typeorm";
import { LinksRepositories } from "../repositories/LinkRepositories";
import shortid from "shortid";

class ShrinkLinkService {

  async execute(url: string) {
    const linkRepositories = getCustomRepository(LinksRepositories);

    if(!url) {
      throw new Error("Incorrect url input");
    }

    const linkAlreadyExists = await linkRepositories.findOne({
      original: url 
    });

    if(linkAlreadyExists) {
      throw new Error("Link already exists");
    }

    const shrinked = shortid.generate();

    const link = linkRepositories.create({ original: url, shrinked });

    await linkRepositories.save(link);

    return link;
  }
}

export { ShrinkLinkService };