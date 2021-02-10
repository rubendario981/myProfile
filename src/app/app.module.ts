import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from '../app/components/footer/footer.component'
import { FormContactComponent } from '../app/components/formContact/formContact.component'
import { HeaderComponent } from '../app/components/header/header.component'
import { SkillsComponent } from '../app/components/skills/skills.component'

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { ObjToArrayPipe } from './utils/objToArray.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormContactComponent,
    HeaderComponent,
    SkillsComponent,
    ObjToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
