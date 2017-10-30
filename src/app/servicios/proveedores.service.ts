import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  proveedores: any[] = [
    {
      nombre: 'Telefonica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellanada, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 92222222222,
      email: 'info@telefonica.com',
      contacto: 'Juan Perez'
    },
    {
      nombre: 'IberDrola',
      cif: 'B87654321',
      direccion: 'Principe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 93333333333,
      email: 'info@iberdrola.com',
      contacto: 'Laura Martinez'
    }
  ];

  constructor() { }

  getProveedores(){
    return this.proveedores;
  }

}
