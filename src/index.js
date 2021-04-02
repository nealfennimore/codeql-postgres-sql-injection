const { Client } = require('pg');

const client = new Client({
    database: 'postgres',
    user: 'postgres',
    password: 'password'
});

client.connect();

const [ _, __, query] = process.argv;

async function run(query){
    const { rows } = await client.query(query);
    console.log(rows);
};

run(query)
    .catch(console.error)
    .finally(()=>{
        client.end();
        process.exit();
    });
