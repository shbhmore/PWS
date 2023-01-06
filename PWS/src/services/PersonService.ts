import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class PersonService{
    //base URL
    personURL='https://localhost:8080/person';

    //variables
    person:any =[{
        personId:0,
        name:'',
        email:'',
        phone:'',
        address:''

    }]

    //constructor
    constructor(private httpClient:HttpClient){}

    //get list of persons
    getPersons(){
        this.person=this.httpClient.get(this.personURL);
        return this.person;
    }
    
}