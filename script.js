
let s = prompt('Введите площадь');
let r = prompt('Введите радиус');
let h = prompt('Введите высоту');
let b = '**************';
let c = '--------------------';
let o = 'Обьем цилиндра с площадью основы ';

r = Math.pow (r, 2);
a = Math.PI * r;
v = a * h;

document.write(`<span> ${b} </span> <br>
<mark>${o} * ${s} *, радиусом * ${r} * и высотой * ${h} * равен: </mark> <br>
${c}<br>
<span>V= ${v}</span><br>
${c}<br>
<span>end.</span>`);

// **************************************************************************************************************************************************************************************************

// let a = prompt('Введите число');
// let d = Number(a);
// alert(['Even', 'Odd'][d * d % 2]);
// let b = prompt('Введите число');
// let e = Number(b);
// alert(['Even', 'Odd'][e * e % 2]);
// let c = prompt('Введите число');
// let m = Number(c);
// alert(['Even', 'Odd'][m * m % 2]);
// let sum = (d + e + m );
// alert(sum);