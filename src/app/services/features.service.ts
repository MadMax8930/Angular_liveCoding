import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  features = [
    {
      id: 1,
      name : 'Conception',
      description : 'Aide à la conception d\'application'
    },
    {
      id: 2,
      name : 'Développement',
      description : 'Implémentation d\'application'
    },
    {
      id: 3,
      name : 'Déploiement',
      description : 'Assistance dans le déploiement de vos applications'
    }
  ]

  featureSubject = new Subject<any[]>();

  constructor() { }

  addFeature() {
    const newFeature = {
      id : this.features.length + 1,
      name : 'Whatever',
      description : 'Blabla Bla bla bla bla bla blab ablab'
    }
    this.features.push(newFeature);
    console.log(this.features);
    this.emitDataFeature();
  }

  emitDataFeature() {
    this.featureSubject.next(this.features.slice());
    console.log('Emit Data');
  }


}
