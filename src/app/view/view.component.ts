import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private dataService: DataService) { }

  group: string = '';
  album: string = '';


  ngOnInit() {
    this.dataService.getData()
      .on('value', (snapshot) => {
        const snapshotData = snapshot.val();
        this.group = snapshotData.group;
        this.album = snapshotData.album;
      })
  }

}
