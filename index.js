// function TambahData(tabel, data) {
// if argv[2] === 'ad'
let model = require('./model.js')

//add Politician + argv[4] + argv[5] + argv[6] + argv[7]
let input = process.argv[2]
let tabel = process.argv[3]


if (input === 'add') {
  model.TambahData(tabel, [process.argv[4], process.argv[5], process.argv[6], process.argv[7]])


}

if (input === 'delete') {
  model.DeleteData(tabel, process.argv[4])
}


if (input === 'update') {
  model.UpdateData(tabel, process.argv[4])
}


// console.log([process.argv[4], process.argv[5], process.argv[6], process.argv[7]])
