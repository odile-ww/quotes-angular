import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FeaturedComponent } from './featured/featured.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorsComponent } from './authors/authors.component';

import { QuotesService } from './services/quotes.service';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    CategoriesComponent,
    AuthorsComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}

/* https://medium.com/@michelestieven/organizing-angular-applications-f0510761d65a */
