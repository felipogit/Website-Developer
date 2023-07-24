import { useContext, useState } from "react"
import { createContext } from "react"
import { api } from './../services/api';
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const TechContext = createContext({})

export const NewsProvider = ({ children }) => {


    const { user } = useContext(UserContext)
    const [techs, setTechs] = useState(user.techs)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [currentTec, setCurrentTec] = useState(null)



    const updateData = (tech) => {
        setCurrentTec(tech)
        setModalIsOpen(true)
    }


    const createNews = async (formData) => {
        try {
            const token = JSON.parse(localStorage.getItem("@TOKEN"))
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setTechs([...techs, data])

        } catch (error) {
            console.log(error)
        }
    }

    

    const updateCard = async (techId, techStatus) => {
        try {
            const token = JSON.parse(localStorage.getItem("@TOKEN"))
            const { data } = await api.put(`users/techs/${techId}`, {
                status: techStatus,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const filterTechs = techs.filter(tech => tech.id !== techId)
            setTechs([...filterTechs, data])
        } catch (error) {
            console.log(error)
        }
    }
 
    const deleteCard = async (techId) => {
        try {
            const token = JSON.parse(localStorage.getItem("@TOKEN"))
            const { data } = await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            toast("Tecnologia deletada com sucesso!")

            const filterDelete = techs.filter(tech => tech.id !== techId)
            setTechs(filterDelete)
            setModalIsOpen(false)

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <TechContext.Provider value={{deleteCard, createNews, techs, modalIsOpen, currentTec, setModalIsOpen, updateData, updateCard }} >
            {children}
        </TechContext.Provider>
    )
}