import { getModuleContainer, module } from "inversiland";
import FindGithubUseCase from "./application/useCases/FindGithubUseCase";
import GetGithubUseCase from "./application/useCases/GetGithubUseCase";
import GithubRepository from "./infrastructure/implementations/GithubRepository";
import { IGithubRepositoryToken } from "./domain/specifications/IGithubRepository";
import { GetGithubStore } from "./presentation/stores/GetGithubStore/GetGithubStore";
import { FindGithubStore } from "./presentation/stores/FindGithubStore/FindGithubStore";


@module({
  providers: [
    {
      provide: IGithubRepositoryToken,
      useClass: GithubRepository,
    },
    FindGithubUseCase,
    GetGithubUseCase,
    {
      useClass: GetGithubStore,
      scope: "Transient",
    },
    {
      useClass: FindGithubStore,
      scope: "Transient",
    },
  ],
})
export class GithubModule {}

export const githubModuleContainer = getModuleContainer(GithubModule);
