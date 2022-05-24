import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-giglist',
  templateUrl: './giglist.component.html',
  styleUrls: ['./giglist.component.css']
})
export class GiglistComponent implements OnInit {
  giglist$! : Observable<any[]> ;
  constructor(private service : SharedService) { }

  ngOnInit(): void {
    this.giglist$= this.service.getGigList();
  }

}
