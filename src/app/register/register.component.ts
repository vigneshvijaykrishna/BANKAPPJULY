import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
accno:any
name:any
pswd:any
  constructor(private ds:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  registerfun(){
    var acno = this.accno
    var uname = this.name
    var password = this.pswd

    const result = this.ds.register(acno,password,uname)

    if(result){
      alert("Register successfull")
      this.router.navigateByUrl('')
    }else{
      alert("Register failed")
    }



  }

}
