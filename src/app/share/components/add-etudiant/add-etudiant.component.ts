import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Degre } from 'src/app/core/models/degre.interface';
import { Etudiant } from 'src/app/core/models/etudiant.interface';
import { Filiere } from 'src/app/core/models/filiere.interface';
import { DegreService } from 'src/app/core/services/degre.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { FiliereService } from 'src/app/core/services/filiere.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  etudiantForm!: FormGroup;
  filiereOptions!:Array<Filiere>;
  degreOptions!:Array<Degre>;
  nom!:string;
      
  constructor(private formBuilder: FormBuilder, private etudiantService: EtudiantService,
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

    const filiere:Filiere = {
      idFiliere: 3,
      nomFiliere: "kn",
      dateCreation: new Date(),
      description: "kdm"
    }

    this.degreService.getDegresByFiliere(filiere).subscribe((data)=>{
      console.log(data);
    });
  }

  onAddEtudiant(){
    const etudiant:Etudiant = {
      idEtudiant: 0,
      nomEtudiant: this.etudiantForm.value.nomEtudiant,
      prenomEtudiant: this.etudiantForm.value.prenomEtudiant,
      biographieEtudiant: this.etudiantForm.value.biographieEtudiant,
      dateEnregistrement: new Date(),
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
    this.etudiantService.addEtudiant(etudiant).subscribe(
      (d)=>{
        console.log(d),
        this.router.navigateByUrl('/list_etudiants')
      },error =>{
        console.error(error);
      }
    );
  }

  getDegresWithFiliere(filiere:Filiere){}

}
