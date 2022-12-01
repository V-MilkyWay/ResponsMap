let menu = document.querySelectorAll('.navigation');
let mapRoads = document.querySelectorAll('.map-road');
let mapPublic = document.querySelectorAll('.map-people');
let mapWater = document.querySelectorAll('.map-river');
let mapCity = document.querySelectorAll('.map-city');
let buttonMapRoads = document.querySelectorAll('.filter_image-road');
let buttonMapPublic = document.querySelectorAll('.filter_image-river');
let buttonMapWater = document.querySelectorAll('.filter_image-people');
let buttonMapCity = document.querySelectorAll('.filter_image-city');

   function openVK(){
      window.open("https://vk.com/most.strategy")
   }

   function openMOST(){
      window.open("http://most-online.ru/")
   }

   function openSOHO(){
      window.open("https://sohoware.ru/")
   }

   function openMenu(){
    menu[0].style.display = 'flex';
   }

   function clouseMenu(){
    menu[0].style.display = 'none';
   }

   function openMapRoads() {
      mapRoads[0].style.visibility = 'visible';
      mapPublic[0].style.visibility = 'hidden';
      mapWater[0].style.visibility = 'hidden';
      mapCity[0].style.visibility = 'hidden';

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
      mapPublic[0].style.visibility = 'visible';
      mapRoads[0].style.visibility = 'hidden';
      mapWater[0].style.visibility = 'hidden';
      mapCity[0].style.visibility = 'hidden';

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
      mapWater[0].style.visibility = 'visible';
      mapRoads[0].style.visibility = 'hidden';
      mapPublic[0].style.visibility = 'hidden';
      mapCity[0].style.visibility = 'hidden';

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
      mapCity[0].style.visibility = 'visible';
      mapRoads[0].style.visibility = 'hidden';
      mapPublic[0].style.visibility = 'hidden';
      mapWater[0].style.visibility = 'hidden';


      buttonMapCity[0].style.background = 'white';
      buttonMapPublic[0].style.background = 'gray';
      buttonMapRoads[0].style.background= 'gray';
      buttonMapWater[0].style.background = 'gray';
      
      buttonMapRoads[0].src = './image/road-unactive.png';
      buttonMapPublic[0].src = './image/people-unactive.png';
      buttonMapWater[0].src = './image/water-unactive.png';
      buttonMapCity[0].src = './image/city.png';
   }
