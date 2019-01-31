import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) { }

  group: string = '';
  album: string = '';
  imageUrl: string = '';


  ngOnInit() {
    this.dataService.getData()
      .on('value', (snapshot) => {
        const snapshotData = snapshot.val();
        this.group = snapshotData.group;
        this.album = snapshotData.album;
        this.imageUrl = snapshotData.imageInput;
      })
  }

  onBack(){
    this.router.navigate(['']);
  }

}
