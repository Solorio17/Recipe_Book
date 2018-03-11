import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ShoppinglistPage } from "../shoppinglist/shoppinglist"
import { RecipesPage } from "../recipes/recipes"

@Component({
  selector: 'page-tabs',
  template : `
    <ion-tabs>
      <ion-tab [root]="shoppinglistPage" tabTitle="Shopping List" tabIcon="list-box"></ion-tab>
      <ion-tab [root]="recipesPage" tabTitle="Recipes" tabIcon="book"></ion-tab>
    </ion-tabs>
    `,
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  shoppinglistPage = ShoppinglistPage
  recipesPage = RecipesPage

}
