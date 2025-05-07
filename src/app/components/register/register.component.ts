// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    role: ''
  };
  constructor(private router: Router, private userService: UserService) {} // Inject Router and UserService

  // Method to navigate to the home page
  goToHomePage() {
    this.router.navigate(['/']); // Navigate to the home page
  }
  // constructor(private userService: UserService) {} // Inject the UserService

  register() {

        // Your registration logic here
        console.log('User registered:', this.user);
        // Optionally, navigate to the home page after registration
        this.goToHomePage();
        
      this.userService.registerUser(this.user).subscribe((res) => {
        alert(res);
        this.user.username = '';
        this.user.password = '';
        this.user.firstName = '';
        this.user.lastName = '';
        this.user.email = '';
        this.user.role = '';
  
  
  
      })
  }
}