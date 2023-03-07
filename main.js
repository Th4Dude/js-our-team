'use strict'

/* array con oggetti */

const membriDelTeam =
    [{
        nome: 'Wayne Barnett',
        ruolo: 'Founfed & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    }];

    /* array con oggetti */

    /* variabili per ogni user */

const userTeamUno = {
    nome: 'Wayne Barnett',
    ruolo: 'Founfed & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
}

const userTeamDue = {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg',
}

const userTeamTre = {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
}

const userTeamQuattro = {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg',
}

const userTeamCinque = {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
}

const userTeamSei = {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg',
}

/* variabili per ogni user */


console.log(membriDelTeam);

/* ciclo per attaccare i dati */

const utenti = document.querySelectorAll('.jselement');

console.log(utenti);

for( let i = 0 ; i < membriDelTeam.length; i++){
    const datiUtente = utenti[i];
    const nome = membriDelTeam[i].nome;
    const ruolo = membriDelTeam[i].ruolo;
    utenti[i].innerHTML = (nome + '<br>' + ruolo);
}

/* ciclo per attaccare i dati */