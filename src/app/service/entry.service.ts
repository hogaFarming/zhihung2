import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class EntryService {
  private apiPrefix = 'http://news.at.zhihu.com/api/4/news/';

  constructor(private http: Http) {}

  getLatest(): Promise<Object[]> {
    return this.http.get(`${this.apiPrefix}/latest`)
      .toPromise()
      .then(data => data.json().stories);
  }
}
