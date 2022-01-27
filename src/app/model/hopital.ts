import { Adresse } from "./adresse";
import { Chambre } from "./chambre";
import { Utilisateur } from "./utilisateur";

export class Hopital {
    idHopital!:number;
    nomHopital!:number;
    numTelHopital!:number;
    adresse!:Adresse;
    chambres!:Chambre[];
    utilisateurs!:Utilisateur[];
}
