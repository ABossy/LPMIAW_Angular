import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../data/hero';
import { HeroService } from '../services/hero.service';
import {Router} from '@angular/router';
import {Arme} from '../data/arme';
import {ArmeService} from '../services/arme.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
@Input() heroes: Hero[];
   armes: Arme[];
   armeName: string;
   sortBy = 'name';
   sortDirection = 'asc';


  constructor(private heroService: HeroService, private router: Router, private armeService: ArmeService
  ) { }

  ngOnInit() {
    this.getHeroes();
    this.getArmes();

  }

  // chargement de tous les heros avec la fonction sort
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = this.doSort( heroes ) );
  }

  // recuperation de toutes les armes
  getArmes(): void {
    this.armeService.getArmes()
      .subscribe(arme => this.armes = arme);
  }


// suppression d'un hero
  delete(id): void {
    this.heroService.deleteHero(id);
    this.router.navigate(['/heroes']);
  }

  setSort(by): void {
    if ( this.sortBy === by ) {
      this.sortDirection = ( this.sortDirection === 'desc' ? 'asc' : 'desc' );
    } else {
      this.sortDirection = 'asc';
    }
    this.sortBy = by;

    this.heroes = this.doSort( this.heroes );
  }

  doSort( heroes ): Hero[] {
    return heroes.sort( ( a, b ) => {
      if (this.sortBy === 'name' ) {
        return ( this.sortDirection === 'desc' ? 1 : -1 ) * ( a[this.sortBy].toLowerCase() > b[this.sortBy].toLowerCase() ? -1 : 1);
      }
      return ( this.sortDirection === 'desc' ? 1 : -1 ) * ( a[this.sortBy] > b[this.sortBy] ? -1 : 1);
    } );
  }

}
