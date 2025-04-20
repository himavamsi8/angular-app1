import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  welcomeMsg = 'Welcome to Self Learning';
  signInText = 'Sign into your account';

  login() {
    const usernameInput = document.querySelector('#username') as HTMLInputElement;
    const passwordInput = document.querySelector('#password') as HTMLInputElement;

    if(usernameInput && passwordInput) {
      const username = usernameInput.value;
      const password = passwordInput.value;

      //just logging, here, may be we need to send data to server validation here
      console.log("Username: ", username);
      console.log("Password: ", password);

      alert('Login Success!');
    } else {
      console.error("Username and password is empty.");
    }
  }

}
