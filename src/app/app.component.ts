import { Component, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faHtml5, faJsSquare, faCss3, faBootstrap, faAngular, faAndroid, faNodeJs, faGithub, faReact, faAws, faPhp, faLaravel, faSwift, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faUniversity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  nombre = 'Ruben Guzman';
  informacion: string[] = ['Informacion general', 'Datos principales', 'Lenguajes y plataformas', 'Redes sociales', 'Contacto']
  showButton = false;
  iconUniversity = faUniversity
  iconLinkedIn = faLinkedinIn
  iconGitHub = faGithub
  aboutMe ={
    title: 'Ingeniero de sistemas de la universidad nacional abierta de y a distancia UNAD de colombia',
    description: 's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    conclusion: 'text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy ',
    viewMore: true
  }
  personalData ={
    fullName: 'Ruben Dario Guzman Gonzalez',
    country: 'Colombia',
    city: 'Cali - Valle del cauca',
    carrer: 'Ingenieria de sistemas',
    university: 'Universidad Nacional Abierta y a Distancia - UNAD', 
    viewMore: true 
  }
  skills={
    basics: {
      html:{
        name: 'html',
        logo: faHtml5
      },
      css:{
        name: 'css',
        logo: faCss3
      },
      javascript:{
        name: 'javascript',
        logo: faJsSquare
      },
      git:{
        name: 'GitHub',
        logo: faGithub
      }
    },
    framesworksAndLibraries: {
      angular:{
        name: 'Angular',
        logo: faAngular
      },
      bootstrap:{
        name: 'Bootstrap',
        logo: faBootstrap
      },
      angularMaterial:{
        name: 'Angular material',
        logo: faAngular
      },
      nodeJs:{
        name: 'Node Js',
        logo: faNodeJs
      },
      mongoDb:{
        name: 'MongoDb',
        logo: faDatabase
      }
    },
    nextInterests:{
      title: 'Proximas plataformas',
      text: 'A continuacion se relacionan algunas librerias, framesworks, plataformas y tecnologias que son de gran interes para aprender en un mediano plazo',
      react:{
        name: 'React Js',
        logo: faReact
      },
      aws:{
        name: 'Amazon Web Service',
        logo: faAws
      },
      php:{
        name: 'PHP',
        logo: faPhp
      },
      laravel:{
        name: 'Laravel',
        logo: faLaravel
      },
      flutter:{
        name: 'Flutter',
        logo: faAndroid
      },
      swift:{
        name: 'MongoDb',
        logo: faSwift
      }
    },
    viewMore: false
  }
  formContact: any
  constructor(){
  }

  ngAfterContentInit(){
  }
  
  ngOnInit(){
    this.initFormContact()
  }

  matters = ['Asesoria', 'Encargar trabajo', 'Oferta de empleo', 'Otro asunto']
  initFormContact(){
    this.formContact = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.email]),
      matters: new FormControl(this.matters),
      comments: new FormControl('', Validators.required),
    })
  }

  contactMe(){
    console.log(this.formContact.value)
  }

  soloLetras(e: any){
    if((e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122)){
      return
    }else{
      
    }
  }
  
  ngDoCheck(){
  }
}
