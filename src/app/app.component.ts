import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}
  ngOnInit() {
    this.authService.isAuthenticated();
    // if the route is / redirect to /product
    if (this.router.url === '/') {
      this.router.navigate(['/product']);
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
