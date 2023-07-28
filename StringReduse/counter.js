const name = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica" ]

const nameCount = name.reduce((count, NomeAtual) => {
  const firstLetter = NomeAtual[1].toLocaleLowerCase()
  if(count[firstLetter] ){
    count[firstLetter] ++
  } else{
    count[firstLetter] = 1
  }

  return count

},{})


console.log(nameCount)