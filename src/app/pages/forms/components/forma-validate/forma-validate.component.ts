import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forma-validate',
  templateUrl: './forma-validate.component.html',
  styleUrls: ['./forma-validate.component.scss']
})
export class FormaValidateComponent implements OnInit {
  form: FormGroup;

  /*= this.fb.group({
    email: ['', {
      validators: [
        Validators.required,
        Validators.email
      ],

    }],
    password: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(5),
      ]
    ]
  });
  */
  f: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createdFrom();
  }


  ngOnInit(): void {
  }

  createdFrom() {
    this.f = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      lastnama: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.email]],
      adress: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      city: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      state: ['', [Validators.required,]],
      zip: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
    })
    this.form = this.fb.group({
      email: ['', {
        validators: [
          Validators.required,
          Validators.email
        ],

      }],
      password: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(5),
        ]
      ]
    })
  }
  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }


}
