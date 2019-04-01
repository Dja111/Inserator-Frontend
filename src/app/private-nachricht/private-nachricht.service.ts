import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export  class PrivateNachrichtService {

  constructor(private http: HttpClient) { }
}
