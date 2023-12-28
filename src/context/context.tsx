import { createContext, useState } from "react";
import { useRouter } from 'next/router';

import { IChildren } from "@/interfaces/IChildren/IChildren";
import { IContext } from "@/interfaces/IContext/IContext";

export const Context = createContext<IContext>({} as IContext)

const Provider = ({ children }: IChildren) => {
  const router = useRouter();
  const token = false
  
  return (
  <Context.Provider value={{ router, token }}>
    {children}
  </Context.Provider>);
};

export default Provider;
