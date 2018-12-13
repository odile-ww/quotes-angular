import { Component } from '@angular/core';
import { QuotesService } from './services/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [];
  quotesByAuthor = [];
  authors = [];
  categories = [];

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quotesService.getQuotes().subscribe(this.getData.bind(this));
  }

  getData(res) {
    this.quotes = res['quotes'];
    this.getAuthors();
    this.getCategories();
  }

  getAuthors() {
    const tempAuthors = [];
    this.quotes.map(item => {
      tempAuthors.push(item.author);
    });
    tempAuthors.map(autor => {
      if (this.authors.indexOf(autor) < 0) {
        this.authors.push(autor);
      }
    });
  }

  getCategories() {
    const tempCategories = [];
    this.quotes.map(item => {
      tempCategories.push(...item.tags);
    });
    tempCategories.forEach(item => {
      if (this.categories.indexOf(item) < 0) {
        this.categories.push(item);
      }
    });
  }
}
