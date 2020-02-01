/*
* @Author: wangfpp
* @Date:   2020-01-31 19:00:06
* @Last Modified by:   wangfpp
* @Last Modified time: 2020-02-01 12:21:26
*/
// 随机出题针对二年级下册的加减乘除
const opera = ["+", "-", "x", "÷"]; // 存储运算符号
const num = 20; // 出题个数
let domStr = "";
var questionList = {
	num_one: [],
	opera: [],
	num_two: [],
	result: []
}
for (var i = 0; i < num; i++) {
	let oper_num = randomArea(0, 3);
	switch (oper_num) {
		case 0:
			var num1 = randomArea(0, 1000);
			var num2 = randomArea(0, 100);
			questionList.num_one.push(num1);
			questionList.opera.push(opera[oper_num]);
			questionList.num_two.push(num2);
			break;
		case 1:
			var num1 = randomArea(0, 1000);
			var num2 = randomArea(0, 100);
			if (num1 < num2) {
				num2 = randomArea(0, num1);
			}
			questionList.num_one.push(num1);
			questionList.opera.push(opera[oper_num]);
			questionList.num_two.push(num2);
			break;
		case 2:
			var num1 = randomArea(0, 9);
			var num2 = randomArea(0, 9);
			questionList.num_one.push(num1);
			questionList.opera.push(opera[oper_num]);
			questionList.num_two.push(num2);
			break;
		case 3:
			var num1 = randomArea(0, 99);
			var num2 = randomArea(1, 9);
			questionList.num_one.push(num1);
			questionList.opera.push(opera[oper_num]);
			questionList.num_two.push(num2);
			break;
	}
}

questionList.num_one.forEach((item, index) => {
	let opera_one = item;
	let opera_opera = questionList.opera[index];
	let opera_two = questionList.num_two[index];
	let result = null
	if (opera_opera === "x") {
		result = eval(`${opera_one}*${opera_two}`);
	} else if (opera_opera === "÷") {
		var intNum = parseInt(opera_one / opera_two);
		var remain = opera_one % opera_two;
		if (remain === 0) {
			result = intNum;
		} else {
			result = Number(`${intNum}.${remain}`);
		}
	} else {
		result = eval(`${opera_one}${opera_opera}${opera_two}`);
	}
	domStr += `<label for=${index}>第${index + 1}题:  <span class="title">${opera_one} ${opera_opera} ${opera_two}</span> = <input type="text"> </label> <br/>`
	questionList.result.push(result);
});
let div = document.createElement('div');
let listDom = document.getElementById('list');
div.innerHTML = domStr;
listDom.appendChild(div);

