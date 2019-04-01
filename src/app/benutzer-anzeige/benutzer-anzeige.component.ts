import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BenutzerAnzeigeService} from './benutzer-anzeige.service';
import {KleinAnzeigeEntity} from '../Entitys/KleinAnzeige.entity';
import {BenutzerEntity} from '../Entitys/Benutzer.entity';

@Component({
  selector: 'app-benutzer-anzeige',
  templateUrl: './benutzer-anzeige.component.html',
  styleUrls: ['./benutzer-anzeige.component.scss']
})
export class BenutzerAnzeigeComponent implements OnInit {

  Liste: any[];

  Listee: any[];

  constructor(private route: ActivatedRoute, private benutzerService: BenutzerAnzeigeService ) { }

  @Input()
  benutzer: BenutzerEntity;

  @Input()
  kleinAnzeige: KleinAnzeigeEntity;

  ngOnInit() {
    this.getUserInfo();
    //this.getUserInfoAnzeige();
    //this.getUserInfoWithVerkauftAnzeige();
  }

  getUserInfo(): void {
    const  userName = +this.route.snapshot.paramMap.get('userName');
    this.benutzerService.getAllAboutThisUserName(userName).subscribe(benutzer => this.benutzer = benutzer);
  }

  getUserInfoAnzeige(): void {
    const  userName = +this.route.snapshot.paramMap.get('userName');
    this.benutzerService.getAllKleinAnzeigeAktivByUserName(userName).subscribe(kleinAnzeige => this.Listee = kleinAnzeige);
  }

  getUserInfoWithVerkauftAnzeige(): void {
    const  userName = +this.route.snapshot.paramMap.get('userName');
    this.benutzerService.getAllKleinAnzeigeVerkauftByUserName(userName).subscribe(kleinAnzeige => this.Liste = kleinAnzeige);
  }

}
