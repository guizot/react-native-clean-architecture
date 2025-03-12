import { inject, injectable } from "inversiland";
import { makeAutoObservable } from "mobx";
import FindGithubStoreState from "../../types/FindGithubStoreState";
import GithubEntity from "src/github/domain/entities/GithubEntity";
import FindGithubUseCase from "src/github/application/useCases/FindGithubUseCase";

@injectable()
export class FindGithubStore implements FindGithubStoreState {
  isLoading = false;
  github: GithubEntity | null = null;

  constructor(
    @inject(FindGithubUseCase)
    private findGithubUseCase: FindGithubUseCase
  ) {
    makeAutoObservable(this);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setGithub(github: GithubEntity | null) {
    this.github = github;
  }

  async findGithub(username: string) {
    try {
      this.setIsLoading(true);
      this.setGithub(await this.findGithubUseCase.execute(username));
    } catch (error) {
    } finally {
      this.setIsLoading(false);
    }
  }
}
