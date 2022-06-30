let competidores = ['Rafael', 'Manoel', 'Daniel']

function position(competidores){

        if(competidores.indexOf("Daniel") != 0) {

            let indiceDaniel = competidores.indexOf("Daniel")
            competidores[indiceDaniel] = competidores[indiceDaniel -1]

            competidores[indiceDaniel -1 ] = "Daniel"

        }else{
            return "Daniel é o vencedor"
        }
    
    return `Esse é o pódio: 1 - ${competidores[0]}, 2 - ${competidores[1]}, e 3 - ${competidores[2]}.`
  }

  console.log(position(competidores))