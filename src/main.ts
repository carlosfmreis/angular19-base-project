import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './config';
import { AppRootComponent } from './root/root.component';

bootstrapApplication(AppRootComponent, appConfig).catch((err) =>
  console.error(err)
);
