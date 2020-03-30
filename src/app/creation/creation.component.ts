import { Component, DoCheck, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Hero} from '../data/hero';
import {HeroService} from '../services/hero.service';
import {ArmeService} from '../services/arme.service';
import {Arme} from '../data/arme';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements DoCheck, OnInit {

  hero: Hero;
  restant: number;
  formHero = new FormGroup({
  name: new FormControl(''),
  attaque: new FormControl(''),
  esquive: new FormControl(''),
  degats: new FormControl(''),
  pv: new FormControl(''),
  arme: new FormControl(''),
  });


  constructor(private form: FormBuilder, private heroService: HeroService, private router: Router, private armeService: ArmeService) { }

  ngDoCheck(): void {
    // tslint:disable-next-line:max-line-length
    this.restant = 40 - (this.formHero.get('attaque').value + this.formHero.get('esquive').value + this.formHero.get('degats').value + this.formHero.get('pv').value);
  }
  // creation
  ngOnInit() {
    this.hero = new Hero();
    this.restant = 40;
    this.formHero.get('attaque').setValue(1);
    this.formHero.get('esquive').setValue(1);
    this.formHero.get('degats').setValue(1);
    this.formHero.get('pv').setValue(1);

  }

  createHero() {
    if (this.restant < 0 || this.restant > 40) {
    } else {
      this.hero.name = this.formHero.get('name').value;
      this.hero.attaque = this.formHero.get('attaque').value;
      this.hero.esquive = this.formHero.get('esquive').value;
      this.hero.degats = this.formHero.get('degats').value;
      this.hero.pv = this.formHero.get('pv').value;
      this.hero.arme = this.formHero.get('arme').value;
      this.heroService.addHero(this.hero);
      this.router.navigate(['/heroes']);
    }

  }


}
