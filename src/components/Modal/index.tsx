import { useContext } from "react"
import { AnnouncementContext } from "../../context/AnnouncementContext"
import CreateAnnouncementModal from "../createAnnouncementModal"
import EditAnnouncementModal from "../editAnnouncementModal"

const Modal = ()=>{
    const {modal} = useContext(AnnouncementContext)

    return (
        <>
        {modal === 'add' ? <CreateAnnouncementModal /> : <EditAnnouncementModal  />}
        </>
    )
}

export default Modal