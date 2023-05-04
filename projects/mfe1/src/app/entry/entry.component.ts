import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from '../../state/mfe.actions';
import { Observable } from 'rxjs';
import { getMfeFeature, getShellFeature } from 'src/state/mfe.reducers';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent {
  mfeFeature$!: Observable<boolean>;
  shellFeature$!: Observable<boolean>;
  constructor(private store: Store) {
    this.mfeFeature$ = this.store.select(getMfeFeature);
    this.shellFeature$ = this.store.select(getShellFeature);
  }

  toggleMfeFeature() {
    this.store.dispatch(Actions.toggleMfeFeature());
  }

  toggleShellFeature() {
    this.store.dispatch(Actions.toggleShellFeature());
  }
}
