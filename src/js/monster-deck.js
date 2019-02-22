 
const monsters = [
    {
      ability: "без способности",
      name: "ОСЛИЗГ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 3,
      type: "Bronze",
      img: '../img/Monster/SLYZARD.png',
      audio: '../audio/Monster/HARPY.mp3'
    },
    {
      ability: "без способности",
      name: "ОСЛИЗГ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 3,
      type: "Bronze",
      img: '../img/Monster/SLYZARD.png',
      audio: '../audio/Monster/HARPY.mp3'
    },
    {
      ability: "без способности",
      name: "ОСЛИЗГ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 3,
      type: "Bronze",
      img: '../img/Monster/SLYZARD.png',
      audio: '../audio/Monster/HARPY.mp3'
    },
    {
      ability: "Размещение: сыграйте все копии этого отряда из вашей колоды.",
      name: "ГЛАВОГЛАЗ",
      positions: ["Ranged"],
      strength: 3,
      type: "Bronze",
      img: '../img/Monster/ARACHAS DRONE.png',
      audio: '../audio/Monster/ARCHANAS.mp3'
    },
    {
      ability: "Размещение: сыграйте все копии этого отряда из вашей колоды.",
      name: "ГЛАВОГЛАЗ",
      positions: ["Ranged"],
      strength: 3,
      type: "Bronze",
      img: '../img/Monster/ARACHAS DRONE.png',
      audio: '../audio/Monster/ARCHANAS.mp3'
    },
    {
      ability: "Размещение: сыграйте все копии этого отряда из вашей колоды.",
      name: "ГЛАВОГЛАЗ",
      positions: ["Ranged"],
      strength: 3,
      type: "Bronze",
      img: '../img/Monster/ARACHAS DRONE.png',
      audio: '../audio/Monster/ARCHANAS.mp3'
    },
    {
      ability: "Размещение: создайте 2 Яйца гарпий слева",
      name: "ГАРПИЯ КЕЛЕНО",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 5,
      type: "Bronze",
      img: '../img/Monster/CELAENO HARPY.png',
      audio: '../audio/Monster/FLY.mp3'
    },
    {
      ability: "Размещение: создайте 2 Яйца гарпий слева",
      name: "ГАРПИЯ КЕЛЕНО",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 5,
      type: "Bronze",
      img: '../img/Monster/CELAENO HARPY.png',
      audio: '../audio/Monster/FLY.mp3'
    },
    {
      ability: "Размещение: создайте 2 Яйца гарпий слева",
      name: "ГАРПИЯ КЕЛЕНО",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 5,
      type: "Bronze",
      img: '../img/Monster/CELAENO HARPY.png',
      audio: '../audio/Monster/FLY.mp3'
    },
    {
      ability: "Создавайте Молодого главоглаза в случайном ряду каждый раз, когда дружественный отряд поглощает карту, и наносите этой карте 1 ед. урона (игнорируя броню). Размещение: добавьте 2 ед. брони",
      name: "ОГРОМНЫЙ ГЛАВОГЛАЗ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 6,
      type: "Bronze",
      img: '../img/Monster/ARACHAS BEHEMOTH.png',
      audio: '../audio/Monster/ARCHANAS.mp3'
    },
    {
      ability: "Создавайте Молодого главоглаза в случайном ряду каждый раз, когда дружественный отряд поглощает карту, и наносите этой карте 1 ед. урона (игнорируя броню). Размещение: добавьте 2 ед. брони",
      name: "ОГРОМНЫЙ ГЛАВОГЛАЗ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 6,
      type: "Bronze",
      img: '../img/Monster/ARACHAS BEHEMOTH.png',
      audio: '../audio/Monster/ARCHANAS.mp3'
    },
    {
      ability: "Создавайте Молодого главоглаза в случайном ряду каждый раз, когда дружественный отряд поглощает карту, и наносите этой карте 1 ед. урона (игнорируя броню). Размещение: добавьте 2 ед. брони",
      name: "ОГРОМНЫЙ ГЛАВОГЛАЗ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 6,
      type: "Bronze",
      img: '../img/Monster/ARACHAS BEHEMOTH.png',
      audio: '../audio/Monster/ARCHANAS.mp3'
    },
    {
      ability: "Поглотите 2 союзников и усилите себя их силой.",
      name: "ВИЛКОХВОСТ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 8,
      type: "Bronze",
      img: '../img/Monster/FORKTAIL.png',
      audio: '../audio/Monster/FLY.mp3'
    },
    {
      ability: "Поглотите 2 союзников и усилите себя их силой.",
      name: "ВИЛКОХВОСТ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 8,
      type: "Bronze",
      img: '../img/Monster/FORKTAIL.png',
      audio: '../audio/Monster/FLY.mp3'
    },
    {
      ability: "Поглотите 2 союзников и усилите себя их силой.",
      name: "ВИЛКОХВОСТ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 8,
      type: "Bronze",
      img: '../img/Monster/FORKTAIL.png',
      audio: '../audio/Monster/FLY.mp3'
    },
    {
      ability: "Поглотите бронзового или серебряного юнита с кладбища и увеличьте его силой.",
      name: "ОЗЗРЕЛ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 5,
      type: "Silver",
      img: '../img/Monster/OZZREL.png',
      audio: '../audio/Monster/HARPY.mp3'
    },
    {
      ability: "Размещение: уберите или добавьте блокировку отряда. Если это вражеский отряд, нанесите ему урон, равный половине его силы (округляя к большему и игнорируя броню",
      name: "МОРВУДД",
      positions: ["Melee"],
      strength: 5,
      type: "Silver",
      img: '../img/Monster/MORVUDD.png',
      audio: '../audio/Monster/HARPY.mp3'
    },
    {
      ability: "Усильте все свои другие инсектоиды и проклятые юниты в руках, колоде и на доске на 1.",
      name: "РУЕХИН",
      positions: ["Melee"],
      strength: 8,
      type: "Silver",
      img: '../img/Monster/RUEHIN.png',
      audio: '../audio/Monster/FLY.mp3'
    },
    {
      ability: "Обреченность. Размещение: переместите отряд из другого ряда на этой стороне в этот ряд. Возьмите верхнюю карту из вашей колоды.",
      name: "ПУГАЧ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 12,
      type: "Silver",
      img: '../img/Monster/FRIGHTENER.png',
      audio: '../audio/Monster/HARPY.mp3'
    },
    {
      ability: "Размещение: создайте Единорога или Хиронекса",
      name: "ЙЕННИФЭР",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 6,
      type: "Gold",
      img: '../img/Monster/YENNEFER.png',
      audio: '../audio/Monster/ARCHANAS.mp3'
    },
    {
      ability: "В начале каждого вашего хода усиливайте все остальные слабейшие дружественные отряды на 1 ед. Месть: усильте все остальные слабейшие дружественные отряды на 2 ед",
      name: "ТРИСС: ЗАКЛИНАТЕЛЬНИЦА",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 6,
      type: "Gold",
      img: '../img/Monster/TRISS_BUTTERFLIES.png',
      audio: '../audio/Monster/HARPY.mp3'
    },
    {
      ability: "Размещение: создайте Драугира в случайном ряду на стороне каждого игрока, имеющего в своем сбросе хотя бы одну бронзовую или серебряную карту",
      name: "ДРАУГ",
      positions: ["Melee", "Ranged", "Siege"],
      strength: 8,
      type: "Gold",
      img: '../img/Monster/DRAUG.png',
      audio: '../audio/Monster/FLY.mp3'
    },
    {
      ability: "Создайте бронзового трупоеда или инсектоида и усильте его на 3 ед",
      name: "ГНЕЗДО ЧУДОВИЩ",
      positions: ["Melee"],
      strength: 0,
      type: "Silver",
      img: '../img/Monster/MONSTER NEST.png',
      audio: '../audio/Monster/HARPY.mp3'
    },
    {
      ability: "Усильте сильнейший бронзовый или серебряный отряд из вашей колоды на 2 ед. и сыграйте его",
      name: "ДВОЙНОЙ КРЕСТ АЛЬЗУРА",
      positions: ["Melee"],
      strength: 0,
      type: "Silver",
      img: '../img/Neutral/ALZUR\'S DOUBLE–CROSS.png',
      audio: '../audio/Monster/ARCHANAS.mp3'
    },
    {
      ability: "Сыграйте золотой юнит из вашей колоды и увеличьте его на 2.",
      name: "КОРОЛЕВСКИЙ УКАЗ",
      positions: ["Melee"],
      strength: 0,
      type: "Gold",
      img: '../img/Neutral/ROYAL DECREE.png',
      audio: '../audio/Monster/ARCHANAS.mp3'
    },
  
  ];
  
  export default monsters;