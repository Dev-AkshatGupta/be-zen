import {
  doc,
  //   getDoc,
  getDocs,
  addDoc,
  getFirestore,
  updateDoc,
  collection,
  deleteDoc,
  onSnapshot,
} from "@firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import app, { db } from "./../firebase";

export const getAllNotes = async (dispatch) => {
  try {
    let result = [];
    onSnapshot(collection(db, "notes"), (data) => {
      // data.docs.forEach((item) => console.log(item.data()));
      result = data.docs.map((item) => {
        console.log(item.data());
        return {
          ...item.data(),
          id: item.id,
        };
      });
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const addNotes = async (notes, dispatch) => {
  try {
    const db = getFirestore();
    const time = new Date().getTime();
    await addDoc(collection(db, "notes"), { ...notes, time });
  } catch (error) {
    console.log(error);
  }
};

export const editNotes = async (notes, dispatch) => {
  try {
    const db = getFirestore();
    const notesRef = doc(db, "notes", notes.id);
    const time = new Date().getTime();
    await updateDoc(notesRef, { ...notes, time });
    // dispatch({ type: "EDIT", payload: notes });
    console.log(notesRef);
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotes = async (notes, dispatch) => {
  const db = getFirestore();
  await deleteDoc(doc(db, "notes", notes.id));
};
