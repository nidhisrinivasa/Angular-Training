import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`h1{
    color: blue;
  }
  app-second{
    color: blue;
  }
  .present{
    color: green
  }
  .notpresent{
    color: red
  }`],
  providers: [MyServiceService]
})
export class AppComponent {
  title = 'myapp';
  name = 'nidhi';
  dob = 123441545767;
  age = 24;
  imagesrc = "./assets/Ang_Img.png";
  isDisplay = false;
  isPresent = true;
  displayDisabled = true;
  customers = [{
    name: 'Nidhi', age: 20
  },{
    name: 'Prijith', age: 24
  },{
    name: 'Shivani', age: 25
  }];
  languages = [{
    name: 'Kannada'
  },{
    name: 'English'
  },{
    name: 'Hindi'
  }];
  displayonhover(){
    console.log('Hover over message displayed');
  }
  submitdisplay(){
    console.log('Submit Clicked!');
  }
  imgdisplay(){
    console.log('Image Clicked!');
  }
  showLang(){
    if(this.isDisplay){ 
      this.isDisplay = false;
    }
    else{
      this.isDisplay = true;
    }
  }
  constructor(private hs:MyServiceService){
    
  }
  callSayHello(name:string){
    this.hs.sayHello(name);
  }
  displaynameList(name:string){
    this.hs.addNameList(name);
  }
}
