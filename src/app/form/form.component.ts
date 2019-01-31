import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) { }

  formData: FormGroup;
  public downloadUrl:string = '';
  public progress = null;

  ngOnInit() {
    this.formData = new FormGroup({
      'group': new FormControl(null, Validators.required),
      'album': new FormControl(null, Validators.required),
      'image': new FormControl(null),
      'imageInput': new FormControl(null),
    })
  }

  onStoreData(){
    this.dataService.storeData(this.formData.value);
    this.router.navigate(['view']);
  }

  onImageUpload(event){
    let task = this.dataService.storeImage(event.target.files[0]);
    task
      .on('state_changed', 
      () => {
        let progress = Math.floor(((task.snapshot.bytesTransferred/task.snapshot.totalBytes) * 100) * 100) / 100;
        console.log('img uploaded for '+progress+'%');
        this.progress = progress;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.dataService.storeImage(event.target.files[0])
          .snapshot.ref.getDownloadURL()
          .then((url) => {
            this.downloadUrl = url;
            this.formData.controls.imageInput.setValue(url)
          })
      }
    )
  }
}
