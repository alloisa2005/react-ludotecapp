
import { db } from "./firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

export const getAllJuegos = async (tipo = '') => {

    const q = query(collection(db, "juegos"));

    const querySnapshot = await getDocs(q);

    let juegos = [];

    querySnapshot.forEach((doc) => {      
      juegos.push( {...doc.data(), id:doc.id} );     
    });
    
    return juegos;
}


