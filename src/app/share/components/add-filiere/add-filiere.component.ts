import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Filiere } from 'src/app/core/models/filiere.interface';
import { FiliereService } from 'src/app/core/services/filiere.service';

@Component({
  selector: 'app-add-filiere',
  templateUrl: './add-filiere.component.html',
  styleUrls: ['./add-filiere.component.css']
})
export class AddFiliereComponent implements OnInit {

  filiere!: Filiere;

  filiereGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private filiereService:FiliereService,
              private router:Router) { }

  ngOnInit(): void {
    this.filiereGroup = this.formBuilder.group({
      nomFiliere: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  onAddFiliere(){
    const filiere:Filiere = {
      ...this.filiereGroup.value,
      idFiliere: 0,
      dateCreation: new Date()
    }

    console.log(filiere);


    this.filiereService.addFiliere(filiere).subscribe((d)=>{
      this.router.navigateByUrl('/list_filieres')
    },error =>{
      console.error(error);
    })
  }

}
