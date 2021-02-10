import { ChangeDetectorRef, Component } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { MediaMatcher } from '@angular/cdk/layout'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curriculum Ruben Guzman';  
  informacion={
    general:{
      title: 'Informacion general',
      viewMore: true
    },
    data:{
      title: 'Datos principales',
      viewMore: true
    },
    languages:{
      title: 'Lenguajes y plataformas',
      viewMore: false
    },
    social:{
      title: 'Redes sociales ',
      viewMore: false
    },
    contact:{
      title: 'Contacto',
      viewMore: true
    }
  }
  iconUniversity = faUniversity
  iconLinkedIn = faLinkedinIn
  iconGitHub = faGithub
  fullName =  'Ruben Dario Guzman Gonzalez'
  aboutMe ={
    fullName: this.fullName,
    image: '../assets/img/imagenRuben.jpeg',
    title: 'Ingeniero de sistemas de la universidad nacional abierta de y a distancia UNAD de Colombia, anteriormente tecnologo en sistemas de la universidad Santiago de Cali USC',    
    viewMore: true
  }
  personalData ={
    fullName: this.fullName,
    country: 'Colombia',
    city: 'Cali - Valle del cauca',
    carrer: 'Ingenieria de sistemas',
    university: 'Universidad Nacional Abierta y a Distancia - UNAD', 
    viewMore: true 
  }
  mode: MediaQueryList
  private _mobileQueryListen: () => void;

  constructor(private viewPort: MediaMatcher, detectChanges: ChangeDetectorRef){
    this.mode = viewPort.matchMedia('(max-width: 576px)')
    this._mobileQueryListen = ()=> detectChanges.detectChanges()
    this.mode.addEventListener('change', this._mobileQueryListen);
  }
}
