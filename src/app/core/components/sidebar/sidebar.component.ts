import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  nbEtudiant!:number;
  constructor(private etudiantService:EtudiantService) { }

  ngOnInit(): void {
    this.getNbEtudiant();
  }
  getNbEtudiant(){
    this.etudiantService.getNbEtudiant().subscribe((data)=>{
      this.nbEtudiant = data;
      console.log(data);
    }, error=>console.error);
  }

}
