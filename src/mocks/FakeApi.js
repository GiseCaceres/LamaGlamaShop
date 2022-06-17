//array de objetos
const productos = [
    {
        id: 1,
        name: 'Attack on Titan',
        stock: 3,
        cost: "$200",
        description: "⚔ EXPLORADORES.🛡 POLICIA MILITAR.🔗 CUERPO DE ENTRENAMIENTO.",
        image: ['/img/attack.jpg'],
        categoryId: 2,
    },
    {
        id: 2,
        name: 'Pokemon',
        stock: 3,
        cost: "$230",
        description: "⚡PIKACHU, 🔥CHARMANDER, 💧SQUIRTLE.🌱BULBASAUR.🎤JIGGLYPUFF.",
        image: ['/img/pokemon.jpg'],
        categoryId: 2,
    },
    {
        id: 3,
        name: 'Star Wars',
        stock: 3,
        cost: "$230",
        description: "👉🏻 SW CELESTE - EL LADO OSCURO. 👉🏻 LUKE SKYWALKER. 👉🏻 SW ROJA - JEDI",
        image: ['/img/st.jpg'],
        categoryId: 2,
    },
    {
      id: 4,
      name: 'Lentes Zuko',
      stock: 4,
      cost: "$500",
      description: "¡Llegaron a Lama Glama las Gafas Vintage! 🏖 🕶 Accesorio retro que no pueden faltar en tu outfit 🔥",
      image: ['/img/zuko.jpg'],
      categoryId: 1,
  },
  {
    id: 5,
    name: 'Lentes woods',
    stock: 6,
    cost: "$550",
    description: "¡Llegaron a Lama Glama las Gafas Vintage! 🏖 🕶 Accesorio retro que no pueden faltar en tu outfit 🔥",
    image: ['/img/woods.jpg'],
    categoryId: 1,
  },
  {
    id: 5,
    name: 'Lentes lisa',
    stock: 6,
    cost: "$555",
    description: "¡Llegaron a Lama Glama las Gafas Vintage! 🏖 🕶 Accesorio retro que no pueden faltar en tu outfit 🔥",
    image: ['/img/lisa.jpg'],
    categoryId: 1,
  },
  {
    id: 6,
    name: 'Cuadernos vinilos',
    stock: "$700",
    description: "👉Miren que copados que están estos cuadernos de discos de vinilo ¡Ideales para l@s más nostálgic@s!",
    image: ['/img/vinilo.jpg'],
    categoryId: 3,
  },
  {
    id: 7,
    name: 'Cuadernos super',
    stock: "$700",
    description: "👉Estos súper cuadernos cómic la rompen⚡",
    image: ['/img/superheroes.jpg'],
    categoryId: 3,
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
