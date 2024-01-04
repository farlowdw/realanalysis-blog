---
title: 6 - The principle of induction
hide_title: false
sidebar_label: 6 - The principle of induction
description: Lecture notes by Daniel Farlow to accompany Lecture 6 from Francis Su's YouTube video series
draft: false
tags:
  - Induction
  - Lecture 6 (Francis Su)
keywords:
  - induction
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
        url="https://www.youtube.com/watch?v=D3qVXZd-ONo"
    />
</div>

## What induction actually is

So what is induction and how do we set the stage for it?

- **The natural numbers:** So what is induction? Well, induction actually takes a couple different forms. You think can think of it as a proof technique but really  you should think of it as an axiomatic property of the natural numbers. So let's begin with the natural numbers, where we take the natural numbers to be 
$$
\N=\{1,2,3,4,\ldots\},
$$ 
but we could also include 0 without an issue. That is, the fact that the particular set $\N$ begins with 1 is inconsequential &#8212; we are going to let $\N$ start with 1 because we are going to think of its elements as indexing statements that we want to prove.

- **The well-ordering principle:** The well-ordering property is a property of the natural numbers that should hopefully seem self-evident. This property for $\N$ says first of all that $\N$ is well-ordered. What does that mean? It means that every *nonempty* subset of the natural numbers has a least element. So the natural numbers are endowed with an order which is the one you usually think of. For example,

  $$
  1<2<3<4,\ldots
  $$

  If you're worried about that axiomatically, then you could begin with constructing the natural numbers using Peano's axioms. There are five axioms for the natural numbers, and it usually begins with 0. You postulate the existence of a zero. Then you postulate the existence of a successor function, which basically tells you what the next thing is. So 0 has a successor. We'll call it 1. And 1 has a successor. We'll call it 2. And so on. And there are a few more axioms, but the point is that by starting with Peano's axioms you could develop an order. So we would say, for example, that 4 is bigger than 1 if it is the case that 4 is an eventual successor of 1, if you want to go back that far. We're going to assume that we have a particular order on $\N$, and the claim is that this particular ordering is a well-ordering; that is, we claim that $\N$ has the well-ordering property that states any nonempty subset of $\N$ has a least element. This seems self-evident, and we are going to take it to be an axiom for the natural numbers. What may not seem self-evident is the relationship between the well-ordering property of $\N$ and the principle of induction. In summary, you can take the well-ordering principle to be an axiom that is something we assume and do not prove about the natural numbers. It is related to a central topic of this course, namely the principle of induction.

- **Principle of induction:** Let $S$ be a subset of $\N$ such that the following two properties holds:

  1. $1\in S$,
	2. if $k\in S$, then $k+1\in S$,

  then $S=\N$.

  Based on how the well-ordering property of $\N$ is communicated as opposed to the principle of induction, one may likely assume one is more "self-evident" than the other. For many people, the well-ordering property of $\N$ seems more evident than the principle of induction. The good news is that these two properties are equivalent. So you could take either property to be axiomatic, but we need to take at least one of them to be axiomatic. Since the well-ordering property (or \wop from now on) and the principle of mathematical induction (or \pmi from now on) are equivalent properties, we may write $\wop\iff\pmi$ to communicate this. In order to prove these properties are equivalent, we must show both direction for the biconditional. We will prove that $\wop\implies\pmi$ and circle back to the other direction if time permits. 

