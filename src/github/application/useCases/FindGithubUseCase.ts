import { injectable, inject } from "inversiland";
import { IGithubRepository, IGithubRepositoryToken } from "../../domain/specifications/IGithubRepository";


@injectable()
export default class FindGithubUseCase {
  constructor(
    @inject(IGithubRepositoryToken)
    private readonly githubRepository: IGithubRepository
  ) {}

  public execute(username: string) {
    return this.githubRepository.find(username);
  }
}
