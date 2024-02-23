//let essay = ['football','likes', 1,2, 'every tuesday', [1,'Jago plays'], [1,['(messi top)'], 'penaldo', 'and he']]
//
//let txt = essay[5][1] + ' ' + essay[0] + ' ' + essay[4] + ' ' + essay[6][3] + ' ' + essay[1] + ' ' + essay[6][2] + ' ' + essay[6][1][0]
//
//console.log(txt);


let users = ['javoxir', 'munir', 'jago', 'jahonbek', 'shohruh'];

let name = prompt('напиши имя которого хочешь удалить').toLowerCase().trim()

 
 let answer = users.indexOf(name)

if (answer === -1) {
  alert(
  'pls type name from list'
  )
} else {
  users.splice(answer , 1)
}

console.log(users);


// users.splice(idx,1)
//console.log(users);
 
