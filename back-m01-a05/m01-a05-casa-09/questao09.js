

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularTotalDeItens: function() {
        let unidades = 0;
        for (let item of this.produtos) {
            unidades = unidades + item.qtd
            
        }
        return unidades
    },
    calcularTotalAPagar: function () {
        let total = 0;
        for (let item of this.produtos) {
            total = total + (item.precoUnit * item.qtd) /100
            
        }
        return total.toFixed(2) - desconto
    },
    imprimirResumo: function () {


        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()}`)

    },
    addProduto: function (produto) {
        let check = 0;
        for (let item of this.produtos) {
            if(item.id === produto.id) {
                item.qtd += produto.qtd
                check = 1;
            }     
            
        }
        if (check === 0) {
            this.produtos.push(produto)
        } 
    },
    imprimirDetalhes: function () {

        console.log(`Cliente: ${this.nomeDoCliente} `)
        let numero = 1
        
        for (let i of this.produtos) {
            totalUnit = (i.precoUnit * i.qtd)/100;
            console.log(`Item ${numero} - ${i.nome} - ${i.qtd} und - R$ ${totalUnit.toFixed(2)} `)
            numero += 1
        }
        

        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar() - desconto}`)
    },
    calcularDesconto: function () {

        var desconto = 0;
        let barato = 999999;
        for ( let item of this.produtos) {
            if(barato > item.precoUnit) {
                barato = item.precoUnit
            }       
            
        }
        if(this.calcularTotalDeItens() >= 4) {
            if(this.calcularTotalAPagar() < 100) {
                return desconto = barato
            } else if (this.calcularTotalAPagar() >= 100 && barato > this.calcularTotalAPagar() * 0.1 ){
                return desconto = barato
            } else {
                return desconto = this.calcularTotalAPagar() * 0.1 
            }
        }
        
        
    },

};

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}


// carrinho.addProduto(novaBermuda)
// carrinho.addProduto(novoTenis)


// carrinho.calcularTotalDeItens()
// carrinho.calcularTotalAPagar()

// carrinho.imprimirResumo()

// carrinho.imprimirDetalhes()

// carrinho.calcularDesconto()

// tentei como pude mas nao consegui fazer funcionar