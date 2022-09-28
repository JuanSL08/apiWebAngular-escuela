import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { EscuelaComponent } from './escuela/escuela.component';
import { FacultadComponent } from './facultad/facultad.component';
import { FormEscuelaComponent } from './escuela/form-escuela.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';

const routes: Routes = [
  { path:'', redirectTo:'/escuelas', pathMatch:'full' },
  { path:'facultades', component: FacultadComponent },
  { path:'escuelas', component: EscuelaComponent },
  { path:'escuelas/form', component: FormEscuelaComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FacultadComponent,
    EscuelaComponent,
    FormEscuelaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PdfViewerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
