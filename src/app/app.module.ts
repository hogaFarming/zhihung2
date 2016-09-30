import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule} from '@angular/http';

import {routing} from './app.routes';
import {EntryService} from './service/entry.service';
import {AppComponent} from "./app.component";
import {EntryListComponent} from './entry-list/entry-list.component';
import {EntryContentComponent} from './entry-content/entry-content.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryContentComponent
  ],
  providers: [
    EntryService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }