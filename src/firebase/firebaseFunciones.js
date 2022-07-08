import { db } from "./firebaseConfig";
import {  collection,  query,  where,  getDocs,  doc,  getDoc,  addDoc, updateDoc  } from "firebase/firestore";

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

export const agregarCompra = async (buyer, items, date, total) => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "compras"), {
    buyer,
    items,
    date,
    total,
  });

  return docRef.id;
};
