import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formContact',
  templateUrl: './formContact.component.html',
  styleUrls: ['./formContact.component.scss']
})
export class FormContactComponent implements OnInit {
  formContact: any;
  matters = ['Asesoria', 'Encargar trabajo', 'Oferta de empleo', 'Otro asunto']

  constructor(private msgAdvice: MatSnackBar) { }

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
    console.log(this.formContact.get('comments'))
    // console.log(this.formContact.get('fullName').invalid && this.formContact.get('fullName').touched)
  }
  
  validField(fieldName: string): boolean{
    return this.formContact.get(fieldName).touched || this.formContact.get(fieldName).invalid
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
