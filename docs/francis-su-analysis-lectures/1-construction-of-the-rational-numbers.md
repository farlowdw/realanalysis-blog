---
title: 1 - Construction of the rational numbers
hide_title: false
sidebar_label: 1 - Construction of the rational numbers
description: Lecture notes by Daniel Farlow to accompany Lecture 1 from Francis Su's YouTube video series
draft: false
tags: 
  - Construction
  - Lecture 1 (Francis Su)
keywords: 
  - construction
  - infinity
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import ReactPlayer from 'react-player';

:::info Video Lecture

The following questions/notes correspond to the video lecture titled [Constructing the rational numbers](https://www.youtube.com/watch?v=sqEyWLGvvdw) by Francis Su. 

:::

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
        url="https://www.youtube.com/watch?v=sqEyWLGvvdw"
    />
</div>

## Kronecker and God's Integers

[Leopold Kronecker](https://en.wikipedia.org/wiki/Leopold_Kronecker), responsible for the [Kronecker delta](https://en.wikipedia.org/wiki/Kronecker_delta) that bears his name, uttered the following statement in 1886:

> God created the integers. All else is the work of man.

Let's explore some of the implications or consequences of this statement.

Kronecker was what one might call a "finite-ist" or a proponent of the point of view that mathematics should only deal with finite objects, finite numbers, or things that can be constructed from the numbers in a finite number of steps; that is, mathematics should only deal with objects obtained from finite numbers in a finite number of operations. (This philosophical view of mathematics is appropriately known as "[finitism](https://en.wikipedia.org/wiki/Finitism).") This viewpoint had a few consequences:

- **Irrational numbers:** Opposed to their use.
- **Non-constructive existence proofs:** Doubted their significance.
- **Transcendental numbers:** Doubted their existence; in fact, the quote by Kronecker was a response to [Ferdinand von Lindemann](https://en.wikipedia.org/wiki/Ferdinand_von_Lindemann)'s proof of the transcendence of $\pi$, which Kronecker said was beautiful but proved nothing, since transcendental numbers didn't exist. (Recall that a [transcendental number](https://en.wikipedia.org/wiki/Transcendental_number) is a real or complex number that is not algebraic; that is, it is not a root of a nonzero polynomial equation with integer or rational coefficients.)

The reason for highlighting the consequences of Kronecker's viewpoint is to illustrate that there are many things that we take for granted that were not always so obvious. This is especially true in light of how the Greeks thought about mathematics:

- **Constructions of rational lengths:** The Greeks understood rational lengths could be *constructed* with straightedge and compass and *ordered* on a line. Thus, for instance, if you wanted a line of length $4/5$ units, then they could show you how to construct such a line given a line of length 1 unit.
- **Constructions of irrational lengths:** They also knew that there were other lengths on a line that were not rational but constructible (e.g., $\sqrt{2}$).
- **Impossible construction:** They knew about other lengths, such as $\pi$, but they couldn't find a construction (e.g., the problem of squaring the circle). The number $\pi$ cannot be constructed by using straightedge and compass because it is transcendental and constructible numbers are always algebraic and therefore not transcendental.
- **Impossible construction made possible by an infinite process:** But $\pi$ can be constructed through an *infinite* process such as the sum of an infinite series (e.g., Newton in 1666). But what is an infinite series? So this begins to beg a question. Already here, 200 years before Kronecker, Newton and Leibniz, in developing the calculus, began to encounter the infinite. And they did not have a real rigorous way to deal with the infinite. In fact, if you look at a lot of the history of calculus, it was a toolbox at first. It gave good answers. But there was not a precise notion of what it meant for a series of numbers to converge. 

## The infinite

Much of calculus was seen as a toolbox in that it often gave nice answers, but it was grossly lacking in precision due to the slippery nature of the infinite. Some hard questions needed to be asked. Let's see what some of these hard questions were.

- **Convergence:** What does it mean for a series of numbers to converge?
- **Notion of a limit:** What *exactly* is a limit? Newton and Leibniz both had a vague notion of this. In the early 1800s, Fourier series, which are made up of infinite sums of sines and cosines, made Laplace and Lagrange uneasy. In fact, many people outright rejected Fourier's work because his series resulted in some strange behavior. But no one could actually deny that Fourier's method gave answers! And it seemed to give right answers to boot. Why was that? If you have a series of numbers, an infinite sum, then that is, in some sense, a limit of a bunch of finite sums.
- **Robustness:** Are there "enough" numbers to capture all limits?

## Adding precision

There was a revolution in the 1800's in order to make many of the ideas in calculus precise. Let's see some of what characterized this revolution.

- **Main actors:** Cauchy (1820's), Weierstrass (1850's), and Riemann (1860's).
- **Renewed skepticism:** Many of the things that we take for granted that were not so obvious at the time resulted due to a prolonged struggle with the infinite.
- **From the ground up:** Constructing the real numbers will be the major goal, but we will start by constructing $\Q$, the rational numbers, to illustrate what is meant by "construct."

## Sets: notation and terminology

First we'll establish some common notation and terminology concerning sets:

- **Set:** A set is a *collection* of objects. (As easy as that sounds, the notion of a set is something that mathematicians had to wrestle with very carefully in the 1900s.) We will often write a set as follows (notating it by a letter and notating what's inside by setting off the contents with braces):

$$
S=\{1,\bigcirc,\Box,\{2,\bigcirc\}\}
$$

or

$$
S=\{x : P(x)\ \text{is true}\},
$$

where $P(x)$ is a statement about $x$.

- **Membership:** The notation $x\in S$ means "$x$ is in $S$" while $x\not\in S$ means "$x$ is *not* in $S$."
- **Empty set:** The set with nothing in it is denoted by $\emptyset$.
- **Subset:** The notation $A\subset B$ means "$A$ is a *subset* of $B$," which means "if $x\in A$, then $x\in B$."
- **Proper subset:** If $A\subset B$ and $B\not\subset A$, then we call $A$ a *proper* subset of $B$.
- **Set equivalence:** If $A\subset B$ and $B\subset A$, then we write $A=B$. If this is not the case, then we write $A\neq B$.
- **Union:** The *union* of two sets $A$ and $B$ is communicated by writing

$$
A\cup B=\{x : x\in A\ \text{or}\ x\in B\}.
$$

- **Intersection:** The *intersection* of two sets $A$ and $B$ is communicated by writing

$$
A\cap B=\{x : x\in A\ \text{and}\ x\in B\}.
$$

- **Complement:** The *complement* of a set $A$ is communicated by writing

$$
A^c=\{x : x\not\in A\}.
$$

- **Set difference:** The *set difference* of two sets $A$ and $B$ is communicated by writing

$$
A\setminus B=\{x : x\in A\ \text{and}\ x\not\in B\}.
$$

- **Product:** The *product* of two sets $A$ and $B$ is communicated by writing

$$
A\times B=\{(a,b) : a\in A\ \text{and}\ b\in B\},
$$

where $(a,b)$ is an *ordered pair*.

## Relations: notation and terminology

We will first establish some common notation and terminology concerning relations.

- **Relation:** A (binary) *relation* $\Rel{R}$ is a *subset* of $A\times B$. If $(a,b)\in\Rel{R}$, then we write $a\Rel{R} b$.
- **Examples:**
  + Let $\rel{A}$ be the relation "is an ancestor of." Then $\rel{A}$ is a relation on $P\times P$, where $P$ is the set of all people. 
	+ Let $\rel{L}$ be the relation "likes." Then $\rel{L}$ is a relation on $P\times P$ as well.
			
    *Note:* If you look at the set of all people, and you look at ordered pairs of people, you might ask whether or not the ordered pair $(\text{Bonnie},\text{Jenny})$ is in $\rel{A}$ or $(\text{Bonnie},\text{Jenny})\in\rel{A}$. Linguistically, "Does Bonnie $\rel{A}$ Jenny?" or "Is Bonnie an ancestor of Jenny?" Probably not. But does Bonnie $\rel{L}$ Jenny? We certainly hope so. In terms of notation, then, we would have $(\text{Bonnie},\text{Jenny})\not\in\rel{A}$ and $(\text{Bonnie},\text{Jenny})\in\rel{L}$. Also worth noting is that the relation $\rel{L}$ need not necessarily be defined on $P\times P$. It would be reasonable to ask whether or not a person in the set $P$ liked some sort of hobby in the set $H$ (in which case we would consider $\rel{L}$ to be defined on the set $P\times H$, where $P$ is the set of all people and $H$ is the set of all hobbies) and the like. 

	+ Let $\rel{S}$ be the relation "is a sibling of." Then $\rel{S}$ is, again, a relation on $P\times P$ as well.
	+ The symbol $<$, which most people are quite familiar with, stands for the relation "less than," and we may define this relation on $\Z\times\Z$.
		
- **Equivalence relation:** An *equivalence relation* $\Rel{R}$ on a set $S$ is a *relation* on $S\times S$ such that three things hold:
	
  1. **Reflexive:** It must be the case that $a\Rel{R} a$.
  2. **Symmetric:** It must be the case that $a\Rel{R} b\implies b\Rel{R} a$.
  3. **Transitive:** It must be the case that $(a\Rel{R} b\ \text{and}\ b\Rel{R} c)\implies a\Rel{R} c$.

For the examples given above, we note the following:

- **Relation:** $\rel{A}$ ("is an ancestor of")
	+ Reflexive: No. One cannot be an ancestor of him or herself.
	+ Symmetric: No. You are not an ancestor of your ancestor.
	+ Transitive: Yes. If Jack is an ancestor of Jill who is an ancestor of Glum, then Jack is certainly an ancestor of Glum.
- **Relation:** $\rel{L}$ ("likes")
	+ Reflexive: Yes. Or at least one should hope this would be the case.
	+ Symmetric: No. This is too often the case, but it could certainly be affirmative in many cases.
	+ Transitive: No. Certainly not!
- **Relation:** $\rel{S}$ ("is a sibling of")
	+ Reflexive: No. You are not a sibling of yourself. Note that this strongly depends on how *sibling* is defined, where nearly all definitions simply mean "brother or sister."
	+ Symmetric: Yes. Certainly!
	+ Transitive: Yes. Certainly!
- **Relation:** $<$ ("less than")
	+ Reflexive: No. A number cannot be less than itself. That would be most problematic and rather concerning.
	+ Symmetric: No. This would be rather problematic as well.
	+ Transitive: Yes. Certainly!

  Note that an equivalence relation is just a way of specifying how two objects are meant to be interpreted as equivalent (whether or not such an interpretation is mathematically useful is another matter). The equivalence relation "equals" or "$=$" is a natural equivalence relation, but there may be other kinds of equivalence relations. For example, all of the sophomores at a college may be deemed equivalent in terms of class year and the like.

- **Function:** A *function* $\Rel{F}$ from $A$ to $B$ is a *relation* such that if $a\Rel{F} b$ and $a\Rel{F} b'$, then $b=b'$.

## Constructing the rational numbers

We will now set to work on constructing the set of rational numbers. 

- **Assumptions:** We will assume properties about the arithmetic and order of $\Z$, the set of integers. The word *construction* often implies that there is some goal. What is the goal of the construction of $\Q$? 
- **Definition:** First, how is $\Q$ defined? We might define it to be the set

  $$
  \Q=\{\tfrac{m}{n} : m,n\in\Z, n\neq0\}.
  $$

  At this point, however, this is rather useless because we have no idea what "$m$ over $n$" or $\frac{m}{n}$ really *means*. What could it possibly mean if all we have to work with is $\Z$ and its algebraic and order properties (which is what we are using to build or construct $\Q$)? Note that there's no *division* defined on $\Z$ because such an operation would often lead to a result outside of the number set; for example, "3 divided by 2" or "3 over 2" involves the operation of division on two integers, but the result itself is *not* an integer.

- **Motivation:** When we think about fractions, we often think about trying to teach children about, for instance, how to divide a cake into three equal pieces and giving somebody one of those three pieces. We call such a fraction "one third," which really means one part of three. That's one way to think about it, but there are other ways to describe the same quantity. I could divide the cake into six pieces and pick two of those pieces. Such a fraction would be called "two sixths." For both cases, I could mathematically write $\frac{1}{3}$ and $\frac{2}{6}$, respectively, to communicate this. Or one could draw the following two cakes (which look remarkably like intervals):

<div align='center' className='centeredImageDiv'>
  <img width='700px' src={require('@site/static/img/lecture-images/L1-f1.png').default} />
</div>

  In the left-hand figure, we have divided the whole cake into 3 portions. A child may take 1 part out of 3 of the cake for his or her portion. We have a name for such a division and\slash or portion of this sort: "one third." What about the right-hand figure? What if the cake was divided into 6 pieces and a child took 2 parts out of 6? Just from looking at the figures, this looks like somehow the quantities "1 part out of 3" and "2 parts out of 6," which we may normally denote as $\frac{1}{3}$ and $\frac{2}{6}$, respectively, are "the same" or "equivalent" in some way. 

  This presents a slightly subtle problem since the fractions $\frac{1}{3}$ and $\frac{2}{6}$ are certainly different, but they seem to be representing the same thing! So the "issue" is fairly apparent &#8212; we have two *different* fractions that represent the *same* thing or what we would like to interpret as the same (i.e., equivalent) thing. So maybe we want to set up a construction where we define fractions in terms of equivalence relations. (It should be noted here how sometimes the real numbers themselves are defined in terms of equivalence relations where equivalence class representatives are Cauchy sequences.) How are we going to do that? What should the equivalence relation be? 
	
- **Fractions as Equivalence Relations:** We can represent the fractions $\frac{1}{3}$ and $\frac{2}{6}$ as *ordered pairs* and write $(1,3)\sim(2,6)$ to communicate that these ordered pairs are equivalent much in the sense that we would normally write $\frac{1}{3}=\frac{2}{6}$. The idea is that these ordered pairs belong to some equivalence class that may have many other elements such as $(10,30)$, $(20,60)$, and so forth. In this particular example, we shall say that $(1,3)$, $(2,6)$, $(10,30)$, $(20,60)$, and many more belong to the equivalence class that we will call "$\frac{1}{3}$." We will let $\Q$ be the set of all such equivalence classes of ordered pairs in $\Z\times(\Z\setminus\{0\})$. 
- **A more thorough note about fractions as equivalence classes:** We noted that we would like to think of $\frac{1}{3}$ and $\frac{2}{6}$ as being equivalent as well as many other quantities like $\frac{10}{30}$ or $\frac{20}{60}$, and we will now think about all of this more formally by thinking of $(1,3)$, $(2,6)$, $(10,30)$, $(20,60)$, etc., as all being equivalent in some way. The idea is that all of these ordered pairs (and perhaps many many more) belong to some equivalence class, and we'll give that equivalence class a name &#8212; we will call it "$\frac{1}{3}$." 

  Of course, once we have "$\frac{1}{3}$" we can simply talk about fractions, and everyone knows how to work with fractions, which are really disguised ways of dealing with the equivalence relation that's embedded here. What actually *is* the equivalence relation that everyone learns in grade school but not in such formal terms? Whatever the case, the set of *all* such equivalence classes (i.e., ordered pairs from $\Z\times(\Z\setminus\{0\})$) will be called $\Q$. Of course, we now need to actually put some thought into defining the equivalence relation.

- **Number system extensions:** It may be useful to consider how $\Q$ is related to the set we began with, namely $\Z$. The way $\Q$ is often thought of is that it somehow "extends" $\Z$. That is, we have a bunch of points or whole numbers on the number line, and now we've filled them in with a bunch of other points in between. But are the original points on the number line (i.e., the whole numbers) still there? Yes. They're embedded in $\Q$. So we might want to say how $\Z$ is embedded in $\Q$. We want our ordered pairs to extend $\Z$ so that, for example, $\frac{n}{1}\in\Q$ corresponds to $n\in\Z$. (Algebraically, we are looking for an isomorphism of $\Z$ into $\Q$.)
- **More on relationship between $\bm{\Z}$ and $\bm{\Q}$:** How is $\Q$ related to $\Z$ in the construction that we are undertaking? We might like to think of $\Q$ as some sort of extension of $\Z$ where $\Z$ is just a bunch of equally spaced big points and $\Q$ somehow fills in the space between such points. The fact that $\Q$ is dense in itself (i.e., between every two rationals is another rational) may give one the erroneous notion that a number line is "completed" by extending $\Z$ to $\Q$, but we will see that is not the case by noting that $\sqrt{2}$ is irrational and yet on the number line we typically envision.

  Are the original integers still in the new construction of $\Q$ that we have made? Yes, they are *embedded* in $\Q$. It may be nice to say how $\Z$ is embedded in $\Q$. We may note that $\frac{n}{1}\in\Q$ corresponds to $n\in\Z$. From an algebraic point of view: we are looking for an isomorphism of $\Z$ into $\Q$. 

- **The Equivalence Relation:** After enough examples, we see that $\Q=\{\frac{m}{n} : m,n\in\Z, n\neq0\}$, where $\frac{m}{n}$ is an equivalence class containing $(m,n)$ with relation $(p,q)\sim(m,n)$ if $pn=qm$ and $q,n\neq0$. If $pn=qm$ and $q,n\neq0$, then we say that the ordered pairs $(p,q)$ and $(m,n)$ are equivalent or $(p,q)\sim(m,n)$

  We may express this more formally by recalling that the equivalence class of an element $a$ is often denoted $[a]$ and is defined as the set $[a]=\{x\in X : a\sim x\}$; hence, the equivalence class of the element $(m,n)$ may be denoted $[(m,n)]$ or $\frac{m}{n}$ and defined as

  $$
  \tfrac{m}{n}=[(m,n)]=\{(p,q)\in\Z\times(\Z\setminus\{0\}) : (m,n)\sim(p,q)\},
  $$

  where the binary relation $\sim$ is defined by writing $(a,b)\sim(c,d)$ if and only if $ad=bc$ with $b,d\neq0$.

  Is the relation "$\sim$" we have just defined an equivalence relation though? Let's check. (In the transitive case, note that division is *not* an option since the integers are not closed with respect to division; however, we have the next best thing, namely the cancellation law for integers which states that $ab=ac$ implies $b=c$ when $a\neq0$.)

  + **Reflexive:** We must confirm that $(p,q)\sim(p,q)$. By our definition, this means we must have $pq=qp$ and $q\neq0$. It is clearly true that $pq=qp$ and $q\neq0$ by definition and the fact that multiplication of integers is commutative. (We say "by definition" because the ordered pairs we are considering are from the set $\Z\times(\Z\setminus\{0\})$, and the definition of this set stipulates that the second coordinate be nonzero, which necessarily prohibits the possibility of having a zero "denominator.") Thus, the definition of $\sim$, along with multiplication being commutative in $\Z$, implies that $(p,q)\sim(p,q)$ as desired.
  + **Symmetric:** We must confirm that, given $(p,q)\sim(m,n)$, it necessarily follows that $(m,n)\sim(p,q)$; that is, $(p,q)\sim(m,n)\implies(m,n)\sim(p,q)$. By definition, $(p,q)\sim(m,n)$ tells us that $pn=qm$, where $q,n\neq0$. Since equality (i.e., "$=$") is itself an equivalence relation, knowing that $pn=qm$ tells us that $qm=pn$ by symmetry and $mq=np$ by commutativity of multiplication of integers. Since $mq=np$ and $q,n\neq0$, we have $(m,n)\sim(p,q)$ by definition of $\sim$. Hence, $(p,q)\sim(m,n)$ implies $(m,n)\sim(p,q)$, as desired.
  + **Transitive:** We must confirm that, given $(p,q)\sim(m,n)$ and $(m,n)\sim(a,b)$, it necessarily follows that $(p,q)\sim(a,b)$. We can use a few observations, along with the definition of $\sim$, to piece together this slightly trickier proof than the proofs for the reflexive and symmetric cases:
		
    1. Given $(p,q)\sim(m,n)$, we have $pn=qm$, where $q,n\neq0$.
		2. Given $(m,n)\sim(a,b)$, we have $mb=na$, where $n,b\neq0$.
		3. Consider the following:

      $$
      \begin{align*}
      pn=qm
      &\iff pnb=qmb & \text{(cancellation property of $\Z$, $b\neq0$)}\\[0.5em]
      &\iff pnb=qna & \text{(by substitution, where $mb=na$)}\\[0.5em]
      &\iff pbn=qan & \text{(comm. and assoc. of mult. on $\Z$)}\\[0.5em]
      &\iff pb=qa. & \text{(cancellation property of $\Z$, $n\neq0$)}
      \end{align*}
      $$
		
    4. Since $pb=qa$ by the above observation, and $q,b\neq0$ by the first and second observations, respectively, we have $(p,q)\sim(a,b)$ by definition of $\sim$. Thus, given $(p,q)\sim(m,n)$ and $(m,n)\sim(a,b)$, it necessarily follows that $(p,q)\sim(a,b)$, as desired.

    Since the relation $\sim$ is reflexive, symmetric, and transitive, we see that $\sim$ is an equivalence relation.

- **Arithmetic on $\bm{\Q}$:** Great. So we've constructed $\Q$ insofar as knowing what the elements of $\Q$ look like, but we haven't yet talked about arithmetic on $\Q$. We'll have to check a few things there as well. That will be the next lecture.
