import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {SafeHtml, DomSanitizer} from '@angular/platform-browser';

import {EntryService} from '../service/entry.service';

class Banner {
  title: String;
  image: String;
  imageSource: String;
}

@Component({
  selector: 'entry-content',
  templateUrl: './entry-content.component.html',
  styleUrls: ['./entry-content.component.css']
})
export class EntryContentComponent implements OnInit {
  banner: Banner;
  body: SafeHtml;
  css: any;

  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let id: Number;
    this.route.params.forEach((params: Params) => {
      id = +params['id'];
    });
    this.entryService.getContent(id)
      .then((result: any) => {
        this.banner = {
          title: result.title,
          image: result.image,
          imageSource: result.image_source
        };
        this.body = result.body;
        this.css = this.sanitizer.bypassSecurityTrustResourceUrl(result.css);
      });
  }
}