import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export  class AllKleinAnzeigeService {

  constructor(private http: HttpClient) { }

  getAllKleinAnzeige(): Observable<any> {

    return this.http.get('http://localhost:8082/webapi/kleinanzeiges');

  }
}
