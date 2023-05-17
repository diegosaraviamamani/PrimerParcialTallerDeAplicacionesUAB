import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class AuthComponent {
  loginForm = new FormGroup({
    email: new FormControl('mari@mail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('12345', [Validators.required]),
  });

  constructor(
    public authService: AuthService,
    public router: Router,
    private snackBar: MatSnackBar
  ) {}
  submit() {
    if (
      this.loginForm.invalid ||
      !this.loginForm.value.email ||
      !this.loginForm.value.password
    ) {
      alert('Llene los campos correctamente');
    } else {
      const variables = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.authService.login(variables).subscribe({
        next: (data) => {
          this.authService.saveToken(data.access_token);
          this.authService.isAuthenticated();
          this.router.navigate(['/product']);
        },
        error: () => {
          const message: string = 'Credenciales incorrectas';
          const options: MatSnackBarConfig = { duration: 3000 };
          this.snackBar.open(message, undefined, options);
        },
      });
    }
  }
  clear() {}
}
