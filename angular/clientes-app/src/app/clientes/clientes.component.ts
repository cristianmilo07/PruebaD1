import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.ClienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  delete(cliente: Cliente): void {

    Swal.fire({
      title: 'Estás seguro?',
      text: `¿Seguro que deseas eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {

        this.ClienteService.delete(cliente.id).subscribe(
          reponse => {
            this.clientes = this.clientes.filter(cli => cli !== cliente);
            Swal.fire(
              'Cliente eliminado!',
              `Cliente ${cliente.nombre} elimiando con éxito`,
              'success'
            );
          }
        );
      }
    });
  }

}


