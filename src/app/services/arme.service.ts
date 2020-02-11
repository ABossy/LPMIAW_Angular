import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Arme } from '../data/arme';
import {MessageService} from './message.service';

import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArmeService {

  private static url = 'armes';

  constructor(private messageService: MessageService,
              private db: AngularFirestore) { }

  // Récupération des armes
  getArmes(): Observable<Arme[]> {

    //
    return this.db.collection<Arme>(ArmeService.url)
      .snapshotChanges()
      .pipe(
        map(liste => {

          // log
          console.log('getArmes()');

          // Traitement de la liste
          return liste.map(item => {

            // Get document data
            const data = item.payload.doc.data();

            // New Arme
            const arme = new Arme().fromJSON(data);

            // Get document id
            const id = item.payload.doc.id;
            arme.id = id;

            // log
            console.log('   arme ' + id);

            // Use spread operator to add the id to the document data
            return arme;

          });
        })
      );
  }

  // Récupération d'une arme en fonction de son id
  getArme(id: string): Observable<Arme> {

    // Return arme observable
    return this.getArmeDocument(id).snapshotChanges()
      .pipe(
        map(item => {

          // Get document data
          const data = item.payload.data();

          // New Arme
          const arme = new Arme().fromJSON(data);
          arme.id = id;

          // log
          console.log('getArme(' + id + ')');

          // Use spread operator to add the id to the document data
          return arme;
        })
      );
  }

  // Ajout d'une arme
  addArme(arme: Arme) {
    this.db.collection<Arme>(ArmeService.url).add(Object.assign({}, arme));
  }

  // Modification d'une arme
   updateArme(arme: Arme) {

    // Update document
    this.getArmeDocument(arme.id).update(Object.assign({}, arme));
  }

  // Suppression d'une arme
  deleteArme(id: string) {

    // Delete the document
    this.getArmeDocument(id).delete();
  }


  // Création du service Firebase en fonction de l'id de l'arme
  private getArmeDocument(id: string): AngularFirestoreDocument<Arme> {

    // return document
    return this.db.doc<Arme>(ArmeService.url + `/` + id);
  }
}
