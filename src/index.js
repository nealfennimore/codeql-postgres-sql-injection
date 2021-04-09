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

//
// ──────────────────────────────────────────────── V ──────────
//   :::::: F I V E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────
//

class PGStatic {

    static query(q){
        client.query(q);
    }
}

PGStatic.query(cliQuery);

//
// ────────────────────────────────────────────── VI ──────────
//   :::::: S I X : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────
//

function recurse(q, i){
    if ( i === 3 ){
        return client.query(q);
    }
    recurse(q, i + 1);
}

recurse(cliQuery, 0);