import { db } from "./firebaseConfig";
import {  collection,  query,  where,  getDocs,  doc,  getDoc,  addDoc, updateDoc, orderBy  } from "firebase/firestore";

export const getAllJuegos = async (tipo = undefined) => {
  let q = null;

  if (tipo === undefined) {
    q = query(collection(db, "juegos"));
  } else {
    q = query(collection(db, "juegos"), where("categoria", "==", tipo));
  }

  const querySnapshot = await getDocs(q);

  let juegos = [];

  querySnapshot.forEach((doc) => {
    juegos.push({ ...doc.data(), id: doc.id });
  });

  return juegos;
};

  export const getJuegosXId = async (id) => {
    const docRef = doc(db, "juegos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), id: id };
    }

    return {};
  };

export const updateStockJuego = async (id, stock) => {  

  const juego = doc(db, "juegos", id);

  // Set the "capital" field of the city 'DC'
  await updateDoc(juego, {
    stock: stock
  });
    
};

export const agregarCompra = async (buyer, items, total) => {

  let date = new Date();

  const docRef = await addDoc(collection(db, "compras"), { buyer, items, date, total });

  return docRef.id;
};

export const getAllCompras = async (filtroFecha) => {
  let q = query(collection(db, "compras"), orderBy("date"));

  if (filtroFecha === "D") {
    q = query(collection(db, "compras"), orderBy("date", "desc"));
  }

  const querySnapshot = await getDocs(q);

  let compras = [];

  querySnapshot.forEach((doc) => {
    compras.push({ ...doc.data(), id: doc.id });
  });

  return compras;
};

export const getComprasFecha = async (fchDesde, fchHasta) => {
  
  let desde = parseInt((new Date(fchDesde).getTime() / 1000).toFixed(0))
  let hasta = parseInt((new Date(fchHasta).getTime() / 1000).toFixed(0))
  console.log(desde, hasta);

  let q = query(collection(db, "compras"), where("date", ">=", desde), where("date", "<=", hasta));  

  const querySnapshot = await getDocs(q);

  let compras = [];

  querySnapshot.forEach((doc) => {
    compras.push({ ...doc.data(), id: doc.id });
  });

  return compras; 
};