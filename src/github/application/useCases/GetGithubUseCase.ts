import GetGithubPayload from "src/github/application/types/GetGithubPayload";
import { injectable, inject } from "inversiland";
import { UseCase } from "src/core/application/UseCase";
import GetGithubResponse from "../types/GetGithubResponse";
import { IGithubRepository, IGithubRepositoryToken } from "../../domain/specifications/IGithubRepository";

@injectable()
export default class GetGithubUseCase
  implements UseCase<GetGithubPayload, Promise<GetGithubResponse>>
{
  constructor(
    @inject(IGithubRepositoryToken)
    private readonly githubRepository: IGithubRepository
  ) {}

  public execute(payload: GetGithubPayload) {
    return this.githubRepository.get(payload);
  }
}
