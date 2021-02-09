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
    title: 'Ingeniero de sistemas de la universidad nacional abierta de y a distancia UNAD de colombia',
    description: 's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    conclusion: 'text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy ',
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
