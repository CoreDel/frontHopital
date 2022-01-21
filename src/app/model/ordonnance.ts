
import { Consultation } from "./consultation";
import { Facture } from "./facture";
import { Medicament } from "./medicament";

export class Ordonnance {
    idOrdonnance!:number;
    soinPrescrit!:string;
    facture!:Facture;
    consultation!:Consultation;
    medicaments!:Medicament[];
}
