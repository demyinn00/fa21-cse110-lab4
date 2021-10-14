1. It prints 3 to the terminal. This is because **var** is not scope-blocked which means that the variable is not destroyed after the scope and still exists. 
2. This prints 150 to the terminal. This happens for the same reason as question 1. The *discountedPrice* variable uses the keyword **var** which allows it to be used outside the scope of the loop
3. This prints 150 for the same reason as 1 and 2. 
4. The function returns a list of the discounted prices. This is because the loop applies the discount to the list argument *prices*. This also would not change if it was a **const** variable since we are not changing the value of *discounted* we are changing what's inside the list. 
5. This causes an error because after the loop, the variable *i* is destroyed since it is no longer in scope. 
6. This also causes an error for the same reason as 5. The variable *discountedPrice* is out of scope after the loop.
7. This prints 150 to the terminal because *finalPrice* is still in scope. If this was outside of the function, then it would throw an error. 
8. This still returns a list of the discounted prices. This is because discounted price is still in scope of the function so it is populated with the loop and returned. 
9. This throws an error for the same reason as 5. *i* is no longer in scope so it throws an error. 
10. This prints 3 to the terminal because *length* is still in scope.
11. The function will still return a list of the discounted prices. This is because the variable *discounted* is an array which is a pointer. So the variable *discount* points to an address is memory and we are not changing the value of that address. Instead, we are changing the value inside that address. 
12. Answers:
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
13. Answers:
    1.  32 because the integer 2 maps to the string. 
    2.  1 because the string 3 is mapped to the integers.
    3.  3 because null maps to 0.
    4.  3null this is because null will map to strings and will be concatenated. 
    5.  4 because true is a boolean which behind the scenes is either a 1 or 0.
    6.  0 because false is a boolean which is 0 and then it is added with null which is mapped to 0.
    7.  3undefined because 3 is a string and undefined will be mapped to a string and then concatenated. 
    8.  NaN because 3 is a string and then mapped to an integer and then added to undefined which becomes NaN.
14. Answers:
    1.  true because the string 2 becomes the integer 2.
    2.  false because alphabetically 1 is less than 2. 
    3.  true because the string 2 is converted to an integer and the == allows for data conversions 
    4.  false because === is the strictly equal operator which means that it will only compare them if they are the same type. Since 2 is an integer and '2' is a string, they are different types.
    5.  false because true is a boolean which is either a 1 or 0. 1 < 2, so it returns false.
    6.  true because Boolean(2) turns 2 into a boolean type which will be true or 1 and 1 == 1. 
15. The == vs === is the equal operator and the strictly equals operator. equal operator doesn't care about data types and allows javascript to convert it to the same data type. The === (strictly equals) operator requires the two inputs to be of the same data type. 
