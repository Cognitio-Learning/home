<div style="display:flex;align-items:center;">
<img src="https://i.ibb.co/Tt7sqr5/cognitio-icon.png" width="125px"/>
<h1>Cognitio Learning</h1>
</div>

# Day 2 Intro to Python for AI
Day 2 covers slightly more advanced topics in Python, but still keeping it simple.

## Functions
Functions are blocks of reusable code that perform specific tasks. They help you organize your code and make it easier to understand and reuse.

> Don't confuse these with loops, which execute your code multiple times!

```py
def greet(name):
    print("Hello, " + name)

greet('Alice') # Hello, Alice
greet('Bob') # Hello, Bob
```
What's happening above is we're defining a function with `def` and the function name is `greet`. `greet` takes 1 input which is the name. The input is similar to a variable but with no definite value. In the function, we call the print function again, and we combine the string `Hello, ` and their name which results in greeting them. 

## Lists and List Operations
Previously, we covered the `list` datatype and how it's a collection of items. In addition to this, you can perform various operations on them to change the data inside.

### Adding Items from a List
```py
fruits = ['apple', 'banana', 'cherry']
fruits.append('orange')
print(fruits) # ['apple', 'banana', 'cherry', 'orange']
```
Here, we add the string `orange` to the list with the `append` method (operation). You can learn more about it [here](https://www.w3schools.com/python/ref_list_append.asp).

### Removing Items from a List
```py
fruits = ['apple', 'banana', 'cherry']
fruits.remove('banana')
print(fruits) # ['apple', 'cherry']
```
Here, we remove the string `banana` from the list with the `remove` method (operation). You can learn more about it [here](https://www.w3schools.com/python/python_lists_remove.asp)

> There are many more operations for lists and these are just a few of the main ones. 

### Accessing Values of a List
```py
fruits = ['apple', 'banana', 'cherry']
fruits[0] # apple
fruits[2] # cherry
```
Getting values from a list is a little bit... weird. You'd expect for the number inside the brackets to be the same as the order it's in right? Well it's actually 1 below that. 

Every item in a list has an `index`. This means the place that the item is in the list. For example, `banana` has an index of 1 (not 2, remember the rule we said earlier). In order to access banana, you would do `list[1]`

## Dicts and Dict Operations
As we covered earlier, dicts are collections of key-value pairs. This means that item in the dict has something that it corresponds to. Take this dict for example:
```py
student = {
    'name': 'Alice',
    'age': 12,
    'grade': '7th'
}
student['grade'] # 7th
student.grade # 7th
```
`name` relates to `Alice` meaning that the students name is Alice. These are called properties. We can access these properties with similar syntax to lists. Notice that there are 2 ways of accessing data from an object. Both ways require you to know the name of the property (not the property `name`) that way you can use it to find the correlation. 

### Adding and Removing Items
```py
student['school'] = 'Greenwood High'
print(student)  # {'name': 'Alice', 'age': 12, 'grade': '7th', 'school': 'Greenwood High'}

del student['age']
print(student)  # {'name': 'Alice', 'grade': '7th', 'school': 'Greenwood High'}
```

### Exercise
Try making a `dict` to define yourself! Include details such as your favorite pet, favorite color, name, age, etc. Make sure one of those details is included from you adding it on later, like the example above. Then, print some of those details onto the console.

## Conditional Statements (again)
There's some more details you'll need to know about conditional statements.

### Conditional Operators
```py
== # equal
!= # not equal
>= # greater than or equal to
<= # less than or equal to
> # greater than
< # less than
```
Great! Now we know all these. What am I supposed to do with them now? You use them in `if` statements. For example, if I wanted to check if I had at least 5 apples, what would I use? 

I would write this `if apples >= 5:`. This means that if `apples` is greater than or equal to `5`. Keep in mind that when comparing 2 items, it is case-sensitive meaning they must be exactly the same

> `print("hello" == "Hello")` will print `False` because the first H is different.

### Logical Operators
In addition to this, you can change how you compare things. 
```py
if A and B:
if A or B:
if not A:
```
Let's say I wanted to make sure I had more than 5 apples and less than 10 apples. I could do something like this:
```py
if apples > 5 and apples < 10:
```
Or if I wanted to make sure that I had either 5 apples or 5 oranges:
```py
if oranges == 5 or apples == 5:
```

## Operators
Oh come on, we just covered this! Nope, it's a different type.
```py
+ # Addition
- # Subtraction
* # Multiplication
/ # Division
% # Modulus (remainders)
** # Exponents
```
The first 4 are pretty simple, for example if you do `8+4` it would be `12` or `16/4` it would be 4. The next few might be more difficult. 

Modulus is essentially division with remainders. For example, if I do `5%2` it would return 1 because there are only 2 2's in 5, and 1 remainder. If I do `9%3` it would return 0, because 9 is divisible by 3.

> You can use this to check for even or odd numbers! If a `number%2` returns 0, would this be an odd or even number? What if `numbers%2` returns 1, would this be odd or even?

## Final Exercise
Alright, now let's combine everything we learned today. Make a program that counts up to any number, and for each number it prints if that number is odd or even along with the number.

You will need to know loops, conditional statements, combining strings, and operators. 

Example Output:
```
The number 2 is even.
The number 3 is odd.
The number 4 is even.
The number 5 is odd.
The number 6 is even.
``` 


# Conclusion

This concludes the lecture for Day 2. We'll continue onto day 3 with more concepts to learn!