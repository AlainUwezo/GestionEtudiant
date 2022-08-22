import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Degre } from '../models/degre.interface';
import { Filiere } from '../models/filiere.interface';

@Injectable({
  providedIn: 'root'
})
export class DegreService {

  constructor(private http:HttpClient) { }
  
  getDegres():Observable<Array<Degre>>{
    return this.http.get<Array<Degre>>('http://localhost:8080/gestion/etudiant/degre')
            .pipe(map((data:Array<Degre>)=>data));
  }

  getDegresByFiliere(filiere:Filiere):Observable<Array<Degre>>{
    return this.http.post<Array<Degre>>('http://localhost:8080/gestion/etudiant/degre/find_by_filiere', filiere)
            .pipe(map((data:Array<Degre>)=>data));
  }
}
