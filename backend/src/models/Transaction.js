class Transaction {
    constructor(
      id,
      cdProduto,
      tpValor,
      cdEmpresa,
      round,
      nrDctoOrigem,
      nrSequencia,
      cdValor,
      cdHistorico,
      inEstorno,
      dtMovimento,
      dtCadastro
    ) {
      this.id = id;
      this.cdProduto = cdProduto;
      this.tpValor = tpValor;
      this.cdEmpresa = cdEmpresa;
      this.round = round;
      this.nrDctoOrigem = nrDctoOrigem;
      this.nrSequencia = nrSequencia;
      this.cdValor = cdValor;
      this.cdHistorico = cdHistorico;
      this.inEstorno = inEstorno;
      this.dtMovimento = dtMovimento;
      this.dtCadastro = dtCadastro;
    }
  }
  
  module.exports = Transaction;