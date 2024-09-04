import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppConfig } from './app/app.config'; // Asegúrate de importar AppConfig correctamente

platformBrowserDynamic().bootstrapModule(AppConfig)
  .catch(err => console.error(err));
