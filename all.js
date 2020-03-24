let container = document.querySelector('.container');
let firest = `<div class="first">
<span class="line"></span>
<div class="txt">
  <div class="title">九九乘法表</div>
  <p>MULTIPLICATION CHART</p>
</div>
<span class="line"></span>
</div>`;

let str = '';

for(let i = 2; i<10 ; i++){
    str += `<div class="card"><h3>${i}</h3>`;
    for(let j = 1; j<10 ; j++){
        str += `<li>${i} x ${j} = ${i*j}</li>`
    }
    str +=`</div>`
}
let footer = `<div class="footer">Copyright © 2019 HexSchool. All rights reserved.</div>`
container.innerHTML = firest + str +footer;
