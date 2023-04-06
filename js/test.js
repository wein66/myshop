const food = ["사과","바나나", "오렌지", "수박","참외" ];

let number = 12312314455;

console.log(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));