import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCoreModule } from '../core/core.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppCoreModule],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
  standalone: true,
})
export class AppRootComponent {
  readonly today = new Date();
}
