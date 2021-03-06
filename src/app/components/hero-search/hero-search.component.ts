import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Hero } from '../../models';
import { HeroService } from './../../services';
import { distinctUntilChanged, catchError, switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => term ? this.heroService.searchHeroes(term) : of<Hero[]>([])
      ),
      catchError(error => {
        console.log(`Error in component ... ${error}`);
        return of<Hero[]>([]);
      })
    );
  }

}
