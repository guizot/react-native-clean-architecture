import { getModuleContainer, module } from "inversiland";

@module({
  providers: [
    
  ],
})
export class MainModule {}

export const mainModuleContainer = getModuleContainer(MainModule);
