---
title: 7 - Countable and uncountable sets
hide_title: false
sidebar_label: 7 - Countable and uncountable sets
description: Lecture notes by Daniel Farlow to accompany Lecture 7 from Francis Su's YouTube video series
draft: false
tags:
  - Countability
  - Lecture 7 (Francis Su)
keywords:
  - countability
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import BibRef from '@site/src/components/BibRef';
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
        url="https://www.youtube.com/watch?v=mciBPGCvpBk"
    />
</div>

## Counting sets of real numbers

After building up some introduction to the real numbers our goal now is to be able to count sets of real numbers. How might we start to be able to do this? 

- **Counting in general:** To get start with this goal, we have to lay a groundwork for the idea of counting. In the [Sesame street video](https://www.youtube.com/watch?v=hgZwSRpfouQ), the questions come up as to why we both to count and how is it that we actually count. So if I wanted to count a bunch of fish, and I wasn't going to use a number to describe how many fish I had, I might do like the figure in Sesame street: "Fish, fish fish; fish, fish fish." But there's a problem with that. It is actually kind of hard if you have 52 fish to count to list them all out. So what is it we are doing when we count? For instance, if I count the people in the first row, "1, 2, 3, 4, 5, 6" (i.e., fish, fish, fish, fish, fish, fish). Or if I'm a baby and I want to count the number of toes I have, I might lie down in the supine position and count my toes. What am I doing? What is it I am doing? I am assigning a number to each object. And not just any kind of number either. A natural number! What if I counted out of order and counted someone twice? We wouldn't be happy with that method either, mostly because of counting something twice. For a satisfactory counting method, we are mapping the people in the first row onto the natural numbers. And that's in fact described formally by a function. So the first thing we have to do is remind ourselves about functions. We write $f\colon A\to B$ to signify that elements in $A$ are getting mapped to elements into $B$ or simply saying, "$A$ maps into $B$." We say "maps" or associates in the sense that each $x$ in $A$ is uniquely associated to some element $f(x)$ in $B$. Here the set $A$ is called the domain of the function while $B$ is called the codomain. Now, if $C\subset A$ and $D\subset B$, then we'll define $f(C)=\{f(x) \mid x\in C\}$. This is called "the image" of $C$ which lives in $B$. We can also define a similar notion of going backwards, from codomain to domain. We might call such a thing the inverse image of $D$. We would write $f^{-1}(D)=\{x \mid f(x)\in D\}$, where the $-1$ in the notation $f^{-1}$ may be thought of as "going backwards" in the same sense that a negative number in general is often meant to indicate a change in direction or reversal. When $f(A)=B$, then the codomain is the range. When the range is the entire codomain, we say $f$ is onto or that $f$ is a surjection. When $f(x)=f(y)$ implies that $x=y$, we say that $f$ is one-to-one or injective. When $f$ is one-to-one and onto, we call $f$ a bijection. 

- **Mathematical shorthand for special functions:** If we are dealing with surjections and injections and doing so in a nonformal way (it's rather bad form to use this in actual writing), then we might write $\twoheadrightarrow$ to communicate a surjection and $\hookrightarrow$ to indicate an injection. We would then write $\rightarrowtail$ to communicate a bijection. If you have a bijection, then this bijection is a function whose inverse will also be a function. Each element in $A$ is mapped to a unique element in $B$, and, in turn, each element in $B$ is mapped to a unique element in $A$. And the problem with the earlier counting example of counting someone twice or something like that was we were not happy unless our function was a bijection. More specifically, if there are more people than 3 in the first row and all I say is "1,2,3," then this function is not onto and thus not bijective. And if I counted someone more than once, then the function is not injective because two numbers are being mapped to the same person. When $f\colon A\to B$ is a bijection, then we say that $A$ and $B$ are in one-to-one correspondence. We might also write $A\sim B$ to communicate that $A$ and $B$ are in one-to-one correspondence. So what's the point of one-to-one correspondences? It's a way of saying the number of elements in $A$ is equivalent to the number of elements in $B$ even though we really haven't defined what we mean by "number." But in an intuitive way it makes sense because $A\sim B$ means that I can take all of the elements of $A$ and associate each one with a unique element in $B$ and vice-verse. And previously, when counting out `1,2,3,4,5,6," what kind of numbers were we using to map to other objects? We were using a subset of the natural numbers. 

- **Elementary counting:** I am using as one of my subsets $A=J_n=\{1,2,\ldots,n\}$, a subset of the natural numbers. In the above case, we would have $A=J_6=\{1,\ldots,6\}$. Is this not what we do when we count? Isn't this what a baby does when it counts the number of toes on her foot? We now have a very nice way of associating numbers, natural numbers anyway, with somehow the notion of size of a set. So now if you give me a set, then I can count it. How can I count it? Well maybe we have the set $\{1,\Box,\triangle,\pi\}$. Can I count the things in this set? Sure. There are many ways. A natural way is to simply write out 1, 2, 3, 4. But there's nothing to stop me from counting them in a different order, perhaps

  $$
  \begin{align*}
  1&\mapsto 4\\
  \Box&\mapsto 1\\
  \triangle&\mapsto 3\\
  \pi&\mapsto 2.
  \end{align*}
  $$

  So I am associating to $J_4$ the function described above that corresponds to whatever the set is called. So maybe above we have $A=\{1,\Box,\triangle,\pi\}$ and we write $A\leftrightarrow J_n$ to communicate that we are associating with a set $A$ one of the initial segments of natural numbers, namely the segment $\{1,2,3,4\}=J_4$. So we've made a start here. Now if I want to talk about the size of $A$ I might say that the size of $A$, which will often be denoted by absolute values, is $|A|=4$. Is it possible to associate to every set a natural number in this way? Is the "size" or "cardinality" definition well-defined? It's not clear from the definition, where the definition was to find a one-to-one correspondence between a given set $A$ and a subset of natural numbers. How do we know there is no other one-to-one correspondence where we get 5, for instance, by the time you're done? So that's a question to worry about. And even if that question is settled, then another potential question concerns whether or not there are other sets where it's not possible to find a one-to-one correspondence with some initial segment of natural numbers? If you can find such an association, then we will call such sets *finite*. More precisely, we will call a set $A$ finite if $A\sim J_n$ for some $n\in\Z^+$. (The set $A=\emptyset=J_0$ is considered to be finite.); otherwise, the set $A$ is infinite. 

- **On whether or not the set of natural numbers is infinite:** Let's explore a few things about $\N$. There's a special situation where you might worry about one-to-one correspondences and that is in the case where you have $A=\N$, where it's no longer elementary counting where $A=J_n=\{1,2,\ldots,n\}$ &#8212; it's counting where $A$ is all of the natural numbers. We haven't yet established whether or not natural numbers are infinite, but let's go ahead and make a special definition. We'll call $A$ *countable* if $A$ can be put into one-to-one correspondence with the natural numbers? We might ask ourselves whether or not there is any difference between the definitions

  > "Call $A$ finite if $A\sim J_n$; otherwise, $A$ is called *infinite*."

  and

  > "Call $A$ countable if $A\sim\N$."

  Let's just see what things are countable first of all. Would you say the natural numbers themselves are countable? Yes, of course. If you say that something is countable, then you need to describe the bijection that achieves the one-to-one correspondence between the set in question and $\N$, mathematically in terms of a formula or an unambiguous verbal description. What bijection would you use between the natural numbers and itself? We have $f\colon\N\to\N$, but what is the bijection? Simply let $f(n)=n$. So $\N$ itself is countable. 

- **Countability in terms of sequences:** Let's now look at the possibility of sequences being countable. Let's look at the sequence of distinct terms$x_1,x_2,x_3,\ldots$. Is this countable? Why? We could describe this by writing $f(n)=x_n$. This provides a function $f\colon\N\to\{x_i\}$ that provides a bijection. Any sequence indexed by the natural numbers is countable almost by definition because you can basically see the bijection. The moral of the story is that if you have a set of numbers or objects that can be listed in a sequence then the set is countable. What else has to be countable? What about the sequence $\{2,3,4,5,\ldots\}$? Yes! What's the bijection? We could use $f(n)=n+1$. Now what about the set $\{1,2,3,\ldots,k-1,k+1,k+2,\ldots\}$. Is this countable? Yes! What's the bijection? Let

  $$
  f(n)=
  \begin{cases}
  n & \text{if}\ n< k,\\
  n+1 & \text{if}\ n\geq k.
  \end{cases}
  $$

  Now, would you agree that if you can see the listing, then, if someone forced you, you could write down the explicit bijection. I claim now that we have just enough to show that a countable set is not finite. 

- **A finite set is not countable:** The set $\N$, or any countable set for that matter, is infinite. How might we show this? We're going to prove this, as we often do when we have no insight about something involving the natural numbers, by induction. What are we going to induct on? We are going to induct on $n$ and show that $\N$ is not in one-to-one correspondence to any $J_n$; that is, $\N\not\sim J_n$. For the base case, is it clear that there is no bijection between the empty set (or even the set with one element) and the natural numbers. More specifically, if $n$ is bijective with the set $\{1\}$, then clearly 1 gets mapped to somewhere in $\N$. So consider $g\colon\N\twoheadleftarrow\{1\}$; then consider $\N\setminus\{g(1)\}$. It's nonempty. So $g$ is not onto. Or the other way to say it, if you are looking at the forward function, $g$ could not be one-to-one because everything has to get mapped to 1. Okay so what's the inductive step? It goes like this. I am going to show you that if there were some secret bijection between $\N$ and a segment $J_n$ then there would be another secret bijection between $\N$ and the segment with one less number in it. More precisely, we will show that if $J_{n+1}$ is bijective with $\N$, then $J_n$ is bijective with $\N$. That is, if $J_{n+1}\sim\N$, then $J_n\sim\N$. If there were a bijection $\N\stackrel{h}{\twoheadrightarrow}J_{n+1}$, then what could we do with this? I claim that now I can construct a bijection between $\N$ and $J_n$. How will we do that? Well, $J_{n+1}=\{1,\ldots,n,n+1\}$. So what's going to happen? If we have the bijection $\N\stackrel{h}{\twoheadleftarrow}J_{n+1}$, then there would exist a bijection $\N\setminus\{h(n+1)\}\stackrel{\hat{h}}{\twoheadleftarrow} J_n=\{1,\ldots,n\}$. We claim also there is a bijection $\N\setminus\{h(n+1)\}\stackrel{f}{\twoheadleftarrow} \N$ by virtue of the previous example. Since we have the bijections

  $$
  \N\setminus\{h(n+1)\}\stackrel{\hat{h}}{\twoheadleftarrow} J_n
  \qquad\text{and}\qquad
  \N\setminus\{h(n+1)\}\stackrel{f}{\twoheadleftarrow} \N,
  $$

  we gain another bijection by the composition $\hat{h}\circ f$, namely
  
  $$
  \N\twoheadleftarrow J_n.
  $$

  So what I've shown is that if there were a secret bijection $\N\sim J_{n+1}$, then there is a bijection $\N\sim J_n$. So we have just established the inductive step. So there exists a bijection $\N\sim J_n$. That establishes the inductive step because the claim was there is no bijection $J_n\sim\N$. The base case was there was no bijection $\N\sim\{1\}$, and this is now showing that if there is no bijection $J_n\sim\N$ then there is no bijection $J_{n+1}\sim\N$. (And *this* is the contrapositive of what we showed in the inductive step, namely that if $J_{n+1}\sim\N$ then $J_n\sim\N$.) 

  So what's the key idea here? The key idea here is that $\N$ is infinite, and the way we showed it was because it can be put into one-to-one correspondence with a subset of itself, which is actually a very surprising fact. At first blush, it seems really ridiculous. How can you have a set that, in some sense, has the same size as a subset of itself (and a proper subset at that!). And it turns out that that is actually something that characterizes infinite sets. You can show that a set is infinite if and only if it can be put into one-to-one correspondence with a proper subset of itself. 

- **One-to-one correspondence between $\N$ and $2\N$:** Perhaps even more dramatically than the example above, I claim that I could put the set of natural numbers into a one-to-one correspondence with the set of even natural numbers; that is, I claim there exists a bijection such that $\N\sim2\N$. So how would you show this? What's the bijection then? What's the correspondence or association? Use $f(n)=2n$. So $\N$ and $2\N$ have the same size or cardinality. The upshot of all of this is that we have shown that countable sets do exist and that they are definitely different than finite sets in a very interesting way. 

## Countability arguments and standard number systems

How might countability arguments apply to standard number systems? 

- **Countability and $\Z$:** Can we come up with a bijection $\Z\sim\N$ to show that $\Z$ is countable? What would the association be? Instead of writing it out explicit, we could start with something like $\Z=\{\ldots,-3,-2,-1,0,1,2,3,\ldots\}$ and write

  $$
  \begin{align*}
  \vdots &{}\quad\vdots \\
  {} &\;\vdots {}\\
  1&\mapsto 0\\
  2&\mapsto 1\\
  3&\mapsto -1\\
  4&\mapsto 2\\
  5&\mapsto -2\\
  6&\mapsto 3\\
  7&\mapsto -3\\
  {} &\;\vdots {}\\
  \vdots &{}\quad\vdots
  \end{align*}
  $$

  This pattern certainly seems like we could continue it indefinitely, and if we were forced to then we could probably write down an explicit description of our bijection. So $\Z$ is, in fact, a countable set. Rudin gives the explicit description

  $$
  f(n)=
  \begin{cases}
  \dfrac{n}{2} & \text{($n$ even)}\\[1em]
  -\dfrac{n-1}{2} & \text{($n$ odd)}.
  \end{cases}
  $$

  So $\Z$ is countable, $2\N$ is countable. What about $2\Z$? We could use the same ideas. One might be tempted to say that all subsets of countable sets are countable. And such a temptation turns out to be good because it's mostly true &#8212; every *infinite* subset of a countable set is countable. This turns out to be a rather helpful lemma oftentimes because it means we can avoid having to come up with *explicit* descriptions of our bijections as we have done thus far.

- **Every infinite subset $E$ of a countable set $A$ is countable:** So what's the basic idea? The full proof appears in <BibRef id='WR1976' pages='p. 26'></BibRef>, but here's the idea: The idea is to suppose that $A$ is countable where we can think of $A=\{x_1,x_2,x_3,\ldots\}$, where this set is countable. Now we pick off a subset $E$ of this, where maybe $x_1$, $x_3$, and some other elements are in the subset but not necessarily everything is in it. But this subset is infinite. What can we do? Your task now is to list the things in $E$. How will you do that? Let $n_1$ be the first index that appears or, more precisely, $n_1=\inf\{i \mid x_i\in E\}$. This will denote $n_1$, and why does this infimum exist? It's bounded below? Real numbers can be bounded below but not have a smallest element. But we have a set of natural numbers and $\N$ is well-ordered so non-empty subset of $\N$ has a least element. So $n_1$ exists by the \wop. So we are wanting to write $E=\{x_{n_1},x_{n_2},\ldots\}$, but what might be $x_{n_2}$ in this case? It should be the next thing in $E$ so if we picked off $x_3$ after $x_1$ in our construction of $E$, then $n_2$ should be the third element of $A$ that is picked off. More specifically, $n_2=\inf\{i \mid x_i\in E, i>n_1\}$. And, in general, we can let $n_k=\inf\{i : x_i\in E, i>n_{k-1}\}$. So we have a listing for $E$, namely $E=\{x_{n_1},x_{n_2},x_{n_3},\ldots,x_{n_k},\ldots\}$. This is the idea. And this lemma will become very very useful.

- **Countability and the $\Q$:** Is $\Q$ countable? I'm going to write the rationals as ordered pairs. More specifically, we get something that looks as follows:

  <div align='center' className='centeredImageDiv'>
    <img width='400px' src={require('@site/static/img/lecture-images/L7-f1.png').default} />
  </div>

  It's clear that every positive rational will appear in this array at some point. Now all I have to do is list them in some order, indicated with the red arrows above. One issue we might worry about is that some rationals repeat, but this will not be a problem. Why? What we have really shown with our diagonalization argument is that ordered pairs of natural numbers are countable and the rationals are just a subset of them where you pick 1 representative of them to be in the picture. In the figure above, where red arrows are included, representatives have a bubble around them whereas non-representatives do not. The whole set of positive rationals is a countable set so any infinite subset will be a countable set as well. So we have shown that $\Q$ is countable, but we have really also shown that if $A$ is countable then $A\times A$ is countable. The above is *really* a demonstration that $\Q_+$ is countable, but if I wanted to show that $\Q$ is countable, how could I do it? I'd use the "trick" we used for $\Z$, namely having all of the nonnegative rationals going one way and all the negative rationals going the other way and associate the natural numbers with them in an appropriate fashion. That produces a biinfinite sequence, but that can be put in sequence by now picking 0 off first, and then 1 and then $-1$ and swinging back and forth. (It may help to think of appending a rope to 0, then to 1, then to $-1$, then to 2 and so forth &#8212; once the rope is pulled out, all the rationals are attached to it.) We could also modify the above presentation as follows:

  <div align='center' className='centeredImageDiv'>
    <img width='400px' src={require('@site/static/img/lecture-images/L7-f2.png').default} />
  </div>

  Actually, more generally, the book shows that not only are ordered pairs countable but ordered triples are countable as well. And ordered quadruples. And so on by induction. So we now know that $\Q$ is countable and a next reasonable consideration would be the set of real numbers.

- **Countability concerning $\R$:** Is the set $\R$ countable? Can we list all the real numbers? If the answer is yes, then we simply produce a listing. If the answer is no, then you have to show that any listing you try will fail to hit everything. Let's just suppose for right now that there were some listing, and let's see if we run into some problems. Here is a proposed listing:

  $$
  \begin{array}{rcl}
  \text{From}\ \N & {} & \text{From}\ \R\\
  \hline
  1&\mapsto& 0.1234567890123\ldots\\[1em]
  2&\mapsto& 0.3141592653589\ldots\\[1em]
  3&\mapsto& 0.1414213511111\ldots\\[1em]
  4&\mapsto& 0.7777777712557\ldots\\[1em]
  5&\mapsto& 0.4132410877747\ldots\\[1em]
  \vdots&\;\vdots&\vdots
  \end{array}
  $$

  Now, I claim that if you look at this list then I can produce a number on the right-hand side that isn't in this listing in a very special way. Our proof that $\R$ is uncountable will be a proof by contradiction that will begin by assuming that there is a listing. Suppose there exists a bijection (e.g., look at the illustration above). We will show that the bijection $f\colon\N\to\R$ is *not* onto, thereby establishing that the proposed bijection is really not a bijection at all. And this will be a general proof that will hold for any proposed listing, not just the listing I have above. I just have to show you what to do with any such listing. And we'll do it by example. So I am going to produce a real number that doesn't appear *anywhere* on the listing suggested above. And the way I am going to do that is I am going to make sure that this number disagrees with *every* number in our listing in some decimal place. How am I going to do that? I will produce a number $x^*$ that disagrees with the first number in the first decimal place, the second number in the second decimal place, and so forth:

  $$
  \begin{array}{rcl}
  \text{From}\ \N & {} & \text{From}\ \R\\
  \hline
  1&\mapsto& 0.\textcircled{1}234567890123\ldots\\[1em]
  2&\mapsto& 0.3\textcircled{1}41592653589\ldots\\[1em]
  3&\mapsto& 0.14\textcircled{1}4213511111\ldots\\[1em]
  4&\mapsto& 0.777\textcircled{7}777712557\ldots\\[1em]
  5&\mapsto& 0.4132\textcircled{4}10877747\ldots\\[1em]
  \vdots&\;\vdots&\vdots
  \end{array}
  $$

  And the way I will do that is by looking at the $n$th digit of the $n$th number and if it is a 7, then I will make it a 1, and if it is not a 7, then I will make it a 7: For example, according to the scheme above, our number would start off as follows:

  $$
  x^*=
  0.
  \underbrace{7}_{\substack{1\neq7\\[0.25em]{\scriptsize\textcircled{1}}\mapsto7}}\,
  \underbrace{7}_{\substack{1\neq7\\[0.25em]{\scriptsize\textcircled{1}}\mapsto7}}\,
  \underbrace{7}_{\substack{1\neq7\\[0.25em]{\scriptsize\textcircled{1}}\mapsto7}}\,
  \underbrace{1}_{\substack{7=7\\[0.4em]{\scriptsize\textcircled{7}}\mapsto1}}\,
  \underbrace{7}_{\substack{4\neq7\\[0.2em]{\scriptsize\textcircled{4}}\mapsto7}}\quad
  \ldots\quad\equiv\quad0.77717\ldots
  $$

  The claim is that $x^*\neq f(n)$ for any $n$. Why is this the case? Why is this number $x^*$, which we've constructed and basically made different from every number on the list, not going to be on the list? The number $x^*$ differs from $f(n)$ in the $n$th decimal place. So $x^*$ is not in the image of $f$. So we have a set that is somehow bigger than the set of natural numbers in the sense that it cannot be put into one-to-one correspondence with the natural numbers. How come this proof does not prove that the rationals are not countable? This proof would not work to show that the rationals are not countable because that would demand that everything on the right side in the scheme above be a rational number, and yes you could produce a number that is not on the list, but there's no guarantee that that number is rational. So it wouldn't disprove anything. So, in fact, $\R$ is uncountable. So this leads to a notion of the size of sets.

- **The sizes of sets:** We have sets of different cardinalities. There's $J_0$, $J_1$, $J_2$, \ldots, $J_n$, which are finite sets, but then we also have the natural numbers $\N$ which happen to have the same cardinality as $\Q$. But then there's also $\R$ which is not in the same category as $\N$ and $\Q$. Are there other sets with other cardinalities? The answer is yes &#8212; there are actually infinitely many cardinalities. A theorem goes as follows: For any $A$, we have $A\not\sim 2^A$, the power set of $A$. What is the power set of $A$? It is the set of all subsets of $A$. The argument for the rationals can be used here; that is, the proof is a diagonalization argument. It looks very similar to the Cantor diagonalization argument. The consequence of this particular fact is that if you look at the set of all functions $f\colon\R\to\R$, that's a much larger size of an infinite set than the real numbers because it's basically a power set of the real numbers and you could just keep going if you want. There is a question as to whether or not there's a size of infinity between $\N$ and $\R$. And it turns out that that question is provably undecidable. That means you could the answer to that question to be true or false and not violate the mathematics as we know it. That's a rather surprising fact, and that's called the continuum hypothesis.

