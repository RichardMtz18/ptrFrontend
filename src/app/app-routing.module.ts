import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { MainPageComponent } from './components/mainPage/mainPage.component';



import { AccionesComponent } from './pages/acciones/acciones.component';
import { AddAccionesComponent } from './pages/acciones/add-acciones/add-acciones.component';
import { EditAccionesComponent } from './pages/acciones/edit-acciones/edit-acciones.component';
import { DetailAccionesComponent } from './pages/acciones/detail-acciones/detail-acciones.component';


import { DominiosComponent } from './pages/dominios/dominios.component';
import { AddDominiosComponent } from './pages/dominios/add-dominios/add-dominios.component';
import { EditDominiosComponent } from './pages/dominios/edit-dominios/edit-dominios.component';
import { DetailDominiosComponent } from './pages/dominios/detail-dominios/detail-dominios.component';


import { ObjetosComponent } from './pages/objetos/objetos.component';
import { AddObjetosComponent } from './pages/objetos/add-objetos/add-objetos.component';
import { EditObjetosComponent } from './pages/objetos/edit-objetos/edit-objetos.component';
import { DetailObjetosComponent } from './pages/objetos/detail-objetos/detail-objetos.component';


import { OperadoresComponent } from './pages/operadores/operadores.component';
import { AddOperadoresComponent } from './pages/operadores/add-operadores/add-operadores.component';
import { EditOperadoresComponent } from './pages/operadores/edit-operadores/edit-operadores.component';
import { DetailOperadoresComponent } from './pages/operadores/detail-operadores/detail-operadores.component';


import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { AddPropiedadesComponent } from './pages/propiedades/add-propiedades/add-propiedades.component';
import { EditPropiedadesComponent } from './pages/propiedades/edit-propiedades/edit-propiedades.component';
import { DetailPropiedadesComponent } from './pages/propiedades/detail-propiedades/detail-propiedades.component';


import { ProsesosComponent } from './pages/prosesos/prosesos.component';
import { AddProcesosComponent } from './pages/prosesos/add-procesos/add-procesos.component';
import { EditProcesosComponent } from './pages/prosesos/edit-procesos/edit-procesos.component';
import { DetailProcesosComponent } from './pages/prosesos/detail-procesos/detail-procesos.component';


import { ProsesosDetComponent } from './pages/prosesos-det/prosesos-det.component';
import { AddProcesosDetComponent } from './pages/prosesos-det/add-procesos-det/add-procesos-det.component';
import { EditProcesosDetComponent } from './pages/prosesos-det/edit-procesos-det/edit-procesos-det.component';
import { DetailProcesosDetComponent } from './pages/prosesos-det/detail-procesos-det/detail-procesos-det.component';


import { ProsesosTareasComponent } from './pages/prosesos-tareas/prosesos-tareas.component';
import { AddProcesosTareasComponent } from './pages/prosesos-tareas/add-procesos-tareas/add-procesos-tareas.component';
import { EditProcesosTareasComponent } from './pages/prosesos-tareas/edit-procesos-tareas/edit-procesos-tareas.component';
import { DetailProcesosTareasComponent } from './pages/prosesos-tareas/detail-procesos-tareas/detail-procesos-tareas.component';

import { ReglasComponent } from './pages/reglas/reglas.component';
import { AddReglasComponent } from './pages/reglas/add-reglas/add-reglas.component';
import { EditReglasComponent } from './pages/reglas/edit-reglas/edit-reglas.component';
import { DetailReglasComponent } from './pages/reglas/detail-reglas/detail-reglas.component';


import { ReglasDetComponent } from './pages/reglas-det/reglas-det.component';
import { AddReglasDetComponent } from './pages/reglas-det/add-reglas-det/add-reglas-det.component';
import { EditReglasDetComponent } from './pages/reglas-det/edit-reglas-det/edit-reglas-det.component';
import { DetailReglasDetComponent } from './pages/reglas-det/detail-reglas-det/detail-reglas-det.component';

import { SentenciasComponent } from './pages/sentencias/sentencias.component';
import { AddSentenciasComponent } from './pages/sentencias/add-sentencias/add-sentencias.component';
import { EditSentenciasComponent } from './pages/sentencias/edit-sentencias/edit-sentencias.component';
import { DetailSentenciasComponent } from './pages/sentencias/detail-sentencias/detail-sentencias.component';

import { TareasComponent } from './pages/tareas/tareas.component';
import { AddTareasComponent } from './pages/tareas/add-tareas/add-tareas.component';
import { DetailTareasComponent } from './pages/tareas/detail-tareas/detail-tareas.component';
import { EditTareasComponent } from './pages/tareas/edit-tareas/edit-tareas.component';

import { TareasReglasComponent } from './pages/tareas-reglas/tareas-reglas.component';
import { AddTareasReglasComponent } from './pages/tareas-reglas/add-tareas-reglas/add-tareas-reglas.component';
import { DetailTareasReglasComponent } from './pages/tareas-reglas/detail-tareas-reglas/detail-tareas-reglas.component';
import { EditTareasReglasComponent } from './pages/tareas-reglas/edit-tareas-reglas/edit-tareas-reglas.component';
import { TipoDatosComponent } from './pages/tipo-datos/tipo-datos.component';
import { AddTipoDatosComponent } from './pages/tipo-datos/add-tipo-datos/add-tipo-datos.component';
import { EditTipoDatosComponent } from './pages/tipo-datos/edit-tipo-datos/edit-tipo-datos.component';
import { DetailTipoDatosComponent } from './pages/tipo-datos/detail-tipo-datos/detail-tipo-datos.component';

