import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Vendehumo } from '../interfaces/vendehumo';
import { VendehumosService } from './servicios/vendehumos.service';

@Component({
  selector: 'app-vendehumos',
  templateUrl: './vendehumos.component.html',
  styleUrls: ['./vendehumos.component.css']
})
export class VendehumosComponent implements OnInit {

  listaVendehumos: Vendehumo[] = []
  listaCategorias: string[] = []

  formBuscar: FormGroup

  constructor(private vendehumosService: VendehumosService) { 
    this.formBuscar = new FormGroup({
      categoria: new FormControl(''),
      nombre: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.vendehumosService.getVendehumos()
      .subscribe((data) => {
        this.listaVendehumos = data
      })
    //Añade el numVotos a cada vendehumos
    this.listaVendehumos.map((vendehumo) => {
      vendehumo.numVotos = vendehumo.votadoPor.length
    })

    this.vendehumosService.getCategorias()
      .subscribe((data) => {
        this.listaCategorias = data
      })
      
  }

  //Filtra los elementos unicos del array
  unique(value: string, index: number, self: string[]): boolean{
    return self.indexOf(value) === index;
  }


  filtrar(): void{
    this.vendehumosService.filtrar(this.formBuscar.value)
      .subscribe((data) => {
        this.listaVendehumos = data
      })
  }

  sugerencia(): void{
    const nombre: string = this.formBuscar.value.nombre
    // const sugerencias: Vendehumo[] = this.listaVendehumos.filter((vendehumo: Vendehumo, index: number, array: Vendehumo[]) => {
    //   if(vendehumo.nombre.toLowerCase().includes(nombre.toLowerCase()))
    //         return true
    //       return false
    // })
    // if(sugerencias.length > 0){
    //   const sugerencia: string = sugerencias[0].nombre
    //   console.log(sugerencia)
    // }
    const sugerencias: string [] = []
    let vendehumos: Vendehumo[] = []
    this.vendehumosService.filtrar({nombre: '', categoria: ''})
      .subscribe((data) => {
        vendehumos = data
      })
    vendehumos.map((vendehumo: Vendehumo, index: number, array: Vendehumo[]) => {
      if(vendehumo.nombre.toLowerCase().includes(nombre.toLowerCase())){
        sugerencias.push(vendehumo.nombre)
      }
    })
    console.log(sugerencias)

    
  }


}
