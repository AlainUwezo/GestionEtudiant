import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Degre } from 'src/app/core/models/degre.interface';
import { Etudiant } from 'src/app/core/models/etudiant.interface';
import { Filiere } from 'src/app/core/models/filiere.interface';
import { DegreService } from 'src/app/core/services/degre.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { FiliereService } from 'src/app/core/services/filiere.service';

@Component({
  selector: 'app-show-etudiant',
  templateUrl: './show-etudiant.component.html',
  styleUrls: ['./show-etudiant.component.css']
})
export class ShowEtudiantComponent implements OnInit {

  etudiantForm!: FormGroup;
  filiereOptions!:Array<Filiere>;
  degreOptions!:Array<Degre>;
  nom!:string;
      
  constructor(public dialogRef:MatDialogRef<ShowEtudiantComponent>,
              @Inject(MAT_DIALOG_DATA) public data:Etudiant,
              private formBuilder: FormBuilder, private etudiantService: EtudiantService,
              private filiereService: FiliereService, private degreService: DegreService,
              private router:Router) { }

  ngOnInit(): void {
    this.etudiantForm = this.formBuilder.group({
      nomEtudiant: [null, [Validators.required, Validators.minLength(3)]],
      prenomEtudiant: [null, [Validators.required, Validators.minLength(3)]],
      biographieEtudiant: [null, [Validators.required, Validators.minLength(5)]],
      dateNaissanceEtudiant: [null, [Validators.required]],
      // filiereForm: this.formBuilder.group({
      //   idFiliere: [null, [Validators.required]]
      // }),
      degreForm: this.formBuilder.group({
        idDegre: [null, [Validators.required]]
      })
    })
    
    this.filiereService.getFiliere().subscribe((data)=>this.filiereOptions = data);
    this.degreService.getDegres().subscribe((data)=>this.degreOptions = data);

    this.showEtudiant();
  }

  showEtudiant(){
    this.etudiantService.getEtudiantById(this.data.idEtudiant).subscribe(
      (data:Etudiant) => {
        this.etudiantForm.controls['nomEtudiant'].setValue(this.data.nomEtudiant),
        this.etudiantForm.controls['prenomEtudiant'].setValue(this.data.prenomEtudiant),
        this.etudiantForm.controls['dateNaissanceEtudiant'].setValue(this.data.dateNaissanceEtudiant),
        this.etudiantForm.controls['dateNaissanceEtudiant'].setValue(this.data.dateNaissanceEtudiant),
        this.etudiantForm.controls['biographieEtudiant'].setValue(this.data.biographieEtudiant),
        this.etudiantForm.controls['degreForm'].get('idDegre')?.setValue(this.data.degre.idDegre)
      }
    )
  }

  onUpdateEtudiant(){
    const etudiant:Etudiant = {
      idEtudiant: 0,
      nomEtudiant: this.etudiantForm.value.nomEtudiant,
      prenomEtudiant: this.etudiantForm.value.prenomEtudiant,
      biographieEtudiant: this.etudiantForm.value.biographieEtudiant,
      dateEnregistrement: this.data.dateEnregistrement,
      dateNaissanceEtudiant: this.etudiantForm.value.dateNaissanceEtudiant,
      degre: {
        idDegre: this.etudiantForm.value.degreForm.idDegre,
        classDegre: "",
        filiere: {
          idFiliere: 0,
          description: "",
          dateCreation: new Date(),
          nomFiliere: ""
        }
      }
    }

    this.etudiantService.updateEtudiant(etudiant, this.data.idEtudiant).subscribe(
      (d)=>{
        this.dialogRef.close();
      },error =>{
        console.error(error);
      }
    );
  }

  onDeleteEtudiant(){
    this.etudiantService.deleteEtudiant(this.data.idEtudiant).subscribe(
      (d)=>{
        this.dialogRef.close();
      },error =>{
        console.error(error);
      }
    );
  }

  getDegresWithFiliere(filiere:Filiere){}


}
