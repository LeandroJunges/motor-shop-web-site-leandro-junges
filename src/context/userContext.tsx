import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IChildren, IUserResponse } from "../interfaces";
import { api } from "../services";

export interface IUserContextProps {
  registerUser: (user: IUserLogin) => Promise<void>;
  loginUser: (user: any) => Promise<void>;
  user: IUserResponse["user"] | undefined;
  logout: () => void;
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
      const userId = localStorage.getItem("@motorshop: userId");
      if (token) {
        try {
          const { data } = await api.get(`/users/${userId}`);
          setUser(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    loadUser();
  }, []);
  const registerUser = async (user: any): Promise<void> => {
    try {
      const response = await api.post("/users", user)
      console.log(response)
      toast.success(" Conta criada!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login/")
    } catch (error) {
      console.log(error);
    }
  };
  const loginUser = async (user: IUserLogin) => {
    try {
      const { data } = await api.post("/login", user);
      setUser(data.user);
      localStorage.setItem("@motorshop: token", data.token);
      localStorage.setItem("@motorshop: userId", data.user.id);
      toast.success(" Bem vindo!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    localStorage.clear()
    navigate("/login/")
  }
  return (
    <UserContext.Provider value={{ loginUser, registerUser, user, logout }}>
      {children}
    </UserContext.Provider>
  );
};
