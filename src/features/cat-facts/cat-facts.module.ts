import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDataService } from './services/data.service';
import { AppHttpService } from './services/http.service';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/facts/facts.component').then(
        (m) => m.AppFactComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [provideHttpClient(), AppHttpService, AppDataService],
})
export class AppCatFactsModule {}
