var stock = [
  {
    image: "https://th.bing.com/th/id/R.84e062cd5bcf1c061c8b5659f3dbb3a7?rik=t5K%2febc7sAwZDQ&riu=http%3a%2f%2fwww.kstar-mp3.us%2fwp-content%2fuploads%2f2016%2f07%2fNCT-127-NCT-127-1st-Mini-Album-320kbps-www.kstar-mp3.us_.jpg&ehk=l707i23%2ffY3Q6UK2oyLtke1Imt71yetQFXdG4P5WhA4%3d&risl=&pid=ImgRaw&r=0",
    name: "NCT #127 - The 1st Mini Album",
    price: 18,
  },
  {
    image: "https://th.bing.com/th/id/R.4eb7694948a72fc7caad14066b9a2461?rik=Va8p9i8FIowwKg&riu=http%3a%2f%2fsocdn.smtown.com%2fupload%2fstarhome%2flayout%2fnct127%2fver03%2fteaser%2fpc%2fbg.jpg&ehk=NlyUAAqSklesb0Th3XBcA%2fJerpbM0LjT12I0Xp5JMq8%3d&risl=&pid=ImgRaw&r=0",
    name: "NCT #127 Cherry Bomb - The 3er Mini Album",
    price: 19,
  },
  {
    image: "https://th.bing.com/th/id/R.45ff4c5f81893967d288472ac4c37629?rik=dcp1rSkA4Obdpw&riu=http%3a%2f%2fimages.genius.com%2f1ac8376d0d8b8a18be790bd12a603e1f.1000x1000x1.jpg&ehk=Ri%2f2JA0xc9XjoxF9q9ESQ5u6C2Q2%2bfEU0P6MMlamluc%3d&risl=&pid=ImgRaw&r=0",
    name: "We Young - The 1st Mini Album",
    price: 17,
  },
  {
    image: "https://vignette.wikia.nocookie.net/kpop/images/e/eb/NCT_2018_Empathy_album_cover.png/revision/latest?cb=20180315003656",
    name: "NCT 2018 Empathy",
    price: 20,
  },
  {
    image: "https://th.bing.com/th/id/OIP.Y7p_twckILqRDMrdYnfUmgHaJQ?pid=ImgDet&rs=1",
    name: "NCT #127 Regular-Irregular - The 1st Album",
    price: 25,
  },
  {
    image: "https://www.allkpop.com/upload/2018/11/af_org/25090757/nct-127.jpg",
    name: "NCT #127 Regulate - The 1st Album Repackage",
    price: 17,
  },
  {
    image: "https://i.scdn.co/image/176131c222df954d6c45dd50362942d3832f29fa",
    name: "NCT #127 We are Superhuman - The 4th Mini Album",
    price: 19,
  },
  {
    image: "https://images.genius.com/1ee2d0afeacbc279803786da22338dfe.1000x1000x1.jpg",
    name: "NCT #127 Neo Zone - The 2nd Album",
    price: 25,
  }
  
]

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function Order(album) {
  var code = album.split('-')[1];
  document.getElementById('album-0').innerHTML = 
    '<img id="'+code+'" class="imageOder" src="'+stock[code].image+'">'+
    '<div class="name">'+stock[code].name+'</div>'+
    '<div class="price">$'+stock[code].price+'</div>'
}

function add2Cart() {
  var number = document.getElementsByClassName('number')[0].value;
  var code = document.getElementsByClassName('imageOder')[0].getAttribute("id");
  document.getElementById('myCart').innerHTML = 
  document.getElementById('myCart').innerHTML+
  '<img class="imageCart" src="'+stock[code].image+'">'+
  '<div class="name2">'+stock[code].name+' ('+number+')'+'</div>'+
  '<div class="price2">$'+(stock[code].price*number)+'</div><br><br>';
}