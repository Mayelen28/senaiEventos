'use strict';

var readlineSync = require("readline-sync");
var opcao,strData, dataPartes, data, insevento, quantPalestrantes, Participante, palestrantes;
var quantParticipantes, idade, quantEventos, quantPalestrantes;

var listaEvento = [], listaPalestrantes = [], listaParticipantes = [];
const numParticipantes = 100

do{
    console.log();
    console.log("\t\t~~~~ Sistema de Cadastro de Eventos ~~~~");
    console.log("\t1 - Cadastrar Evento");
    console.log("\t2 - Cadastrar Palestrantes");
    console.log("\t3 - Cadastrar Participantes");
    console.log ("\t4 - Listar Evento");
    console.log("\t5 - Listar Palestrantes");
    console.log("\t6 - Listar Participantes");
    console.log("\t0 - Sair do sistema");
    
    opcao = readlineSync.question("\tDigite a opcao que deseja:");

switch(opcao){
    case'1':
    console.log("\t ~~~~ Cadastrar Evento ~~~~");
    strData = readlineSync.question("Digite uma data valida (00/00/0000):");
    dataPartes = strData.split("/");
    data = new Date(dataPartes[2], dataPartes[1] - 1, dataPartes[0]);

    if(data< new Date()){
        console.log("Desculpe, o Evento não pode ser cadastrado!");
    } else {
        insevento = readlineSync.question ("Informe o nome do Evento: ");
        listaEvento.push(insevento);         
    }
    break;
    case'2':
    console.log("\t~~~~ Cadastro de Palestrantes ~~~~");
   palestrantes = readlineSync.question ("Insira o nome do Palestrante: ");
    listaPalestrantes.push(palestrantes);
    break;
    case'3':
    console.log("\t~~~~ Cadastro de Participantes~~~~");
    quantParticipantes = listaParticipantes.length;
    if(quantParticipantes < numParticipantes){
        Participante = readlineSync.question ("Insira o nome do Participante: ");
        idade = readlineSync.question ("Insira a idade do participante: ");
        if(idade>= 18){
            listaParticipantes.push(Participante);
            console.log ("Participante cadastrado com Sucesso!")
        } else{
            console.log("Idade não permitida!");
        }
    } else {
        console.log("Capacidade maxima alcançada");
    }
    break;
    case'4':
    console.log("Lista de Eventos");
    quantEventos = listaEvento.length;
    console.log("Existe" + quantEventos + "Eventos cadastrados.");
    console.log("O nome do Evento é: "+ listaEvento[0]);
    break;
    case'5':
    console.log("Lista de Palestrantes");
    quantPalestrantes = listaPalestrantes.length;
    console.log("Existe" + quantPalestrantes + "Palestrante Cadastrados.");
    console.log ("O nome do palestrante é:" + listaPalestrantes[0]);
    break;
    case'6':
    console.log("Lista de Participantes");
    quantParticipantes = listaParticipantes.length;
    console.log("Existem" + quantParticipantes + "Participantes cadastrado no Evento")
    for(let indice =0; indice<quantParticipantes; indice++){
        const pAtual = listaParticipantes[indice];
        console.log("O Participante n°" +  (indice+1)  + "é:" + pAtual);
    }
    break;
    case'0':
    console.log("\n");
    console.log("\tObrigado por utilizar nosso Sistema!!");
    break;
    default:
        console.log("\topção Inválida! Tente novamente!");
    }
} while(opcao !=0);