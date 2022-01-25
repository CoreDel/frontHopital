import { Component, OnInit } from '@angular/core';
import { Ordonnance } from 'src/app/model/ordonnance';
import { OrdonnanceService } from 'src/app/service/ordonnance.service';
import { ViewChild, ElementRef } from '@angular/core';
  
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
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

  constructor(private ordonnanceService:OrdonnanceService) { }

  ngOnInit(): void {
    this.findAll();
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
    console.log("bonjour3");
    this.ordonnanceService.findMedicByIdOrd(id).subscribe( data => {this.medicaments = data});
    console.log("bonjour4");
  }

  @ViewChild('pdfTable') pdfTable: ElementRef;
  downloadAsPDF() {
    const doc = new jsPDF();
   
    const pdfTable = this.pdfTable.nativeElement;
   
    var html = htmlToPdfmake(pdfTable.innerHTML);
     
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
     
  }
}
