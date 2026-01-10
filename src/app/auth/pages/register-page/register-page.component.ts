import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@auth/services/Auth.service';
import { FormValidationsService } from '@shared/helpers/FormValidations.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ]
})
export class RegisterPageComponent implements OnInit {

  fb: FormBuilder = inject(FormBuilder);
  formValidation: FormValidationsService = inject(FormValidationsService);
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  loginForm = this.fb.group({
    fullName:         ['', [Validators.required, Validators.minLength(6)], [] ],
    email:            ['', [Validators.required, Validators.email], [] ],
    password:         ['', [Validators.required, Validators.minLength(6)], [] ],
    confirm_password: ['', [Validators.required, Validators.minLength(6)], [] ],
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

    const { password, confirm_password} = this.loginForm.value;

    if(password !== confirm_password){
      console.log('Passwords do not match');
      return;
    }
    const data: any = this.loginForm.getRawValue();
    delete data.confirm_password;
    // this.loginForm.reset();
    this.authService.register(data).subscribe(resp =>{
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
