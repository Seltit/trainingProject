import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserLoginService } from './user-login.service';
import { environment } from '../../environments/environment.development';
import { User } from '../types/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private service: UserLoginService) { }
  user: User[] = []
  onSubmit(form: NgForm): void {
    console.log(form);
    const url = environment.mainUrl + 'login'
    const options = environment.options;
    options.headers['X-Parse-Revocable-Session'] = '1';
    const username = form.form.value.username;
    const password = form.form.value.password;
    console.log(this.service.loginUser(url, { username, password }, options).subscribe());



  }
}
