//array de objetos
const productos = [
    {
        id: '1',
        name: 'Attack on Titan',
        stock: 3,
        cost: 200,
        description: "🌹GUARDIA ESTACIONARIA.",
        image: [
            'https://instagram.faep14-2.fna.fbcdn.net/v/t51.2885-15/209925139_932512887296121_2289467172481135765_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.faep14-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=aA7zHXKmm0cAX-tzxmX&tn=rtbT5jyeG8GJNg9W&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjYwNzg5MzYzMTUxMDM5NjA3Nw%3D%3D.2-ccb7-5&oh=00_AT8w7qNKdz5SI6VtQIdbH3GLnWqopOoiClLzGNu-S-BNng&oe=62982190&_nc_sid=30a2ef'],
    },
    {
        id: '2',
        name: 'Pokemon',
        stock: 3,
        cost: 230,
        description: "⚡ PIKACHU, 🔥 CHARMANDER, 💧 SQUIRTLE.🌱 BULBASAUR.🎤 JIGGLYPUFF.",
        image: [
            'https://instagram.faep14-2.fna.fbcdn.net/v/t51.2885-15/209217045_532866637733794_5909375361047283026_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.faep14-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=tvACVnDqIKsAX_IM_ZM&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjYwNTcxODEzMDIzODc0MTM2Ng%3D%3D.2-ccb7-5&oh=00_AT-C8YekagofHCDgxcLA75NVK3WVWGlVLtjhe0kQiEnEeA&oe=6297E72D&_nc_sid=30a2ef'],
    },
    {
        id: '3',
        name: 'Star Wars',
        stock: 3,
        cost: 230,
        description: "👉🏻LUKE SKYWALKER.",
        image: [
            'https://instagram.faep14-2.fna.fbcdn.net/v/t51.2885-15/189560407_493743058712953_9083722807150895746_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.faep14-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=_ZGZJnvRpm8AX-blC34&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjU4MDI4Mjg5NDM5OTA5MjI5NQ%3D%3D.2-ccb7-5&oh=00_AT-l8Ry3qM7Te8lnphOj2ZlrMyoyCzX-BP7-ffR8lELpyg&oe=6297D40F&_nc_sid=30a2ef'],
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
