import { Component, Signal, signal, WritableSignal, Input, input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../../../dumm-users';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({required:true}) id!: string;
   @Input({required:true}) avatar!: string;
   @Input({required:true}) name!: string;
   @Output() select = new EventEmitter();
    
   onselectedUser(){
       this.select.emit(this.id);
   }
   
  

}
