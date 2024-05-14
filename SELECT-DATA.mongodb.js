const database = 'libri-database'

const collection = 'libri-collection'

//acessa o banco de dados database
use(database);



// db[collection].find()

/* seleciona os dados baseados em um critério de básico */

db['libri-collection'].find({
    "categoria":"elAssoInquebravel"
})