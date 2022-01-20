import { Ordonnance } from "./ordonnance";

export class Facture {
    idFacture!:number;
    prix!:number;
    type!:string;
    description!:string;

    //association OneToOne
    ordonnance!:Ordonnance;
}
