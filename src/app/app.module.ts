import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { ComentarioComponent } from './componente/comentario/comentario.component';
import { UsuarioComponent } from './componente/usuario/usuario.component';
import { PostagemComponent } from './componente/postagem/postagem.component';
import { CompartilhamentoComponent } from './componente/compartilhamento/compartilhamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    ComentarioComponent,
    UsuarioComponent,
    PostagemComponent,
    CompartilhamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
