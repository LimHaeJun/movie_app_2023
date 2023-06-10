import React from "react";

function Food({name,picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  { 
    id: 1,
    name: "kimchi",
    image: 'https://t3.ftcdn.net/jpg/04/66/99/64/360_F_466996486_5u0HAf2FDdkv8RkJZc3rEv2gADlzyFhC.jpg'
  },
  {
    id: 2,
    name: "Samgiopsal",
    image: 'https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200'
  },
  {
    id: 3,
    name: "Bibimbap",
    image: 'https://t4.ftcdn.net/jpg/05/14/61/81/360_F_514618189_sq7oLxZODqeOzH1yrHDL9kFepHqnB8Ft.jpg'
  },
  {
    id: 4,
    name: "Doncasu",
    image: 'https://media.istockphoto.com/id/1134158942/ko/%EC%82%AC%EC%A7%84/%EB%8F%BC%EC%A7%80%EA%B3%A0%EA%B8%B0-%EB%8F%88%EA%B0%80%EC%8A%A4.jpg?s=612x612&w=0&k=20&c=C6v0QlT2p2gZfT9ytsYzAnMCKVOzYzWpKP6e1wkkGwY='
  },
  {
    id:5,
    name: "Kimpap",
    image: 'https://t3.ftcdn.net/jpg/04/22/49/54/360_F_422495424_AkP6hAHiYBhNxZ3kZUBuYouedhej37a3.jpg'
  },
];

function App() {
  return( 
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name ={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
