import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Bike} from '../../interfaces/bike';
import {BikeService} from '../../services/bike.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikeListComponent implements OnInit {
  

  constructor(private bikeService:BikeService) { }

  // bikes:Bike[]=[{
  //   "name":"pablo",
  //   "brand":"pablo",
  //   "price":100,
  //   "imageURL":"https://lh3.googleusercontent.com/proxy/OmbDfi-1VYC06NtI8C98U_soC8X_B4Ky1QlITuJGrogg7gEqgi-dhyiyR7aeq7IbanHaYes_BEG9VRQtxZI_flOpEP6RYb17D5yQ5cFj0psfoSjWn8f6DEEBLR0fpcrpR6Owb_qm4y-mYU4CaePKcWtURek"
  // }];
  bikes:Bike[];
  bikesA:Bike[];
  
  cart:Bike[]=[];
  cartTotal:number=0;
  brands:string[]=[];
  



  ngOnInit(): void {
    this.getBikes();
    
  }
  getBikes():void{
    this.bikeService.getBikes()
    .subscribe( 
       res => {
         this.bikes=res;
        this.bikesA=res;
        res.map(x=>this.brands.push(x.brand));
        this.brands= [... new Set(this.brands)];
        console.log(this.brands);
      },
      // res => console.log(res),
      err => console.log(err)
    );
  }
  

  toggleEditable(x:string) {
        this.bikes=this.bikesA;
        if(x=="all"){
          this.bikes=this.bikesA;
         
        }else{
          this.bikes=this.bikes.filter(y=>y.brand==x);
        }
}

addToCart(bike:Bike){
   this.cart.push(bike);
   this.cartTotal+=bike.price;
   
  // console.log(this.cart);
  
}
deleteBikeCart(bike:Bike){
  this.cart.splice(this.cart.indexOf(bike),1);
  this.cartTotal-=bike.price;
  
}
 

}
