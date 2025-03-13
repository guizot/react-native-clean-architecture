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
  error: string | null = null;

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

  setError = (error: string | null) => {
    this.error = error;
  };

  async getGithub() {
    const payload: GetGithubPayload = {
      ...this.filters,
      ...this.pagination,
    };

    this.setError(null);
    this.setIsLoading(true);

    return this.getGithubUseCase
      .execute(payload)
      .then((response) => {
        if (this.pagination.page === 1) {
          this.setResults(response.items);
        } else {
          this.setResults([...this.results, ...response.items]);
        }
        this.setCount(response.total_count);
      })
      .catch((error) => {
        this.setError(error.message || 'Failed to load data');
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  }
}
