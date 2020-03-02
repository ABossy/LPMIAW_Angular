// @ts-ignore
import { Component, DoCheck, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ArmeService} from '../services/arme.service';
import {Arme} from '../data/arme';
import {Hero} from '../data/hero';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creation-armes',
  templateUrl: './creation-armes.component.html',
  styleUrls: ['./creation-armes.component.css']
})
export class CreationArmesComponent implements DoCheck, OnInit {
  arme: Arme;
  restant: number;
  formArme = new FormGroup({
  name: new FormControl(''),
  attaque: new FormControl(''),
  esquive: new FormControl(''),
  degats: new FormControl(''),
  pv: new FormControl(''),
  });

  constructor(private form: FormBuilder,  private armeService: ArmeService, private router: Router) { }
  ngDoCheck(): void {
    // tslint:disable-next-line:max-line-length
    this.restant = 0 - (this.formArme.get('attaque').value + this.formArme.get('esquive').value + this.formArme.get('degats').value + this.formArme.get('pv').value);
  }
  ngOnInit() {
  }

  createArme() {
    const arme = new Arme();
    arme.id = '';
    arme.name = this.formArme.get('name').value;
    arme.attaque = this.formArme.get('attaque').value;
    arme.esquive = this.formArme.get('esquive').value;
    arme.degats = this.formArme.get('degats').value;
    arme.pv = this.formArme.get('pv').value;
    this.armeService.addArme(arme);
    this.router.navigate(['/armes']);


  }
}
