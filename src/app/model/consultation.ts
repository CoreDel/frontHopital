import { Utilisateur } from "./utilisateur";
import { Ordonnance } from "./ordonnance";

export class Consultation {
    idConsultation!:number;
    idPatient!:number;
    idMedecin!:number;
    motifConsultation!:string;
    date!:number;
}