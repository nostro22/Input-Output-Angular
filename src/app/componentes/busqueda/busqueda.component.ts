import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  vista: boolean = true;
  productoAMostrar!: any[];

  pelicula = {
    id: "this.detalleRecibido.id",
    nombre:" this.nombre.value",
    tipo: "this.tipo.value",
    fechaDeEstreno:new Date(),
    cantidadDePublico: 22,
    fotoDeLaPelicula: "this.foto.value"
  }

  cambiarVista() {
    this.vista = !this.vista;
  }
  detalleRecibidoMain($event: any) {
    this.productoAMostrar = $event;
    console.info("En el mail",$event);
  }
}
