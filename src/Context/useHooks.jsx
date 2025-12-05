import React, { use } from "react";
import { Authprovider } from "./Provider";

const useHooks = () => {
  const Authinfo = use(Authprovider);
  return Authinfo;
};

export default useHooks;
