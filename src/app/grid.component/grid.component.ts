import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  columnDefs = [
    {field: 'Column' },
    {field: 'model' },
    {field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  constructor() { 
    var arry1:String[];
    arry1 = ["O", "O", "O", "O", "O", "O", "O"];
    var cellNum:number;
    // this.columnDefs = arry1;
    // this.rowData = arry1;
    
    var i:number = 0;
    function checkFields(){
      for (i; i < cellNum; i++){

      }
    }
  }

  ngOnInit(): void {
  }

}
