import {
  doc,
  //   getDoc,
  getDocs,
  addDoc,
  getFirestore,
  updateDoc,
  collection,
} from "@firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db } from "./../firebase";

export const getAllNotes = async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "notes"));

    dispatch({
      type: "STORE",
      payload: querySnapshot.docs.map((item) => item.data()),
    });
  } catch (error) {
    console.log(error);
  }
};

export const addNotes = async (notes, dispatch) => {
  try {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "notes"), notes);
    console.log(docRef);
  } catch (error) {
    console.log(error);
  }
};

export const editNotes = async (notes, dispatch) => {
  try {
    const db = getFirestore();
    const notesRef = doc(db, "notes", notes.id);
    await updateDoc(notesRef, notes);
    dispatch({ type: "EDIT", payload: notes });
    console.log(notesRef);
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotes = async (notes, dispatch) => {
  const db = getFirestore();
  const notesRef = ref(db, `notes/${notes.id}`);
  deleteObject(notesRef).then(
    (res) => {
      dispatch({ type: "DELETE", payload: res });
    },
    (error) => {
      console.log(error);
    }
  );
};

const divide=(num1=1,num2=1,callback)=>{
 const quotient=num1/num2 ;
 const reminder=num1%num2;
 callback(quotient,reminder);  

}