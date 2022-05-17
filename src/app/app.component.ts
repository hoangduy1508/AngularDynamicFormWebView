import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularDynamicFormWebView';

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){

  }

  ngOnInit(): void {
      this.generateFormGroup();
  }

  private generateFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      email: [''],
      gender: [''],
      age: [''],
    });
  }

  submitForm(){
    console.log(this.formGroup.value);

    this.showAndroidToast(this.formGroup.value);
  }

  showAndroidToast(submitData: any) {
    Android.onSubmitFormSuccess(submitData);
  }
}
