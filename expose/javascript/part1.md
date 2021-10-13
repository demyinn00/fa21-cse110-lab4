1. values added:  20
2. final result:  20
3. There is an error. However, if we comment out line 13 -> console.log('final result: ', result); it will print values added:  20. The real error occurs on line 13.
4. Line 13 causes an error because the **let** keyword is scope blocked. This means that the variable *result* is only in the if statement scope. In other words, it can't be used after the if block.
5. This returns an error because the we are using the **const** keyword which cannot change the value since it's a constant. So the error occurs on line 5 -> result = num1 + num2. 
6. This still returns an error for the same reason as question 5. 