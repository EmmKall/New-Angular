import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {

  constructor() { }

  hasError(form: FormGroup, field: string): boolean {
    return (form.get(field)?.invalid && form.get(field)?.dirty) || false;
  }

  getError(form: FormGroup, field: string ): string {
    const errors = form.get(field)?.errors;
    if(!errors) return '';
    const key = Object.keys(errors)[0];
    switch(key) {
      case 'required':
        return 'This filed is required';
      case 'email':
        return 'Email is not valid';
      case 'minlength':
        const minLength = errors[key]['requiredLength'];
        return `Email should has min length: ${minLength}`;
      default:
        return '';
    }
  }

}
