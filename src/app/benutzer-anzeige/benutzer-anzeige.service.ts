import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KleinAnzeigeEntity} from '../Entitys/KleinAnzeige.entity';
import {BenutzerEntity} from '../Entitys/Benutzer.entity';
import {Observable} from 'rxjs';

@Injectable()

export  class BenutzerAnzeigeService {
  constructor(private http: HttpClient) { }


  getAllAboutThisUserName(userName: any): Observable<any> {
    return this.http.get<BenutzerEntity>('http://localhost:8082/webapi/benutzers' + '/' + userName);
  }
  getAllKleinAnzeigeAktivByUserName(userName: any): Observable<any>  {
    return this.http.get<KleinAnzeigeEntity>('http://localhost:8082/webapi/kleinanzeiges/byUserAktiv' + '/' + userName);
  }

  getAllKleinAnzeigeVerkauftByUserName(userName: any): Observable<any>  {
    return this.http.get<KleinAnzeigeEntity>('http://localhost:8082/webapi/kleinanzeiges/byUserVerkauft' + '/' + userName);
  }
}
