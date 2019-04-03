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
  ongetnum(numin){
    for (let i=1; i<=12; i++){
      this.result.push(numin * i);
    }
    this.storage.get(this.numinput).then((val)=>{
          this.storage.set(this.numinput,val+1);
          //console.log('count',val+1)
          this.count = val+1
          console.log(this.numinput,val+1)
    });
  }
 
  deleteData(){
    this.storage.get(this.numinput).then((val)=>{
    this.storage.set(this.numinput,val-1);
    console.log('count',val-1)
    this.count = val-1
    });
  }
 }
 
