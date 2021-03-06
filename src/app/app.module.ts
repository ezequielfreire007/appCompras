import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProveedoresService } from './servicios/proveedores.service';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';

const routes: Routes = [
  { path : '', component:InicioComponent },
  { path : 'proveedores', component:ProveedoresComponent },
  { path : 'addprovee', component:AddproveeComponent },
  { path : 'addpres', component:AddpresComponent },
  { path : '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProveedoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
