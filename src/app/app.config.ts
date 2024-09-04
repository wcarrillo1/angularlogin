import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import routes from './app.routes'; // Importa las rutas desde app.routes.ts
import { AppComponent } from './app.component'; // Importa el componente standalone
import { AuthModule } from './auth/auth.module'; // Ajusta según tu estructura de archivos

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AuthModule, // Asegúrate de importar tu módulo de autenticación aquí
    AppComponent // No es necesario declarar AppComponent, solo impórtalo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppConfig {}
