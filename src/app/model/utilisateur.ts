import { Role } from "./role";

export class Utilisateur {
    idUtilisateur!:number;
    nomUtilisateur!:string;
    prenomUtilisateur!:string;
    username!:string;
    password!:string;
    age!:number;

    //manytomany role
    roles!:Role[];

}
