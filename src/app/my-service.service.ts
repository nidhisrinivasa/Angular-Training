import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  nameList =[];
  sayHello(value:string){
    console.log('Hello '+ value);
  }
  addNameList(value:string){
    this.nameList.push(value);
    console.log(this.nameList);
  }
  constructor() {

   }
}
