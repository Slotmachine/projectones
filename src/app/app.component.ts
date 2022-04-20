import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'library';
  restData: any=[];

  constructor() { }

  ngOnInit(): void {

    this.getData()

  }

  
  getData(){
    fetch(`https://cloud-3001.lib.cmu.ac.th/exam/room/`).then(e=>{
      return e.json()
    }).then(e=>{
      console.log(e)
      this.restData = e
    })
  }
}
