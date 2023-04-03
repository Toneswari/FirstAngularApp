import { Component, OnInit } from '@angular/core';

export class Todos{
  constructor(
    public id:number,
    public description:String,
    public done:boolean,
    public targetDate:Date,

  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit{

// todo={
//   id:1,
//   description:"Learn to do dance"
// }

todos=[
  new Todos(1,"learn to dance",false,new Date()),
  new Todos(2,"expert at full stack development",false,new Date()),
  new Todos(3,"visit India",false,new Date()),
  

]

constructor(){

}

 ngOnInit(): void {
   
 }
}
