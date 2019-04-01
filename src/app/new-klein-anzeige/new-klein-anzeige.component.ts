import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NewKleinAnzeigeService} from './new-klein-anzeige.service';
import {KleinAnzeigeEntity} from '../Entitys/KleinAnzeige.entity';

@Component({
  selector: 'app-new-klein-anzeige',
  templateUrl: './new-klein-anzeige.component.html',
  styleUrls: ['./new-klein-anzeige.component.scss']
})
export class NewKleinAnzeigeComponent implements OnInit {

  KleinAnzeige: KleinAnzeigeEntity = new KleinAnzeigeEntity();

  constructor(private  newAnzeigeService: NewKleinAnzeigeService) { }

  ngOnInit() {
  }
/*
  CreateNewAnzeige(form: NgForm) {
    const title = form.value['title'];
    console.log(title);
  }*/

  CreateNewAnzeige(): void {
      this.newAnzeigeService.createNewAnzeige(this.KleinAnzeige);
  }

}
