import { module } from "inversiland";
import { GithubModule } from "./github/GithubModule";
import { CoreModule } from "./core/CoreModule";
import { MainModule } from "./main/MainModule";

@module({
  imports: [CoreModule, GithubModule, MainModule],
})
export default class AppModule {}
