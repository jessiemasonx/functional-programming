### Day 1

This was the first day of the project, at a new location. Mark from OBA came by to tell us about the project we had to do. After that, Titus gave a bootcamp to teach us more about functional programming.

After that we started coding. We got access to Rijkvanzanten's github repository so we could use his code for the API. I had some troubles installing it, because XCode wasn't installed on my laptop, because I had installed the latest iOS Update. I tried to install XCode, but the wifi was very slow so I wasn't able to complete the installation.

### Day 2

On this day we sat at school because there was no place at the OBA where everyone could sit together. We sat in the medialounge. I was finally able to complete the XCode installation, so I could install Rijkvanzantens' code. After I did that I looked at the data for a while and started to think about what research questions I could come up with.

#### 5 things I could visualise based on the data

1.  Has the amount of released books about Disney increased or decreased over the last 10 years.
2.  Has the amount of pages in a children’s book increased or decreased over the years?
3.  Has the amount of pages in books about movies changed over the years?
4.  **By how much has the amount of released school books changed over the past years?**
5.  By how much has the amount of e-books changed over the last years.
6.  **Has in The Netherlands the ratio between men and women who write novels changed over the years?**

### Day 3

On this day we were at the OBA again. I sat with Linda and we talked about the research questions we had written down and we tried to improve them. I found out that a lot of my questions could be answered with _yes_ or _no_, but I needed open questions.

I couldn't decide for a long time whether to go with research question number 4 or 6.  
So I thought of the sub-questions and variables I would need for both, and decided which one to go with after.

#### Variables for number 4:

-   Book type (whether it's a school book or not)
-   Year of publication

#### Sub-questions for number 4:

-   How many books were published in 2017?
-   In which year where the most books published?
-   In which year where the least books published?

#### Variables for number 6:

-   Book genre (novel)
-   Gender of the author
-   Year of publication

#### Sub-questions for number 6:

-   How many men published a novel in 2017?
-   How many woman published a novel in 2017?
-   In which year did most woman publish a novel?
-   In which year did most men publish a novel?
-   How many male authors write novels?
-   How many female authors write novels?
-   In what year was the ratio the biggest?

#### Decision

I decided to go with research question number 6:
**Has in The Netherlands the ratio between men and women who write novels changed over the years?**

After I had decided what research question to go with, I changed my code to the code Dennis put in slack, because that seemed a good way to use the API. Also during this day Titus and Laurens gave bootcamps with _a lot_ of info which I needed to process after that.

-   Got Dennis' code and used it
-   Titus and Laurens gave bootcamps with _a lot_ of info which I needed to process after that.
-   Standup

### Day 4

This was a good day for me. First of all, on this day I thought of my hypothesis:

#### Hypothesis

Years ago the difference in the ratio of men and women who write novels was smaller than it is now.

This was also a day where I suddenly understood a lot a lot of things about my code.

I made up a **step-by-step** plan so I would have an overview of things I wanted to do to get the right data:

How am I going to do this:
1. Filter on only books
2. Filter on novels
3. Filter per year
4. Make sure you can see the names of the author
5. find out the gender of the author
6. compare everything

I was able to complete step 1, 2, 3 and 4 on this day.

I decided that if compare _every_ year, there would be too many results to compare. This is why I decided to look at every 5 years. I checked which years had enough results for me to use. And this is what I found:

(I left the years out where there were 0 results)

| year | amount of results |
| ---- | ----------------- |
| 1980 | 1 result          |
| 1984 | 3 results         |
| 1987 | 1 result          |
| 1989 | 1 result          |
| 1991 | 1 result          |
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

On this day Bert Spaan came to talk about Observable and D3. After this, I started looking at examples of Observable and D3 to find out more about it all. What I also did this day is made sure I got the specific data that I needed in my terminal. I did this with code that Chelsea and Maikel explained to me.

### Day 6

This day started with Rejo from Bits Of Freedom and he told us about online privacy and that you should always be critical. I thought it was very interesting. After that, Titus spoke about D3. He tought us the most important things about it and that was very useful.

Later I started working on my own code again. I worked together with Chelsea to make sure I could see more than 20 results. We dit this by using Wouters' code, which runs on Rijkvanzantens' API. So basically we changed back. After I did that I looked a bit more at D3 and followed some turotials.

### Day 7

On this day I started looking at how to specifically get data from more years at the same time. For example I wanted to see the books from 2018, 2015 and 2010 and not 1 of those years. Maikel helped me with this. Also this day I helped Linda with getting more than 20 results, because I had already done that the day before. I also looked a little more at D3, but didn't really get far. In the end of the afternoon, the API all of a sudden stopped working. But this only happened to anyone who used Wouters' code. We didn't know why.

### Day 8

This day started with Titus helping us with the API that stopped working. He fixed it eventually. After that I used a json file that Wouter give me with male and female names, so I could use that to find out whether my authors were a man or a woman. I needed this for my research. I did this together with Chelsea.

I also started using Wouters' new wrapper because it was a better version of the old one. For example it has a progress bar in the terminal met loading the data 🤩.

Also on this day I realised that in my results I couldn't see the genre of the book. This was because I never thought this would be relevent, because I was only looking at books with the genre 'romantisch verhaal' anyway. But this day I figured I would try it out just to see if it's correct, but I noticed something. There were books where the genre was undefined, and these books were in my results. I had to change the code so that they wouldn't be in my results anymore. Wouter helped me with that.

I also worked more on D3 on this day. I didn't really know what to do but then eventually I found a line graph that I could use with my data. I copied the code so I could use it but I hadn't used my data yet. I did start putting all my data in a json file so I could pick it up later an use it in the graph.

### Day 9
The last day before the deadline. This was definitely the worst day for me. I started with full motivation, thinking this was going to be fine. But the more I worked on it, the more I realised that there was so much more to do. I realised that it wasn't going to be possible to do all of this in time.

What I wanted to do is get all the data from the console and put it into a json file. Then I wanted to write functions to count the amount of people per year and calculate that into a percentage. I was trying to do this from 9:00 until about 12:00, but then I decided to just count the amount of people manually and also calculate the percentage manually.
Hopefully next week I will have enough time to dynamically get the data and use it in my data visualisation and calculate it with a function.
