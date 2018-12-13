import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Quotes } from '../models/quotes';

@Injectable({ providedIn: 'root' })
export class QuotesService {
  constructor(private http: HttpClient) {}

  // set api url
  private url = '/assets/data/quotes.json';

  // read data from the json file
  getQuotes(): Observable<Quotes> {
    return this.http.get<Quotes>(this.url);
  }
}
