var challenge = "30 days of Javascript"

console.log(challenge);

console.log(challenge.length);

var Challenge = challenge.toUpperCase()
console.log(Challenge)

var challengeSmall = challenge.toLowerCase()
console.log(challengeSmall)

console.log(challenge.substring(0,3))

console.log(challenge.substring(3))

var companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
var compArray = companies.split(',')
console.log(compArray)

var final = challenge.replace("Javascript" , "Python")
console.log(final)

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(11));

console.log(challenge.indexOf('a'))

let sample = "you cannot end a sentence with because because because is a conjunction."
console.log(sample.lastIndexOf('because'))

console.log(sample.search('because'))

console.log(challenge.trim())

console.log(challenge.startsWith('3'))

console.log(challenge.endsWith('t'))

console.log(challenge.match('a'))

console.log(challenge.concat(sample))

console.log(challenge.repeat(2))


