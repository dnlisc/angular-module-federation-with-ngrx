import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { mfeReducer } from 'src/state/mfe.reducers';

const routes: Routes = [{ path: '', component: EntryComponent }];

@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('mfe', mfeReducer),
  ],
})
export class EntryModule {}
