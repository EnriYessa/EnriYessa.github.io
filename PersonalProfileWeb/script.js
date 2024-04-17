function word(){
  window.addEventListener('resize', function() {
    var coverW = document.getElementById('coverW');
    var coverM = document.getElementById('coverM');
    var cte = document.getElementById('cte');
    var brush = document.getElementById('brush');
    var brief = document.getElementById('brief');
    var rectW = coverW.getBoundingClientRect();
    var rectM = coverM.getBoundingClientRect();
    coverM.style.left = rectW.left + 'px'; // 保持和 coverW 的左边距一致
    coverM.style.top = (rectW.bottom + 20) + 'px'; // 在 coverW 下方一定距离
    cte.style.top = (rectM.bottom + 70) + 'px';
    brief.style.top = (rectM.bottom + 70) + 'px';
    brush.style.top = (rectW.top - 40) + 'px';
  });
}


function explore() {
  lemon();

  window.scrollBy({
    top: -window.innerHeight,
    behavior: 'smooth'
  });

  var nextContent = document.getElementById('lemonland');
  nextContent.style.opacity = '1';
  nextContent.style.transform = 'translateY(0)';

  setTimeout(function() {
    window.location.href = 'home.html';
  }, 1200);
}

function lemon() {
  var wipe1 = document.getElementById("wl");
  wipe1.style.display = 'none';
  var wipe2 = document.getElementById('brush');
  wipe2.style.display = 'none';
  var x = document.getElementById("wls");
  x.style.display = "inline-block";
}
