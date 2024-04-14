import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {

  public uri = enviroment.url
  private pbKey = enviroment.pubkey
  private pvKey = enviroment.pvtkey

  constructor(private http: HttpClient) {}

  getChampionsMarvel(): Observable<any> {
    let ts: any = new Date().getTime();
    let hash = crypto.MD5(ts + this.pvKey + this.pbKey);

    return this.http.get(`${this.uri}v1/public/characters`, {
      params: {
        apikey: this.pbKey,
        ts: ts,
        hash: hash.toString(),
      },
    });
  }
  getEspecificChampions(name:string) {
    let ts: any = new Date().getTime();
    let hash = crypto.MD5(ts + this.pvKey + this.pbKey);

    return this.http.get(`${this.uri}v1/public/characters`, {
      params: {
        apikey: this.pbKey,
        ts: ts,
        nameStartsWith: name,
        limit: '10',
        hash: hash.toString(),
      },
    });
  }
}
