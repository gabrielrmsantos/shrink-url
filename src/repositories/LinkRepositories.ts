import { EntityRepository, Repository } from "typeorm";
import { Link } from "../entities/Link";

@EntityRepository(Link)
class LinksRepositories extends Repository<Link> {}

export { LinksRepositories };