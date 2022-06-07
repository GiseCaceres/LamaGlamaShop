//array de objetos
const productos = [
    {
        id: '1',
        name: 'Attack on Titan',
        stock: 3,
        cost: 200,
        description: "⚔ EXPLORADORES.🛡 POLICIA MILITAR.🔗 CUERPO DE ENTRENAMIENTO.",
        image: ['/img/attack.jpg'],
    },
    {
        id: '2',
        name: 'Pokemon',
        stock: 3,
        cost: 230,
        description: "⚡PIKACHU, 🔥CHARMANDER, 💧SQUIRTLE.🌱BULBASAUR.🎤JIGGLYPUFF.",
        image: ['/img/pokemon.jpg'],
    },
    {
        id: '3',
        name: 'Star Wars',
        stock: 3,
        cost: 230,
        description: "👉🏻 SW CELESTE - EL LADO OSCURO. 👉🏻 LUKE SKYWALKER. 👉🏻 SW ROJA - JEDI",
        image: ['img/st.jpg'],
    },
        
  ]

  //promesa
  export const getData = new Promise ((resolve, reject) => {
    let condition = true;
    setTimeout (()=>{
      if (condition){
        resolve (productos)
      }else{
        reject('salio algo mal')
      }
    },2000)
  })
