const moment = require("moment")
const {acessorios} = require("./model/dados")
const {exibirTela} = require("./lib/funcoesComuns")
var inputListar = "Quantidade"
function listarProdutos() {
for(let i=0; i<acessorios.length; i++){
    if(inputListar =="Quantidade"){
        
        validaQuantidade(acessorios[i])
    } 
    if(inputListar =="Desconto"){
        validaDesconto(acessorios[i])
    }
    //validaDesconto(acessorios[i].desconto, acessorios[i].nome)
      } 
}
const data = moment().format('DD/MM/YYYY hh:mm')
         console.log(data)
listarProdutos() 

function validaDesconto(acessorios){
    if(acessorios.desconto==50){
        exibirTela(acessorios)
        console.log("Metade do preço")
    }else{ 
        exibirTela(acessorios)
        console.log(acessorios.desconto +" % ")     
    }
} 
function validaQuantidade(acessorio){
    if(acessorio.qtd===0){
        console.log("Indisponível")
        exibirTela(acessorio)
    }else{
        console.log("Disponível")
        exibirTela(acessorio)
    }
}