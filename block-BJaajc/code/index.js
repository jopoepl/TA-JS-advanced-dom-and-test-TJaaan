function getFullName (fn, ln){
    return fn + ln
}

function isPalindrome(str){
    let input = str.split(``)
    let output = input.reverse();
    let reversedStr = output.reduce((acc, cv) => {
        acc += cv
        return acc;
    }, ``)
     return reversedStr.toUpperCase() === str.toUpperCase();
}

function getCircumference (radius){
    let c = Math.PI * 2 * radius;
    return `The circumference of the circle is ${c}`;

}

function getArea(r){
    let a = Math.PI  * r * r;
    return `The area of the circle is ${a}`;
}

module.exports = {getFullName, isPalindrome, getCircumference, getArea}