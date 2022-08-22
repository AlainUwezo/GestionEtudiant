import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Filiere } from 'src/app/core/models/filiere.interface';
import { FiliereService } from 'src/app/core/services/filiere.service';

@Component({
  selector: 'app-show-filiere',
  templateUrl: './show-filiere.component.html',
  styleUrls: ['./show-filiere.component.css']
})
export class ShowFiliereComponent implements OnInit {
  filiere!: Filiere;

  filiereGroup!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ShowFiliereComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Filiere,
                private formBuilder: FormBuilder, 
                private filiereService:FiliereService,
                private router:Router) { }

  ngOnInit(): void {
    this.filiereGroup = this.formBuilder.group({
      nomFiliere: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(5)]]
    });

    this.showFiliere();
  }

  showFiliere(){
    this.filiereService.getFiliereById(this.data.idFiliere).subscribe(
      (data:Filiere) => {
        this.filiereGroup.controls['nomFiliere'].setValue(data.nomFiliere),
        this.filiereGroup.controls['description'].setValue(data.description)
      }
    )
  } 

  onUpdateFiliere(){
    const filiere:Filiere = {
      idFiliere: this.data.idFiliere,
      nomFiliere: this.filiereGroup.value.nomFiliere,
      description: this.filiereGroup.value.description,
      dateCreation: this.data.dateCreation
    }

    this.filiereService.updateFiliere(filiere, this.data.idFiliere).subscribe((data)=>{
      this.dialogRef.close();
    }, error=>console.error(error));
  }

  onDeleteFiliere(){
    this.filiereService.deleteFiliere(this.data.idFiliere).subscribe((d)=>{
      console.log(d),
      this.dialogRef.close()
    },error=>console.error);
  }
}