- **Well-ordering implies principle of induction:** Let $S$ be a nonempty subset of $\N$ such that $1\in S$ and if $k\in S$ then $k+1\in S$. Now, either $S=\N$, which is what we want to show, or $S\neq\N$ which would be a problem. So let's assume, for a hopefully eventual contradiction, that these properties of $S$ hold but that $S\neq\N$. Where is the contradiction going to come from? If we list out some numbers, say the numbers 1, 2, 3, 4, then we know by our hypotheses for $S$ that 5 will come next. Then 6. And so on. But this "and so on" is where we run into some issues. Because we cannot just keep appealing to the properties of $S$ that gives us successive numbers and claim that $\N$ is obtained in some murky fashion. That is rather unsatisfactory. Hand-wavy and grossly incomplete at best. So how might we start to think of a potentially useful way to get a contradiction? 

  What about thinking about something not in $S$? This idea is nice because it allows us to get a handle on something very specific whereby we should hopefully obtain a contradiction but where we aren't appealing to a property over and over again. So consider the set of all natural numbers *not* in $S$. More specifically, consider the set $A=\N\setminus S$. Then $A$, since it is a nonempty set of natural numbers, must have a least element. We deduce that $A$ has a least element by appealing to the \wop &#8212; this will be why we do not have to bootstrap the property "if $k\in S$ then $k+1\in S$" over and over again. Let $\ell$ denote the least element of $A$. Then $\ell-1\not\in A$, but is it necessarily true that $\ell-1\in S$; put another way, do we know that $\ell-1$ actually has a predecessor? Yes, because we assumed $1\in S$ at the beginning so we know it's not possible that $\ell=1$ (otherwise $\ell\in S$). Note that $\ell>1$ because $1\in S$. Thus, $1\not\in A$ since $1\in S$ and $A$ consists of all those members in $\N$ not in $S$. Consider $\ell-1$. It must be the case that $\ell-1\not\in A$; hence, $\ell-1\in S$. But the assumed property that "if $k\in S$ then $k+1\in S$" tells us that $(\ell-1)+1=\ell\in S$, and this is a contradiction. 

## How induction can be useful in the context of proofs

How might induction be useful in the context of proofs?

- **Pragmatism of induction in proofs:** What you usually want to use induction for is to prove a whole series of statements (infinitely many statements) all at once, and those statements are indexed by the natural numbers. (There's a first statement, a second statement, etc.) More precisely, let $P(n)$ be statements indexed by $n\in\N$. The idea then is to show that $P(n)$ is true for all $n$. Now, what would that mean? What I'm really looking at is a set. I'm looking at the set of all statements $S$ where $P(n)$ is true. By induction, we have $S=\N$. That is, the statement $P(n)$ will hold for all natural numbers. In terms of an actual proof write up, the structure of the proof is often divided into two steps, where the first step is often called the "base case" and the second step the "inductive step":

  1. Show that $P(1)$ is true. (BASE CASE) 
  2. Show that if $P(k)$ is true, then $P(k+1)$ must also be true. (INDUCTIVE STEP)

  What assumption do you normally make when you are doing the inductive step? It's actually built into the statement of the step itself, namely "If $P(k)$ is true, then ... ." Note that $k$ is fixed here and you are not assuming what you are trying to prove. The proof amounts to first showing that $P(1)$ holds. Then $P(k)\implies P(k+1)$. Or, in set notation, you first show that $1\in S$. Then $k\in S\implies (k+1)\in S$. (Using set notation may also more clearly indicate why the $k$ is fixed for the implication $P(k)\implies P(k+1)$ because the set notation equivalent is simply $k\in S\implies (k+1)\in S$, where it's clear that $k$ is a *number* and not a whole *set* of numbers. See the note below about "fixed $k$" for an explanation of this and how comparing "regular" and "strong" induction makes this difference clear.) Perhaps more concretely, by showing that $P(1)$ holds and also that $P(k)\implies P(k+1)$, you essentially take care of infinitely many implications all at once. Knowing $P(1)$ holds and that $P(k)\implies P(k+1)$ means we first have $P(1)\implies P(2)$. So now we know $P(2)$ holds. If we have $P(2)$, then we have $P(2)\implies P(3)$ since $P(k)\implies P(k+1)$. Essentially, if we have shown that $P(1)$ holds, and that $P(k)\implies P(k+1)$, then we have the chain of implications

  $$
  P(1)\implies P(2),\quad
  P(2)\implies P(3),\quad
  P(3)\implies P(4),\quad\ldots
  $$

  For the implication $P(k)\implies P(k+1)$, when we assume the antecedent $P(k)$ holds, this assumption is called the inductive hypothesis. So we have shown that $P(n)$ is true for all natural numbers $n$. More explicitly our $S$ in this case is simply $S=\{n \mid P(n)\}=\N$.

  In summary, with proofs by induction, we define some statement $P(n)$, and we consider the set $S=\{n\mid P(n)\}$. By showing that $1\in S$ and that $k\in S\implies(k+1)\in S$, we effectively show that $S=\N$, and this amounts to saying that $P(n)$ holds for all natural numbers.

