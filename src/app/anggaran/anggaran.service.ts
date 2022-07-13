import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelAnggaran } from './model-anggaran';

@Injectable({
  providedIn: 'root'
})
export class AnggaranService {

  constructor(private http: HttpClient) { }

  //read
  get() {
    return this.http.get<ModelAnggaran[]>("http://localhost:3000/anggaran")
  }

  //create
  create(payload: ModelAnggaran) {
    return this.http.post<ModelAnggaran>("http://localhost:3000/anggaran", payload)
  }

  //update
  getById(id: number) {
    return this.http.get<ModelAnggaran>(`http://localhost:3000/anggaran/${id}`)
  }

  update(payload: ModelAnggaran) {
    return this.http.put(`http://localhost:3000/anggaran/${payload.id}`, payload)
  }

  delete(id: number) {
    return this.http.delete<ModelAnggaran>(`http://localhost:3000/anggaran/${id}`)
  }
}
