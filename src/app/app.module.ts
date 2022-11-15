import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { EditTareasReglasComponent } from './pages/tareas-reglas/edit-tareas-reglas/edit-tareas-reglas.component';
import { DetailTareasReglasComponent } from './pages/tareas-reglas/detail-tareas-reglas/detail-tareas-reglas.component';


import { TipoDatosComponent } from './pages/tipo-datos/tipo-datos.component';
import { AddTipoDatosComponent } from './pages/tipo-datos/add-tipo-datos/add-tipo-datos.component';
import { EditTipoDatosComponent } from './pages/tipo-datos/edit-tipo-datos/edit-tipo-datos.component';
import { DetailTipoDatosComponent } from './pages/tipo-datos/detail-tipo-datos/detail-tipo-datos.component';


import { TipoTareasComponent } from './pages/tipo-tareas/tipo-tareas.component';
import { AddTipoTareasComponent } from './pages/tipo-tareas/add-tipo-tareas/add-tipo-tareas.component';
import { EditTipoTareasComponent } from './pages/tipo-tareas/edit-tipo-tareas/edit-tipo-tareas.component';
import { DetailTipoTareasComponent } from './pages/tipo-tareas/detail-tipo-tareas/detail-tipo-tareas.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,

    AccionesComponent,
    AddAccionesComponent,
    EditAccionesComponent,
    DetailAccionesComponent,

    DominiosComponent,
    AddDominiosComponent,
    EditDominiosComponent,
    DetailDominiosComponent,

    ObjetosComponent,
    AddObjetosComponent,
    EditObjetosComponent,
    DetailObjetosComponent,

    OperadoresComponent,
    AddOperadoresComponent,
    EditOperadoresComponent,
    DetailOperadoresComponent,

    PropiedadesComponent,
    AddPropiedadesComponent,
    EditPropiedadesComponent,
    DetailPropiedadesComponent,

    ProsesosComponent,
    AddProcesosComponent,
    EditProcesosComponent,
    DetailProcesosComponent,

    ProsesosDetComponent,
    AddProcesosDetComponent,
    EditProcesosDetComponent,
    DetailProcesosDetComponent,
    
    ProsesosTareasComponent,
    AddProcesosTareasComponent,
    EditProcesosTareasComponent,
    DetailProcesosTareasComponent,
    
    ReglasComponent,
    AddReglasComponent,
    EditReglasComponent,
    DetailReglasComponent,

    ReglasDetComponent,
    AddReglasDetComponent,
    EditReglasDetComponent,
    DetailReglasDetComponent,
    
    SentenciasComponent,
    AddSentenciasComponent,
    DetailSentenciasComponent,
    EditSentenciasComponent,

    TareasComponent,
    AddTareasComponent,
    EditTareasComponent,
    DetailTareasComponent,

    TareasReglasComponent,
    AddTareasReglasComponent,
    EditTareasReglasComponent,
    DetailTareasReglasComponent,

    TipoDatosComponent,
    AddTipoDatosComponent,
    EditTipoDatosComponent,
    DetailTipoDatosComponent,
    
    TipoTareasComponent,
    AddTipoTareasComponent,
    EditTipoTareasComponent,
    DetailTipoTareasComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
