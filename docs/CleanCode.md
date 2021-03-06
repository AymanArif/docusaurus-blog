---
id: doc1
title: Clean Code
sidebar_label: Clean Code
---





# Books contents

**Part 1:** Principles, patterns and best practices of writing good clean code.

**Part 2:** Apply knowledge from part 1

**Part 3:** List of heuristics to detect smelly code learnt from part 1.


:::caution

Just knowing everything is not enough. Use them daily. Write and review lots of code. Review your own code by senior engineers and learn from your mistakes. Iteration is key.
:::



# Chapter 1 : Introduction to Clean Code


## Rule of Thumb

1. Software Craftsmanship comes from knowledge and its implementation and application as code.

2. Read lots of code, make mistakes, argue and see the price for bad code.


3. Attitude: Be a professional. i.e. no matter what, maintain good and clean code.


4. Proxy of clean code
5. Maintainable/Testable code: Easy to modify and good tests. Easy to validate new changes

6. Produtivity of engineers: Can add new code easily

7. Readable

8. Crisp and clear: No suprises in what it does. Does SRP well.

9. Performant and scalable. [How would Ayman achieve this?]

 


## Chapter 2 - Naming


1. Naming should tell the intent:

Why it exists. what is does and how to use it.

Example: 

- :smile: : `employeePaymentInfo`
- :pensive: : `ePay`




2. Avoiding confusing name:

Using names that imply something

Example: 

- :smile: : `Unix`
- :pensive: : `testList` *(Even when it is not a java List)*



3. Choose clean name:

Say what you mean and mean what you say

Example: 

- `deleteItems` over `bustThemDown`

- `kill` over `whack`

4. Use good distinctions and DO NOT USE NUMBERS  at END

Example: 

- :smile: : `productIds` and `productDetails`
- :pensive: : `list1`
- :pensive: `produtInfo` and `productDetails` *(Same meaning and distinction os harder)*
 

5. Use pronouncable names

Example: 
 
- :smile: : `dateOfBirthInMonths`
- :pensive: : `dobymm` 


6. Use searchable names. 


:::caution 

DO NOT USE SINGLE CHARACTERS.

:::



7. DO NOT ENCODE TYPES IN NAMES


:::caution 

Generics could change the type of variables. 

:::


8. Avoid prefixes to names.

- `member_description` over`m_description`

- `ShapeFactory` and `ShapeFactoryImpl` over `IShapeFactory`

9. Class and functions


- Class names should be NOUNS. Eg: student, car, employee .etc.

- Function names should be VERBS. Eg: postPayment, deletePage

- Use names consistently
- Pick one concept and stick to it.
- Do not use same name for 2 different things.
- Use Domain specific name

Example: 

- For visitor pattern, use `accountVisitor`


- For queue pattern, use `jobQueue`


- For builder pattern, use `nameBuilder`


- Not too long name.



 # Chapter 3: Functions
 
 # Chapter 4: Comments
  
 # Chapter 5: Formatting

 # Chapter 6: Objects and Data Structures
 
 # Chapter 7 Error handling
  
 # Chapter 8: Boundaries 

 
 # Chapter 9: Unit Tests
 
 
 ## Three Laws of TDD
 
 ### First Law
 
 You may not write production code until you have a falling unit test.
 
 
 ### Second Law
 
 You may not write more of a unit test than it is sufficient to fail; NOT compiling = Failing
 
 ### Third Law

You may not write more production code than is sufficient to pass the currently failing test.


## Clean Tests

Clean tests should follow **F.I.R.S.T** principle.

*F, I, R, S are BAU*

1. **Fast**: 

2. **Independant** : Unit tests are not dependant on other tests.

3. **Repeatable**: Should be able to run unit test in Local (without internet) , QA, Production environment.

4. **Self-validating** : Should **PASS** or **FAIL**, as simple as that.

5. **Timely** : Write *unit test* just before *production code*. If you do not follow this principle, then *production code* will be hard to test.


# Chapter 10: Classes

# Chapter 11: Systems

# Chapter 12: Emergance

# Chapter 13: Concurrency

# Chapter 14: Successive Refinement

# Chapter 15: Junit Internals

## Applying Boy Scout Rule to a test-case.


# Chapter 16: Refactoring `SerialDate`


:::note

Food for thought: Use convention document during review or new hire training.

:::


 
# Chapter 17: Smells and heuristics



:::note

Food for thought: Use convention document during review or new hire training.

:::
