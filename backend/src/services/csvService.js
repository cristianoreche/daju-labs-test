const fs = require('fs');
const csv = require('csv-parser');
const { db } = require('../database/db');

function loadCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => results.push(row))
      .on('end', () => {
        // Inserir dados no banco de dados
        const stmt = db.prepare(`
          INSERT INTO transactions (
            cd_produto, tp_valor, cd_empresa, round, nr_dctoorigem, nr_sequencia,
            cd_valor, cd_historico, in_estorno, dt_movimento, dt_cadastro
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        results.forEach((row) => {
          stmt.run(
            row.cd_produto,
            row.tp_valor,
            row.cd_empresa,
            parseFloat(row.round),
            row.nr_dctoorigem,
            parseInt(row.nr_sequencia),
            parseInt(row.cd_valor),
            parseInt(row.cd_historico),
            row.in_estorno, // Mantenha como string ('F' ou 'T')
            row.dt_movimento,
            row.dt_cadastro
          );
        });

        stmt.finalize();
        resolve();
      })
      .on('error', (err) => reject(err));
  });
}

module.exports = { loadCSV };