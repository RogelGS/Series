import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarGeneroComponent } from './genero/agregar-genero/agregar-genero.component';
import { EditarGeneroComponent } from './genero/editar-genero/editar-genero.component';
import { EliminarGeneroComponent } from './genero/eliminar-genero/eliminar-genero.component';
import { GeneroComponent } from './genero/genero.component';
import { ListarGeneroComponent } from './genero/listar-genero/listar-genero.component';
import { AgregarPaisComponent } from './pais/agregar-pais/agregar-pais.component';
import { EditarPaisComponent } from './pais/editar-pais/editar-pais.component';
import { EliminarPaisComponent } from './pais/eliminar-pais/eliminar-pais.component';
import { ListarPaisComponent } from './pais/listar-pais/listar-pais.component';
import { PaisComponent } from './pais/pais.component';
import { AgregarSerieComponent } from './serie/agregar-serie/agregar-serie.component';
import { EditarSerieComponent } from './serie/editar-serie/editar-serie.component';
import { EliminarSerieComponent } from './serie/eliminar-serie/eliminar-serie.component';
import { ListarSerieComponent } from './serie/listar-serie/listar-serie.component';
import { SerieComponent } from './serie/serie.component';

const routes: Routes = [
  {path: "",  redirectTo: "/generos/listar", pathMatch: "full"},
  {path: "generos", component: GeneroComponent , children: [
    {path: "listar", component: ListarGeneroComponent},
    {path: "agregar", component: AgregarGeneroComponent},
    {path: "editar", component: EditarGeneroComponent},
    {path: "eliminar", component: EliminarGeneroComponent}
  ]},
  {path: "paises", component: PaisComponent, children: [
    {path: "listar", component: ListarPaisComponent},
    {path: "agregar", component: AgregarPaisComponent},
    {path: "editar", component: EditarPaisComponent},
    {path: "eliminar", component: EliminarPaisComponent}
  ]},
  {path: "series", component: SerieComponent, children: [
    {path: "listar", component: ListarSerieComponent},
    {path: "agregar", component: AgregarSerieComponent},
    {path: "editar", component: EditarSerieComponent},
    {path: "eliminar", component: EliminarSerieComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
