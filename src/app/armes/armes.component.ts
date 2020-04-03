import {Component, OnInit} from '@angular/core';
import {ArmeService} from '../services/arme.service';
import {Arme} from '../data/arme';
import {Router} from '@angular/router';
import {Hero} from '../data/hero';

@Component({
  selector: 'app-armes',
  templateUrl: './armes.component.html',
  styleUrls: ['./armes.component.css']
})
export class ArmesComponent implements OnInit {

  armes: Arme[];
  sortBy = 'name';
  sortDirection = 'asc';

  constructor(private armeService: ArmeService, private router: Router) {
  }

  ngOnInit() {
    this.getArmes();
  }

  getArmes(): void {
    this.armeService.getArmes()
      .subscribe(armes => this.armes = this.doSort(armes));
  }

  delete(id): void {
    this.armeService.deleteArme(id);
    this.router.navigate(['/armes']);
  }


  // fonction pour le tri par nom et attributs
  setSort(by): void {
    if (this.sortBy === by) {
      this.sortDirection = (this.sortDirection === 'desc' ? 'asc' : 'desc');
    } else {
      this.sortDirection = 'asc';
    }
    this.sortBy = by;

    this.armes = this.doSort(this.armes);
  }

  doSort(armes): Arme[] {
    return armes.sort((a, b) => {
      if (this.sortBy === 'name') {
        return (this.sortDirection === 'desc' ? 1 : -1) * (a[this.sortBy].toLowerCase() > b[this.sortBy].toLowerCase() ? -1 : 1);
      }
      return (this.sortDirection === 'desc' ? 1 : -1) * (a[this.sortBy] > b[this.sortBy] ? -1 : 1);
    });
  }

}




