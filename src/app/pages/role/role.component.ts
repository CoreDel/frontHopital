import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/model/role';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: any;
  role: Role=new Role();
  constructor(private roleService:RoleService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.roleService.findAll().subscribe(data =>{this.roles = data});
  // subscribe : rafraichit la table
  }
  deleteRole(id:number){
    this.roleService.deleteRole(id).subscribe( () =>{this.findAll()} );
  }

  saveRole(){
    this.roleService.saveRole(this.role).subscribe( () => {
      this.findAll(); // mettre à jour la table
      this.role = new Role(); // pour vider le formulaire
    })
  }
}
