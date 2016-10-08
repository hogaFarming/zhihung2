import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {EntryService} from "../service/entry.service";
import {Entry} from '../model/entry';

@Component({
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit{
  title = '今日新闻';
  entries: Entry[];

  constructor(
    private router: Router,
    private entryService: EntryService) {

  }

  ngOnInit(): void {
    this.entryService.getLatest()
      .then((list: Entry[]) => {
        console.log(list);
        this.entries = list;
      })
  }

  gotoDetail(entry: Entry): void {
    this.router.navigate(['/entry', entry.id]);
  }
}