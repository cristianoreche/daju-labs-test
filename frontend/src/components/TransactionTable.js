import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TransactionTable.css';

function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;

  useEffect(() => {
    axios.get('http://localhost:3000/api/transactions')
      .then((response) => {
        console.log(response.data); 
        setTransactions(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const filteredTransactions = transactions.filter((item) =>
    item.invoice.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="transaction">
      <h2 className="transaction__title">Vendas e Devoluções</h2>

      <input
        type="text"
        placeholder="Search by Invoice..."
        className="transaction__search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="transaction__table">
        <thead>
          <tr className="transaction__row transaction__row--header">
            <th className="transaction__header">Invoice</th>
            <th className="transaction__header">Product</th>
            <th className="transaction__header">Company</th>
            <th className="transaction__header">Sale Value</th>
            <th className="transaction__header">Refund Value</th>
            <th className="transaction__header">Date</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.invoice} className="transaction__row">
              <td className="transaction__data">{item.invoice}</td>
              <td className="transaction__data">{item.transaction.sale?.cd_produto || '-'}</td>
              <td className="transaction__data">{item.transaction.sale?.cd_empresa || '-'}</td>
              <td className="transaction__data">{item.transaction.sale?.round || '-'}</td>
              <td className="transaction__data">{item.transaction.refund?.round || '-'}</td>
              <td className="transaction__data">{item.transaction.sale?.dt_movimento || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          className="pagination__button pagination__button--nav"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          ◀ Anterior
        </button>

        <span className="pagination__info">
          Página {currentPage} de {totalPages}
        </span>

        <button
          className="pagination__button pagination__button--nav"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Próximo ▶
        </button>
      </div>
    </div>
  );
}

export default TransactionTable;
