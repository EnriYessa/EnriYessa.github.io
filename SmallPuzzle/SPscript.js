function start(){
  var name = prompt("What is your name?")
  alert("Hi! " + name + "，接下来会出现一些有关kpop梗的选择题，快来尝试回答成为sense精吧！")
}

// seventeen有几个人？9；11；13；17
// 答案：百度百科和图片
function svt(){
  var wipe = document.getElementById("initial");
  wipe.innerHTML = '';
  var x = document.getElementById("one");
  x.style.display = "block";
}
function svt2(){
  var wipe = document.getElementById("two");
  wipe.style.display = 'none';
  var x = document.getElementById("one");
  x.style.display = "block";
}
function answer1(){
  var answer1 = document.getElementById("answer1");
  answer1.style.display = "block";
}
function closePopup1(){
  var popup1 = document.getElementById("answer1");
  popup1.style.display = "none";
}
// 为什么seventeen只有13个人？四个e不发音；四个人被剩下的人吃了；四个人退团了；反正出道的时候就只有13个人

// 请填空：我si____哇啊呜啊啊 渣渣灰；徐俊大；蓝精灵；朴灿烈
// 提示：语音
// 答案：完整视频
function xjd(){
  var wipe = document.getElementById("one");
  wipe.style.display = 'none';
  var x = document.getElementById("two");
  x.style.display = "block";
}

function xjd2(){
  var wipe = document.getElementById("three");
  wipe.style.display = 'none';
  var x = document.getElementById("two");
  x.style.display = "block";
}
function answer2(){
  var answer1 = document.getElementById("answer2");
  answer1.style.display = "block";
}
function closePopup2(){
  var popup1 = document.getElementById("answer2");
  popup1.style.display = "none";
}
// 语音题：你叫什么名字？ 吹汉帅；李肿颤；窝不直捣；我是杰克人
// 答案：原视频
function chs(){
  var wipe = document.getElementById("two");
  wipe.style.display = 'none';
  var x = document.getElementById("three");
  x.style.display = "block";
}

function chs2(){
  var wipe = document.getElementById("four");
  wipe.style.display = 'none';
  var x = document.getElementById("three");
  x.style.display = "block";
}
function answer3(){
  var answer1 = document.getElementById("answer3");
  answer1.style.display = "block";
}
function closePopup3(){
  var popup1 = document.getElementById("answer3");
  popup1.style.display = "none";
}
// 请填空：新疆___，夜半三更到___。葡萄甜，乌鲁木齐；葡萄香，呼和浩特；葡萄大，拉萨；葡萄干，西宁
// 答案：视频
function lzm(){
  var wipe = document.getElementById("three");
  wipe.style.display = 'none';
  var x = document.getElementById("four");
  x.style.display = "block";
}

function lzm2(){
  var wipe = document.getElementById("five");
  wipe.style.display = 'none';
  var x = document.getElementById("four");
  x.style.display = "block";
}
function answer4(){
  var answer1 = document.getElementById("answer4");
  answer1.style.display = "block";
}
function closePopup4(){
  var popup1 = document.getElementById("answer4");
  popup1.style.display = "none";
}
// 请看视频，推测视频后人马上会说什么。 非常好看；色彩非常鲜艳；我很喜欢；特别舒服
// 答案：视频
function win(){
  var wipe = document.getElementById("four");
  wipe.style.display = 'none';
  var x = document.getElementById("five");
  x.style.display = "block";
}

function win2(){
  var wipe = document.getElementById("six");
  wipe.style.display = 'none';
  var x = document.getElementById("five");
  x.style.display = "block";
}
function answer5(){
  var answer1 = document.getElementById("answer5");
  answer1.style.display = "block";
}
function closePopup5(){
  var popup1 = document.getElementById("answer5");
  popup1.style.display = "none";
}
// 在韩国想要获得L型高鼻应该去哪家公司进行改造？HYBE；SM；JYP；YG
// 答案：HYBE
function nose(){
  var wipe = document.getElementById("five");
  wipe.style.display = 'none';
  var x = document.getElementById("six");
  x.style.display = "block";
}
function nose2(){
  var wipe = document.getElementById("seven");
  wipe.style.display = 'none';
  var x = document.getElementById("six");
  x.style.display = "block";
}
function answer6(){
  var answer1 = document.getElementById("answer6");
  answer1.style.display = "block";
}
function closePopup6(){
  var popup1 = document.getElementById("answer6");
  popup1.style.display = "none";
}
// wait
function wait(){
  var wipe = document.getElementById("six");
  wipe.style.display = 'none';
  var x = document.getElementById("seven");
  x.style.display = "block";
}


// QUESTION:
function yes(){
  alert("Bingo! Good job!");
}
function no(){
  alert("Oh! It's wrong, please try again!");
}
