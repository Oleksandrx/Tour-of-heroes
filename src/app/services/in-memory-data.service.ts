import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const heroes = [
      {
        id: 1,
        name: 'Iron Man'
    },
    {
        id: 2,
        name: 'Batman'
    },
    {
        id: 3,
        name: 'Hulk'
    },
    {
        id: 4,
        name: 'Tor'
    },
    {
        id: 5,
        name: 'RubberMan'
    },
    {
        id: 6,
        name: 'Dynama'
    },
    {
        id: 7,
        name: 'Dr IQ'
    },
    {
        id: 8,
        name: 'Magma'
    },
    {
        id: 9,
        name: 'Tornado'
    },
    {
        id: 10,
        name: 'Mr Nice'
    }
    ];
    return {heroes};
  }
}
