import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  result = []
  numinput = this.route.snapshot.paramMap.get('input');
  key:any='number';
  count:number
  
  constructor(private route: ActivatedRoute,
              private storage: Storage) { }

  ngOnInit() {
    this.ongetnum(this.numinput);
  }
  async ongetnum(numin){
    for (let i=1; i<=12; i++){
      this.result.push(numin * i);
    }
  }
 }
 
