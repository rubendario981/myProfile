import { Component } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver } from '@angular/cdk/layout'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curriculum Ruben Guzman'
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
  mode = ''

  constructor(private viewPort: BreakpointObserver){
  }

  viewPortSize(): string{
    let mode = ''
    const svp = this.viewPort.isMatched('(max-width: 576px)')
    return svp ? mode = 'over': mode = 'side'
  }

  ngOnInit(){
    this.viewPortSize()
  }
}
