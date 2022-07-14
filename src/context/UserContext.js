import React, { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut 
} from "firebase/auth";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const crearUsuario = async (email, password) => {
    let msj = {};
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      onAuthStateChanged(auth, (user)=>{
        if(user){
          setUser(user);
        }else{
          setUser(null);
        }
      });

      msj.OK = true;
      msj.desc = "Usuario creado correctamente";

    } catch (error) {
      msj.OK = false;
      msj.desc = error.message;
    }

    return msj;
  };

  const loguearUsuario = async (email, password) => {
    
    let msj = {};

    try {
      await signInWithEmailAndPassword(auth, email, password);

      onAuthStateChanged(auth, (user)=>{
        if(user){
          setUser(user);
        }else{
          setUser(null);
        }
      });      
      msj.OK = true;

    } catch (error) {      
      msj.OK = false;
      msj.desc = error.message;
    }    

    return msj;

  };

  const cerrarSesion = () => {

    let msj = {};

    signOut(auth).then(() => {
      setUser(null);
      msj.OK = true;
    }).catch((error) => {
      msj.OK = false;
      msj.desc = error.message;
    });

    return msj;
  }

  return (
    <UserContext.Provider value={{ user, crearUsuario, loguearUsuario, cerrarSesion }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
