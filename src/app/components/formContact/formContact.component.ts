import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment.prod';
import swal from 'sweetalert'

@Component({
  selector: 'app-formContact',
  templateUrl: './formContact.component.html',
  styleUrls: ['./formContact.component.scss']
})
export class FormContactComponent implements OnInit {
  formContact: any;
  sendingForm = false;
  matters = ['Asesoria', 'Encargar trabajo', 'Oferta de empleo', 'Otro asunto']

  constructor(private msgAdvice: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {
    this.initFormContact()
  }
  
  initFormContact(){
    this.formContact = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      phone: new FormControl('', [Validators.required]),
      matters: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required])
    })
  }
  
  contactMe(){
    if(this.formContact.valid){
      this.formContact.disable();
      this.sendingForm = true
      let formData = new FormData();
      formData.append("Nombres y apellidos", this.formContact.get("fullName").value);
      formData.append("Correo", this.formContact.get("email").value);
      formData.append("Telefono", this.formContact.get("phone").value);
      formData.append("Asunto", this.formContact.get("matters").value);
      formData.append("Comentarios", this.formContact.get("comments").value);
      this.http.post(environment.URL, formData).subscribe(res=>{
        if(Object.values(res)[0] == 'success'){          
          swal("Formulario enviado con exito", "Gracias por ponerse en contacto", "success", {timer: 3000})
          this.sendingForm = false
        }
      }, err=> {
        swal("Algo ha fallado", "Por favor recargue la pagina e intentelo de nuevo" + err, "error")
        this.sendingForm = false
      })
      this.formContact.enable()
      this.formContact.reset()
    }
  }
  
  invalidField(fieldName: string): boolean{ 
    return (this.formContact.get(fieldName).touched || this.formContact.get(fieldName).dirty) && !this.formContact.get(fieldName).valid
  }

  getErrors(fieldName: string): string[]{
    let errorMsg = []
    if(this.formContact.get(fieldName).hasError('required')){
      errorMsg.push(`Este campo es requerido`)
    }
    if(this.formContact.get(fieldName).hasError('minlength')){
      let minLength = this.formContact.get(fieldName).errors?.minlength
      errorMsg.push(`Este campo debe tener minimo ${minLength.requiredLength} caracteres`) 
    }
    if(this.formContact.get(fieldName).hasError('maxlength')){
      let maxLength = this.formContact.get(fieldName).errors?.maxlength
      errorMsg.push(`Este campo debe tener maximo ${maxLength.requiredLength} caracteres`)
    }
    if(this.formContact.get(fieldName).hasError('pattern')){
      errorMsg.push(`Este campo no cumple con el formato requerido`)
    }
    return errorMsg
  }

  onlyLetters(e: any){
    if((e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122) || (e.charCode == 32)){
      return true
    }else{
      this.msgAdvice.open('Solo introduce letras', 'Ok', {duration: 1000})
      return false
    }
  }
  
  onlyNumbers(e: any){
    if(e.charCode >= 48 && e.charCode <= 57){
      return true
    }
    else{
      this.msgAdvice.open('Solo introduce numeros', 'Ok', {duration: 1000})
      return false
    }
  }

}
