// Функция принимает секунды и выводит сколько в них целых часов, минут и секунд
function sda(s){ 
	// строка, в которую будет записываться результат
	var str = "";
	var hour = Math.floor(s/3600);
	// проверяет часы двухзначное число или нет
	// если нет, то перед ними записывается ноль
	// в обратном случае записывает просто часы
	hour < 10 ? str ="0"+hour+":" : str = hour+":";
	var min = Math.floor((s%3600)/60);
	// аналогично часам
	min < 10 ? str +="0"+min+":" : tr += min+":";
	var sec = (s%3600)%60;
	sec < 10 ? str +="0"+sec : str+=sec;
	console.log(str);
}
// записываем секунды в массив
var arr = [3678,367678,368];
// для каждого элемента в массиве вызываем фунцию sda 
for(var i =0;i < arr.length;i++){
	sda(arr[i]);
}

var str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.";
var m =[];
// В цикле проверяем является ли буква буквой "а" 
// если да , то её индекс записываем в массив
for (var i = 0; i < str.length ; i++) {
	if (str[i] == "a"){
		m[m.length] = i;
	}
}
console.log(m);