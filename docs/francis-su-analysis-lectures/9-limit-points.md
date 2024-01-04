---
title: 9 - Limit points
hide_title: false
sidebar_label: 9 - Limit points
description: Lecture notes by Daniel Farlow to accompany Lecture 9 from Francis Su's YouTube video series
draft: false
tags:
  - Limit Points
  - Open Sets
  - Closed Sets
  - Closure
  - Lecture 9 (Francis Su)
keywords:
  - limit points
  - open sets
  - closed sets
  - closure
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import ReactPlayer from 'react-player';

<div className="player-wrapper">
    <ReactPlayer
        width="100%"
        height="100%"
        className="react-player"
        controls={true}
        playing={false}
        loop={false}
        volume={1}
        muted={false}
        url="https://www.youtube.com/watch?v=Ebnoxgp8mLM"
    />
</div>

## Where we left off last time

What did we talk about last time? What's a useful review from where we left off and where we were going?

- **Metric spaces:** We began discussing this concept of how you put a notion of distance on a space of things so a metric space is really a set together with a notion of distance. Last time we left off discussing a very important concept, that of a limit point. Recall that $(X,d)$ represents a metric space where $X$ is the set and $d$ is the metric that gives the notion of distance for objects in $X$, and the metric satisfies three properties:

  1. Nonnegativity and zero if and only if the points are the same.
  2. Symmetry 
  3. Triangle inequality (this is often the most interesting property to verify as to whether or not a proposed notion of distance is actually a metric)

- **The usual metric:** We've seen one example, namely the usual metric. So when you say $\R^n$, what you really mean is $(\R^n,d)$; that is, you want to talk about $\R^n$ together with the Euclidean metric $d$, where this is given by the absolute value of the difference if it's a real number (so $\R^1$), and in higher dimensions it's the square root of the sum of the squares of the differences of the two vectors. But there are lots of other metrics! There's the staircase metric, which basically said instead of square rooting the sum of the squares of the differences we took the sum of the absolute values of the differences between the coordinates so that basically measures how far it would take to walk from point $A$ to point $B$ if you only used north, south, west, or east motion. So that's one notion of distance. We saw some examples last time on other spaces as well such as the space of genome sequences, where you might have a distance that just measures the number of places where two genome sequences differ. There are lots of sets you might be interested in. 

- **Exotic metrics:** There are some vaguely exotic metrics out there too. For example, we might have $(X,\delta)$, where $X$ is any set and $\delta$ represents the discrete metric. What's a discrete metric? Well, it basically says let's take the distance between $p$ and $q$ to be either zero if $p=q$ or one otherwise; that is, we have the following:
  
  $$
  \delta(p,q)=
  \begin{cases}
  0 & \text{if}\ p=q,\\
  1 & \text{if}\ p\neq q.
  \end{cases}
  $$

  Is $\delta$ actually a metric? Does this satisfy the triangle inequality? If the points are different, then we have 1 on the left-hand side and either 1 or 2 on the right-hand side. If the points are the same, then it holds trivially. So what is the discrete metric really doing? It's basically asking whether or not two points are the same. If they are not, then we think of them as having distance 1 from each other. So imagine the real line with the discrete metric. That's basically a cloud of points that are all distance 1 from each other since none of them are the same. So somehow this idea of a metric begins to create a geometry which is different from the usual geometry (i.e., using the Euclidean metric). The real line with the Euclidean metric looks exactly as we expect it to, namely a straight line extending infinitely far in two directions, but the real line with the discrete metric looks like a cloud of points, an uncountable cloud of points, where all the points are a distance 1 from each other. The associated notion here is, of course, once you have a metric, you can start talking about which points are close, and one way to gather close points together is to talk about neighborhoods or open balls, where an open ball or a neighborhood is basically a set that looks like a ball around a point. We often write $N_r(x)$ to communicate this, where the visualization is $x$ as the center and a (dashed) ball surrounding $x$ with distance $r$ from $x$ to the ball, where the neighborhood is *all* of the points inside the ball. So neighborhoods tell us essentially which points are close together. When you take topology, you'll basically be redoing analysis just referring to open balls and ignoring or not referring to a metric.

- **Open balls and discrete metric:** What are the open balls for a space endowed with the discrete metric? So if we have $(X,\delta)$, the open balls are single points if $r\leq 1$ or all of $X$ if $r>1$. What would the notion of a closed ball be? What are the closed balls if, say, $r=\frac{1}{2}$. The open ball is just a single point $x$. The closed ball is actually the same thing in this weird space, namely the point $x$. It's not so weird actually. The discrete metric is just asking whether or not two things are different (perhaps most useful to a computer scientist).

