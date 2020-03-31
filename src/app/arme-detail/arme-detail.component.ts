import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ArmeService} from '../services/arme.service';
import {Arme} from '../data/arme';
import {Hero} from '../data/hero';

@Component({
  selector: 'app-arme-detail',
  templateUrl: './arme-detail.component.html',
  styleUrls: ['./arme-detail.component.css']
})
export class ArmeDetailComponent implements OnInit {
  @Input() arme: Arme;
  totalArme: number;

  constructor(  private route: ActivatedRoute,
                private armeService: ArmeService,
                private location: Location) { }

  ngOnInit() {
    this.getArme();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngDoCheck(): void {
    this.totalArme = 0 - (this.arme.pv + this.arme.degats + this.arme.esquive + this.arme.attaque);
  }

  getArme(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.armeService.getArme(id)
      .subscribe(arme => this.arme = arme);
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.armeService.updateArme(this.arme);
    this.location.back();
  }
}
