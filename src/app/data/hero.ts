import {Serializable} from './serializable';
import {Arme} from '../data/arme';
import {ArmeService} from '../services/arme.service';

export class Hero extends Serializable {
  id: string;
  name: string;
  attaque: number;
  esquive: number;
  degats: number;
  pv: number;
  arme: string;


  uneMethode(): string {
    return 'le nom de mon hero' + this.name + this.attaque + this.esquive + this.degats + this.pv + this.arme;
  }

  getNomArme(arme: string): string {
    return this.arme;
  }
}
