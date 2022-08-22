import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/core/models/etudiant.interface';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { ShowEtudiantComponent } from '../../show-etudiant/show-etudiant.component';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.css']
})
export class ListEtudiantsComponent implements OnInit {

  etudiants!: Array<Etudiant>;
  orderOptions = ["asc", "desc"]
  orderAttr = ["Croissant", "Décroissant"];
  trierOptions = ["nom_etudiant", "prenom_etudiant"];
  valueAttrTrier = ["Par nom", "Par prenom"];
  searchByValue = ["nom_etudiant", "prenom_etudiant"];
  searchByOptions = ["Par nom", "Par prénom"];
  orderOptionGroup!: FormGroup;
  searchGroup!: FormGroup;
  nbEtudiant!: number;

  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  constructor(private etudiantService:EtudiantService, private dialog:MatDialog,
              private formBuilder:FormBuilder) { }

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'naissance', 'promotion', 'filiere', 'creation_date'];
  dataSource = new MatTableDataSource<Etudiant>(this.etudiants);

  ngOnInit(): void {
    this.orderOptionGroup = this.formBuilder.group({
      order: [null],
      orderBy: [null]
    });
    this.searchGroup = this.formBuilder.group({
      searchBy: [null],
      searchValue: [null]
    })
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getEtudiants();
  }

  onShowEtudiant(etudiant:Etudiant){
    const dialogRef = this.dialog.open(ShowEtudiantComponent,{
      data: etudiant
    });
    dialogRef.afterClosed().subscribe(result =>{
          this.getEtudiants()
        
    });
    if(this.orderOptionGroup.controls['order'].value == "" || this.orderOptionGroup.controls['orderBy'].value == ""){
      this.getEtudiants();
    }
  }

  getEtudiants(){
    this.etudiantService.getEtudiants().subscribe((data)=>{
      console.log(data);
      this.dataSource.data = data as Etudiant[]
    });
  }
  
  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  onOrderChange(){
    const order:string = this.orderOptionGroup.controls['order'].value;
    const orderBy:string = this.orderOptionGroup.controls['orderBy'].value;
    if(order == "asc"){
      if(orderBy == "nom_etudiant"){
        this.etudiantService.getEtudiantByOrder("asc", "nom_etudiant").subscribe((data)=>{
          console.log(data);
          this.dataSource.data = data as Etudiant[]
        });
      }else if(orderBy == "prenom_etudiant"){
        this.etudiantService.getEtudiantByOrder("asc", "prenom_etudiant").subscribe((data)=>{
          console.log(data);
          this.dataSource.data = data as Etudiant[]
        });
      }
    }else{
      if(orderBy == "nom_etudiant"){
        this.etudiantService.getEtudiantByOrder("desc", "nom_etudiant").subscribe((data)=>{
          console.log(data);
          this.dataSource.data = data as Etudiant[]
        });
      }else if(orderBy == "prenom_etudiant"){
        this.etudiantService.getEtudiantByOrder("desc", "prenom_etudiant").subscribe((data)=>{
          console.log(data);
          this.dataSource.data = data as Etudiant[]
        });
      }
    }
    console.log(order + "   " + orderBy);
    console.log("Clique");
  }

  onSearchEtudiant(){
    const searchBy:string = this.searchGroup.controls['searchBy'].value;
    const searchValue:string = this.searchGroup.controls['searchValue'].value;
    this.etudiantService.getEtudiantSearch(searchBy, searchValue).subscribe((data)=>{
      console.log(data);
      this.dataSource.data = data as Etudiant[]
    });
    if(searchValue == ""){
      this.getEtudiants();
    }
  }
}
