import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertifyService } from 'src/app/services/alertify.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-adminaddeditcategorie',
  templateUrl: './adminaddeditcategorie.component.html',
  styleUrls: ['./adminaddeditcategorie.component.css']
})
export class AdminaddeditcategorieComponent implements OnInit {

  categlist$!:Observable<any[]>;

  constructor(private service : SharedService , private alertify : AlertifyService) { }

 

  @Input() categ:any;
  categId: number = 0;
  categName: string = "" ;
  categImg: string = "" ;
  categdes: string = "" ;
  
  ngOnInit(): void {
    this.categId = this.categ.categId ;
    this.categName = this.categ.categName ;
    this.categImg = this.categ.categImg;
    this.categdes = this.categ.categdes ;
   
    this.categlist$ = this.service.getCategList();
  }

  addGig(){
    var categ={
      categName:this.categName,
      categImg:this.categImg,
      categdes:this.categdes,
     
    }

   this.service.addCategList(categ).subscribe(res =>{
     var closemodel = document.getElementById("add-edit-modal-close");
     if(closemodel){
       closemodel.click();
       this.alertify.success("you added a new categorie");
     }

     



   })
  }

  updateGig(){
    var categ={
      categId:this.categId,
      categName:this.categName,
      categImg:this.categImg,
      categdes:this.categdes,
     
    }
    var categId:number = this.categId ;

   this.service.updateCategList(categId,categ).subscribe(res =>{
     var closemodel = document.getElementById("add-edit-modal-close");
     if(closemodel){
       closemodel.click();
       this.alertify.success("You Upadted The Categorie");
     }
   })

  }

}
