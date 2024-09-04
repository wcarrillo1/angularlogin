import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'; // Ajusta según tu estructura de archivos

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // Otras rutas aquí
];

export default routes;
