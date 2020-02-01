/*
* @Author: wangfpp
* @Date:   2020-02-01 12:06:28
* @Last Modified by:   wangfpp
* @Last Modified time: 2020-02-01 12:07:23
*/

/**
 * [LocalStorage localStorage转化函数类]
 * @param {String} key [Storage的主键名称]
 */
function LocalStorage(key) {
	this.setItem = function (value) {
		let tranValu = null;
		if (typeof value == 'string') {
			tranValu = value;
		} else {
			tranValu = JSON.stringify(value);
		}
		window.localStorage.setItem(key, tranValu);
	}
	this.getItem = function () {
		let storage = window.localStorage.getItem(key);
    	let value = null;
    	try{
    		value = JSON.parse(storage);
    		// if (value instanceof Array) {
    		// 	console.log(value);
    		// } else if (value instanceof Object) {
    		// 	console.log(value);
    		// }
    	}catch{
    		value = storage;
    	}
    	return value;
	}
}