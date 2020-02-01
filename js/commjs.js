/*
* @Author: wangfpp
* @Date:   2020-02-01 12:08:20
* @Last Modified by:   wangfpp
* @Last Modified time: 2020-02-01 12:20:15
*/

/**
 * [seconds2time 秒数转化为实践]
 * @param  {Number} seconds [输入的秒数]
 * @return {String}         [返回的时间格式]
 */
function seconds2time(seconds) {
	let [hour, min, sec] = [doubleNum(parseInt(seconds / 3600) % 24) , doubleNum(parseInt(seconds / 60) % 60) , doubleNum(parseInt(seconds % 60))];
	return `${hour}:${min}:${sec}`;
}

/**
 * [doubleNum 双位数]
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
function doubleNum(num) { // 返回两位实数
    if (num < 10) {
        return String('0' + num);
    } else {
        return num;
    }
}

/**
 * [randomArea 随机生成区间数]
 * @param  {[type]} min [description]
 * @param  {[type]} max [description]
 * @return {[type]}     [description]
 */
function randomArea(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}