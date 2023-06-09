import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EntryModule } from './entry/entry.module';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EntryModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
