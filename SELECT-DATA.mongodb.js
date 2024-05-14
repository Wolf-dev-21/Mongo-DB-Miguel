/* DEFINE O NOME DO BANCO DE DADOS */
// const database = 'libri-database';

//ACESSA O BANCO DE DADOS livri-database
use('libri-database');

/* SELECIONA TODOS OS DADOS DE TODOS OS ARQUIVOS DA COLLECTION */
db['libri-collection'].find();

/* ##################################################################################################################### */

/* SELECIONA DADOS BASEADOS EM UM CRITÉRIO DE BUSCA */
// const database = 'libri-database';
use('libri-database');
db['libri-collection'].find({"categoria":"Ficção Científica"});

/* ##################################################################################################################### */

/* SELECIONA DADOS BASEADOS EM UM CRITÉRIO DE BUSCA */
// const database = 'libri-database';
use('libri-database');
db['libri-collection'].find({"categoria":"Ficção Científica"}, {"_id":0, "codigo":0, "imagem":0});

/* SELECIONA DADOS BASEADOS EM UM CRITÉRIO DE BUSCA */
// const database = 'libri-database';
use('libri-database');
db['libri-collection'].find({},{"_id":0, "codigo":0, "imagem":0});

/* ##################################################################################################################### */
/* SELECIONA DADOS BASEADOS EM UM CRITÉRIO DE BUSCA POR UMA PARTE DE STRING DE UM CAMPO */
const database = 'libri-database';
use('libri-database');
db['libri-collection'].find({"titulo":/robôs/i}, {"_id":0, "codigo":0, "imagem":0});
