import { createContext, ReactNode, useEffect, useState } from "react";
import { IUser } from "../components/ProductCard/interface";
import { api } from "../services";

interface IUserProviderProps {
    showCar: () => Promise<void>
    showMotorcycle: () => Promise<void>
    cars: IAnnouncementsData[]
    motorcycles: IAnnouncementsData[]
}

interface IUserProps{
  children: ReactNode
}

interface IAnnouncementsData{
    id:string
    user: IUser
    mileage: number
    description: string
    imgMain: string
    isAution: boolean
    price: number | undefined
    title: string
    vehicleType: string
    initialBid: number | undefined
    year: string
    isSold: boolean | undefined
}


export const UserContext = createContext({} as IUserProviderProps)

const UserProvider = ({children}:IUserProps)=>{

    const [cars, setCars] = useState<IAnnouncementsData[]> ([])
    const [motorcycles, setMotorcycles] = useState<IAnnouncementsData[]> ([])

    

    const showCar = async ()=>{
    //    await api.get("/announcement?vehicleType=car&isAuction=false").then((response)=>{console.log(response)}).catch((error)=> console.log(error))
        await api.get("/announcements?vehicleType=car")
        .then((response)=>{
            console.log(response)
            setCars(response.data)})
        .catch((error)=> console.log(error))
    }
    const showMotorcycle = async ()=>{
        await api.get("/announcements?vehicleType=motorcycle")
        .then((response)=>{
            console.log(response)
            setMotorcycles(response.data)})
        .catch((error)=> console.log(error))
     }


    useEffect(()=>{
        showCar()
        showMotorcycle()
    },[])


    return (
    <UserContext.Provider value={{showCar, showMotorcycle, cars, motorcycles}}>
        {children}
    </UserContext.Provider>
    )

}
export default UserProvider