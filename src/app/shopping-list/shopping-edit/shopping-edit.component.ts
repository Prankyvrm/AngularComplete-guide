import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Intgredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAddClickEvnt=new EventEmitter<Intgredient>();
  @ViewChild('ingredientNameInput',{static:false})ingNameEl:ElementRef;
  @ViewChild('quantityInput',{static:false})ingQuantEl:ElementRef; 
  constructor() { }

  ngOnInit() {
  }

  onAddClick(){
   
    const ingName=this.ingNameEl.nativeElement.value;
    const ingQuant=this.ingQuantEl.nativeElement.value;
    if(ingName && ingQuant){
      this.onAddClickEvnt.emit(new Intgredient(ingName,ingQuant)) 
    }
    else{
      alert('Enter All values');
    }
    

  }
}
