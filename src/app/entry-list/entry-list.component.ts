import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {EntryService} from "../service/entry.service";

class Entry {
  id: Number;
  title: String;
}

@Component({
  templateUrl: './entry-list.component.html'
})
export class EntryListComponent implements OnInit{
  entries: Entry[] = [
    { id: 1, title: 'Getting Started with Webpack: Module Bundling Magic' },
    { id: 2, title: 'Learning Typescript' }
  ];

  constructor(
    private router: Router,
    private entryService: EntryService) {

  }

  ngOnInit(): void {
    this.entryService.getLatest()
      .then(list => {
        console.log(list)
      })
  }

  gotoDetail(entry: Entry): void {
    this.router.navigate(['/entry', entry.id]);
  }
}