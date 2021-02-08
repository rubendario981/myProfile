import { Component, Input, OnInit } from '@angular/core';
import { faHtml5, faJsSquare, faCss3, faBootstrap, faAngular, faAndroid, faNodeJs, faGithub, faReact, faAws, faPhp, faLaravel, faSwift, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {  
  @Input('loadSkills') load: any
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
      react:{
        name: 'React Js',
        logo: faReact
      },
      python:{
        name: 'Python',
        logo: faPython
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
        name: 'Swift',
        logo: faSwift
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
