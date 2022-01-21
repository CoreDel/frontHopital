import { Utilisateur } from "./utilisateur";

export class Dossiermedical extends Utilisateur{
    numeroSecu!:number;
    antecedent!:string;
    traitement!:string;
    operation!:string;
}