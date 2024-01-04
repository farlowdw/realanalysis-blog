---
title: 26 - Ordinal numbers and transfinite induction
hide_title: false
sidebar_label: 26 - Ordinal numbers and transfinite induction
description: Lecture notes by Daniel Farlow to accompany Lecture 26 from Francis Su's YouTube video series
draft: false
tags:
  - Ordinal Numbers
  - Transfinite Induction
  - Lecture 26 (Francis Su)
keywords:
  - ordinal numbers
  - transfinite induction
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
        url="https://www.youtube.com/watch?v=TpnXBhaTERA"
    />
</div>

## Purpose of last lecture

This is a fun lecture! It is simply an extension of some of the ideas encountered in the course thus far, and that is the subject of transfinite induction. 

- **Remarks:** We learned about induction at the beginning of the semester. And hopefully a theme that has really stood out through the beginning of introductory analysis is that analysis is a lot about wrestling with the infinite. We know how to work with finite sums, but what do you do with infinite sums? We know how to deal with discrete functions, but how do you deal with continuous functions? How do you count? That is the subject we will wrestle with today. The first thing we have to learn about is how to count and that is the subject of ordinal numbers, and once we define ordinal numbers, we'll be able to say what it means to do transfinite induction. 

  Induction, you may recall, is a way of reasoning about a whole family of statements. How many statements? Countably infinite many statements. So what transfinite induction will allow us to do is to reason about a whole family of statements where the set of statements might be possibly uncountable. 

- **Ordinal numbers:** How do we count? We won't repeat the earlier lecture, but we are going to try to think about counting in a more general framework. The first thing we should do is talk about orderings, and maybe that will give us a way of counting. 

  Suppose we have a set $X$ with order $<$ and a set $Y$ with order $<$; that is, we have $(X,<)$ and $(Y,<)$. So an example might be the real numbers with the usual ordering. Or the natural numbers with the usual ordering. Or the set of vectors with a lexicographic ordering. Let's define what we mean by an "order type." We will say $(X,<)$ and $(Y,<)$ have the same order type if there is a bijection between $X$ and $Y$ that preserves something. What? The order. Most of the functions in math are interesting because they preserve something, in this case order. We shall say $(X,<)$ and $(Y,<)$ have the same order type if there exists a bijection $f\colon X\to Y$ such that $x<y$ if and only if $f(x)<f(y)$. We call such an order-preserving map an order isomorphism. This is just a way of saying these things look the same from the point of view of orderings. 

- **Well-ordering:** We've looked at one type ordering already, a well-ordering. What is that? We say $X$ is well-ordered if every non-empty subset has a least element. For instance, the real numbers with the usual ordering are not well-ordered. Because you could take an open interval, a non-empty subset of $\R$, and it would not have a least element. Are the natural numbers well-ordered? Yes. Are the integers well-ordered? No. Consider $2\Z$, the set of even integers. This is not empty and does not have a least element. Why did we look at well-ordering way back when? Because it allowed us to do induction. We are going to need to develop a good concept of well-ordered sets to do transfinite induction. 

- **Von Neumann theory of ordinals (1923):** This basically helps classify the well-ordered sets. There are lots of well-ordered sets, and Von Neumann basically asked whether or not there was a way to classify all possible well-ordered sets. There are, in fact, many well-ordered sets that have the same cardinality. Let's start by considering what we would think of as a vacuously well-ordered set, the empty set. What's another set we might want to consider? How about the set containing 1 element? Or the set containing 2 elements? Now, you could just create your own sets containing something and a set containing something else, but it sure would be nice if we could maybe write all the other ones in terms of ones we've defined before. This was Von Neumann's idea. So $\emptyset$ is the first ordinal, and it contains 0 elements. The next ordinal is $\{\emptyset\}$, and it contains one element, the empty set. We now want a set with two elements. So what elements might we suggest? Let's take the union of all the objects we've defined previously: $\{\emptyset,\{\emptyset\}\}$. Now, a set with three elements: $\{\emptyset,\{\emptyset\},\{\emptyset,\{\emptyset\}\}\}$. Can we guess what the ordering might be? Don't say number because we haven't defined number. Containment! So "less" if it is contained. So containment is going to be the ordering. We could, if we like, think of the following association:

  $$
  \begin{align*}
  \text{"0"} &\leftrightarrow \emptyset\\[0.5em]
  \text{"1"} &\leftrightarrow \{\emptyset\}\\[0.5em]
  \text{"2"} &\leftrightarrow \{\emptyset,\{\emptyset\}\}\\[0.5em]
  \text{"3"} &\leftrightarrow \{\emptyset,\{\emptyset\},\{\emptyset,\{\emptyset\}\}\}\\[0.5em]
  \vdots
  \end{align*}
  $$

  But we are not counting sizes here. That would be a cardinal number. Ordinal numbers are sets that also reflect the order type, the well-order type. We should note some things about this construction. For instance, every member of the ordinal number "3" is a subset. We are going to order the sets by membership or containment. 

