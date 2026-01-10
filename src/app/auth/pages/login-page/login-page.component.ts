import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService, loginData } from '@auth/services/Auth.service';
import { FormValidationsService } from '@shared/helpers/FormValidations.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
})
export class LoginPageComponent implements OnInit {

  fb: FormBuilder = inject(FormBuilder);
  formValidation: FormValidationsService = inject(FormValidationsService);
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  loginForm = new FormGroup<{
  email: FormControl<string>;
  password: FormControl<string>;
  }>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  errors: string[] = [];
  isRequestDone: boolean = false;

  constructor() { }

  ngOnInit() { }

  hasError(field: string): boolean {
    return this.formValidation.hasError(this.loginForm, field);
  }

  getError(field: string ): string {
    return this.formValidation.getError(this.loginForm, field);
  }


  onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid) return;

    const data: loginData = this.loginForm.getRawValue();
    this.authService.login(data).subscribe(resp =>{
      this.errors = resp;
      this.isRequestDone = true;
      setTimeout(() => {
        this.isRequestDone = false;
        this.errors = [];
      }, 2000);
      if(this.errors.length === 0){
        setTimeout(() => {
          this.router.navigateByUrl('/', /* { replaceUrl: true } */);
        }, 2000);
      }
    });


  }

}
