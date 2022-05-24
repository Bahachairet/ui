import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly CategorieApiURL ="https://localhost:7101/api";

  constructor(private http :HttpClient) { }

  //Categories

  getCategList():Observable<any[]>{
    return this.http.get<any>(this.CategorieApiURL + '/Categories');
  }

  addCategList(data:any){
    return this.http.post(this.CategorieApiURL + '/Categories',data);
  }

  updateCategList(id : number ,data :any){
    return this.http.put(this.CategorieApiURL + '/Categories/'+id, data);

  }
  deleteCategList(id : number){
    return this.http.delete(this.CategorieApiURL +'/Categories/'+id);
  }

  //Clients

  getCliList():Observable<any[]>{
    return this.http.get<any>(this.CategorieApiURL + '/Clients');
  }

  addCliList(data:any){
    return this.http.post(this.CategorieApiURL +'/Clients',data);
  }

  updateCliList(id : number ,data :any){
    return this.http.put(this.CategorieApiURL +'/Clients/'+id, data);

  }
  deleteCliList(id : number){
    return this.http.delete(this.CategorieApiURL +'/Clients/'+id);
  }

    //Freelancers

    getFreeList():Observable<any[]>{
      return this.http.get<any>(this.CategorieApiURL +'/Freelancers');
    }
   
  
    addFreeList(data:any){
      return this.http.post(this.CategorieApiURL +'/Freelancers',data);
    }
  
    updateFreeList(id : number ,data :any){
      return this.http.put(this.CategorieApiURL + '/Freelancers/'+id, data);
  
    }
    deleteFreeList(id : number){
      return this.http.delete(this.CategorieApiURL +'/Freelancers/'+id);
    }
       //Gigs

       getGigList():Observable<any[]>{
        return this.http.get<any>(this.CategorieApiURL +'/Gigs');
      }
      getgigById(id:number):Observable<any[]>{
        return this.http.get<any>(this.CategorieApiURL + '/Gigs/'+id);
      }
    
      addGigList(data:any){
        return this.http.post(this.CategorieApiURL +'/Gigs',data);
      }
    
      updateGigList(id : number ,data :any){
        return this.http.put(this.CategorieApiURL +'/Gigs/'+id, data);
    
      }
      deleteGigList(idg : number){
        return this.http.delete(this.CategorieApiURL +'/Gigs/'+idg);
      }


}
