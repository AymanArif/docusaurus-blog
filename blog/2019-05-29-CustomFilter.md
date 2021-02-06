---
id: CustomFilter
title: Creating Custom Filter in Java
author: Ayman
author_title: Software Engineer
author_url: https://github.com/aymanapatel
author_image_url: https://avatars.githubusercontent.com/u/13992816?s=460&u=9944febc50832840a7542bfdaffdedbd5eb87848&v=4 
tags: [java, filter]
---


|Language|Topic|Description|Links|
|--|--|--|--|
|Java| Intercepting Filter Pattern|Creating a custom Intercepting Filter Pattern|[Code link](https://www.tutorialspoint.com/design_pattern/intercepting_filter_pattern.htm)|


<!--truncate-->

![Intercepting filter ](https://www.javatpoint.com/images/designpattern/intercepting-filter-pattern.png)

# Filter

> Perform certain task before or after execution of request by ***request handler***/**Target** object.

# Filter Chain

> Contains multiple filters and help them to be executed in a certain defined order. `@Order`

1. Ordering
2. Contain `execute()` that executes `execute()` defined in all filters.
3. Defines **Target** for invokation by **Client** object. 


# Filter Manager  

> CREATES and MANAGES **Filter Chain**. CREATES **Filter**

1. Sets ***target*** for **filter chain**
2. Executes **filter chain** (**Fitler chain** has `execute()` and **Filter Manager** calls this `execute()`)
3. Sets ***target*** defined in **Filter Chain.**

# Client

> INVOKES **FilterManager**. Object that sends request to **Target**.

# Target 

> **Target Object** IS ***request handler***.
