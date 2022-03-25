let x = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']
let y = ['fair trade coffee', 'fruitloops']

x.pop();
x.pop();
x.pop();
x.push('rice');
x.push('beans')

// shopping list
let z = x.concat(y);

z.pop()
z.shift()
// shopping cart
let c = []

// placing items from list into cart
c.push('fruitloops')
c.unshift('pop tarts')

// a loop that automates placing items from the list into the cart
do {
    c.push(z[0])
    z.shift([0])
  }
  while (z.length>0);

  c.sort()
console.log(z)
console.log(c)

c.reverse()
console.log(c)