- **Strong induction:** This is essentially the same as ordinary induction in the sense that strong induction and ordinary induction are logically equivalent, but the inductive step for strong induction looks slightly different. The structure for proofs by strong induction will look as follows:

  1. Show that $P(1)$ is true. (BASE CASE)
  2. Show that if $P(1)$, $P(2)$, \ldots, $P(k)$ are true, then $P(k+1)$ must also be true. (INDUCTIVE STEP)

  The principle of strong induction allows you to assume that everything up to the $k$th statement is true. You can see why that is equivalent because if you show that 1 is in the set, and that each successor of anything in the set is in the set, then you have everything from 1 through $k$ in the set already.
	
- **Why $k$ is fixed for ordinary induction and "not really" for strong induction:** It is helpful throughout to think of the natural numbers as simply indexing statements. (We could use integers just as well, but it might be a little odd to talk about the negative seventh statement.) We state below the forms for ordinary and strong induction, where we communicate them both by using a statement $P(n)$ as well as a set of indices $S$. 

  + **Ordinary induction:** We can communicate this as follows:

    1. Show $1\in S$ and that $k\in S\implies (k+1)\in S$. Then $S=\N$.
    2. Show $P(1)$ is true and that $P(k)\implies P(k+1)$. Then $P(n)$ is true for all natural numbers.
	
  + **Strong induction:** We can communicate this as follows:

    1. Show $1\in S$ and that $\{1,2,\ldots,k\}\subseteq S\implies (k+1)\in S$. Then $S=\N$.
    2. Show $P(1)$ is true and that $P(j)\implies P(k+1)$, where $1\leq j\leq k$; that is, you are assuming the statement in question holds for indexed statements $1,2,\ldots,k$, and you are showing the $(k+1)$th indexed statement follows from this assumption or *set* of assumptions. Then $P(n)$ is true for all natural numbers.
		
      *Note:* For the part above, sometimes the form of the inductive hypothesis "$P(j)\implies P(k+1)$ where $1\leq j\leq k$" is actually communicated by writing
      
      $$
      [P(1)\land P(2)\land P(3)\land\cdots\land P(k)]\implies P(k+1).
      $$
	
    Regardless of how the different forms are communicated, it must be stressed that you are never engaging in circular logic and ultimately assuming what you are trying to prove &#8212; you are showing that the $(k+1)$th indexed statement (i.e. $P(k+1)$) follows in some form or fashion from your hypotheses. (The "form or fashion" here concern ordinary or strong induction.)

- **Style in inductive proofs:** Aside from telling the reader that you will be doing a poof by induction, what else should you possibly make explicit? What your indexes are; that is, you should say what you will be inducting on or, in other words, what index you are looking to make this induction argument hinge upon. In most cases you are inducing on $n$, where this variable $n$ represents the index. So you should always specify what variables you are inducting on where these variables represent indices in the case of more than one variable. 

## Examples of proofs using induction
What are some examples using proofs by induction?

