import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, pipe } from 'rxjs';
import { Filiere } from 'src/app/core/models/filiere.interface';
import { FiliereService } from 'src/app/core/services/filiere.service';
import { AddFiliereComponent } from '../add-filiere/add-filiere.component';
import { ShowFiliereComponent } from '../show-filiere/show-filiere.component';

@Component({
  selector: 'app-liste-filiere',
  templateUrl: './liste-filiere.component.html',
  styleUrls: ['./liste-filiere.component.css']
})
export class ListeFiliereComponent implements OnInit {

  filieres!:Array<Filiere>;

  constructor(private filiereService: FiliereService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getFilieres();
  }

  getFilieres(){
    this.filiereService.getFiliere().subscribe((data)=>this.filieres = data);
  }

  onShowFiliere(filiere:Filiere){
    console.log(filiere);

    const dialogRef = this.dialog.open(ShowFiliereComponent, {
      data: filiere
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getFilieres(); 
    });
  }

}
