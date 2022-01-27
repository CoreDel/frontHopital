import { Component, OnInit } from '@angular/core';
import { Consultation } from 'src/app/model/consultation';
import { ConsultationService } from 'src/app/service/consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  consultations: Consultation[];
  consultation: Consultation = new Consultation();
  titrePage = 'Consultation';
  FormAddConsultationTitle = 'Planifier une consultation';

  constructor(private consultationService: ConsultationService) { }

  ngOnInit(): void {
    this.findAll();
  }

  // Afficher l'ensemble des consultations
  findAll(){
    this.consultationService.findAll().subscribe(data => {this.consultations = data});
  }
  
  // Supprimer une consultation choisie à l'aide de son ID
  deleteConsultation(id :number){
    this.consultationService.deleteConsultation(id).subscribe(() => {this.findAll()});
  }

  // Enregistrer une nouvelle consultation
  saveConsultation(){
    this.consultationService.saveConsultation(this.consultation).subscribe(() => {
      this.findAll();
      this.consultation = new Consultation();
    });
  }
}
