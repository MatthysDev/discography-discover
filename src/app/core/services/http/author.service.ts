import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/'
import { Author } from '../../models/author';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthorService {

  endPoint: string = environment.AuthorEndPoint;

  constructor(private _httpAuthor: HttpClient) { }

  get(): Observable<Author[]> {
    return this._httpAuthor.get<Author[]>(this.endPoint)
  }

  post(author: Author): Observable<Author> {
    return this._httpAuthor.post<Author>(this.endPoint, author)
  }

  getById(id): Observable<Author> {
    return this._httpAuthor.get<Author>(this.endPoint + "/" + id)
  }

  deleteOne(id): Observable<Author> {
    return this._httpAuthor.delete<Author>(this.endPoint + "/" + id)
  }

  put(id, author: Author): Observable<Author> {
    return this._httpAuthor.put<Author>(this.endPoint + "/" + id, author)
  }
}