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


  constructor(private heroService: HeroService, private router: Router, private armeService: ArmeService
  ) { }

  ngOnInit() {
    this.getHeroes();
    this.getArmes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getArmes(): void {
    this.armeService.getArmes()
      .subscribe(arme => this.armes = arme);
  }

  getArmeName(id): string {
    this.armeService.getArme(id)
      .subscribe(arme => arme.name);
    return 'name';
  }

  delete(id): void {
    this.heroService.deleteHero(id);
    this.router.navigate(['/heroes']);
  }
}
