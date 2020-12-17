import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homework-form',
  templateUrl: './homework-form.component.html',
  styleUrls: ['./homework-form.component.css']
})
export class HomeworkFormComponent implements OnInit {

  form: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      postalAddress: ['', Validators.required],
      comment: ''
    })
   }

  ngOnInit(): void {
  }

  submitForm() {
    alert('success')
  }
}
