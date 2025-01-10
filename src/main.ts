import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './core/config/app.config';
import { AppRootComponent } from './root/root.component';

bootstrapApplication(AppRootComponent, appConfig).catch((err) =>
  console.error(err)
);
