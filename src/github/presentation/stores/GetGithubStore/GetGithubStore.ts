import { injectable, inject } from "inversiland";
import { makeAutoObservable } from "mobx";
import GetGithubStoreState from "../../types/GetGithubStoreState";
import GetGithubPayload from "src/github/application/types/GetGithubPayload";
import GetGithubUseCase from "src/github/application/useCases/GetGithubUseCase";

@injectable()
export class GetGithubStore implements GetGithubStoreState {
  isLoading = false;
  results = [] as GetGithubStoreState["results"];
  count = 0;
  filters = {};
  pagination = {
    page: 1,
    pageSize: 10,
  };

  constructor(
    @inject(GetGithubUseCase)
    private readonly getGithubUseCase: GetGithubUseCase
  ) {
    makeAutoObservable(this);
  }

  get pageCount() {
    return Math.ceil(this.count / this.pagination.pageSize);
  }

  get isEmpty(): boolean {
    return this.results.length === 0;
  }

  setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  setResults = (results: GetGithubStoreState["results"]) => {
    this.results = results;
  };

  setCount = (count: GetGithubStoreState["count"]) => {
    this.count = count;
  };

  mergeFilters = (payload: Partial<GetGithubStoreState["filters"]>) => {
    Object.assign(this.filters, payload);
  };

  mergePagination = (
    payload: Partial<GetGithubStoreState["pagination"]>
  ): void => {
    Object.assign(this.pagination, payload);
  };

  async getGithub() {
    const payload: GetGithubPayload = {
      ...this.filters,
      ...this.pagination,
    };

    this.setIsLoading(true);

    return this.getGithubUseCase
      .execute(payload)
      .then((response) => {
        this.setResults(response.items);
        this.setCount(response.total_count);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  }
}
