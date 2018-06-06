import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

menuChoice: string;

  constructor() {
    this.menuChoice = 'Voyage';
   }

  selectedChoice(choice) {
    this.menuChoice = choice;
  }
}
