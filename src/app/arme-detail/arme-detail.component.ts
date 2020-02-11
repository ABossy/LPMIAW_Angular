import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ArmeService} from '../services/arme.service';
import {Arme} from '../data/arme';

@Component({
  selector: 'app-arme-detail',
  templateUrl: './arme-detail.component.html',
  styleUrls: ['./arme-detail.component.css']
})
export class ArmeDetailComponent implements OnInit {
  @Input() arme: Arme;

  constructor(  private route: ActivatedRoute,
                private armeService: ArmeService,
                private location: Location) { }

  ngOnInit() {
    this.getArme();
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
  }
}
