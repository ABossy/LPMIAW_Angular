import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Hero} from '../data/hero';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
    formHero = new FormGroup({
    name: new FormControl(''),
    attaque: new FormControl(''),
    esquive: new FormControl(''),
    degats: new FormControl(''),
    pv: new FormControl(''),
    });
  constructor(private form: FormBuilder, private heroService: HeroService) { }

  ngOnInit() {
  }

  saveHero() {
    const hero = new Hero();
    hero.id = 54;
    hero.name = 'toto';
    this.heroService.addHero(hero);
  }
}
