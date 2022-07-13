import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelAnggaran } from './model-anggaran';

@Injectable({
  providedIn: 'root'
})
export class AnggaranService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<ModelAnggaran[]>("http://localhost:3000/anggaran")
  }

  create(payload: ModelAnggaran) {
    return this.http.post<ModelAnggaran>("http://localhost:3000/anggaran", payload)
  }
}
