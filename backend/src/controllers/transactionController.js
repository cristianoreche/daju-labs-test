const { db } = require('../database/db');

function getTransactions(req, res) {
  db.all('SELECT * FROM transactions ORDER BY nr_dctoorigem', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    const groupedByInvoice = {};
    rows.forEach((row) => {
      if (!groupedByInvoice[row.nr_dctoorigem]) {
        groupedByInvoice[row.nr_dctoorigem] = { sale: null, refund: null };
      }
      if (row.in_estorno === 'F') {
        groupedByInvoice[row.nr_dctoorigem].sale = row;
      } else if (row.in_estorno === 'T') {
        groupedByInvoice[row.nr_dctoorigem].refund = row;
      }
    });

    const result = Object.keys(groupedByInvoice).map((invoice) => ({
      invoice,
      transaction: groupedByInvoice[invoice],
    }));

    res.json(result);
  });
}

module.exports = { getTransactions };