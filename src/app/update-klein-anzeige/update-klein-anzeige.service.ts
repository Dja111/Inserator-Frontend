import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KleinAnzeigeEntity} from '../Entitys/KleinAnzeige.entity';
import {Observable} from 'rxjs';

@Injectable()

export  class UpdateKleinAnzeigeService {

    constructor(private http: HttpClient) { }

    getById(id: any) {
     return this.http.get<KleinAnzeigeEntity>('http://localhost:8082/webapi/kleinanzeiges/anzeigeById' + '/' + id);
    }
}
