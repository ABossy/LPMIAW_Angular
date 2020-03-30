import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../data/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';
import {Arme} from '../data/arme';
import {ArmeService} from '../services/arme.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  arme: Arme[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private armeService: ArmeService
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getArmes();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
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
      .subscribe(arme => this.arme = arme);
  }
}
