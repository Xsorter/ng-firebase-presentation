import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/database';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class DataService {
  constructor() { 
    firebase.initializeApp(environment.firebase);
  }

  
  storeData(value){
    const db = firebase.database();
    db.ref('data').set(value)
  }

  getData(){
    const db = firebase.database().ref('data');
    return db
  }
  
}
