import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { AppDataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppCatFactsModel } from '../../models/cat-facts.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss'],
  standalone: true,
})
export class AppFactComponent implements OnInit, OnDestroy {
  private readonly _dataService = inject(AppDataService);
  private readonly _subscriptions: Subscription[] = [];

  facts = signal<AppCatFactsModel | undefined>(undefined);

  ngOnInit(): void {
    this._subscriptions.push(
      this._dataService.getFacts().subscribe((data: AppCatFactsModel) => {
        this.facts.set(data);
      })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}
