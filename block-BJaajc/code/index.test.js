const {getFullName, isPalindrome, getCircumference, getArea} = require("./index")






test(`testing full name fn`, ()=> {
    expect(getFullName(`Joel`, `Joseph`)).toBe(`JoelJoseph`)
})
test(`testing full name fn`, ()=> {
    expect(getFullName(`Joel`, `Joseph`)).not.toBe(`Joel Joseph`)
})
test(`testing full name fn`, ()=> {
    expect(getFullName(`Rahul`, `Thakur`)).not.toBe(`Rahul-Thakur`)
})


test(`whether its palindrome`, ()=> {
    expect(isPalindrome(`NitiN`)).toBe(true)
})

test(`whether its palindrome`, ()=> {
    expect(isPalindrome(`Joel`)).toBe(false)
})

test(`calculate circumference`, ()=> {
    expect(getCircumference(4)).toBe("The circumference of the circle is 25.132741228718345")
})


test(`calculate area`, ()=> {
    expect(getArea(20)).toBe(`The area of the circle is 1256.6370614359173`)
})





