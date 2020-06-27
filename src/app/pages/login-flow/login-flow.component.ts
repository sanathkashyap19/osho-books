import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-flow',
  templateUrl: './login-flow.component.html',
  styleUrls: ['./login-flow.component.scss']
})
export class LoginFlowComponent implements OnInit {
  signInForm: FormGroup;
  signUpForm: FormGroup;
  isSignInSubmitted = false;
  isSignUpSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required]
    })
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
    },
      // {
      //   validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      // }
    );
  }
  get signUpFormControl() {
    return this.signUpForm.controls;
  }

  get signInFormControl() {
    return this.signInForm.controls;
  }

  signIn() {
    this.isSignInSubmitted = true;
    if (this.signInForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.signInForm.value);
    }
    
  }

  signUp() {
    this.isSignUpSubmitted = true;
    if (this.signUpForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.signUpForm.value);
    }
  }

}
