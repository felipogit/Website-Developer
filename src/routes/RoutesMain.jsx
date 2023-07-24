import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import { ProtectedRoutes } from "../Componets/ProtectedRoutes"
import { PublicRoutes } from "../Componets/PublicRoutes"
import { NewsProvider } from "../providers/TechContext"


export const RoutesMain = () => {


    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
                <Route path="/home" element={<NewsProvider> <DashboardPage /> </NewsProvider>} />
            </Route>
        </Routes>

    )
}