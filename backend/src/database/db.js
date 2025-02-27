const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

function initializeDB() {
  db.serialize(() => {
    db.run(`
      CREATE TABLE transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cd_produto INTEGER,
        tp_valor TEXT,
        cd_empresa INTEGER,
        round REAL,
        nr_dctoorigem TEXT,
        nr_sequencia INTEGER,
        cd_valor INTEGER,
        cd_historico INTEGER,
        in_estorno BOOLEAN,
        dt_movimento TEXT,
        dt_cadastro TEXT
      )
    `);
  });
}

module.exports = { db, initializeDB };