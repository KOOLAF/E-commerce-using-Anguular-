import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css',
})
export class RegComponent {
  userRegisterForm: FormGroup;
  constructor() {
    this.userRegisterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{3,15}@(gmail|yahoo)(.com)$'),
      ]),
      password: new FormControl(''),
      phones: new FormArray([new FormControl('')]),
    });
  }
  get name() {
    return this.userRegisterForm.get('name');
  }
  get phones() {
    return this.userRegisterForm.get('phones') as FormArray;
  }
  addphone() {
    this.phones.push(new FormControl(''));
  }
  delphone(index: number) {
    console.log('Before remmove length= ', this.phones.controls.length);
    console.log('Removing element at index:', index);

    if (index >= 0 && index < this.phones.controls.length) {
      this.phones.removeAt(index);
    }

    console.log('After remove Length=', this.phones.controls.length);
  }
  onSubmit() {
    if (this.userRegisterForm.valid) {
      this.userRegisterForm.reset();
    } else {
      alert('Your Email Or name is inValid');
    }
  }
}
