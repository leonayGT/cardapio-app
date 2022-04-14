import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ApiService } from '../api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})

export class CardapioComponent implements OnInit {

modalRef?: BsModalRef;
sanduiches:any
precos:any
categoria:any
precoInit:any
quantidadeProduto:any = 0
produtos:any
sacola:any[] = new Array()
sanduichesBoi:any[] = new Array()
sanduichesFrango:any[] = new Array()
sanduichesDiversos:any[] = new Array()
sanduichesEspeciais:any[] = new Array()
pizzas:any[] = new Array()
macarraoChapa:any[] = new Array()
pastelao:any[] = new Array()
porcao:any[] = new Array()
cremeAcai:any[] = new Array()
sucos:any[] = new Array()
bebidas:any[] = new Array()
lasanha:any[] = new Array()
itensSacola:any[]
totalSacola:number = 0
qtdItemSacola:number = 0

ngOnInit(): void {
  this.getSanduiches()
  this.getSanduicheF()
}

constructor(private cardapio:ApiService, private modalService: BsModalService) {}

  removerItem(p:string) {
    this.sacola.forEach((item) => {
      if(item.produto == p) {       
      }
    })
    
  }


qtdItem(d:string) {
  let qtd = 0
  this.sacola.forEach((item) => {
  if ( item.produto == d )  {
    qtd = item.qtd
  }
 })
 return qtd
}


precoPacote(g:any) {
  let existe = false
  this.sacola.forEach((item:any) => {   
    if(item.produto == g.descricao){
      item.qtd++
      item.total = parseFloat((item.total + item.vlunit).toFixed(2))
      existe = true
      this.totalSacola += item.total      
    }
  })

  if (!existe) { 
    this.sacola.push({"produto":g.descricao,"qtd":1,"vlunit":g.preco,"total":g.preco})    
    this.totalSacola += g.preco
  }
  console.log(this.totalSacola)
  this.qtdItemSacola ++

}

     getSanduiches() {
        this.cardapio.getCardapio().then( (i:any) => {
        this.sanduiches = i 
        this.sanduiches.forEach((e:any) => {
          switch (e.categoria) {
            case 'Sanduiches de Boi':
              this.sanduichesBoi.push(e)
              break
            case 'Sanduiches de Frango':
              this.sanduichesFrango.push(e)
              break
            case 'Sanduiches Diversos':
              this.sanduichesDiversos.push(e)
              break
            case 'Sanduiches Especiais':
              this.sanduichesEspeciais.push(e)
              break
            case 'Lasanha':
              this.lasanha.push(e)
              break
            case 'Pizzas':
              this.pizzas.push(e)
              break
            case 'Macarrão na Chapa':
              this.macarraoChapa.push(e)
              break
            case 'Pastelão':
              this.pastelao.push(e)
              break
            case 'Porções':
              this.porcao.push(e)
              break
            case 'Creme de Açai':
              this.cremeAcai.push(e)
              break
            case 'Sucos':
              this.sucos.push(e)
              break
            case 'Bebidas Diversas':
              this.bebidas.push(e)
              break
          }
       })
       console.log(this.sanduichesFrango)
      })     
    } 
    
    getSanduichesFrango() {
      this.cardapio.getCardapio().then( (i:any) => {
      this.sanduiches = i 
      this.sanduiches.forEach((e:any) => {
        switch (e.categoria) {
          case 'Sanduiches de Boi':
            this.sanduichesFrango.push(e)
            break
      }
    });
  })
}

getSanduicheF() {
  this.cardapio.getCardapio().then ( (i:any) => {
    this.sanduiches = i
    this.sanduiches.array.forEach((e:any) => {
      switch (e.categoria) {
        case 'Sanduiche de Frango':
        this.sanduichesFrango.push(e)
        break
      }
    });
  })
}
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

}

