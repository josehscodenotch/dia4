import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../models/ciudad';
import { CiudadService } from '../../shared/ciudad.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-vista-ciudad',
  templateUrl: './vista-ciudad.component.html',
  styleUrls: ['./vista-ciudad.component.css']
})
export class VistaCiudadComponent implements OnInit 
{
  public parametro: string;

  constructor(public ciudadService: CiudadService, private rutaActiva: ActivatedRoute) 
  { 
    console.log(this.ciudadService.ciudad);
  }

  ngOnInit(): void 
  {
    this.parametro = this.rutaActiva.snapshot.params.parametro1
  }
}
