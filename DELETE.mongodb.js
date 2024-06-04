/**** DELETE COM MONGODB***/

/**** DELETE ONE***/
use('libri-database');

db['libri-collection'].deleteOne(
    {codigo:'5'},
)

/**** DELETE MANY***/
use('libri-database');

db['libri-collection'].deleteMany(
    {categoria:'Fantasia Heroica'},
)