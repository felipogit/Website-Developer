import { useEffect, useState } from "react"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from './../services/api';

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isCreateOpen, setIsCreateOpen] = useState(false)

    const cuurrentPath = window.location.pathname

    const navigate = useNavigate()

    const createUser = async (formData) => {

        try {
            const { data } = await api.post('/users', formData)
            toast("Cadastro realizado com sucesso")
            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }

    const login = async (formData, setLoading) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", formData)
            localStorage.setItem("@TOKEN", JSON.stringify(data.token))
            localStorage.setItem("@USERID", JSON.stringify(data.user.id))
            toast("Login realizado com sucesso")
            setUser(data.user)
            navigate("/home")

        } catch (error) {
            setLoading(false)
            toast("Login ou senha incorreto!")
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setUser(null)
        navigate("/")
    }

    const autoLogin = async (token) => {
        try {
            setLoading(true)
            const { data } = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setUser(data)
            navigate(cuurrentPath)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }


    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@TOKEN"))
        if (token) {
            autoLogin(token)
        }
    }, [])


    return (
        <UserContext.Provider value={{ user, createUser, login, handleLogout, loading, isCreateOpen, setIsCreateOpen }}>
            {children}
        </UserContext.Provider>
    )

}