import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { DetailsPage } from '../details/details.page';
import { MenuController,NavController } from '@ionic/angular';
import { catchError, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result = []

  constructor(private router : Router,
              public navCtrl: NavController){
 }


  onClickPush(){
    this.router.navigate(['/detail'])
  }
}
