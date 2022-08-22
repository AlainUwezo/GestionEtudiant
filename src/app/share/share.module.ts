import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEtudiantsComponent } from './components/list-etudiants/list-etudiants.component';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFiliereComponent } from './components/add-filiere/add-filiere.component';
import { ListeFiliereComponent } from './components/liste-filiere/liste-filiere.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowFiliereComponent } from './components/show-filiere/show-filiere.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { ShowEtudiantComponent } from './show-etudiant/show-etudiant.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableExporterModule } from 'mat-table-exporter';
import { GraphiqueComponent } from './graphique/graphique.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ListEtudiantsComponent,
    AddEtudiantComponent,
    AddFiliereComponent,
    ListeFiliereComponent,
    ShowFiliereComponent,
    ShowEtudiantComponent,
    GraphiqueComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableExporterModule,
    NgChartsModule
  ],
  exports: [
    ListEtudiantsComponent,
    AddEtudiantComponent,
    AddFiliereComponent,
    ListeFiliereComponent,
    ShowFiliereComponent,
    ShowEtudiantComponent,
    GraphiqueComponent
  ]
})
export class ShareModule { }
