import {Component, Input, OnInit} from '@angular/core';
import {UpdateKleinAnzeigeService} from './update-klein-anzeige.service';
import {Observable} from 'rxjs';
import {KleinAnzeigeEntity} from '../Entitys/KleinAnzeige.entity';
import {ActivatedRoute} from '@angular/router';
import {NgModuleResolver} from '@angular/compiler';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-update-klein-anzeige',
  templateUrl: './update-klein-anzeige.component.html',
  styleUrls: ['./update-klein-anzeige.component.scss'],
  template: `<div *ngIf="verkaufer ; else kauf">
  <button>editieren</button></div>
  <ng-template #kauf>
    <button>kaufen</button>
  </ng-template>`
})
export class UpdateKleinAnzeigeComponent implements OnInit {

  verkaufer = 'k.ralf';
  KleinAnzeige: KleinAnzeigeEntity

  constructor(private route: ActivatedRoute, private  UpdateKleinAzeige: UpdateKleinAnzeigeService) { }

  @Input()
  kleinAnzeige: KleinAnzeigeEntity;

  ngOnInit() {
    this.getAnzeige();
  }

  getById(id: any): Observable<any> {
    alert(id);
    return this.UpdateKleinAzeige.getById(id);
  }
  getAnzeige(): void {
    const  id = +this.route.snapshot.paramMap.get('id');
    this.UpdateKleinAzeige.getById(id).subscribe(kleinAnzeige => this.kleinAnzeige = kleinAnzeige);
  }
}
