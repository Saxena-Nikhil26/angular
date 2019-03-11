import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getleaders(): Leader[] {
  	return LEADERS;
  }

  getleader(id: string): Leader {
  	return LEADERS.filter((Leader) => (Leader.id === id))[0];
  }

  getFeatured(): Leader {
   return LEADERS.filter((Leader) => Leader.featured)[0];
  }
}
