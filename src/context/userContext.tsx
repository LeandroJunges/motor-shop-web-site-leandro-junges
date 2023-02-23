import { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildren } from "../interfaces";

export interface IUserContextProps {
    registerUser: (user: any) => Promise<void>
    loginUser: (user: any) => Promise<void>
}
export const UserContext = createContext<IUserContextProps>({} as IUserContextProps)
export const UserProvider = ({children}:IChildren) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    useEffect( () => {
        const loadUser = async () => {
            const token = localStorage.getItem("@motorshop: token")
            if(token){
                try {
                    // const {data} = await 
                } catch (error) {
                    console.log(error)
                }
            }
        }
        loadUser();
    },[])
    const registerUser = async (user:any):Promise<void> => {
        try {
            // await 
        } catch (error) {
            console.log(error)
        }
    }
    const loginUser = async (user: any):Promise<void> => {
        try {
            // await 
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <UserContext.Provider value={{loginUser, registerUser}}>
            {children}
        </UserContext.Provider>
    )
}