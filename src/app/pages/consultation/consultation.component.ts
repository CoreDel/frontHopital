import { Component, OnInit } from '@angular/core';
import { Consultation } from 'src/app/model/consultation';
import { ConsultationService } from 'src/app/service/consultation.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  consultations: any;
  consultation: Consultation = new Consultation();

  constructor(private consultationService: ConsultationService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.consultationService.findAll().subscribe(data => {this.consultation = data});
  }
  deleleteConsultation(id :number){
    this.consultationService.deleteConsultation(id).subscribe(() => {this.findAll()});
  }
  saveConsultation(){
    this.consultationService.saveConsultation(this.consultation).subscribe(() => {this.findAll(); this.consultation = new Consultation();});
  }
}
