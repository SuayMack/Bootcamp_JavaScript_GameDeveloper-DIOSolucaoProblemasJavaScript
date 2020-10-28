let line = gets()
let vector = []
let next = []
let test
let count = 1

for (let i = 0;i < line;i++)
{
  test = gets()
  if (test !== '')
  {
    vector.push(test)
  }
}

for (let i = 0; i < vector.length; i++)
{
  next = vector[i].toString().split("")
  if(next[2] === '/')
  {
    count =  count / parseInt(next[0])
  }
  if(next[2] === '*')
  {
    count =  count * parseInt(next[0])
  }
  next = []
}

 console.log(count)