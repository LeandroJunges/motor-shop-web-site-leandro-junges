import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IChildren, IUserResponse } from "../interfaces";
import { api } from "../services";

export interface IUserContextProps {
  registerUser: (user: IUserLogin) => Promise<void>;
  loginUser: (user: any) => Promise<void>;
  user: IUserResponse["user"] | undefined;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [loading, setLoading]= useState<boolean>(true)
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
      setLoading(false)
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
      localStorage.clear()
      toast.error("Ops! Tem algo errado! Verifique seu e-mail e senha !");
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ loginUser, registerUser, user, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
