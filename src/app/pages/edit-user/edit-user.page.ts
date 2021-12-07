import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  constructor() { }
  
  user = {
    usuario: '',
    email : '',
    paterno: '',
    materno : '',
    telefono:'',
    verificacionEmail:false,
    verificacionUsuario:false,
    verificacionPaterno:false,
    verificacionMaterno:false,
    verificacionTelefono:false,
  }

  alertaContra="";
  alertaUsuario="";
  alertaPaterno="";
  alertaMaterno="";
  alertaTelefono="";

  ngOnInit() {
  }

  onKeyEmail(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z0-9-@.#-$%&'*_]*$");
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }

    let email = new RegExp("[a-zA-Z0-9.#$%&'*_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    if(!email.test(this.user.email)){
      this.alertaContra = "invalido";
      this.user.verificacionEmail =false;
    }else{
      this.alertaContra = "valido";
      this.user.verificacionEmail = true;
    }
  }
  
  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z? ]+$");
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
      this.user.verificacionUsuario = true;
    }

    let usuarios = new RegExp("^[A-Za-z? ]+$");
   
    if(event.target.name=="usuario"){
      if(!usuarios.test(this.user.usuario)){
        this.alertaUsuario = "invalido";
        this.user.verificacionUsuario = false;
      }else{
        this.alertaUsuario = "valido";
        this.user.verificacionUsuario = true;
      }
    }
    if(event.target.name=="paterno"){
        if(!usuarios.test(this.user.paterno)){
          this.alertaPaterno = "invalido";
          this.user.verificacionPaterno = false;
        }else{
          this.alertaPaterno = "valido";
          this.user.verificacionPaterno = true;
        }
    }
    if(event.target.name=="materno"){
      if(!usuarios.test(this.user.materno)){
        this.alertaMaterno = "invalido";
        this.user.verificacionMaterno = false;
      }else{
        this.alertaMaterno = "valido";
        this.user.verificacionMaterno = true;
       }
   }
 }

 onKeyTelefono(event: any){
  let newValue = event.target.value;
  console.log(newValue);
  let regExp = new RegExp("[0-9]");
  if(!regExp.test(newValue)){
    event.target.value = newValue.slice(0, -1);
  }

  let telefono = new RegExp("^[0-9]*$");
  if(!telefono.test(this.user.telefono)){
      event.target.value = newValue.slice(0, -1);
      this.alertaTelefono = "invalido";
      this.user.verificacionTelefono =false;
  
  }else{
    this.alertaTelefono = "valido";
    this.user.verificacionTelefono = true;
  }
}

 async guardar(_form: NgForm){
  alert("Editado Correctamente")
  console.log(this.user)
 } 

}
