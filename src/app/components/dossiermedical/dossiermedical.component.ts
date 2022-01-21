import { Component, OnInit } from '@angular/core';
import { Dossiermedical } from 'src/app/model/dossiermedical';
import { DossiermedicalService } from 'src/app/service/dossiermedical.service';

@Component({
  selector: 'app-dossiermedical',
  templateUrl: './dossiermedical.component.html',
  styleUrls: ['./dossiermedical.component.scss']
})
export class DossiermedicalComponent implements OnInit {
  dossiersmedicaux: any;
  dossiermedical: Dossiermedical = new Dossiermedical();

  constructor(private dossierService: DossiermedicalService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.dossierService.findAll().subscribe(data => { this.dossiersmedicaux = data });
  }
  deleteDM(numeroSecu){
    this.dossierService.deleteDM(numeroSecu).subscribe(() => { this.findAll() });
  }
  saveDM(){
    this.dossierService.saveDM(this.dossiermedical).subscribe(
      () => { this.findAll(); this.dossiermedical= new Dossiermedical(); }
    )
  }
}
