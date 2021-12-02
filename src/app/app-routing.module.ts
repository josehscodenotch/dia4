import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCiudadComponent } from './pages/form-ciudad/form-ciudad.component';
import { VistaCiudadComponent } from './pages/vista-ciudad/vista-ciudad.component';


const routes: Routes = 
[
  {path: "", redirectTo: "/formulario", pathMatch:"full"},
  {path: "formulario", component:FormCiudadComponent},
  {path: "vista" , component:VistaCiudadComponent},
  {path: "vista/:parametro1" , component:VistaCiudadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
