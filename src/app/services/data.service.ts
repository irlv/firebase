import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';



import { Firestore,collectionData, collection,doc, docData, addDoc, deleteDoc,
   updateDoc } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { rejects } from 'assert';
export interface Note{
  id?:string;
  usuario:string;
  correo:string;
  contraseña:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private AFauth:AngularFireAuth,private router:Router) { }



  Login(email:string,password:string){
    this.AFauth.signInWithEmailAndPassword(email,password).then(res=>{
    
      console.log(res);

    }).catch(err=>console.log('Error'+ err))
  }

  Logouth(){
    this.AFauth.signOut().then(()=>{
      this.router.navigate(['/tabs/carousel']);
    }
     
    );
  }
  note:Note;

  register(email:string,password:string,name:string){
    return new Promise((resolve,rejects)=>{
      this.AFauth.createUserWithEmailAndPassword(email,password).then(res=>{
        console.log(res.user.uid)
        //const notesRef=collection(this.db,'notes');
        //return addDoc(notesRef,this.note);
        resolve(res)
      }).catch(err=>rejects(err));
    })
    
  }




  // async signInWithGoogle(){
  //    const res = await this.AFauth.signInWithPopup(new firebase.);
  //   }

  // getNotes(): Observable<Note[]> {
  //   const notesRef= collection(this.firestore,'notes');
  //   return collectionData(notesRef,{idField:'id'})as Observable<Note[]>;
  // }

  // getNoteById(id):Observable<Note>{
  //   const noteDocref= doc(this.firestore,`notes/${id}`);
  //   return docData(noteDocref,{idField:'id'})as Observable<Note>;
  // }

  // addNote(note:Note){
  //   const notesRef=collection(this.firestore,'notes');
  //   return addDoc(notesRef,note);
  // }

  // deleteNote(note:Note){
  //   const noteDocref=doc(this.firestore,`notes/${note.id}`);
  //   return deleteDoc(noteDocref);
  // }

  // updateNote(note:Note){
  //   const noteDocref=doc(this.firestore,`notes/${note.id}`);
  //   return updateDoc(noteDocref,{usuario:note.usuario,correo:note.correo,contrasena:note.contraseña});
  // }
}
