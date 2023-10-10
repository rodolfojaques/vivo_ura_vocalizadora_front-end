import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const baseURL = "http://localhost:3000"

  const [ usuario, setUsuario ] = useState(JSON.parse(localStorage.getItem("usuario")))

  return (
      <UserContext.Provider value={{
        baseURL,
        usuario,
        setUsuario
      }}>
        {children}
      </UserContext.Provider>
    );
}

export default UserProvider;
