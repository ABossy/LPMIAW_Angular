import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ArmeService} from '../services/arme.service';
import {Arme} from '../data/arme';

@Component({
  selector: 'app-creation-armes',
  templateUrl: './creation-armes.component.html',
  styleUrls: ['./creation-armes.component.css']
})
export class CreationArmesComponent implements OnInit {
  formArme = new FormGroup({
    name: new FormControl(''),
    attaque: new FormControl(''),
    esquive: new FormControl(''),
    degats: new FormControl(''),
    pv: new FormControl(''),
  });
  constructor(private form: FormBuilder,  private armeService: ArmeService) { }

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

  }
}
