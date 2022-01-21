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

}
