import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { User } from '../user'
import { UserCheckingService } from 'src/app/user-checking.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
   users: any;
  constructor(private userService: UserCheckingService){
    
  }

  ngOnInit()  {
    this.userService.getUsersDetails().subscribe((usersFromJSON)=> this.users = usersFromJSON);
  }

  
 


  
}
