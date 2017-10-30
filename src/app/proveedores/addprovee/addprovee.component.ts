import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  @ViewChild('formpro') formpro:NgForm;
  proveedor:any;
  provincias: string[] =['Buenos Aires','Buenos Aires-GBA','Capital Federal',
              'Catamarca','Chaco','Chubut','Córdoba','Corrientes','Entre Ríos',
              'Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones','Neuquén',
              'Río Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fe',
              'Santiago del Estero','Tierra del Fuego','Tucumán'];

  constructor() {
    this.proveedor = {
      nombre:'',
      cif:'',
      direccion:'',
      cp:'',
      localidad:'',
      provincia:'',
      telefono: null,
      email: '',
      contacto: ''
    };
   }

  ngOnInit() {
  }

  onSubmit(){
    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.cif = this.formpro.value.cif;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.cp = this.formpro.value.cp;
    this.proveedor.localidad = this.formpro.value.localidad;
    this.proveedor.provincia = this.formpro.value.provincia;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.email = this.formpro.value.email;
    this.proveedor.contacto = this.formpro.value.contacto;

    this.formpro.reset();
  }

}
