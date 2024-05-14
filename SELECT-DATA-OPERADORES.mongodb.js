/* Seleciona livros com valor maior que 100 reais ($gt) */
use('libri-database');
db['libri-collection'].find({valor:{$gt:100}});

/* Seleciona livros com valor menor que 100 reais ($lt) */
use('libri-database');
db['libri-collection'].find({valor:{$lt:100}});

/* Seleciona livros com valor maior ou igual a 100 reais ($gte) */
use('libri-database');
db['libri-collection'].find({valor:{$gte:100}});

/* Seleciona livros com valor menor ou igual a 100 reais ($lte) */
use('libri-database');
db['libri-collection'].find({valor:{$lte:100}});

/* Seleciona livros entre intervalo de valores de 100 até 150 ($lte) e ($gte) - ordenação ascendente  */
use('libri-database');
db['libri-collection'].find({valor:{$gte:100, $lte:150}}).sort({valor:1});

/* Seleciona livros entre intervalo de valores de 100 até 150 ($lte) e ($gte) - ordenação descendente  */
use('libri-database');
db['libri-collection'].find({valor:{$gte:100, $lte:150}}).sort({valor:-1});

/* Seleciona livros entre intervalo de valores de 100 até 150 ($lte) e ($gte) - ordenação descendente  */
use('libri-database');
db['libri-collection']
    .find({valor:{$gte:100, $lte:150}}, {'_id':0, 'codigo':0})
    .sort({valor:-1});