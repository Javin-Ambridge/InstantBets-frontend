import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class AppState {
  loggedIn: boolean;
  constructor(b: boolean) {
    this.loggedIn = b;
  }
}

@Injectable()
export class StateService {

  dispatcher: Subject<string> = new Subject<string>();
  state: Observable<AppState> = Observable.create((subscriber: any) => {
    this.dispatcher.subscribe((item) => {
      var tmpVal = false;
      if (item) tmpVal = true;
      subscriber.next(new AppState(tmpVal));
    });
  });

  constructor() {}

  updateState(action: string, data: any): void {
    switch(action) {
      case 'ADD_STATE':
        this.dispatcher.next(data.val);
        break;
      case 'UPDATE_STATE':
        break;
    }
  }

}

