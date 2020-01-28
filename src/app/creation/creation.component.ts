import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }

  saveHero() {
    console.warn(this.formHero.value);
  }
}
