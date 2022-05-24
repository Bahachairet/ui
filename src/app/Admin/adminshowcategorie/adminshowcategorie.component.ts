import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertifyService } from 'src/app/services/alertify.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-adminshowcategorie',
  templateUrl: './adminshowcategorie.component.html',
  styleUrls: ['./adminshowcategorie.component.css']
})
export class AdminshowcategorieComponent implements OnInit {

  categlist$!:Observable<any[]>;
  

  constructor(private service : SharedService , private alertify :AlertifyService) { }

  ngOnInit(): void {
    this.categlist$=this.service.getCategList();
    
  }

  Modaltitle:string="";
  activateaddedit:boolean=false;
  categ:any;

  modalClose(){
 this.activateaddedit =false ;
 this.categlist$ = this.service.getCategList();
  }

  modalAdd(){
    this.categ ={
      categId: 0,
      categName: null,
      categImg: null,
      categdes: null,
     
    }
    this.Modaltitle="Add Categorie";
    this.activateaddedit =true;
  }

  modelEdit(item:any){
    this.categ = item ;
    this.Modaltitle ="Edit Categorie";
    this.activateaddedit =true ;

  }

  delete(item:any){
    if(confirm("Are you sure You want to delete"+item.categId)){
      this.service.deleteCategList(item.categId).subscribe(res =>{
        var closemodel = document.getElementById("add-edit-modal-close");
        if(closemodel){
          closemodel.click();
          this.alertify.warning("You Deleted The Categorie");
        }
        this.categlist$ = this.service.getGigList();
      })

    }

  }

}
