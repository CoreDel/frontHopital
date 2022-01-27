import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/model/facture';
import { Ordonnance } from 'src/app/model/ordonnance';
import { OrdonnanceService } from 'src/app/service/ordonnance.service';
import { ViewChild, ElementRef } from '@angular/core';
  
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { Consultation } from 'src/app/model/consultation';
import { MedicamentService } from 'src/app/service/medicament.service';
import { Medicament } from 'src/app/model/medicament';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.scss']
})
export class OrdonnanceComponent implements OnInit {

  ordonnances:any;
  ordonnance: Ordonnance = new Ordonnance();
  medicaments:any;
  factures:any;
  consultations:any;
  allMedic:Medicament[];

  constructor(private ordonnanceService:OrdonnanceService, private medicamentService:MedicamentService) { }

  ngOnInit(): void {
    this.findAll();
    //this.findAllMedic();
  }

  findAll() {
    this.ordonnanceService.findAll().subscribe(data => {this.ordonnances = data});
  }

  deleteOrdonnance(id:number) {
    this.ordonnanceService.delete(id).subscribe( () => {this.findAll()});
  }

  saveOrdonnance() {
    this.ordonnanceService.save(this.ordonnance).subscribe( () => {this.findAll(); this.ordonnance = new Ordonnance();});
  }

  findMedByIdOrd(id:number) {
    this.ordonnanceService.findMedicByIdOrd(id).subscribe( data => {this.medicaments = data});
  }

  findFactureByIdOrd(id:number) {
    this.ordonnanceService.findFactureByIdOrd(id).subscribe( data => {this.factures = data});
  }

  findConsultByIdOrd(id:number) {
    this.ordonnanceService.findConsultByIdOrd(id).subscribe( data => {this.consultations = data});
  }

  getAll(id:number) {
    this.findConsultByIdOrd(id);

    this.findMedByIdOrd(id);

    this.findFactureByIdOrd(id);
  }

  @ViewChild('pdfTable') pdfTable: ElementRef;
  downloadAsPDF() {

    const doc = new jsPDF();
   
    const pdfTable = this.pdfTable.nativeElement;
   
    var html = htmlToPdfmake(pdfTable.innerHTML);
     
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
     
  }

  findAllMedic() {
    this.medicamentService.findAll().subscribe(data => {this.allMedic = data});
  }
}
