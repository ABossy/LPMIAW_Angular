import { Component, OnInit } from '@angular/core';
import {ArmeService} from '../services/arme.service';
import {Arme} from '../data/arme';

@Component({
  selector: 'app-armes',
  templateUrl: './armes.component.html',
  styleUrls: ['./armes.component.css']
})
export class ArmesComponent implements OnInit {

  armes: Arme[];

  constructor(private armeService: ArmeService) { }

  ngOnInit() {
    this.getArmes();
  }

  getArmes(): void {
    this.armeService.getArmes()
      .subscribe(armes => this.armes = armes);
  }
}




