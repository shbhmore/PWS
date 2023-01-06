import { Component } from '@angular/core';
import { PersonService } from 'src/services/PersonService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  mailId:any;
  profileType:any;

  persons:any=[];

  constructor(private personService:PersonService){}

  getEmpByMail(){
    this.persons=this.personService.getPersons;
    this.persons.map((person: any)=>{
      if(person.email==this.mailId){
        console.log("Mail Id is already present");
      }
    })
  }
}
