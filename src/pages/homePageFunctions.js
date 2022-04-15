const changeCardColor = (background) => {
  let backgroundColor = ['#EBD168', '#A81818'];
  if (background === '#EBD168') {
    backgroundColor = ['#A81818', '#EBD168'];}
return (backgroundColor);
 
};
const shuffle=()=> {
  const  places= createPlaces()
    const places1= places
    const newArrengement=[]
    let currentIndex = places.length
    let randomIndex;


    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      newArrengement.push(places1[randomIndex])
      places1.splice(randomIndex, 1)
      currentIndex-=1
    }
    return(newArrengement)
  }
  const createPlaces = () => {
    const places = [
      {
        id: 0,
        placeName: 'The Pearl',
        linkName: 'pearl',
        coordinates: [51.55148, 25.36875],
        img: 'https://thepearlqatar.com/-/media/Thepearlqatar/ExploreTheIsland2019/QQ-2.jpg',
      },
      {
        id: 1,
        placeName: 'Souq Waqif',
        linkName: 'souq',
        coordinates: [51.53280, 25.28840],
        img: 'http://cdn.cnn.com/cnnnext/dam/assets/180122165928-souq-waqif--by-dimitris-sideridis.jpg',
      },
      {
        id: 2,
        placeName: 'Musherib',
        linkName: 'musherib',
        coordinates: [51.52723, 25.28148],
        img: 'https://www.myholidays.com/blog/content/images/2021/04/Why-Visit-Msheireb-Downtown-Doha.jpg',
      },
      {
        id: 3,
        placeName: 'Lusail',
        linkName: 'lusail',
        coordinates: [51.53004, 25.42068],
        img: 'https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/Lusail-in-Qatar1.jpg',
      },
      {
        id: 4,
        placeName: 'Katara',
        linkName: 'katara',
        coordinates: [51.52556, 25.35926],
        img: 'https://www.accessibleqatar.com/wp-content/uploads/2016/05/katara_photo_big_2.jpg',
      },
      {
        id: 5,
        placeName: 'Cournish',
        linkName: 'cournish',
        coordinates: [51.51933, 25.30795],
        img: 'https://lp-cms-production.imgix.net/2019-06/f868443201b1370e5faa91e332e47ef8-al-corniche.jpg',
      },
    ];
    return places

  };
  const handleSearch=(search)=>{
    const places= createPlaces()
    return places.filter(place=>place.placeName.toLowerCase().includes(search.toLowerCase()))
 
 }
export { changeCardColor, shuffle, createPlaces, handleSearch };
