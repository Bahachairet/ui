import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertifyService } from 'src/app/services/alertify.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-adminshowgig',
  templateUrl: './adminshowgig.component.html',
  styleUrls: ['./adminshowgig.component.css']
})
export class AdminshowgigComponent implements OnInit {

  giglist$!:Observable<any[]>;
  

  constructor(private service : SharedService , private alertify :AlertifyService) { }

  ngOnInit(): void {
    this.giglist$=this.service.getGigList();
    
  }

  Modaltitle:string="";
  activateaddedit:boolean=false;
  Gig:any;

  modalClose(){
 this.activateaddedit =false ;
 this.giglist$ = this.service.getGigList();
  }

  modalAdd(){
    this.Gig ={
      gigId: 0,
      gigTitle: null,
      gigDisc: null,
      gigDetail: null,
      gigPhoto: null,
      gigPrice: null
    }
    this.Modaltitle="Add Gig";
    this.activateaddedit =true;
  }

  modelEdit(item:any){
    this.Gig = item ;
    this.Modaltitle ="Edit Gig";
    this.activateaddedit =true ;

  }

  delete(item:any){
    if(confirm("Are you sure You want to delete"+item.gigId)){
      this.service.deleteGigList(item.gigId).subscribe(res =>{
        var closemodel = document.getElementById("add-edit-modal-close");
        if(closemodel){
          closemodel.click();
          this.alertify.warning("You Deleted The Gig");
        }
        this.giglist$ = this.service.getGigList();
      })

    }

  }

}
