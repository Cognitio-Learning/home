<div style="display:flex;align-items:center;">
<img src="https://i.ibb.co/Tt7sqr5/cognitio-icon.png" width="125px"/>
<h1>Cognitio Learning</h1>
</div>

# Day 3 Intro to Python for AI
Day 3 covers functions and error handling.

## Functions
Man... again? We just went over this. Nope, today we'll be going over functions in depth.
```py
def add_numbers(a,b):
    return a + b
add_numbers(2,4) # 6
add_numbers(5,8) # 13
```
This function takes in 2 inputs, adds them up, and then returns that value. You might be saying, well that's so easy! You can just do `print(2+4)`. While this is true, functions are normally used for larger blocks of code. Say for example, determining if numbers are odd or even. On day 2, the final exercise was printing numbers from 0-x and determining if the number was even or odd.

Here's the solution:
```py
def list_numbers(num):
    i = 0
    while i < num:
        i += 1
        if i % 2 == 0:
            print('Even number: ', i)
        else:
            print('Odd number: ', i)

list_numbers(5) 
```
This code takes in a number `num` as the number we should count up to. It defines another variable `i` (for index) and uses both variables in a while loop. WHILE `i` is LESS THAN `num`, execute this. Inside the while loop, we increase the value of `i`, see if dividing `i` by 2 has a remainder, and determine what to do from there. 

Now you see that functions are more useful than you might've thought!

## Nested Loops
Nested loops? Like birds in a nest? What?
```py
first = [1, 2]
second = [3, 4]

for x in first:
    for y in second:
        print(x, y)
```

