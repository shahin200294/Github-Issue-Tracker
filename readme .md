1/ What is the difference between var, let, and const?

Ans: var: Can be both updated (reassigned) and re-declared within the same scope.
     let: Can be updated (reassigned) but not re-declared within the same scope.
   const: Cannot be updated (reassigned) or re-declared. However, for objects and arrays defined with const, the contents can still be modified.

2/ What is the spread operator (...)?

Ans: The spread operator performs a shallow copy, meaning nested structures are not deeply cloned. It is the opposite of the rest operator, which condenses elements into a single structure.


3/ What is the difference between map(), filter(), and forEach()?

Ans: The core difference lies in their return values and purpose: map() and filter() return a new array and support method chaining, while forEach() returns undefined and is used for side effects. None of them modify the original array unless explicitly coded in the callback function.


4/  What is an arrow function?

Ans: An arrow function is a concise ES6 syntax for defining anonymous functions in JavaScript using the "fat arrow" (=>) notation. They provide shorter alternatives to traditional function expressions, enabling implicit returns for single-line statements and handling this context lexically.


5/ What are template literals?

Ans: Template literals, introduced in ES6, are JavaScript string literals that use backticks (`) instead of quotes, allowing for multi-line strings, easy interpolation of variables and expressions using ${expression}, and improved code readability. They simplify string concatenation and enable advanced features like tagged templates.
