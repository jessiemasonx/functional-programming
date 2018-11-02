## Process

### Day 1

Introduction day.
man kwam project uitleggen
titus gaf veel stof uitleg javascript
begin aan project data ophalen met repo van rijkvanzanten
lukt mij niet want errors
moet eerst nog Xcode installeren maar duurt jaren

### Day 2
- Installed XCode because installation wasn't completed the day before
- We sat at school
- Got research questions from the data
xcode geinstalleeeeerd

#### 5 things I could visualise based on the data

1. Has the amount of released books about Disney increased or decreased over the last 10 years.
2. Has the amount of pages in a children’s book increased or decreased over the years?
3. Has the amount of pages in books about movies changed over the years?
4. __By how much has the amount of released school books changed over the past years?__
5. By how much has the amount of e-books changed over the last years.
6. __Is de verhouding tussen mannen en vrouwen die romans schrijven veranderd in de afgelopen jaren?__

I couldn't decide for a long time whether to go with 4 or 6.  
So I thought of the sub-questions and variables I would need for both, and decided which one to go with after.

#### Variables for number 4:
- boek soort (schoolboek of niet)
- Book type (whether it's a school book or not)
- Year of publication

#### Sub-questions for number 4:
- How many books were published in 2017?
- In which year where the most books published?
- In which year where the least books published?

#### Variables for number 6:
- Book genre (roman)
- Gender of the author
- Year of publication



#### Deelvragen for number 4:
- Hoe veel mannen hebben in 2017 een roman uitgebracht?
- Hoe veel vrouwen hebben in 2017 een roman uitgebracht?
- In welk jaar hebben de meeste vrouwen een roman uitgebracht?
- In welk jaar hebben de meeste mannen een roman uitgebracht?
- Hoe veel mannelijke schrijven schrijven romans?
- Hoe veel vrouwelijke schrijven schrijven romans?

#### Hypothesis
Jaren geleden was het verschil tussen de verhouding mannen en vrouwen die romans schreven kleiner dan dat het nu is.
Years ago the difference between the ratio of men and women who write romans was smaller than it is now.

### Day 3

- met linda gehad over de onderzoeksvragen
- deelvragen bedacht
- code van dennis gekregen en gebruikt
- heel veel stof

### Day 4

- stappenplan gemaakt
- hypothese gemaakt
- veel kwartjes vielen
- alle data op kunnen halen

How am I going to do this:
1. Filter on only books
2. Filter on romans
3. Filter per year
4. Make sure you can see the names of the author
5. find out the gender of the author
6. compare everything


- we hadden geen zitplek
- dus met zn alle in zaal
- #### get only books
  door `facet: 'type(book)'`
- #### get only romans
When I search for 'romans' in titles I get books, but it gives me books with different genres. Now I added it as Facet by putting `facet: 'genre(romantisch-verhaal)'`
- ### Filter per year
`'pubYear(2000)'`
-
