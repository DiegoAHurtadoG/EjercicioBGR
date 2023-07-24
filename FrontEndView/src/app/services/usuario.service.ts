import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  public urlBase: string = 'https://localhost:7299/usuario';

  constructor(private http: HttpClient) { }

  public getlAll(): Observable<any> {
    const url = this.urlBase + '/getAll';
    return this.http.get<any>(url);
  }

  public getById(id: string): Observable<any> {
    const url = this.urlBase + '/getById';

    let params = new HttpParams()
      .append("id", id);
    return this.http.get<any>(url, { params: params });
  }

  public insert(data: any): Observable<any> {
    const url = this.urlBase + '/insert';
    return this.http.post<any>(url, data);
  }

  public update(data: any): Observable<any> {
    const url = this.urlBase + '/update';
    return this.http.put<any>(url, data);
  }

  public delete(id: string) {
    const url = this.urlBase + '/delete';

    let params = new HttpParams()
      .append("id", id);
    this.http.delete(url, { params: params });
  }
}
