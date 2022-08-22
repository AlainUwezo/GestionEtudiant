import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Filiere } from '../models/filiere.interface';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  filieres!:Filiere[];

  constructor(private http:HttpClient) { }
  
  addFiliere(filiere:Filiere):Observable<Filiere>{
    return this.http.post<Filiere>('http://localhost:8080/gestion/etudiant/filiere', filiere)
                .pipe(map((data:Filiere)=>data));
  }

  getFiliere():Observable<Array<Filiere>>{
    return this.http.get<Array<Filiere>>('http://localhost:8080/gestion/etudiant/filiere')
              .pipe(map((data:Array<Filiere>)=>data));

  }

  getFiliereById(id:number):Observable<Filiere>{
    return this.http.get<Filiere>(`http://localhost:8080/gestion/etudiant/filiere/${id}`)
                .pipe(map((data:Filiere)=>data));
  }

  updateFiliere(filiere:Filiere, id:number):Observable<Filiere>{
    return this.http.put<Filiere>(`http://localhost:8080/gestion/etudiant/filiere/${id}`, filiere)
            .pipe(map((data:Filiere)=>data));
  }

  deleteFiliere(id:number){
    return this.http.delete(`http://localhost:8080/gestion/etudiant/filiere/${id}`);
  }
}
