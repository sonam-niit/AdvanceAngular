import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) { }
  ngOnInit() {
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }
  loginUser() {
    this.authService.signIn(this.signinForm.value);

  }
}
