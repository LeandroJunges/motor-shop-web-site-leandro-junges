import { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildren, IUserResponse } from "../interfaces";
import { api } from "../services";

export interface IUserContextProps {
  registerUser: (user: IUserLogin) => Promise<void>;
  loginUser: (user: any) => Promise<void>;
}

interface IUserLogin {
  email: string;
  password: string;
}
export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);
export const UserProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUserResponse["user"] | undefined>();
  const navigate = useNavigate();
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@motorshop: token");
      if (token) {
        try {
          // const {data} = await
        } catch (error) {
          console.log(error);
        }
      }
    };
    loadUser();
  }, []);
  const registerUser = async (user: any): Promise<void> => {
    try {
      // await
    } catch (error) {
      console.log(error);
    }
  };
  const loginUser = async (user: IUserLogin) => {
    try {
      // await
      const { data } = await api.post("/login", user);
      setUser(data.user);
      localStorage.setItem("@motorshop: token", data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ loginUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
