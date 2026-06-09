# Short Response Questions

## Question 1: Promise States

What are the three states of a Promise? For each state, explain what it represents and which Promise method (`.then()` or `.catch()`) is used to handle it.

**Your Answer:**
- The promise object has three main states: 
- First state is `Pending`, it's when the promise has started but we don't know what would that be because the result is not ready yet. 

- Second state is `Resovle` it's when the promise is finished successfully, the resolve() was called and the value for that promise has been returned. 
- Usually it has been handle with `.then()`

- The third is `Rejecte` it's when the operation is failed. We know it's failed because `.catch()` handles the values that has been rejected. 
- Usually `.catch()` has been used so that way we can handle this state when there is an error. 


## Question 2: Callback Hell vs. Promise Chaining

Explain why deeply nested callbacks (callback hell) are problematic, and describe how Promise chaining with `.then()` solves this problem.

**Your Answer:**
- Using (callback hell) are problemtic because an asynchronous steps are depends on each other and each one of these callback sits inside the one before it. 
- There are also some other problems that occur such as: hard to read due to some many lines of codes. 
- In case of having bug in the code, it will be so hard to debug. 

- However, using `.then()` made it so much easier to read the code and to debug in case if there is a bug. We can easily handle an error by using `.catch()`. 
- So that way the code won't be messy at all, easier to maintain, and we can have as many `.then()` or `.catch()`. 


## Question 3: Error Handling with `.catch()`

If you have a chain of three `.then()` calls followed by a single `.catch()`, and the second `.then()` throws an error, what happens? Why is this behavior useful?

**Your Answer:**
- In case if the second `.then()` throw an error, the promise chain stops immediately at this point and goes directly to the `.catch()` to return an error in the code. 

- Each one of the `.then()` are depends on the previous one, so if there is a bug it should stop and return an error. 

- This is very useful because we can handle error in one place, it also becomes very Predictable, if there is an error it will move to `.catch()`, and it will make it easier to work with.  