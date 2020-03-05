import { Component, OnInit } from '@angular/core';
import {ArmeService} from '../services/arme.service';
import {Arme} from '../data/arme';
import {Router} from '@angular/router';

@Component({
  selector: 'app-armes',
  templateUrl: './armes.component.html',
  styleUrls: ['./armes.component.css']
})
export class ArmesComponent implements OnInit {

  armes: Arme[];

  constructor(private armeService: ArmeService, private router: Router) { }

  ngOnInit() {
    this.getArmes();
  }

  getArmes(): void {
    this.armeService.getArmes()
      .subscribe(armes => this.armes = armes);
  }

  delete(id): void {
    this.armeService.deleteArme(id);
    this.router.navigate(['/armes']);
  }
}




