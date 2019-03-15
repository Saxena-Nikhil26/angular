import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getleaders(): Promise<Leader[]> {
  	return new Promise( resolve => {
      setTimeout(() => resolve(LEADERS),2000);
    });
  }

  getleader(id: string): Promise<Leader> {
  	return new Promise( resolve => {
      setTimeout(() => resolve(LEADERS.filter((Leader) => (Leader.id === id))[0]),2000);
    });
  }

  getFeatured(): Promise<Leader> {
   return new Promise( resolve => {
    setTimeout(() => resolve(LEADERS.filter((Leader) => Leader.featured)[0]),2000);
   });
  }
}