- **Limit points and balls:** We have this notion of balls, and now we can define what it means to be a limit point. Now, of course, the motivation here is to give me some sense of when a certain set of points is getting close to another set of points. So, "When does a set $E$ 'approach' a point $p$?" We might have a couple of different pictures in our head. How might we capture this idea mathematically?

- **Limit point (definition):** A point $p\in X$, where here $X$ denotes a metric space and all other spaces from here on will denote metric spaces unless otherwise specified, is a limit point of $E$ if *every* neighborhood of $p$ contains a point $q\in E$, where $q\neq p$. 

## Examples of limit points

What are some examples of limit points?

- **Example 1:** In $\R$, suppose $G=\{\frac{1}{n}\mid n\in\N\}$. So we have the set of all positive reciprocals, where it's clear things are clustering a lot near 0. We have that 0 is a limit point. Why would 0 be a limit point? What's the justification? Well, it had better be true that every ball around 0 contains another point not equal to zero but is in $G$ (i.e., is a reciprocal). Neighborhoods of $p$ look like $(p-\epsilon,p+\epsilon)$. 

- **Example 2:** In $\R^2$, suppose we have the set $B$ defined in the following way (let $z$ stand for a point *outside* of the set $B$):

  <div align='center' className='centeredImageDiv'>
    <img width='500px' src={require('@site/static/img/lecture-images/L9-f1.png').default} />
  </div>

  Note that point $b$ is excluded from what looks like a nose. (You can think of it as a nostril of sorts.) Point $c$ is on the boundary. Which of the labeled points above are limit points of the set $B$? We see that $a$ and $z$ are not limit points while $c$, $d$, $e$, and $b$ are limit points. When is a point *not* a limit point? Learning to negate a definition or a condition is a useful skill. So let's spend a moment talking about that. What does it mean to say that a point is not a limit point? 

- **Not a limit point:** A point $p$ is *not* a limit point of $E$  is there exists a neighborhood $N$ of $p$ such that $N$ does not contain any other points of $E$. One question is if you have a limit point, then does an open ball have to contain infinitely many points? We'll answer momentarily. As an aside, it's useful to note that the term "topology" refers to the set of open balls so a collection of open balls is called a topology. To see why $a$ and $z$ are *not* limit points in the picture above, all we must do is find *some* open ball around $a$ or $z$ that does not contain any other points in the set $B$, and that is easy to do, but we claim the way $a$ and $z$ are not limit points is slightly different in character. Even though they're not limit point, $a$ is in the set whereas $z$ is not. So we have a special name for points that are in the set but not limit points. The points that are in the set but not limit points are called *isolated* points.

- **Isolated point (definition):** A point $p$ is an isolated point of $E$ if $p\in E$ and $p$ is not a limit point of $E$. Are there any other isolated points in the picture above? The nonlabeled point that is in $B$ is an isolated point (i.e., the right "eye"). Anything else? No! How about for the set $G=\{\frac{1}{n}\mid n\in\N\}$? All points of $G$ are isolated; for example, one one-millionth is an isolated point because if we look at $x=\frac{1}{1000000}$, then I can find a small enough neighborhood around $x$ that *misses* $\frac{1}{999999}$ and $\frac{1}{1000001}$, namely the neighborhood $(\frac{1}{999999}+\epsilon,\frac{1}{1000001-\epsilon})$. (Note that $0\not\in G$ and so cannot be an isolated point.) The "eyes" in our picture $B$ are isolated too. For the set $B$, now let's look at $d$. How is $d$ different from $a$? The point $d$ has the property that if you take a ball around it that there is a ball around it that not just intersects $B$ but the whole neighborhood is inside. That's kind of on the opposite extreme of being isolated. So we have a name for that too. We call such a point an interior point.

- **Interior point (definition):** The point $p$ is an interior point of $E$ if there exists a neighborhood $N$ of $p$ such that $N$ is completely contained as a subset of $E$. Is that true of any other point not labeled in our picture? Yes, especially the points around the nose. What's the negation of the interior point definition? (Think about this.) Are there any interior points of $G$? Our set $G$ actually has no interior points. Is the point $b$ an interior point of $B$? No. Why not? Because $b$ is not in $B$.

