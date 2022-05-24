import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  categlist$! : Observable<any[]> ;
  constructor(private service : SharedService) { }

  ngOnInit(): void {
    this.categlist$= this.service.getCategList();
  }
}
