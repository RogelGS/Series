import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneroComponent } from './genero/genero.component';
import { ListarGeneroComponent } from './genero/listar-genero/listar-genero.component';
import { AgregarGeneroComponent } from './genero/agregar-genero/agregar-genero.component';
import { EditarGeneroComponent } from './genero/editar-genero/editar-genero.component';
import { EliminarGeneroComponent } from './genero/eliminar-genero/eliminar-genero.component';
import { PaisComponent } from './pais/pais.component';
import { SerieComponent } from './serie/serie.component';
import { GeneroService } from './service/genero.service';
import { PaisService } from './service/pais.service';
import { SerieService } from './service/serie.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarPaisComponent } from './pais/listar-pais/listar-pais.component';
import { AgregarPaisComponent } from './pais/agregar-pais/agregar-pais.component';
import { EditarPaisComponent } from './pais/editar-pais/editar-pais.component';
import { EliminarPaisComponent } from './pais/eliminar-pais/eliminar-pais.component';
import { ListarSerieComponent } from './serie/listar-serie/listar-serie.component';
import { AgregarSerieComponent } from './serie/agregar-serie/agregar-serie.component';
import { EditarSerieComponent } from './serie/editar-serie/editar-serie.component';
import { EliminarSerieComponent } from './serie/eliminar-serie/eliminar-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneroComponent,
    ListarGeneroComponent,
    AgregarGeneroComponent,
    EditarGeneroComponent,
    EliminarGeneroComponent,
    PaisComponent,
    SerieComponent,
    ListarPaisComponent,
    AgregarPaisComponent,
    EditarPaisComponent,
    EliminarPaisComponent,
    ListarSerieComponent,
    AgregarSerieComponent,
    EditarSerieComponent,
    EliminarSerieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GeneroService, PaisService, SerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
