import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from '../state/shell.actions'
import { Observable } from 'rxjs';
import { getShellFeature } from 'src/state/shell.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shellFeature$!: Observable<boolean>;
  
  constructor(private store: Store) {
    this.shellFeature$ = this.store.select(getShellFeature);
  }

  toggleShellFeature() {
    this.store.dispatch(Actions.toggleShellFeature())
  }
}