- **Ordinal (definition):** An ordinal is a set that has two properties:
	
  1. Transitive/complete: every member is a subset. 
	2. Strictly well-ordered by membership.
	
  There's a lot that comes from this seemingly innocuous definition. We might wonder what ordinals look like. What other things are ordinals besides the obvious ones we've listed thus far? 

- **Consequences of ordinal definition:** If $\alpha$ is an ordinal, then we can define a new ordinal $S(\alpha)$ very simply by taking the set $\alpha$ and unioning it with the set *containing* $\alpha$; that is, $S(\alpha)=\alpha\cup\{\alpha\}$. The ordinal $S(\alpha)$ is called the successor ordinal. The second thing we notice is that if $\alpha$ is an ordinal and $\beta\in\alpha$, then $\beta$ is also an ordinal. Also, if $A$ is a set of ordinals, then $\sup(A)=\bigcup A$ is an ordinal. So what does this mean? Are there any other ordinals besides the obvious ones? Yes.

- **Von Neumann's theorem:** Any well-ordered set is order isomorphic to some ordinal $\alpha$. If we could order the ordinals

  $$
  0,1,2,3,4,5,\ldots
  $$

  where each time it is clear we are taking a successor, but you could imagine then finishing taking all those successors. That gives you a set of ordinals. But now you can do a new operation. You can take the $\sup$ of this set. That $\sup$ is the order type of the natural numbers. We have a name for that ordinal which lives after all the ordinals listed above. We call it $\omega$. It is the first infinite ordinal. It is countable. So we have

  $$
  0,1,2,3,4,5,\ldots,\omega
  $$

  currently. And note that, other than 0, $\omega$ is the only thing that is not the successor of anything. It's given by a supremum construction. So it has a special name. We call it a limit ordinal. So a limit ordinal is not $S(\alpha)$ for any $\alpha$; that is, a limit ordinal is not a successor ordinal. After $\omega$, what's the next ordinal? How about $\omega+1$? What is $\omega+1$ really? It's the successor of $\omega$. It's also the supremum of all the things preceding it. We could then look at $\omega+2$. Then $\omega+3$. So on and so forth. And then what? Well, we'd have

  $$
  0,1,2,3,4,5,\ldots,\omega,\omega+1,\omega+2,\ldots,\omega+\omega
  $$

  where sometimes we write $\omega+\omega=\omega\cdot2$. (This is not at all the same as $2\omega$.) We could keep on going:
  
  $$
  0,1,\ldots,\omega,\omega+1,\omega+2,\ldots,\omega2, \omega2+1,\ldots,\omega3,\ldots,\omega4,\ldots,\omega\omega,\omega^2+1,\omega^2+2,\ldots,\omega^3,\ldots,\omega^\omega.
  $$
  These are all countable. Eventually we would get $\omega^{\omega^\omega}$. Still countable. Past all these points we get to something we call $\epsilon_0$. We define $\epsilon_0$ as the first ordinal that satisfies the property $\epsilon_0=\omega^{\epsilon_0}$. So, if you like, we really have $\epsilon_0=\omega^{\omega^{\dots}}$. Then we get $\epsilon_1$ and so on. Still countable. After all these, you eventually get to the first uncountable ordinal which is called $\omega_1$. 

