# Front End Take-Home

Our take-home is a brief test of your fundamental JavaScript knowledge. 

It's likely much shorter than most take-homes you will encounter. This is because we feel that your time is valuable, and we do not want our test to be biased against people who have a busy schedule.

We do not expect servers or React apps, so please don't feel like you need to spend hours adding these. If you pass this test, you will have the opportunity to expand on it and demonstrate your skills during an on-site pair programming interview.

## The Task:

We would like you to create a function which generates the Premier League table.

<a href="https://github.com/openfootball/football.json/blob/master/2016-17/en.1.json">https://github.com/openfootball/football.json/blob/master/2016-17/en.1.json</a>

Given the full list of matches in the season from the link above, your script must output a sorted array containing the following information for each team:

- rank
- team name
- wins
- draws
- losses
- goals for
- goals against
- goal difference
- points

Teams are awarded 3 points for each win, 1 point for each draw, and 0 points for each loss.

The array must be sorted by rank. Rank is determined by points, then goal difference, then goals scored.

### What we’re looking for:

Clean, well structured code that outputs the correct results for the 2016-17 season. We are interested both in how you approach the problem and how you validate the output from your solution.
 