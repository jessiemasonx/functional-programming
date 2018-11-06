## Process

### Day 1

- Introduction day.
- Mark introduced the project
- Titus gave a bootcamp about javascript
- Started to recieve data using rijkvanzantens' repo
- Coulnd't do it because got a lot of errors. This was because I didn't have XCode on my MacBook, because of the latest update. Had to install it but because the wifi wasn't great it took a very long time.

### Day 2
- Installed XCode because installation wasn't completed the day before
- We sat at school
- Got research questions from the data

#### 5 things I could visualise based on the data

1. Has the amount of released books about Disney increased or decreased over the last 10 years.
2. Has the amount of pages in a children’s book increased or decreased over the years?
3. Has the amount of pages in books about movies changed over the years?
4. __By how much has the amount of released school books changed over the past years?__
5. By how much has the amount of e-books changed over the last years.
6. __Has in The Netherlands the ratio between men and women who write novels changed over the years?__



### Day 3

- Talked about my research questions with Linda, to improve then
- Though of my sub-questions
- Got Dennis' code and used it
- Titus and Laurens gave bootcamps with a lot of info
- Standup

I couldn't decide for a long time whether to go with research question number 4 or 6.  
So I thought of the sub-questions and variables I would need for both, and decided which one to go with after.

#### Variables for number 4:
- Book type (whether it's a school book or not)
- Year of publication

#### Sub-questions for number 4:
- How many books were published in 2017?
- In which year where the most books published?
- In which year where the least books published?

#### Variables for number 6:
- Book genre (novel)
- Gender of the author
- Year of publication

#### Sub-questions for number 6:
- How many men published a novel in 2017?
- How many woman published a novel in 2017?
- In which year did most woman publish a novel?
- In which year did most men publish a novel?
- How many male authors write novels?
- How many female authors write novels?
- In what year was the ratio the biggest?


#### Decision
I decided to go with research question number 6:
__Has in The Netherlands the ratio between men and women who write novels changed over the years?__

### Day 4

- Thought of my hypothesis
- All of a sudden understanded a lot of things
- Was finally able to recieve all the data I needed

#### Hypothesis
Years ago the difference in the ratio of men and women who write novels was smaller than it is now.

How am I going to do this:
1. Filter on only books
2. Filter on novels
3. Filter per year
4. Make sure you can see the names of the author
5. find out the gender of the author
6. compare everything


- #### get only books
   `facet: 'type(book)'`
- #### get only novels
When I search for 'novels' in titles I get books, but it gives me books with different genres. Now I added it as Facet by putting `facet: 'genre(romantisch-verhaal)'`
- #### Filter per year
`'pubYear(2000)'`


I decided that if compare *every* year, there would be too many results to compare. This is why I decided to look at every 5 years. I checked had enough results for me to use. And this is what I found:

(I left the years out where there were 0 results)

| year | amount of results |
|------|-------------------|
| 1980 | 1 result          |
| 1984 | 3 results         |
| 1987 | 1 result          |
| 1989 | 1 result     	   |
| 1991 | 1 result      	   |
| 1992 | 5 results         |
| 1994 | 2 results         |
| 1995 | 15 results        |
| 2000 | 66 results        |
| 2005 | 106 results       |
| 2010 | 388 results       |
| 2015 | 271 results       |
| 2018 | 381 results       |

1980 is the earliest year with results I found.


### Day 5
gastspreker bert spaan over observable en d3
beginnnen met kijken naar observable
specifieke data in terminal door code van chelsea en Maikel

### Day 6

- Rejo vertelde over bits of freedom over privacy enzo
- Titus vertelde over d3
- gefixt met chelsea dat ik alle resultaten kan zien
- gekeken naar d3
-

### Day 7
- Filter on specific Years
- help linda met meerdere resultaten zien
- aantal showen console.log("All the results: ", results.length)
- d3 verder proberen `npm install d3`
- `const d3 = require("d3");`
-