- **Tiling a chessboard with L-shaped pieces:** The goal will be to prove that any $2^n\times2^n$ chessboard with one square removed can be tiled by L-shaped pieces. Now, the thing about induction that is really amazing is the actual statement or statements you are trying to show ... you might have no idea how to do it. But what's great about induction is often you don't need insight to do the problem. You're sort of replacing the fact that I need to have some insight about some $8\times8$ board by the fact that I know that if I can do a $4\times 4$ board then I can do an $8\times 8$ board. And so on. So we'll induct on $n$ for our statement about $2^n\times2^n$ boards.

  It is worth noting that often in the process of induction you are looking for the smaller cases embedded within the big one. So in this case we start off with a big square and one small square removed. We cut the big square into four pieces and apply the inductive hypothesis to the square with a removed square. (The beauty is we can apply the inductive hypothesis without any real insight.) We cannot yet apply the inductive hypothesis to the other three squares though because none of them have a square removed. But I could remove a square from each of the three squares in such a way that the squares removed form an L-shaped tile. I could then apply the inductive hypothesis to the three squares, and what I'm left with is with three small, adjoined squares that can be covered by an L-shaped tile based on how I removed the little squares.

- **Finite sets and supremums:** Every finite set of real numbers contains its supremum. How might we try to prove this? We have a finite set of numbers &#8212; it's a statement about a bunch of numbers. A finite amount of numbers in fact! That's a bunch of statements you're trying to prove. What should we induct on? How about the number of things in the set $n$? Do the base case. For the inductive step, what should you start with? A set with how many elements? A set with $k+1$ elements. And then find the $k$-element set within that. The mistake committed every single year is that one will start with a $k$-element set and then add one element to it instead of starting with the generalized set with $k+1$ elements. (This is similar to the chessboard example where one might be tempted to start with a $2^k\times2^k$ board and extend to a $2^{k+1}\times2^{k+1}$ board, but after applying the inductive hypothesis to the $2^k\times2^k$ board, it's not at all clear whether or not you have a general enough board to handle the case when you add three more $2^k\times2^k$ boards to adjoin to the original $2^k\times2^k$ board to form a $2^{k+1}\times2^{k+1}$ board.) 

- **All natural numbers are even (fake proof):** Every natural number $n$ is even. We'll use strong induction to prove this statement. Let's assume all numbers less than or equal to $n$ are even. Note that $n+1=(n-1)+2$. By the inductive hypothesis, $n-1$ is even. So $n+1$ is the sum of two even numbers, as desired. End of proof. The problem is there was no base case so we could never really get the proof off the ground. The interesting thing is this argument will work to show that all even numbers are even. 

- **All horses are the same color:** We will induct on the number of horses in a given set. We will do the base case because now we are so concerned about the base case. For the base case, a set with 1 horse, all horses are the same color. So the statement holds. For the inductive step, let $S=\{h_1,\ldots,h_{n+1}\}$. And now I want to find the inductive hypothesis in here which concerns a set with how many horses? A set with $n$ horses. Then $S'=\{h_1,\ldots,h_n\}$ and $S"=\{h_2,\ldots,h_{n+1}\}$ have $n$ horses, and by the inductive hypothesis have the same color in each set. But clearly $h_2$ is in both sets so all the horses in $S'$ have the same color as $h_2$ and all the horses in $S"$ have the same color as $h_2$ as well. And we are done. The problem: Without realizing it, I have assumed that I have at least 3 horses because when I go down to the two sets $S'$ and $S"$ I assumed they overlapped with $h_2$. But there is a case where they don't overlap at all! That's the case when you have 2 horses. And then you have disjoint sets. So the problem here is that the inductive step fails in a very bizarre way. In particular, it fails when $n=2$. 

- **Induction involving sets other than the natural numbers:** Is it possible to have a "principle of mathematical induction" where the set $S$ is not a subset of the natural numbers but of another set? The issue has to do with countability (which makes sense because sets that are countable can be put into one-to-one correspondence to the natural numbers). You *could* do this for subsets of sets other than $\N$, but you need something stronger that is not logically equivalent to induction. It's called the principle of transfinite induction. 

