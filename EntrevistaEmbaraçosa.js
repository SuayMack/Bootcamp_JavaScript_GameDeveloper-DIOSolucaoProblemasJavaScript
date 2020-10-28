let word
let words = []
let compare = []
let repeat
let num
let num2
let test = true
let test2 = true

do
{
  word = gets()
  if(word !== '')
  {
    words = word.split('')
    if (words .length === 1)
    {
      test2 = false
    }

    test2=true
    num = words.length-1
    num2 = (words.length)-2

    while(test2 === true)
    {
      if (words[num2] === words[num])
      {
        test2 = false
      }
      else
      {
        num2--
        if(num2<=0)
        {
          test2 = false
        }
      }
    }
    test2 = true
    if(num2 > 0)
    {
      for (let i = num2+1; i < words.length;i++)
      {
        compare.push(words[i])

      }
      repeat = compare.join('')
      word = word.replace(repeat,"")
    }
    compare = []
    words = []
    console.log(word)
  }
  else
  {
    test = false
  }
}while(test != false)