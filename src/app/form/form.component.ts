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
    this.dataService.storeImage(event.target.files[0])
      .then((url) => {
        setTimeout(() => {
          this.downloadUrl = url;
          this.formData.controls.imageInput.setValue(url);
        }, 500)
      })
  }
}
