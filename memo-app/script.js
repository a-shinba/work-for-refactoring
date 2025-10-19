var x = document.getElementById('d4');
var y = document.getElementById('c3');
var z = document.getElementById('g7');
var w = document.getElementById('f6');
var data = {};
var temp = 1;

function f1() {
var txt = x.value;
if(txt == '') {
alert('何か書いて');
return;
}
var now = new Date();
var time = now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes();
data[temp] = {t: txt, d: time};
localStorage.setItem('memo_' + temp, JSON.stringify(data[temp]));
alert('保存した');
f7();
}

function f2() {
if(confirm('本当に？')) {
x.value = '';
y.innerHTML = '0文字';
}
}

function f3() {
var d = new Date();
var str = d.getFullYear() + '年' + (d.getMonth()+1) + '月' + d.getDate() + '日 ' + d.getHours() + '時' + d.getMinutes() + '分';
x.value = x.value + '\n' + str + '\n';
f4();
}

function f4() {
var len = x.value.length;
y.innerHTML = len + '文字';
if(len > 500) {
y.style.color = 'red';
} else if(len > 300) {
y.style.color = 'orange';
} else {
y.style.color = 'green';
}
}

function f5() {
temp = z.value;
var saved = localStorage.getItem('memo_' + temp);
if(saved) {
var obj = JSON.parse(saved);
x.value = obj.t;
w.innerHTML = '最終保存: ' + obj.d;
f4();
} else {
x.value = '';
w.innerHTML = '新規メモ';
f4();
}
}

function f6() {
if(confirm('削除する？')) {
localStorage.removeItem('memo_' + temp);
x.value = '';
w.innerHTML = '削除済み';
f4();
}
}

function f7() {
for(var i = 1; i <= 5; i++) {
var m = localStorage.getItem('memo_' + i);
if(m) {
data[i] = JSON.parse(m);
}
}
}

window.onload = function() {
f7();
f5();
}

setInterval(function() {
if(x.value != '') {
var now = new Date();
var time = now.getFullYear() + '/' + (now.getMonth()+1) + '/' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes();
data[temp] = {t: x.value, d: time};
localStorage.setItem('memo_' + temp, JSON.stringify(data[temp]));
}
}, 60000);