- **Example 3:** In $\R$, consider $\emptyset$, $\R$, and $\Q$; then in $\R$ with the discrete metric, consider the same sets. And determine what the limit points are, the interior points, and the isolated points. Note there are essentially 6 examples to grapple with here.

  1. In $\R$, under the usual metric, we note that $\emptyset$ has no limit points. Why not? Is it true that every neighborhood of $p$ contains a point of the empty set that's different from $p$? No, because there's no point in the empty set. So the empty set has no limit points in the usual metric. 
  2. In $\R$, under the discrete metric, we still have the same problem. So the empty set has no limit points here either.
  3. In $\R$, under the usual metric, every point in $\R$ is a limit point. 
  4. In $\R$, under the discrete metric, there are no limit points. Why? Consider a point $p$. Is there a neighborhood of $p$ that completely misses other points under the discrete metric? Yes, because the balls are points, and the whole thing. 
  5. In $\R$, under the usual metric, the set $\Q$ has every point of $\R$ as a limit point. It doesn't matter where our point $p$ is. Are there isolated points of $\Q$? No. Because if it's a limit point, then it's not an isolated point.
  6. In $\R$, under the discrete metric, the set $\Q$ has no limit points much for the same reason as why $\R$ did not above.

  Does $\R$, as a subset of itself, have any interior points if the metric is discrete? In $\R$ discrete, every point is actually an interior point. 

- **A theorem concerning limit points:** If $p$ is a limit point of $E$, then every neighborhood of $p$ contains infinitely many points of $E$. We will give a proof by contradiction. Suppose there exists a neighborhood $N$ of $p$ with only finitely many points of $E$ (if one of the points turns out to be $p$ itself, then simply ignore it and look at the minimum that is nonzero, where the following fleshes this out more), say, $e_1,\ldots,e_n$. Then there will be a least distance from one of these points $e_i$ to the point $p$ because every finite set of numbers has an infimum that is achieved. Let $r=\displaystyle\min_{i=1}^N\{d(p,e_i)\}$. Such a minimum exists because the set is finite. But the neighborhood $N_r(p)$ has no points of $E$, a contradiction. 

## Important terms

What are some more important terms? 

- **Open sets (definition):** We have a concept for a set that looks like the nose in the picture for $B$ that has the property that every point is an interior point. Such a set is called open. More precisely, a set $E$ is called open if every point of $E$ is an interior point of $E$. In the example for $B$, the "nose" of $B$ is open. Why is it open? Basically, an open set looks something like a dashed curve or loop or some set that doesn't have its boundary. What if the nose had two nostrils? Then yes, it would still be open. In $\R$, what do the open sets look like? Is the open ball open? Consider the interval $(a,b)=\{x\mid a<x<b\}$. Is it open? Yes! That's why we often call it the open interval. Well, it's certainly true that no matter which point you pick that there's a ball around it that's still contained inside the set. What about the empty set? Is it open? Yes, it is vacuously true (i.e., every point of $\emptyset$ is an interior point of $\emptyset$ because there are no points in $\emptyset$). What about all of $\R$? Is that open? Yes, because we can clearly find an interval. What might it mean for a set to be closed?

- **Closed sets (definition):** First, note that a set being "closed" is not the negation of that set being "open." Why? Well, we say a set $E$ is closed if $E$ contains all of its limit points. (In some sense, a closed set is a set with its boundary included.) In $\R$, is a point closed? Does it contain all its limit points? What are all of the limit points of a single point? There are no limit points! So it contains all its limit points. So in $\R$, we have that $\{p\}$ is closed. Is the interval $(a,b)$ closed? No, because $a$ and $b$ are limit points. How about the interval $[a,b]=\{x\mid a\leq x\leq b\}$? Yes, that's why we call it a closed interval. Now, the intervals $(a,b]$ and $[a,b)$ are neither open nor closed. These intervals are often called half-open intervals. The idea is that they are not open and they are not closed either. Is the empty set in $\R$ closed. It contains all of its limit points which are none! Is $\R$ closed in $\R$? Yes, it contains all of its limit points as well. So $\emptyset$ and $\R$ are both open and closed. These are called clopen sets. This suggests something important actually, namely this idea that if you have a set that isn't closed, then there is a way to try to close it. For instance, the set $B$ we considered earlier, is the rectangular piece that represents the mouth closed? Clearly not. But how could we make it closed? We could give it an upper lip perhaps. The claim is that it is then closed. It may seem obvious but it may not be as obvious as it looks. So the mouth of $B$ is not closed currently. Is it open? No. So it's neither open nor closed. Can we close the mouth? Here's the idea: The idea is to look at $E'$, which we'll define below.

- **The closure of a set:** Let $E'$ be the set of all limit points of $E$. The closure of $E$ is $\overline{E}=E\cup E'$, where $E'$ is not standard notation. So one of the big questions you have to ask yourself is whether or not $\overline{E}$ is closed. 
