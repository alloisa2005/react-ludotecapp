import React, {useState}  from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const UserContext = createContext();

function UserContextProvider({children}) {

  const [user, setUser] = useState(null);

  const crearUsuario = async (email, password) => {
    let msj = {};
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      setUser( auth.currentUser );      
      msj.OK = true;
      msj.desc = 'Usuario creado correctamente';
    }
    catch(error){
      msj.OK = false;      
      msj.desc = error.message;
    }

    return msj;
  }

  return (
    <UserContext.Provider value={{ user, crearUsuario }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
