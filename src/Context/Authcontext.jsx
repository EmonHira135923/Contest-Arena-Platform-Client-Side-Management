import React from "react";
import { Authprovider } from "./Provider";

const Authcontext = ({ children }) => {
  const person = {
    name: "emonhossainhira",
  };
  const userinfo = { person };
  return (
    <div>
      <Authprovider value={userinfo}>{children}</Authprovider>
    </div>
  );
};

export default Authcontext;
