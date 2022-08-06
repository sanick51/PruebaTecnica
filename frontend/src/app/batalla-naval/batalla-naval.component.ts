import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/environments/global-constants';
@Component({
  selector: 'app-batalla-naval',
  templateUrl: './batalla-naval.component.html',
  styleUrls: ['./batalla-naval.component.css']
})
export class BatallaNavalComponent implements OnInit {

  constructor(public http: HttpClient) { }
  scoreLog : BatallaNaval[] = [];
  ngOnInit(): void {
    this.http.get<BatallaNaval[]>(GlobalConstants.API+"/Score").subscribe(
      (data) => {
         this.scoreLog = data;
         console.log(this.scoreLog);
      }
    );
  }

}
export class BatallaNaval {
  constructor(public NAME: string , public SCORE: string){}
}