import { db } from '../config/firebase.js';
import { collection, getDocs, doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';

const collectionRef = collection(db, 'products');

export const getAll = async () => {
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getById = async (id) => {
  const ref = doc(db, 'products', id);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const create = async (data) => {
  const newRef = doc(collectionRef); 
  await setDoc(newRef, data);
  return { id: newRef.id, ...data };
};

export const remove = async (id) => {
  await deleteDoc(doc(db, 'products', id));
  return { message: 'Producto eliminado correctamente' };
};
