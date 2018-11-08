# Functional Programming

- [Research](#research)
- [Visualisation](#visualisation)
- [Experience and opinion](#experience)
- [What's next](#whats-next)
- [Credits and help](#credits-and-help)

## Research

There so many things I could look into in the OBA API, that it was very hard for me to decide what to go with.

In the beginning I just looked at all the data for a while and came up with a couple of things I could look into. This is what I came up with:

### 6 research questions

1.  Has the amount of released books about Disney increased or decreased over the last 10 years.
2.  Has the amount of pages in a children’s book increased or decreased over the years?
3.  Has the amount of pages in books about movies changed over the years?
4.  **By how much has the amount of released school books changed over the past years?**
5.  By how much has the amount of e-books changed over the last years.
6.  **By how much has the difference between the percentage of men and women who write novels in the Netherlands changed over the years?**

The two **bold** research questions (number 4 and 6) were the ones that I found most interesting. Because I couldn't decide yet, I just didn't. I started thinking about what variables I would need for *both* and about what sub-questions I could come up with for *both*.

### Variables for number 4:

-   Book type (whether it's a school book or not)
-   Year of publication

### Sub-questions for number 4:

-   How many books were published in 2017?
-   In which year were the most books published?
-   In which year were the least books published?
-   Between which years did the amount of published books change the most?

### Variables for number 6:

-   Book genre (novel)
    Name of the author
-   Gender of the author
-   Year of publication

### Sub-questions for number 6:

-   How many men published a novel in 2017?
-   How many woman published a novel in 2017?
-   In which year did most woman publish a novel?
-   In which year did most men publish a novel?
-   How many male authors write novels?
-   How many female authors write novels?
-   In what year was the ratio the biggest?

### Decision

I decided to go with research question number 6:

**By how much has the difference between the percentage of men and women who write novels in the Netherlands changed over the years?**

After I made that decision, I thought of what I expected and came up with my __hypothesis__:

__Over the last years the difference between the percentage of men and women who write novels in the Netherlands has become bigger because men write less novels than they used to.__

<details>
 <summary>Dutch translation of the hypothesis</summary>
 Het verschil in het percentage mannen en vrouwen die romantische verhalen schrijven in Nederland is in de laatste jaren meer geworden omdat mannen minder romans schrijven dan ze eerst deden.
</details>

<br>
The reason I thought this was the case was because I thought men have become less romantic over the past years.

What I did next was try to get the data I needed.  
I had to filter my results on genre, which was 'romantisch-verhaal' and I also needed to filter on Years of Publication. What I knew I also had to do was get the gender of the author. So I had to make sure I could see the name, to be able to see the gender.

I wasn't sure how many years I was going to look at. I didn't want to just look at the last 10/5 years, because I thought it wouldn't have changed so much in that time. I also didn't want to look at the last 40 years, because for example in 1980, no books with the genre 'romantisch-verhaal' had been published.

I eventually decided to look at every 5 years, starting from 1995, because that was the first year rounded of by 5 that had the results.

`I also wrote down per year how many results I found. If you want to see that, click` [here](#here).

The reason I looked at every 5 years is because I thought it was going to take me too long to find results for 20 years. This is because my search was very specific, and I had to send loads of requests to get any results back. However I am hoping later when I have time, to add more years into my research. But for now I focused on these: 1995, 2000, 2005, 2010, 2015 and 2018. I know it looks a little strange that 2018 is in there,  but I wanted to compare all these years to __now__.

The results in my terminal looked something like this:
```json
{
	"author": "Moyes, Jojo",
   "title": "Portret van een vrouw / Jojo Moyes",
   "publicationYear": 2015,
   "language": "dut",
   "genre": "Romantisch verhaal"
},
{
	"author": "Macomber, Debbie",
   "title": "Een nieuw begin in Rose Harbor / Debbie Macomber",
   "publicationYear": 2015,
   "language": "dut",
   "genre": "Romantisch verhaal"
}
```

I worked with this data for a long time. But after a while, in the second week, I realised this wasn't the data I had to work with. I just needed to know the gender of the author and the year of publication.

The thing that I haven't been able to do is put the gender of the author in these results. I was able to get the gender, but I logged it separately, so it came out like this:

```json
{
	"name": "Katie",
	"gender": "Vrouw"
}, {
	"name": "Ietje",
	"gender": "Vrouw"
}, {
	"name": "Dorothy",
	"gender": "Vrouw"
}
```

My plan was to dynamically load my data into my data visualisation. But eventually I decided I wasn't going to do this. I was working on getting the results for long and I really wanted to work on D3. So I decided that I was just going to collect the data and put it in a json file. And then I was going to get that json into the data visualisation.

What I did was look at one year at a time, and put that into the json file. I did this for every year that I was going to look at.

My json file that I used looked something like this:

```json
{
	"name": "Elly",
	"gender": "Vrouw",
	"year": 2018
},
{
	"name": "Kristin",
	"gender": "Vrouw",
	"year": 2018
},
{
	"name": "Lucinda",
	"gender": "Vrouw",
	"year": 2018
},
```

What I needed to do in my javascript is count per year how many men and how many women there were. Then I had to use that to calculate the percentage of men, and show that in the visualisation.

I was working on this on the last day, but I just couldn't work it out. I needed more time and realised that if I was going to continue this way, I woulnd't have any visualisation by friday.

I really wanted to start working on D3 because that was something I was very excited about. After trying for such a long time, I decided to just start working on my visualisation.

What I did was I counted the amount of men and women manually, on a piece of paper, and the percentage too. I then put those results in a json file, and used that in my visualisation.

### Graph / Chart Type

It was very hard for me to choose what graph to go with. In the beginning I wanted to make __pie charts__ on a timeline. This is because I needed to compare a percentage and I thought percentages are most clearly shown in a pie chart. The problem here is that if you have about 10 pie charts next to each other, it's not as clear anymore.

Laurens helped me with the decision, and I eventually decided to go with a **line graph**. I would then only focus on the men, because a viewer knows that if 40% are men, 60% would be women. And also, my research was mostly to check if it's true that men had become less romantic. Another reason why I went for a line graph is because it shows the process in time nicely.

I used this pretty [Line Graph](https://bl.ocks.org/alandunning/cfb7dcd7951826b9eacd54f0647f48d3) on [bl.ocks.org](https://bl.ocks.org), that was perfect.

## Visualisation

This is the result. As you can see, based on the data I found, the percentage of men has actually increased and not decreased (except for in 2018). This is not what I expected.

## Experience and opinion

Overall, I thought this project up until now was very informative. There are so many things that i've done that I had never done before. I had never worked with an API and getting my data like this. Focussing on the functional programming was also challenging for me because I know my Javascript skills aren't as high as others'. I did need a lot help with my code because of that.

The thing I was most excited about this project was D3. When Titus gave us a bootcamp I found it extremely interesting and wanted to start right away. Unfortunately, I haven't worked as much on D3 as I wanted to. This is because I spent so much time on trying to get my data. I really wanted to make an amazing visualisation and wanted the perfect data for that. It was only later when I realised it was taking too much time, and I really needed to start working on D3.

## What's next

There are a couple of things that I wanted to do but wasn't able to.

One of these things was getting my results to look like this (with the gender):
```json
{
	"author": "Moyes, Jojo",
	"title": "Portret van een vrouw / Jojo Moyes",
	"publicationYear": 2015,
	"language": "dut",
	"genre": "Romantisch verhaal",
	"gender": "male"
}
```

What I would also like is to get the results of all my years at the same time, instead of choosing one year and getting the results from that year.

Furthermore, I want to load my data dynamically. And use that data to calculate the percentage and use that in my visualisation.

I would also like to improve my D3 skills a little more than I already have, just because right now I don't feel like I've had enough time to do so.


## Credits and help

### The people that helped me the most
<img src="https://github.com/jessiemasonx/images/blob/master/linda.png" width="150"> | <img src="https://github.com/jessiemasonx/images/blob/master/chelsea.png" width="150">| <img src="https://github.com/jessiemasonx/images/blob/master/maikel.png" width="150">| <img src="https://github.com/jessiemasonx/images/blob/master/chelsea.png" width="150">|<img src="https://github.com/jessiemasonx/images/blob/master/dennis.png" width="150">
---|---|---|---|---
[Linda de Haan](https://github.com/LindadeHaan) | [Chelsea Doeleman](https://github.com/GiuliaM) | [Maikel van Veen](https://github.com/Maikxx) | [Wouter Lem](https://github.com/Mimaaa) | [Dennis Weegereef](https://github.com/pierman1)

Other helpful resources
- [Daniels Documentation](https://github.com/DanielvandeVelde/functional-programming/blob/master/README.md)
- https://bl.ocks.org/mbostock
- https://beta.observablehq.com/
