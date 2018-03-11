import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/shopping-list";
import { Ingredient } from "../../models/ingredients"

@Component({
  selector: 'page-shoppinglist',
  templateUrl: 'shoppinglist.html',
})
export class ShoppinglistPage {

  listItems: Ingredient[];

  constructor(private slService: ShoppingListService){}

  ionViewWillEnter(){
    this.listItems = this.slService.getItems();
  }
  onAddItem(form: NgForm){
   this.slService.addItem(form.value.ingredientName, form.value.amount);
   form.reset();
   this.loadItems();
 }

 private loadItems(){
   this.listItems = this.slService.getItems();
 }
}
