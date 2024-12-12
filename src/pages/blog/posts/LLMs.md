---
layout: ../../../layouts/blog.astro
title: LLMs Are Not Really All That Great
pubDate: 2024-11-30
description: Why I think you should consider limiting the use of LLMs when coding
---

<style>
img { width: 50%; text-align: center; margin: auto; padding: 2em 0 }
@media only screen and (max-width: 768px) {
img {
width: 80%;
}
}
article * {
    font-size: 1.1em;
}

table {
    border: 0 !important;
}

th, td, tr {
    border: 0 !important;
}

table * {
    font-size: 1em;
    border: 0;
}
</style>

_When I first saw a demo of a use case where GPT-2 was used to interpret user input 
and transform it into a JSON structure that could be sent to our backend, I was kind of 
blown away. I suppose that's how many people felt after using ChatGPT for the 
first time. But now, the honeymoon is over. At least, it seems over to me._ 

| ![The Dunning-Kruger Effect](../../../assets/dunningkruger.webp) |
|:--:| 
| *The Dunning-Kruger Effect* |

## Mood Swings

Ah, don't we all love the honeymoon phase? Floating on a cloud like nothing bothers 
us. We are amazed by everything. And I'm not even talking about marriage between 
people—this is a blog post for developers, after all. A new smartphone 
might be a more relatable feeling. It feels fresh and exciting. Its flaws are just considered flukes. That's the 
same feeling I had when using ChatGPT for the first few times. I was amazed by what it 
could do, and its capabilities seemed endless.

However, time went by, and its flaws became apparent... And boy, did they hit hard. Nonexistent APIs, 
outdated external packages, spaghetti code, premature 
optimization, and so on. The worst part is that these systems confidently make mistakes. They have no real sense 
of what they might be unsure about. The duality drove me crazy. Either the responses 
were plainly brilliant, or they were painfully wrong. 

Everybody (or thing, I suppose) makes mistakes. But finding a bug in someone else's code is objectively harder to 
debug. And that's where I take issue with everyone promoting LLMs as a way to become better at programming. 
Making mistakes is key to learning. If instead LLMs make all the mistakes, what's there to learn? Even worse, 
if a system spoon-feeds you a correct answer, there is a vital part of learning missing. There hasn't been 
an opportunity to be wrong.

Whatever GitHub tells you their [own study](https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/) found, it's not always a bed of roses.

## Productivity

But LLMs give productivity a boost, right? As always, the consideration between the long term and the short term is a big factor here. 
AI tools help you go fast. But do they really? There are three things LLMs do really well in my opinion: using the right syntax, reproducing a known algorithm, 
and generating boilerplate. I'd argue generating boilerplate is the only real time-saver. The other 
two points could easily be improved with experience. I'm confident that 
experience contributes more towards being a productive developer than AI assistance. To me, and I think 
to a lot of people, this seems only logical. But I'll go one step further. I think using AI assistance 
is a bad way to become better at software engineering.

Let's say you want to learn a new programming language, and your favorite AI assistant takes the wheel 
when you're unsure about syntax. Your velocity is probably high from the get-go. You and your bosses 
are happy with the work you've done and at what speed you were able to complete it. From what 
moment would you be confident to write without AI assistance? 

And here lies the problem. People tend to overestimate their abilities. 
Ya know, the Dunning-Kruger Effect. But, just for fun, try to stop using AI for 
a while. You'll notice the urge to press tab anytime you write something. You'll notice 
the "Copilot pause," that brief moment where you wait for code to autocomplete.

That's why I think it also harms your productivity. If you're only productive 
with the tooling enabled, are you really productive?

## What's the Harm?

So what? The tools are available. Why not use them? Fair point—but let me make a 
counter-argument. What if the tools suddenly become unavailable? Let's say, due to a price 
increase. [That scenario is not that far-fetched](https://x.com/sama/status/1864736282276171810).

OpenAI made $3.7B in revenue this year (2024). But that revenue isn't nearly enough. 
[They will lose about $5B this year](https://foundationcapital.com/why-openais-157b-valuation-misreads-ais-future/). 
Training LLMs apparently costs a lot of money. [It also takes a stupid amount of electricity](https://www.reuters.com/markets/deals/constellation-inks-power-supply-deal-with-microsoft-2024-09-20/), so there's 
even an ecological argument to be made here. Those factors largely remain hidden costs. 

It boils down to this: AI tools are artificially low-priced. Like most products of new startups, 
they rely on mass adoption. AI is everywhere now, and investors noticed. But will the bubble burst 
sometime in the near future? There's no way to tell for sure.

## My Two Cents

I'm mostly against overuse of AI code assistants. However, sometimes it feels like magic 
and it can be a real game-changer. I'm mostly trying to prevent people from using it as their 
Swiss pocket knife as an answer for all questions.

So, use it but consider the drawbacks. And don't forget to keep challenging yourself.
