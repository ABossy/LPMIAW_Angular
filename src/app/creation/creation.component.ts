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
    hero.id = '';
    hero.name = this.formHero.get('name').value;
    hero.attaque = this.formHero.get('attaque').value;
    hero.esquive = this.formHero.get('esquive').value;
    hero.degats = this.formHero.get('degats').value;
    hero.pv = this.formHero.get('pv').value;
    this.heroService.addHero(hero);
  }
}