import { TipoTareasComponent } from './pages/tipo-tareas/tipo-tareas.component';
import { AddTipoTareasComponent } from './pages/tipo-tareas/add-tipo-tareas/add-tipo-tareas.component';
import { EditTipoTareasComponent } from './pages/tipo-tareas/edit-tipo-tareas/edit-tipo-tareas.component';
import { DetailTipoTareasComponent } from './pages/tipo-tareas/detail-tipo-tareas/detail-tipo-tareas.component';
import { HomeComponent } from './pages/home/home.component';




const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },

  {
    path: "acciones", component: AccionesComponent
  },
  {
    path: "acciones/add-accion", component: AddAccionesComponent
  },
  {
    path: "acciones/edit-accion", component: EditAccionesComponent
  },
  {
    path: "acciones/detail-accion", component: DetailAccionesComponent
  },



  { 
    path: "dominios", component: DominiosComponent
  },
  { 
    path: "dominios/add-dominio", component: AddDominiosComponent
  },
  { 
    path: "dominios/edit-dominio", component: EditDominiosComponent
  },
  { 
    path: "dominios/detail-dominio", component: DetailDominiosComponent
  },




  {
    path: "objetos", component: ObjetosComponent
  },
  {
    path: "objetos/add-objetos", component: AddObjetosComponent
  },
  {
    path: "objetos/edit-objetos", component: EditObjetosComponent
  },
  {
    path: "objetos/detail-objetos", component: DetailObjetosComponent
  },




  {
    path: "operadores", component: OperadoresComponent
  },
  {
    path: "operadores/add-operadores", component: AddOperadoresComponent
  },
  {
    path: "operadores/edit-operadores", component: EditOperadoresComponent
  },
  {
    path: "operadores/detail-operadores", component: DetailOperadoresComponent
  },




  {
    path: "propiedades", component: PropiedadesComponent
  },
  {
    path: "propiedades/add-propiedades", component: AddPropiedadesComponent
  },
  {
    path: "propiedades/edit-propiedades", component: EditPropiedadesComponent
  },
  {
    path: "propiedades/detail-propiedades", component: DetailPropiedadesComponent
  },




  {
    path: "prosesos", component: ProsesosComponent
  },
  {
    path: "prosesos/add-procesos", component: AddProcesosComponent
  },
  {
    path: "prosesos/edit-procesos", component: EditProcesosComponent
  },
  {
    path: "prosesos/detail-procesos", component: DetailProcesosComponent
  },


  

  {
    path: "procesos-det", component: ProsesosDetComponent
  },
  {
    path: "procesos-det/add-procesos-det", component: AddProcesosDetComponent
  },
  {
    path: "procesos-det/edit-procesos-det", component: EditProcesosDetComponent
  },
  {
    path: "procesos-det/detail-procesos-det", component: DetailProcesosDetComponent
  },




  {
    path: "prosesos-tareas", component: ProsesosTareasComponent
  },
  {
    path: "prosesos-tareas/add-procesos-tareas", component: AddProcesosTareasComponent
  },
  {
    path: "prosesos-tareas/edit-procesos-tareas", component: EditProcesosTareasComponent
  },
  {
    path: "prosesos-tareas/detail-procesos-tareas", component: DetailProcesosTareasComponent
  },



  {
    path: "reglas", component: ReglasComponent
  },
  {
    path: "reglas/add-reglas", component: AddReglasComponent
  },
  {
    path: "reglas/edit-reglas", component: EditReglasComponent
  },
  {
    path: "reglas/detail-reglas", component: DetailReglasComponent
  },




  
  {
    path: "reglas-det", component: ReglasDetComponent
  },
  {
    path: "reglas-det/add-reglas-det", component: AddReglasDetComponent
  },
  {
    path: "reglas-det/edit-reglas-det", component: EditReglasDetComponent
  },
  {
    path: "reglas-det/detail-reglas-det", component: DetailReglasDetComponent
  },



  
  {
    path: "sentencias", component: SentenciasComponent
  },
  {
    path: "sentencias/add-sentencias", component: AddSentenciasComponent
  },
  {
    path: "sentencias/edit-sentencias", component: EditObjetosComponent
  },
  { 
    path: "sentencias/detail-sentencias", component: DetailSentenciasComponent
  },


  
  {
    path: "tareas", component: TareasComponent
  },
  {
    path: "tareas/add-tareas", component: AddTareasComponent
  },
  { 
    path: "tareas/detail-tareas", component: DetailTareasComponent
  },
  { 
    path: "tareas/edit-tareas", component: EditTareasComponent
  },

  

  {
    path: "tareas-reglas", component: TareasReglasComponent
  },
  {
    path: "tareas-reglas/add-tareas-reglas", component: AddTareasReglasComponent
  },
  {
    path: "tareas-reglas/edit-tareas-reglas", component: EditTareasReglasComponent
  },
  {
    path: "tareas-reglas/detail-tareas-reglas", component: DetailTareasReglasComponent
  },
  
  

  {
    path: "tipo-datos", component: TipoDatosComponent,
  },
  {
    path: "tipo-datos/add-tipo-datos", component: AddTipoDatosComponent
  },
  {
    path: "tipo-datos/edit-tipo-datos", component: EditTipoDatosComponent
  },
  {
    path: "tipo-datos/detail-tipo-datos", component: DetailTipoDatosComponent
  },



  {
    path: "tipo-tareas", component: TipoTareasComponent,
  },
  {
    path: "tipo-tareas/add-tipo-tareas", component: AddTipoTareasComponent
  },
  {
    path: "tipo-tareas/edit-tipo-tareas", component: EditTipoTareasComponent
  },
  {
    path: "tipo-tareas/detail-tipo-tareas", component: DetailTipoTareasComponent
  },



  //Default Page
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
