import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ComprasService {
  constructor(private http: HttpClient) {}

  create(compra) {
    return this.http.post(`${environment.api}/api/compra`, compra);
  }

  list(): Observable<any> {
    return this.http.get<any>(`${environment.api}/api/compra`);
  }
}
