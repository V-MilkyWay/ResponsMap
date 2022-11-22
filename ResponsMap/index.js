let menu = document.querySelectorAll('.navigation');
let mapRoads = document.querySelectorAll('.map-road');
let mapPublic = document.querySelectorAll('.map-people');
let mapWater = document.querySelectorAll('.map-river');
let mapCity = document.querySelectorAll('.map-city');
let buttonMapRoads = document.querySelectorAll('.filter_image-road');
let buttonMapPublic = document.querySelectorAll('.filter_image-river');
let buttonMapWater = document.querySelectorAll('.filter_image-people');
let buttonMapCity = document.querySelectorAll('.filter_image-city');

   function openMenu(){
    menu[0].style.display = 'flex';
   }

   function clouseMenu(){
    menu[0].style.display = 'none';
   }

   function openMapRoads() {
      mapRoads[0].style.display = 'flex';
      mapPublic[0].style.display = 'none';
      mapWater[0].style.display = 'none';
      mapCity[0].style.display = 'none';

      buttonMapRoads[0].style.background = 'white';
      buttonMapPublic[0].style.background = 'gray';
      buttonMapWater[0].style.background= 'gray';
      buttonMapCity[0].style.background = 'gray';

      buttonMapRoads[0].src = './image/road.png';
      buttonMapPublic[0].src = './image/people-unactive.png';
      buttonMapWater[0].src = './image/water-unactive.png';
      buttonMapCity[0].src = './image/city-unactive.png';
   }

   function openMapPublic() {
      mapPublic[0].style.display = 'flex';
      mapRoads[0].style.display = 'none';
      mapWater[0].style.display = 'none';
      mapCity[0].style.display = 'none';

      buttonMapPublic[0].style.background = 'white';
      buttonMapRoads[0].style.background = 'gray';
      buttonMapWater[0].style.background= 'gray';
      buttonMapCity[0].style.background = 'gray';

      buttonMapRoads[0].src = './image/road-unactive.png';
      buttonMapPublic[0].src = './image/people1.png';
      buttonMapWater[0].src = './image/water-unactive.png';
      buttonMapCity[0].src = './image/city-unactive.png';
   }

   function openMapWater() {
      mapWater[0].style.display = 'flex';
      mapRoads[0].style.display = 'none';
      mapPublic[0].style.display = 'none';
      mapCity[0].style.display = 'none';

      buttonMapWater[0].style.background = 'white';
      buttonMapPublic[0].style.background = 'gray';
      buttonMapRoads[0].style.background= 'gray';
      buttonMapCity[0].style.background = 'gray';

      buttonMapRoads[0].src = './image/road-unactive.png';
      buttonMapPublic[0].src = './image/people-unactive.png';
      buttonMapWater[0].src = './image/river.png';
      buttonMapCity[0].src = './image/city-unactive.png';
   }

   function openMapCity() {
      // mapCity[0].style.display = 'flex';
      // mapRoads[0].style.display = 'none';
      // mapPublic[0].style.display = 'none';
      // mapWater[0].style.display = 'none';


      //buttonMapCity[0].style.background = 'white';
      //buttonMapPublic[0].style.background = 'gray;';
      //buttonMapWater[0].style.background= 'gray';
      //buttonMapRoads[0].style.background = 'gray;';
      
      //buttonMapRoads[0].src = './image/road-unactive.png';
      //buttonMapPublic[0].src = './image/people-unactive.png';
      //buttonMapWater[0].src = './image/water-unactive.png';
      //buttonMapCity[0].src = './image/city.png';
   }
