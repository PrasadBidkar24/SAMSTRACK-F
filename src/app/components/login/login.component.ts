import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }

  user = {
    username: '',
    password: '',
  };

  goToHomePage() {
    this.router.navigate(['/']); // Navigate to the home page
  }

  login() {

    // Your login logic here
    console.log('User login:', this.user);
    // Optionally, navigate to the home page after login
    this.goToHomePage();

    this.userService.login(this.user).subscribe((res) => {
      console.log(res);

      if (res != null) {

        localStorage.setItem('user', res.username);
        localStorage.setItem('role',res.role);

        if (res.role === 'admin') {
          this.router.navigateByUrl('admin-dashboard');
        } else {
          this.router.navigateByUrl('faculty-dashboard');
        }

      } else {
        alert("Invalid Credientials !!")
      }
    })
  }
}
