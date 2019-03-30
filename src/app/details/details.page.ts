import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  result = []
  num = []
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let num = this.route.snapshot.paramMap.get('input');  
    console.log(num);
    this.ongetnum(num);
  }
  ongetnum(num){
    this.num = num;
    for (let i=1; i<=12; i++){
      this.result.push(num * i);
    }
  }

}
