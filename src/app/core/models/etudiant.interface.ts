import { Degre } from "./degre.interface";
import { Filiere } from "./filiere.interface";

export interface Etudiant{
    idEtudiant: number;
    nomEtudiant: string;
    prenomEtudiant: string;
    biographieEtudiant: string;
    dateNaissanceEtudiant: Date;
    dateEnregistrement: Date;
    degre: Degre;
}