- **Russell's paradox:** Look at the set that contains every set that does not contain itself. Is that a set? If yes, then no. If no, then yes. And you run into problems with set theory. So the way around that is, well, it's not a set. You have very careful ways to construct sets and similarly with what was going on above, you can't talk about the set of all ordinals because it would lead to a contradiction. (If you could, then you could take their supremum, and that would have to be an ordinal. And that would be somewhere already in the set. So you'd run into problems.) But you could talk about the class of all ordinals but not the set of all ordinals. 

## Induction recall

Let's talk about induction. Let's first recall some things.

- **Recall (strong induction):** Let $S_n=\{i\in\N : i<n\}$. This is called a section. So it's everything previous to $n$. Our definition was that $A\subset\N$ was inductive if for all $n\in\N$, if $S_n\subset A$ then $n\in A$. The principle of strong induction basically said the following: If you have an inductive set $A$ where $A\subset\N$, then $A=\N$. Let's recall the proof. 

  If $A\neq\N$, then $\N\setminus A$ has a smallest element, say $n$. But then $S_n\subset A$ which implies that $n\in A$, a contradiction. That is the principle of strong induction. 

- **Transfinite induction (idea):** We're just going to do the exact same thing now as we did for strong induction above for sets that are well-ordered but not necessarily of the order type of $\N$. The proof will rely on the following theorem about all sets being well-ordered.

- **Lemma about all sets being well-ordered:** Every set can be well-ordered. The proof basically relies on the Axiom of Choice or Zorn's Lemma. 

  What's great about this result? Well, you give me any set you like, and I can place a well-ordering on it. And if I can place a well-ordering on it, then I can use induction. Transfinite induction. So let's well-order the index set of statements we are trying to prove. Let's call it $J$. Let $S_\alpha=\{\gamma\in K : \gamma<\alpha\}$, where this is a section. We'll call the set $A\subset J$ inductive if for all $\alpha\in J$, $S_\alpha\subset A$ implies that $\alpha\in A$. Just like before. 

  And now the principle of transfinite induction says the following: If $J$ is well-ordered, and $A\subset J$ is inductive, then $A=J$.

- **Application of transfinite induction:** Is there a set $K$ in $\R^2$ that intersects every line exactly twice? How would we go about finding such a set if one existed? Maybe induction! The answer to this question is yes, and it depends on the axiom of choice because we are going to use transfinite induction. Nobody knows an explicit construction yet. 

  Here's the proof idea: Let $L=\{\text{all lines in the plane}\}$. How many things are in $L$? Uncountably many or $\mathfrak{c}$-many lines. We are going to well-order $L$, and we are going to do so with the order type of the first ordinal that has the cardinal $\mathfrak{c}$. Now, it may not be the first uncountable ordinal because we don't want to assume the continuum hypothesis. But there is going to be a first ordinal that has the cardinality of the real numbers. What we mean by "first" is that everything before it has a smaller cardinality. That's important. So we are going to well-order $L$ with the type of the first ordinal with cardinality $\mathfrak{c}$. So all elements of this ordinal, let's call it $J$, have cardinality less than $\mathfrak{c}$. 

  Let $L=\{L_\alpha\}_{\alpha\in J}$. Let
  
  $$
  A=\{a\in J : \exists K_\alpha\ \text{such that}\ \text{cardinality}<\mathfrak{c}, \text{no 3 pts collinear}, |K_\alpha\cap L_\beta|=2\ \text{if}\ \beta\leq\alpha, K_\beta\subset K_\alpha\ \text{if}\ \beta<\alpha\}
  $$

  We'll show that $A$ is inductive so that $A=J$. It's easy enough to verify that $1\in A$. Let $K_1=\{\text{two points on}\, L_1\}$. If $S_\alpha\subset A$, then $K=\bigcup_{\beta<\alpha}K_\beta$, and you can convince yourself that this has cardinality less than $\mathfrak{c}$. It also has no 3 points collinear. The last thing to notice is that when you do that you might be missing some points on the new line. All lines through $K_\alpha$ have cardinality less than $\mathfrak{c}$. So it cannot hit all the points of $L_\alpha$. So just pick 1 or 2 more points to form $K_\alpha=K\cup\{\text{1 or 2 points}\}$. So $\alpha\in A$, and we are done. 
