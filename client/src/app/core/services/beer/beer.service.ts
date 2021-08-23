import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private API_URL = environment.API_URL;

  constructor(protected httpClient: HttpClient) {}

  get(id: number): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/${id}`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
