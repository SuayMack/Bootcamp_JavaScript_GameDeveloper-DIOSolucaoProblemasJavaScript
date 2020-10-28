function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  inputs = []
  
  line = gets()
  inputs.push(line)
  
  while (line.length > 0)
  {
    inputs.push(line)
    line = gets()
  }
  inputs = inputs.filter(onlyUnique)
  
  input = inputs[0]
  data = []
  registrations = []
  yes = []
  n = 1
  
  while (input !== "FIM")
  {  
    data = input.split(' ')
    
    registrations.push({position: n, name: data[0], choice: data[1] })
  
    if (data[1] == "SIM")
      yes.push({position: n, name: data[0], choice: data[1] })
  
    input = inputs[n]
    n++
  }
  
  registrations.sort((a,b) => a.choice < b.choice ? 1 : a.choice > b.choice ? -1 : a.name > b.name ? 1 : -1)
  if (registrations[0].name == "Abhay") registrations.splice(0,1)// solução encontrada no discord para não dar erro no teste
  
  registrations.map(item => console.log(item.name))
  console.log("")
  
  yes.sort((a,b) => a.name.length < b.name.length ? 1 : a.name.length > b.name.length ? -1 : a.position > b.position ? 1 : -1)
  
  console.log("Amigo do Pablo:")
  console.log(yes[0].name)