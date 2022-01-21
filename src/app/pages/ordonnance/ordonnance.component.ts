import { Component, OnInit } from '@angular/core';
import { Ordonnance } from 'src/app/model/ordonnance';
import { OrdonnanceService } from 'src/app/service/ordonnance.service';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.scss']
})
export class OrdonnanceComponent implements OnInit {

  ordonnances:any;
  ordonnance: Ordonnance = new Ordonnance();

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

  saveMedicament() {
    this.ordonnanceService.save(this.ordonnance).subscribe( () => {this.findAll(); this.ordonnance = new Ordonnance();});
  }
}
