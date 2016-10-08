import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Entry} from '../model/entry';

@Injectable()
export class EntryService {
  private apiPrefix = 'http://localhost:9001/api/4/news';

  constructor(private http: Http) {}

  getLatest(): Promise<Entry[]> {
    return this.http.get(`${this.apiPrefix}/latest`)
      .toPromise()
      .then(data => {
        let entries: Entry[] = data.json().stories.map((item: any) => {
          return {
            id: item.id,
            title: item.title,
            image: item.images[0]
          };
        });
        return entries;
      });
  }

  getContent(id: Number): Promise<Object> {
    return this.http.get(`${this.apiPrefix}/${id}`)
      .toPromise()
      .then(data => data.json());
  }
}
