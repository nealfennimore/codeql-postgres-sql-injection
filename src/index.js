const { Client } = require('pg');

const cliQuery = process.argv[2];

const client = new Client({
    database: 'postgres',
    user: 'postgres',
    password: 'password'
});

client.connect();

//
// ────────────────────────────────────────────── I ──────────
//   :::::: O N E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────
//
client.query(cliQuery);

//
// ────────────────────────────────────────────── II ──────────
//   :::::: T W O : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────
//
(function iife(){
    client.query(cliQuery);
})()

//
// ────────────────────────────────────────────────── III ──────────
//   :::::: T H R E E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//
function passedRef(passedCliQuery) {
    client.query(passedCliQuery)
}

passedRef(cliQuery);

//
// ──────────────────────────────────────────────── IV ──────────
//   :::::: F O U R : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────
//
class PG {
    constructor(pgClient){
        this.client = pgClient;
    }

    query(q){
        this.client.query(q);
    }
}

new PG(client).query(cliQuery);
