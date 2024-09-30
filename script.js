// 1 Question 

let a = [1, 2, 3];
a.push(4); 
console.log(a); 

// 2 Question 

let b = [1, 2, 3];
b.pop(); 
console.log(b); 

// 3 Question 

let c = [1, 2, 3];
c.unshift(0); 
console.log(c); 

// 4 Question 

let d = [1, 2, 3];
d.shift(); 
console.log(d); 

// 5 Question 

let e = [1, 2, 3];
e.reverse(); 
console.log(e); 

// 6 Question 

let f = [1, 2, 3, 4];
let index = f.indexOf(3); 
console.log(index); 

// 7 Question 

let g = [1, 2, 3];
let exists = g.includes(2); 
console.log(exists); 

// 8 Question 

let h = [3, 1, 4, 2];
h.sort(); 
console.log(h); 

// 9 Question 

let i = [1, 2, 3];
let str = i.join(","); 
console.log(str); 

// 10 Question 

let j = [1, 2, 3];
j.push(4); 
j.shift(); 
console.log(j); 

// 11 Question

let k = [1, 2, 3];
let result = k.reverse().join(","); 
console.log(result); 

// 12 Question 

let l = [4, 2, 1, 3];
l.sort(); 
l.pop();
console.log(l);

// 13 Question 

let m = [3, 4];
m.unshift(1, 2); 
m.shift(); 
let length = m.length; 
console.log(m, length); 

// 14 Question 

let n = [3, 1];
let o = [4, 2];
let combined = n.concat(o);
combined.sort(); 
combined.pop(); 
console.log(combined); 
