import { Component } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { WikipediaService } from './wikipedia.service';

interface SearchResults {
  title: string;
  snippet: string;
  pageid: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: SearchResults[] = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages
    });
  }
}
