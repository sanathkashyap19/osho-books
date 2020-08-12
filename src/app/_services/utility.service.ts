import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  book = new BehaviorSubject<any>(null);
  bookDetails = this.book.asObservable();

  constructor() { }

  storeBookDetails(details: any) {
    this.book.next(details);
  }
}
