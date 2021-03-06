import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes'
import { Hero } from './hero'
import { Observable, of} from 'rxjs'
import { MessageService } from './messages.service'



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
 
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
