// # arraynew1 
// //Arrays sao como caixas com divisorias que podem ser acessadas atraves do seu indice /n
// entre colchetes []. O primeiro indice sempre começao do zero, portanto um array de 4  /n
// posiçoes tera o indice de 0a 3.
// o array e heterogenio, ou seja podemos colocar qualquer valor dentro dele, ou seja , tipos de dados diferentes .Int, string, double, boolean...
// Realizando a criação de um array:

const arr = [ "girafa","camaleao","zebra",3]
console.log(arr)

//**************** metodo 1- push */
// permite adicionar valores no final do array!
const pushArray=["leao","tartaruga","papagaio"]
console.log(pushArray);

pushArray[1]='Borboletas'
console.log(pushArray);

pushArray.push('escorpiao')
console.log (pushArray);

pushArray.push ('dragao')
console.log ( pushArray)
// unshift - adiona elementos no inicio do array

pushArray.unshift('coelho')
console.log(pushArray);

//********************* metodo 02 - POP  **************/
const popArray = ["fernando", "mara", "eric", "gabriel"]
console.log (popArray);
// elimina o ultimo valor do array
popArray.pop()

// remover o primeiro .valor de um array ???
popArray.shift()

console.log (popArray);


popArray.pop()

/// METODO 03 - SPLICE *************************/
//   INDICES =      1     2       3    4
// metodo splice permite selecionar um indice e remover e  
// adicionar valores ( substituicao)
const spliceArray=['jan','fev','abr','jun']
console.log(spliceArray);

spliceArray.splice(0,0,'meses:')
console.log (spliceArray);

//********************* metodo 04 - filter *//////////

const filterArray = [1,80,2,20,30,100,93729]
console.log (filterArray);

const novoArray = filterArray.filter((qualquerCoisa) =>{
    return qualquerCoisa > 150
})
console.log (novoArray); 

//*******************************Metodo 05 - MAP************************** */
// MAP nao modifica o array original, somente a funcao de callback podera fazer isso /n
// Ou seja ela criara um novo array modificado
// indice =       0 1 2 3 4

const arrayMap = [1,2,3,4,5]

const arrayModificado = arrayMap.map ((multiplicador) => {
return multiplicador * multiplicador
})
console.log (arrayMap);
console.log (arrayModificado);

///////////////////  Metodo 06 - ForEach *****************

const foreeachArray = ["carlos","andre","julia","akira"]
foreachArray.forEach ((nome) => {
    console.log(nome); 

})




