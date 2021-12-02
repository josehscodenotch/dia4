import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})

export class CiudadService 
{
  public ciudad:Ciudad;
 
  constructor() { }
}
