import { module } from "inversiland";
import { GithubModule } from "./github/GithubModule";
import { CoreModule } from "./core/CoreModule";

@module({
  imports: [CoreModule, GithubModule],
})
export default class AppModule {}
