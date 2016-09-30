import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EntryListComponent} from './entry-list/entry-list.component';
import {EntryContentComponent} from "./entry-content/entry-content.component";

const appRoutes: Routes = [
  {
    path: 'entry-list',
    component: EntryListComponent
  },
  {
    path: 'entry/:id',
    component: EntryContentComponent
  },
  {
    path: '',
    redirectTo: '/entry-list',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
