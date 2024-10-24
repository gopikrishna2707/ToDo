import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { UsersComponent } from './components/users/users.component';
import { DUMMY_USERS } from '../dumm-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angpro1';
  users = DUMMY_USERS;
  onselectedUser(id:string){
     console.log("selected user" + id);
  }
  
}