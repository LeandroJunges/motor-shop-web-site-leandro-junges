import { createContext, ReactNode, useEffect, useState } from "react";
import { IUser } from "../components/ProductCard/interface";
import { api } from "../services";

interface IAnnouncementsProviderProps {
    showCar: () => Promise<void>
    showMotorcycle: () => Promise<void>
    cars: IAnnouncementsData[]
    motorcycles: IAnnouncementsData[]
    auctions: IAnnouncementsData[]
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
    isActive: boolean
}


export const AnnouncementContext = createContext({} as IAnnouncementsProviderProps)

const AnnouncementsProvider = ({children}:IUserProps)=>{

    const [cars, setCars] = useState<IAnnouncementsData[]> ([])
    const [motorcycles, setMotorcycles] = useState<IAnnouncementsData[]> ([])
    const [auctions, setAuctions] = useState<IAnnouncementsData[]>([])

    

    const showCar = async ()=>{
    //    await api.get("/announcement?vehicleType=car&isAuction=false").then((response)=>{console.log(response)}).catch((error)=> console.log(error))
        await api.get("/announcements?vehicleType=car&isAuction=false")
        .then((response)=>{
            setCars(response.data)})
        .catch((error)=> console.log(error))
    }
    const showMotorcycle = async ()=>{
        await api.get("/announcements?vehicleType=motorcycle&isAuction=false")
        .then((response)=>{
            setMotorcycles(response.data)})
        .catch((error)=> console.error(error))
     }

    
    const showAuction = async()=>{

        await api.get("/announcements?isAuction=true")
        .then((response)=>{
            setAuctions(response.data)
        }).catch((error)=> console.error(error))
    }


    useEffect(()=>{
        showAuction()
        showCar()
        showMotorcycle()
    },[])


    return (
    <AnnouncementContext.Provider value={{showCar, showMotorcycle, cars, motorcycles, auctions}}>
        {children}
    </AnnouncementContext.Provider>
    )

}
export default AnnouncementsProvider