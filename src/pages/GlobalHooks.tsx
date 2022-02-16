import { useAtomDevtools } from "jotai/devtools";
import { globalJotai } from "@/store";

export const GlobalHooks = () => {
  useAtomDevtools(globalJotai, "global");
  return <> </>;
};
