import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  // loginForm = new FormGroup({
  //   user: new FormControl('', { nonNullable: true }),
  //   password: new FormControl('', { nonNullable: true }),
  // });

  loginForm = this.fb.group({
    user: this.fb.control('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3), this.emptyValidator, this.invalidCharValidator('-')],
    }),
    password: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
  });

  loginSubmit() {
    if (this.loginForm.invalid) return;

    this.authService.login(this.controls.user.value, this.controls.password.value);
  }

  getError(control: AbstractControl): string | null {
    if (control.valid) return null;
    if (control.hasError('required')) return 'This field is required';
    if (control.hasError('minlength')) return 'Value is too short';
    if (control.hasError('empty')) return 'Input is empty';
    if (control.hasError('invalidChar')) return "There's an invalid char in your input";
    return "There's an error in this field";
  }

  emptyValidator(control: AbstractControl): ValidationErrors | null {
    if (typeof control.value !== 'string') return null;

    const isValid = control.value.trim().length > 0;
    return isValid ? null : { empty: control.value };
  }

  invalidCharValidator(invalidChar: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (typeof control.value !== 'string') return null;

      const isValid = !control.value.includes(invalidChar);
      return isValid ? null : { invalidChar: control.value };
    };
  }

  get auth() {
    return this.authService.auth;
  }

  get controls() {
    return this.loginForm.controls;
  }
}
