import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {
  salesData: ChartData<'doughnut'> = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
    
  };

  donnees:Array<number> = [];

  constructor(private etudiantService:EtudiantService) { }

  ngOnInit(): void {
    
  }

  onBtn(){
    this.etudiantService.getEtudiantByFiliere().subscribe((data)=>{
      for(var i = 0; i< data.length; i++){
        this.donnees.push(data[i].count);
      }
    })

    this.salesData.datasets[0].data = this.donnees;
  }

}
