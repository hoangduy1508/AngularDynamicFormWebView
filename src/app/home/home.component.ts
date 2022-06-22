import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { XFormSectionModel } from "./../models/xform";

const dynamicFormData: XFormSectionModel[] = [
  {
    "Title": {
      "vi": "Phần mới"
    },
    "Questions": [
      {
        "IsRequired": true,
        "Title": {
          "vi": "Họ tên của bạn?"
        },
        "ValueId": "8cc3cd09-67eb-490d-a858-0930257a62ba",
        "Control": {
          "Type": "Input",
          "InputType": "Text"
        }
      },
      {
        "IsRequired": false,
        "Title": {
          "vi": "Số điện thoại?"
        },
        "ValueId": "5af51882-0ac4-4dc1-b126-104646e66070",
        "Control": {
          "Type": "Input",
          "InputType": "PhoneNumber"
        }
      },
      {
        "IsRequired": false,
        "Title": {
          "vi": "Email"
        },
        "ValueId": "053bda54-4190-40ec-9d20-f9df19002122",
        "Control": {
          "Type": "Input",
          "InputType": "Email"
        }
      },
      {
        "IsRequired": false,
        "Title": {
          "vi": "Bạn có mua hàng ở cửa hàng chúng tôi chưa?"
        },
        "ValueId": "0a58d824-5dc1-4661-9342-d116532adcec",
        "Control": {
          "Type": "Input",
          "InputType": "Email"
        }
      },
      {
        "IsRequired": false,
        "Title": {
          "vi": "Góp ý của bạn"
        },
        "ValueId": "4b49a807-07b0-442b-bab8-6882066e57ef",
        "Control": {
          "Type": "Paragraph",
          "InputType": "Text"
        }
      },
      {
        "IsRequired": false,
        "Title": {
          "vi": "Góp ý của bạn"
        },
        "ValueId": "9119a81b-9611-429f-b27d-099747ec71bc",
        "Options": [
          {
            "vi": "Lựa chọn 1"
          },
          {
            "vi": "Lựa chọn 2"
          },
          {
            "vi": "Lựa chọn 3"
          }
        ],
        "Control": {
          "Type": "ComboBox",
          "InputType": "Text"
        }
      }
    ]
  }
]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  formGroup: FormGroup;

  dynamicFormData: XFormSectionModel[] = dynamicFormData;

  dynamicForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private ActivatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.generateFormGroup();

    this.buildDynamicForm();

  }

  private buildDynamicForm() {
    this.dynamicFormData[0].Questions.forEach(questionItem => {

      let validatorsToAdd = [];

      if (questionItem.IsRequired) {
        validatorsToAdd.push(Validators.required)
      }

      this.dynamicForm.addControl(
        questionItem.ValueId,
        this.formBuilder.control("", validatorsToAdd)
      );

    })
  }

  private generateFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      email: [''],
      gender: [''],
      age: [''],
    });
  }

  submitForm() {
    console.log(this.dynamicForm.value);

    this.parseForm();

    this.showAndroidToast(this.dynamicForm.value);
  }

  private parseForm() {
    let demoData = [];

    Object.keys(this.dynamicForm.value).forEach(key => {

      let keyValue = this.dynamicForm.value[key]

      let formItem = this.dynamicFormData[0].Questions.find(item => item.ValueId === key);

      if(formItem){
        let dataItem = {
          Title: formItem.Title.vi,
          Value: keyValue
        }
        demoData.push(dataItem);
      }

    });

    console.log(demoData);
  }

  showAndroidToast(submitData: any) {
    if (Android) {
      Android.onSubmitFormSuccess(submitData);
    }

  }

}
