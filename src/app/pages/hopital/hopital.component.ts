import { Component, OnInit } from '@angular/core';
import { Hopital } from 'src/app/model/hopital';
import { HopitalService } from 'src/app/service/hopital.service';

@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.scss']
})
export class HopitalComponent implements OnInit {
  hopitals: any;
  hopital: Hopital = new Hopital;

  constructor(private hopitalService: HopitalService) { }

  ngOnInit(): void {
    this.findAll()
  }
  findAll(){
    this.hopitalService.findAll().subscribe(data => {this.hopital =data})
  }
  deleteHopital(id: number) {
    this.hopitalService.delete(id).subscribe(() => { this.findAll()})
  }
  saveHopital() {
    this.hopitalService.save(this.hopital).subscribe(() => {
      this.findAll(); // Mettre à jour la table
      this.hopital = new Hopital(); // pour vider le formulaire
    })
  }
  
}
