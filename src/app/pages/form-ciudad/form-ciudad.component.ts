import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../../shared/ciudad.service';
import { Ciudad } from '../../models/ciudad';

@Component({
  selector: 'app-form-ciudad',
  templateUrl: './form-ciudad.component.html',
  styleUrls: ['./form-ciudad.component.css']
})
export class FormCiudadComponent implements OnInit 
{
  constructor(public ciudadService: CiudadService) {}

  nuevaCiudad(nombre:string, pais:string, codigo:string)
  {
    this.ciudadService.ciudad = new Ciudad(nombre, pais, codigo);
    console.log(this.ciudadService.ciudad)
  }

  ngOnInit(): void 
  {
  }

}
