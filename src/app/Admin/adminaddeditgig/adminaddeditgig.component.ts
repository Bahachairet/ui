import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertifyService } from 'src/app/services/alertify.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-adminaddeditgig',
  templateUrl: './adminaddeditgig.component.html',
  styleUrls: ['./adminaddeditgig.component.css']
})
export class AdminaddeditgigComponent implements OnInit {

  giglist$!:Observable<any[]>;

  constructor(private service : SharedService , private alertify : AlertifyService) { }

 

  @Input() Gig:any;
  gigId: number = 0;
  gigTitle: string = "" ;
  gigDisc: string = "" ;
  gigDetail: string = "" ;
  gigPhoto: string = "" ;
  gigPrice : number =0 ;
  ngOnInit(): void {
    this.gigId = this.Gig.gigId ;
    this.gigTitle = this.Gig.gigTitle ;
    this.gigDisc = this.Gig.gigDisc;
    this.gigDetail = this.Gig.gigDetail ;
    this.gigPhoto = this.Gig.gigPhoto ;
    this.gigPrice = this.Gig.gigPrice ;
    this.giglist$ = this.service.getGigList();
  }

  addGig(){
    var gig={
      gigTitle:this.gigTitle,
      gigDisc:this.gigDisc,
      gigDetail:this.gigDetail,
      gigPhoto:this.gigPhoto,
      gigPrice:this.gigPrice,
    }

   this.service.addGigList(gig).subscribe(res =>{
     var closemodel = document.getElementById("add-edit-modal-close");
     if(closemodel){
       closemodel.click();
       this.alertify.success("you added a new gig");
     }

     



   })
  }

  updateGig(){
    var gig={
      gigId:this.gigId,
      gigTitle:this.gigTitle,
      gigDisc:this.gigDisc,
      gigDetail:this.gigDetail,
      gigPhoto:this.gigPhoto,
      gigPrice:this.gigPrice,
    }
    var gigId:number = this.gigId ;

   this.service.updateGigList(gigId,gig).subscribe(res =>{
     var closemodel = document.getElementById("add-edit-modal-close");
     if(closemodel){
       closemodel.click();
       this.alertify.success("You Upadted The Gig");
     }
   })

  }

}
