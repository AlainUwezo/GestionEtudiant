import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CountEtudiantFiliere } from '../models/countEtudiantFiliere.model';
import { Etudiant } from '../models/etudiant.interface';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }

  addEtudiant(etudiant:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>('http://localhost:8080/gestion/etudiant/etudiant', etudiant)
              .pipe(map((data:Etudiant)=>data));
  }

  updateEtudiant(etudiant:Etudiant, id:number):Observable<Etudiant>{
    return this.http.put<Etudiant>(`http://localhost:8080/gestion/etudiant/etudiant/${id}`, etudiant)
              .pipe(map((data:Etudiant)=>data));
  }

  deleteEtudiant(id:number){
    return this.http.delete(`http://localhost:8080/gestion/etudiant/etudiant/${id}`, {responseType: 'text'});
  }

  getEtudiants():Observable<Array<Etudiant>>{
    return this.http.get<Array<Etudiant>>('http://localhost:8080/gestion/etudiant/etudiant')
        .pipe(map((data:Array<Etudiant>)=>data));
  }

  getEtudiantById(id:number):Observable<Etudiant>{
    return this.http.get<Etudiant>(`http://localhost:8080/gestion/etudiant/etudiant/${id}`)
              .pipe(map((data)=>data));
  }

  getEtudiantByOrder(order:string, orderBy:string):Observable<Array<Etudiant>>{
    return this.http.get<Array<Etudiant>>(`http://localhost:8080/gestion/etudiant/etudiant/order/${order}/${orderBy}`)
              .pipe(map((data)=>data));
  }

  getEtudiantSearch(searchBy:string, query:string):Observable<Array<Etudiant>>{
    return this.http.get<Array<Etudiant>>(`http://localhost:8080/gestion/etudiant/etudiant/search/${searchBy}/${query}`)
              .pipe(map((data)=>data));
  }

  getNbEtudiant():Observable<number>{
    return this.http.get<number>(`http://localhost:8080/gestion/etudiant/nombre_etudiant`)
              .pipe(map((data)=>data));
  }

  getEtudiantByFiliere(): Observable<Array<CountEtudiantFiliere>>{
    return this.http.get<Array<CountEtudiantFiliere>>('http://localhost:8080/gestion/etudiant/etudiant_by_filiere')
                          .pipe(map((d:Array<CountEtudiantFiliere>)=>d));
  }
}
