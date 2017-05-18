import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class AppState {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

@Injectable()
export class StateService {

  dispatcher: Subject<string> = new Subject<string>();
  state: Observable<AppState> = Observable.create((subscriber: any) => {
    this.dispatcher.subscribe((item) => {
      subscriber.next(new AppState(item));
    });
  });

  constructor() {}

  updateState(action: string, data: any): void {
    switch(action) {
      case 'ADD_STATE':
        this.dispatcher.next(data.name);
        break;
      case 'UPDATE_STATE':
        break;
    }
  }

}

