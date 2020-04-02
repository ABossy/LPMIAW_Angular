import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../data/hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from '../services/hero.service';
import {Arme} from '../data/arme';
import {ArmeService} from '../services/arme.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  armes: Arme[];
  total: number;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private armeService: ArmeService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getHero();
    this.getArmes();

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngDoCheck(): void {
    this.total = 40 - (this.hero.pv + this.hero.degats + this.hero.esquive + this.hero.attaque);
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero );
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    this.heroService.updateHero(this.hero);
    this.location.back();
  }

  getArmes(): void {
    this.armeService.getArmes()
      .subscribe(armes => this.armes = armes );
  }

}
