import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyled } from "./styles/global"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "./providers/UserContext";




export const App = () => {
  const { loading } = useContext(UserContext)

  return (
    <div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          
          
        />
        <GlobalStyled />

        {loading ? <p>Carregando...</p> : <RoutesMain /> }
        
      
    </div>
  )
}

