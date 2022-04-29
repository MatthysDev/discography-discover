import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kind } from '../../models/kind';

@Injectable()
export class KindService {

  endPoint: string = environment.KindEndPoint;

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Kind[]> {
    return this._httpClient.get<Kind[]>(this.endPoint)
  }

  post(kind: Kind): Observable<Kind> {
    return this._httpClient.post<Kind>(this.endPoint, kind)
  }

  getById(id): Observable<Kind> {
    return this._httpClient.get<Kind>(this.endPoint + "/" + id)
  }

  deleteOne(id): Observable<Kind> {
    return this._httpClient.delete<Kind>(this.endPoint + "/" + id)
  }

  put(id, kind: Kind): Observable<Kind> {
    return this._httpClient.put<Kind>(this.endPoint + "/" + id, kind)
  }

}
