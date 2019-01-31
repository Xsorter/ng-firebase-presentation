import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
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
    db.ref('data').set(value);
  }

  getData(){
    const db = firebase.database().ref('data');
    return db;
  }

  storeImage(image){
    const storageRef = firebase.storage().ref('images').child(image.name);
    const task = storageRef.put(image);
    task.on(firebase.storage.TaskEvent.STATE_CHANGED, 
      () => {
        let progress = Math.floor(((task.snapshot.bytesTransferred/task.snapshot.totalBytes) * 100) * 100) / 100;
        console.log('img uploaded for '+progress+'%');
      },
      (error) => {
        console.log(error);
      },
      () => {
        task.snapshot.ref.getDownloadURL(); //for example, we can get url here
      }
    )
    return task.snapshot.ref.getDownloadURL();
  
  }
  
  
}
