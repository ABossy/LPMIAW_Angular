import {Serializable} from './serializable';

export class Arme extends Serializable {
  id: string;
  name: string;
  attaque: number;
  esquive: number;
  degats: number;
  pv: number;

  uneMethode(): string {
    return 'arme' + this.name + this.attaque + this.esquive + this.degats + this.pv;
  }
}
