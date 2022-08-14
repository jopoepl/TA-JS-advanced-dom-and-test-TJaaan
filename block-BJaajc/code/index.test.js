const {getFullName, isPalindrome, getCircumference, getArea} = require("./index")


let mockFnGetFullName = jest.fn();





test(`testing full name fn`, ()=> {
    expect(getFullName(`Joel`, `Joseph`)).toBe(`JoelJoseph`)
})

