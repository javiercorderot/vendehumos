import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Vendehumo } from 'src/app/interfaces/vendehumo';

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {

  listaVendehumos = [
    {
      id: 1,
      nombre: 'Roberto Gamboa',
      descripcion: 'AAkjaskfjksa mkasm pkas pasm kpamsp kmasp amksk cmsakl',
      categorias: ['trading'],
      fechaAlta: new Date(2020, 2, 12),
      urlImagen: 'https://i.ytimg.com/vi/ggQVGWKplnI/maxresdefault.jpg',
      votadoPor: [2,3],
      usuarioId: 1
    },
    {
      id: 2,
      nombre: 'Josef Ajram',
      descripcion: 'KANM KASNF PSA ÀMSL ,LAalm ak mflksaklasn dklasn kaf nsak nkasfn kas fas',
      categorias: ['trading'],
      fechaAlta: new Date(2020, 5, 25),
      urlImagen: 'https://imagenes.lainformacion.com/files/image_656_370/uploads/imagenes/2020/04/24/5b7da31856056.jpeg',
      votadoPor: [3],
      usuarioId: 2,
    },
    {
      id: 3,
      nombre: 'Willyrex',
      descripcion: 'ASJA¡¡a¡ jsn jasf nkas kasm fpkasn fkpasn pans kpfans pasn pfans pan kspnsap k',
      categorias: ['NFTs', 'Estafa'],      
      fechaAlta: new Date(2020, 6, 21),
      urlImagen: 'https://phantom-marca.unidadeditorial.es/602a057ea4e705040930554b887272b0/crop/7x0/848x473/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/02/16358739017915.jpg',
      votadoPor: [1,2],
      usuarioId: 3
    }
  ]

  listaCategorias: string[] = []

  constructor() { }

    //
    getVendehumos(): Observable<Vendehumo[]>{
      const observableVendehumos = new Observable((suscriber: Subscriber<Vendehumo[]>) => {
      suscriber.next((this.listaVendehumos))
    })
      return observableVendehumos
    }

    getCategorias(): Observable<string[]>{
      const observableCategorias = new Observable((suscriber: Subscriber<string[]>) => {
        this.listaVendehumos.map((vendehumo) => {
          vendehumo.categorias.map((categoria) => {
            this.listaCategorias.push(categoria)
          })
        })
        this.listaCategorias = this.listaCategorias.filter(this.unique)
        suscriber.next((this.listaCategorias))
      })
        return observableCategorias
    }

    //Filtra los elementos unicos del array
    unique(value: string, index: number, self: string[]): boolean{
      return self.indexOf(value) === index;
    }

    //
    filtrar(filtro: any): Observable<Vendehumo[]>{
      const {categoria, nombre } = filtro
      const observableVendehumos = new Observable((suscriber: Subscriber<Vendehumo[]>) =>{
        //Filtra por categoria
        let lista =  this.listaVendehumos.filter((vendehumo: Vendehumo, index: number, array: Vendehumo[]) => {
          if(categoria === '' || vendehumo.categorias.includes(categoria))
            return true
          return false
        })

        //Filtra por nombre
        lista = lista.filter((vendehumo: Vendehumo, index: number, array: Vendehumo[]) => {
          if(vendehumo.nombre.toLowerCase().includes(nombre.toLowerCase()))
            return true
          return false
        })

        suscriber.next((lista))
      }) 
      return observableVendehumos
    }

}
