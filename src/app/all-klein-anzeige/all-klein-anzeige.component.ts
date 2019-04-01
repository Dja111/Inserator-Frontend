import { Component, OnInit } from '@angular/core';

import {AllKleinAnzeigeService} from './all-klein-anzeige.service';

import {Observable} from 'rxjs';



@Component({
  selector: 'app-all-klein-anzeige',
  templateUrl: './all-klein-anzeige.component.html',
  styleUrls: ['./all-klein-anzeige.component.scss']
})
export class AllKleinAnzeigeComponent implements OnInit {

  Liste: any[];
  constructor(private allkleinAnzeigService: AllKleinAnzeigeService ) { }

  ngOnInit() {
    this.allkleinAnzeigService.getAllKleinAnzeige().subscribe( data => {
      this.Liste = data;
    }, error => console.log(error)

    );
  }

}
