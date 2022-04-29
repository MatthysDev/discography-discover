import { Injectable } from '@angular/core';
import { Disk } from '../../models/disk';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class DiskService {
  endPoint: string = environment.DiskEndPoint;

  constructor(private _httpClient: HttpClient) {}

  get(): Observable<Disk[]> {
    return this._httpClient.get<Disk[]>(this.endPoint);
  }

  post(disk: Disk): Observable<Disk> {
    return this._httpClient.post<Disk>(this.endPoint, disk);
  }

  getById(id): Observable<Disk> {
    return this._httpClient.get<Disk>(this.endPoint + '/' + id);
  }

  deleteOne(id): Observable<Disk> {
    return this._httpClient.delete<Disk>(this.endPoint + '/' + id);
  }

  put(id, disk: Disk): Observable<Disk> {
    return this._httpClient.put<Disk>(this.endPoint + '/' + id, disk);
  }
}
