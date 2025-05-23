/*一言API*/
$(document).ready(function () {
  getHitokoto();
});

function hitokoto(e) {
  $('#hitokoto')
    .stop()
    .fadeOut(function () {
      $('#hitokoto').html(e.hitokoto);
      var element = document.getElementById('hitokotoa');
      element.href = 'https://hitokoto.cn/?uuid=' + e.uuid;
      $('#hitokoto').stop().fadeIn();
    });
}

function getHitokoto() {
  var e = ['a', 'b', 'c', 'd', 'e', 'i'];
  fetch('https://v1.hitokoto.cn/?encode=json&charset=utf-8&c=' + e[Math.floor(Math.random() * e.length)], {
    cache: 'no-cache',
    method: 'GET',
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((data) => {
      hitokoto(data);
      setTimeout(getHitokoto, 1e4);
    })
    .catch(console.error);
}
