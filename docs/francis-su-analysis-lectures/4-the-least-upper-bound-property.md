---
title: 4 - The least upper bound property
hide_title: false
sidebar_label: 4 - The least upper bound property
description: Lecture notes by Daniel Farlow to accompany Lecture 4 from Francis Su's YouTube video series
draft: false
tags:
  - LUB
  - Suprema
  - Infima
  - Lecture 4 (Francis Su)
keywords:
  - Least upper bound 
  - Suprema
  - Infima
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
        url="https://www.youtube.com/watch?v=0EVe8Amvqig"
    />
</div>

## Where we left off last time

- **Construction of the reals:** The construction of the reals was motivated by noticing that $\Q$ has little "gaps." The rationals have an order, they have an arithmetic, but there are gaps. In particular, not every bounded set has a supremum. So, for instance, we think about the rational numbers as being ordered on a line, but we noted, for instance, that there are some lengths that do not appear as a rational number. If we give the hypotenuse of a right triangle with leg lengths 1 and 1 a name, namely $\sqrt{2}$ (this symbol only stands for this length right now ... we still do not quite know what $\sqrt{2}$ really means), then this length lies somewhere on our number line, but it is not represented by a rational. Now, how exactly do we get at the apparent gap there without referring to the actual point at the gap? There are lots of rationals that actually get really close to the square root of 2 such as
  
  $$
  1, 1.4, 1.41, 1.414, 1.4142, \ldots
  $$

  as Rudin notes on the first page of his book. These numbers, in some sense, sort of encroach on this particular length we are currently denoting by $\sqrt{2}$, but there's nothing right there (i.e., there is no rational number there exactly). So how do we get at the gaps? The fact that $\Q$ has gaps points out that not every bounded set has a supremum in $\Q$. In particular, all of the rationals to the left of $\sqrt{2}$ (or the rightmost edge of the set $A=\{x\in\Q\mid x^2<2\}$), that set, does not have a supremum. The set $A$ does not have a *least* upper bound. 

- **Absence of LUB:** We noted that $\Q$ does not have the least upper bound property. Recall that a set $S$ has the least upper bound property if every nonempty subset of $S$ that has an upper bound (in $S$) has a least upper bound (in $S$). If $S=\Q$ in this statement, then we know such a property fails to exist (the set $A$ is a concrete counterexample).

- **Filling in the gaps:** The idea, then, is to fill in the gaps somehow. And how would we do that? Well, if we fill in the gaps, we hope to get something that we would think of as the real numbers, but how do you do that without referring to the gaps themselves? The idea is that if we want to get at a particular endpoint, then we can do so by just looking at the rationals that, in fact, approach that endpoint and just refer to that endpoint by the rationals that lead up to it. That's the key idea behind a Dedekind cut. You can think of a cut essentially as cutting the rationals at a particular point and looking at everything to the left. So a cut is a subset of rationals that's not trivial (i.e., it's not empty and it's not everything), it's closed to the left or closed downward, and it has no largest member. That's what a cut is. And the set of real numbers will just be the set of all cuts: $\R=\{\alpha\mid\alpha\ \text{is a cut}\}$. 

- **Defining endpoints:** If some real numbers (like the length "$\sqrt{2}$") are given by endpoints of subsets (like $\{q\mid q^2<2\}$), then let's *define* that endpoint by the subset "approaching" it. 

## Checking properties of cuts

We had some things to "check" from last time concerning defining the real numbers as a set of cuts. What did we need to check?

- **Order:** How did we define an order of cuts? How did we define whether or not one cut was "less than" another? If one is included in the other. Thus, our notion of order was essentially by inclusion (recall two cuts were equivalent by mutual subset inclusion).  

- **Arithmetic:** We also defined an arithmetic which includes the operations $+$ and $\times$, and these operations were notions that we developed that were what you might expect. In particular, if a cut is a collection of rationals ... if we have a cut $\alpha$ and a cut $\beta$, then their *sum*, $\alpha+\beta$, will be the sum of *rationals* where one of those rationals is from $\alpha$ and the other from $\beta$. That's what we defined addition to be. And multiplication was defined somewhat similarly. You just have to worry a little bit about the signs of multiplying things that are negative. You should check that $\R$ is, in fact, an ordered field. 

- **Playing nicely:** By now we have an order on $\R$, we see $\R$ as a field, but does the order on $\R$ play nicely with the operations of the field? Yes. We can actually think about this without writing anything down necessarily. Give me a cut, say $\alpha$, and suppose it's less than another cut $\beta$. If we add the same quantity to both $\alpha$ and $\beta$, then is order preserved? Yes. So order is preserved by addition. Try to think similarly about multiplication.

- **More properties to verify for $\R$:** Next up is to verify a few properties of $\R$ that we claimed were true last time but that we have not yet verified. In particular, does $\R$ contain $\Q$ as a subfield? Yes. The set $\R$ extends $\Q$. Let's see why that's true. To show that $\R$ actually extends $\Q$ as a subfield, what we mean is, "Is there a natural way that the rationals sit embedded in this construction of $\R$, where we think of $\R$ as a collection of cuts?" So which cuts correspond to the rational ones? Just as we constructed $\Q$ from $\Z$ and identified the integer $n$ with the rational $\frac{n}{1}$, we will now need to identity a rational number $q$ with its real number counterpart that is being represented as a cut. If the idea is to associate to points on the line the rationals to the left of it, then which collection will correspond to rational points on such a line? We can think of *all* rationals to the *left* of such a rational. So associate to some rational $q\in\Q$ the cut $q^*=\{r\in\Q\mid r<q\}$. This is clearly a cut. (You should check this.) And the claim is this association shows how $q$ is embedded in the reals. Check that the function $f\colon\Q\to\R$, which is the mapping $q\mapsto q^*$, satisfies the field operations and do so in a one-to-one way. (If you've taken algebra, then you would think of $f$ as an injection of one field into another field.) So check that $f$ preserves $+$, $\times$, and order. What do we mean by that? If we add two rationals, say $r+s$, and look at the associated cut $(r+s)^*$, then the claim is that this is the same as the cut associated to one rational plus the cut associated to the other; that is, $(r+s)^*=r^*+s^*$. Also, if we have $r<s$, then we should also have $r<s$. The function $f$ is an injection in the sense that you will never have different rationals being associated to the same cut. Why? Let's take the rational 1 and $\frac{4}{5}$. Could they be associated to the same cut? No. Because the set of things to the left of them will be different. (One of them will have more than the other.) The function $f$ is one-to-one. So $\R$ does contain $\Q$ as a subfield. Using new notation, we write $\Q'=\{q* \mid q\in\Q\}$ to indicate that $\Q'$ is a subfield of $\R$. 

- **Moment of reflection:** What all have we just done? We've defined an object that looks like the real numbers we know and love which was our goal. It sits along a line, it has an order, it has an arithmetic, and some of the things in it behave like the rationals. And it's defined completely in terms of the rationals. A cut is a collection of rationals. Now, once we starting working and elucidating the properties of the real numbers, we'll stop thinking of them as collections of rationals. Just like when we work with fractions we do not think of them as ordered pairs. We think of them as fractions because we have different properties associated with them. So what have we done? We've constructed the real numbers, the rationals sit inside them in a nice way. But there's still an objection. What about that damned thing we call the square root of 2 or $\sqrt{2}$? Notice that the length which we have called by the funny symbol "$\sqrt{2}$" actually sits in the the line $\R$. It is a certain cut. Which cut? It's the cut that consists of all rationals such that the square is less than 2 (or, just to make sure it's a cut and closed completely to the left, we should probably add what?) or all the rationals less than 0. 

  (If we just had $\gamma=\{q:q^2<2\}$, then $\gamma$ would *not* be a cut because it is not closed downward. For example, we could have $p=1$ and $q=-2$; then $p\in\gamma$, $q\in\Q$, and $q<p$, but $q\not\in\gamma$, making $\gamma$ fail property (ii) of being a cut.) 

  Symbolically, let's say

  $$
  \gamma=\{q:q^2<2\ \text{or}\ q<0\}.
  $$

  Then we can check, using the definition of multiplication, that $\gamma^2=2^*$. Really? What was the definition of multiplication? Well, it looked something like looking at all possible products, at least for things that are considered to be positive &#8212; all possible products of pairs of things, one from one cut and the other from the other cut. Both cuts are $\gamma$ in this case. And is it not the case that if you take a bunch of those then you will get something that basically creeps up on 2 instead of creeping up on the length "$\sqrt{2}$"? So this creature $\gamma^2=*2$ lies in $\R$; that is, the length "$\sqrt{2}$" lies in $\R$. So what have we done? We've shown that $\R$ extends $\Q$, we've shown that $\R$ is an ordered field, and then the last thing that we wanted to show from the theorem is that $\R$ has the least upper bound property which $\Q$ does not have.

## How do we know that R has the least upper bound property?

- **Cuts and least upper bounds:** If $A$ is a collection of *cuts* (i.e., real numbers), and we wish to take their supremum. To show that something has the least upper bound property we want to show that if the set is bounded then it has a least upper bound. So we'll assume that the collection of cuts $A$ has an upper bound. Let's call it $\beta$. So you can envision sketching out a bunch of cuts, where they are all bounded by some $\beta$. Then what is the candidate for the supremum here? The claim is that the supremum exists and so we should come up with a candidate. We said last time what the candidate *should* be. Recall the candidate should be the set of *all* of the cuts in $A$ but the smallest such set. (The cut $\beta$ is an upper bound that contains all other cuts but it may not be the *smallest* such set.) Let

  $$
  \gamma=\bigcup_{\alpha\in A}\alpha.
  $$

  It should be fairly clear that $\gamma$ is a subset of $\Q$. We're thinking of $\gamma$ as a candidate for the supremum, but the first thing we had better check is that $\gamma$ is actually a real number, that it is a cut. We need to first check that $\gamma$ is a cut, and then check that $\gamma=\sup A$. Why is $\gamma$ a cut? To see that $\gamma$ is a cut, we must check three things, properties (i)-(iii). Instead of writing down everything carefully as is done in your book, let's look at the properties from the standpoint of whether or not the properties are believable:
	
	+ **Property (i) [nontrivial]:** Why is $\gamma$ nontrivial? What isn't $\gamma$ empty? It contains a bunch of alphas or $\alpha$ which are nonempty. Why is $\gamma$ not everything? Because it's bounded above by $\beta$. If $\gamma$ were not bounded above, then $\gamma$ could have possibly been everything.
	+ **Property (ii) [closed downward]:** Why is $\gamma$ closed downward? It's the union of things that are closed downward. So if you pick one thing in $\gamma$, then because this chosen thing is in the union it means that that thing must be in some $\alpha$, where this $\alpha$ (and all other $\alpha$, of course) is closed downward. So then everything to the left of that thing must also be in $\alpha$ (because $\alpha$ is closed downward); therefore, everything to the left of the chosen thing must be in $\gamma$.
  + **Property (iii) [no largest member]:** Why is there no largest member of $\gamma$? Again, if you pick some thing in $\gamma$, then this thing must be in some $\alpha$. But $\alpha$ has no largest member; therefore our chosen thing has something bigger than it in $\alpha$, which means this something bigger is in $\gamma$. 
	
  
  In summary, the closed downward and no largest member parts follow from the fact that each $x\in\gamma$ is in some $\alpha$.

- **Our least upper bound:** Okay so $\gamma$ is a cut. Now let's see why it is a supremum. Why is $\gamma$ the least upper bound? First of all, is it clear that $\gamma$ is actually an upper bound? If $\gamma$ is a union of things and if order is inclusion, then it should be clear that $\gamma$ is an upper bound. It contains everything! That is, $\gamma$ contains all the $\alpha$ in $A$. What is the last thing we need to check? That $\gamma$ is the *least* upper bound. That's there's no great bound for $A$ that is smaller than $\gamma$. 

- **Why we have a least upper bound:** Note that $\gamma$ is a least upper bound because if $\delta<\gamma$, then there must be something in $\gamma$ that is not in $\delta$. (This follows from how order is defined by inclusion.) Let's give this something a name, say $x$. Since $x\in\gamma$, then $x\in\alpha$ for some $\alpha\in A$. So why is $\delta$ not an upper bound for all the $\alpha\in A$? Well, because $x\in\alpha$ for some $\alpha$ for which $\delta$ is *not* an upper bound. More succinctly, if $\delta<\gamma$, then there exists $x\in\gamma-\delta$. So $x$ is in some $\alpha$ in $A$, but not in $\delta$, so $\delta$ is not an upper bound for $A$.

- **Summary:** What we have now: we have an ordered field, it extends the rationals, and it has the least upper bound property. And, in fact, we claim that this characterizes the real numbers. There is no other field that in fact is an ordered field and has the least upper bound property. 

## What is so unique about R?

- **The big theorem:** Theorem 1.19 in Rudin is a huge result:

  > **Theorem 1.19:** There exists an ordered field $\R$ which has the least-upper-bound property. Moreover, $\R$ contains $\Q$ as a subfield.

  Something we are not going to prove that takes a little more work but is good to note is that, in fact, there is no other field with this property. The set $\R$ is the only ordered field with the least upper bound property. So if you see any other field with the least upper bound property the claim is that it is isomorphic to $\R$. You'll be able to find a way to map the elements of that field into the elements of $\R$ in a one-to-one and onto way that preserves all of the field operations. 

- **Consequences of least upper bound property:** Now that we know $\R$ is an ordered field with the least upper bound property, we don't have to think of real numbers as subsets of rational numbers. Why? Well, our construction of $\R$ showed us how to define the reals in terms of things we've defined before. But now look &#8212; I could think of, if I want, the particular length "$\sqrt{2}$" as the supremum of a bunch of rational numbers,

  $$
  \sqrt{2}=\sup\{1,1.4,1.41,1.414,1.4142,\ldots\},
  $$

  and we claim that is exactly what the decimal representation of a real number is doing. The shorthand for saying, "Hey, let's take the supremum of the creatures

  $$
  \{1,1.4,1.41,1.414,1.4142,\ldots\}\text{"}
  $$

  is to write this as

  $$
  1.4142135\ldots
  $$

  What this means is, "Give me the real number that is the supremum of this collection of rationals." That's what the decimal representation is. How do we know the supremum exists? Because of the least upper bound property of the real numbers. So now you can think of real numbers as decimal representations, and you sort of know where this number comes from now. That's certainly one way to think about the length $\sqrt{2}$.

- **Square roots in general:** More generally, you could convince yourself that if you want something whose square is 5, for instance, I could find that something by making a definition very similar to that for $\sqrt{2}$ as a length of a right triangle or as a supremum of a set. For instance, we could define the $n$th root of $a$, or $a^{1/n}$, as the supremum of all rationals whose $n$th power is less than $a$:

  $$
  a^{1/n}\stackrel{\text{def}}{=}\sup\{q \mid q^n<a\}.
  $$

  What this definition is really saying is, "Roots exist." Why can we do this? Well, $\sup\{q \mid q^n<a\}$ is a real number, it's the supremum of a bunch of rationals, each of which is clearly bounded. The real numbers have the least upper bound property, and I know that supremum exists. And, of course, what you have to convince yourself of is that when you multiply this together $n$ times you get $a$, and that takes a little bit of work. So you can check that $(a^{1/n})^n=a$; that is, if you take $a^{1/n}$ to the $n$th power, you will, in fact, get the cut that's equivalent to $a$.

  **Student question:** What if we tried to solve the equation $\gamma^2=-1$? Well, in the particular definition

    $$
    a^{1/n}\stackrel{\text{def}}{=}\sup\{q \mid q^n<a\},
    $$

    what would go wrong with this definition, if, say, $a=-1$ and $n=2$? It's not a cut---what's not a cut? The set $(-1)^{1/2}=\sup\{q\mid q^2<-1\}$ would be empty. You wouldn't be taking the supremum of anything. The set $\{q\mid q^2<-1\}$ would be empty. (See [this question](https://math.stackexchange.com/q/432295/191378) for a discussion of why, in the extended reals, we have $\sup(\emptyset)=-\infty$ and $\inf(\emptyset)=+\infty$. Thus, in this case, without the knowledge of complex numbers and without restricting our definition, we might say $(-1)^{1/2}=\sup(\emptyset)=-\infty$.) So we need, in this case, for $a>0$; otherwise, the set is empty and the supremum won't exist. So we don't have a way yet of finding solutions to the equation $\gamma^2=x$ when $x$ is negative, but we will very soon when dealing with complex numbers. Also in our definition, we could have $a<0$ but $n$ odd, and this would *work*, but recall the primary motivation for our work constructing the reals which was to prove the existence of a solution to the equation $x^2=2$; thus, in general, our goal is to prove the existence of $n$th roots of *positive* reals, and the "length interpretation" of the solution to $x^2=2$ can be seen as a large, motivating factor. Of course, algebraically, yes, we do need to take account of the fact that, in our definition above, it is perfectly sensible to let $a<0$ when $n$ is odd. In light of these boundary considerations, recasting our definition with some additional constraints may be wise, namely,

    $$
    a^{1/n}\stackrel{\text{def}}{=}\sup\{q \mid q^n<a\},
    $$

  where now we will stipulate that we must have $a>0$ and $n>0$, where $a$ is any positive real number and $n$ is any positive integer. 

- **Greatest lower bound:** Let's talk about the counterpart to the supremum. We have a name for this. We have a least upper bound. There's also a concept of the greatest lower bound (glb). Its name is *infimum*. So if you give me a set $A$ and it has a greatest lower bound, then we find it and call it the set's infimum or $\inf A$. You will show some properties concerning this; for example, you'll show that if the infimum of a set $A$ exists, then we have $\inf A=-\sup(-A)$. A set's infimum may not exist, but it will exist, of course, if the set is bounded below. This is not true in $\Q$, but it is true in $\R$. So it's basically the corresponding property where instead of the least upper bound property we note that $\R$ also satisfies the greatest lower bound property.

- **Important observation concerning bounds:** Hopefully we have begun to see and\slash or appreciate that this concept of supremum, the least upper bound, is a hugely important concept. It's what makes the real numbers different from just the rationals. It allows, as we will see to come, the idea of a limit, which is fundamental to calculus. And so this property plays a huge role. So it makes sense for us to talk about a few properties of suprema and infima. 

## What are some of the consequences and properties of suprema/infima?

- **Archimedean property:** If you give me two real numbers $x$ and $y$, where we demand $x>0$, then we claim that there exists a positive integer $n$ such that we can multiply $n$ and $x$ and eventually the product will be greater than $y$. That is, under the given conditions, we claim that $nx>y$. This property seems fairly self-evident and easy enough, but it is a consequence of the least upper bound property. It's equivalent to thinking about the following statement: If we just let $y=1$, then what this property is saying is that if $x>0$ then there exists a natural number such that $\frac{1}{n}<x$. That is, some reciprocal of a positive number (i.e., $\frac{1}{n}$) is going to eventually be smaller than $x$ (i.e., eventually we have $\frac{1}{n}<x$ for a given $x$ and $n$ sufficiently large). Do the rationals also have the Archimedean property? Yes, but we'll need to draw some distinctions about this. We'll do that after proving the Archimedean property.

- **Proof of Archimedean property:** Let's look at the collection of all multiples of $x$ for $n$ a natural number: $A=\{nx\mid n\in\N\}$. The claim is $nx$ is eventually bigger than $y$. If it's not true, then the hope is we will eventually get a contradiction. If $A$ were bounded by $y$ (that's what it would mean for the statement not to be true, that $y$ is bigger than everything; that is, we'd have $nx<y$ for all $n$), then $y$ is an upper bound of $A$. But $A$ is a collection of real numbers, and thus bounded above; thus, $A$ has a least upper bound by the least upper bound property. Let's call it $\alpha$. So $\sup A=\alpha$. How is this going to help us get a contradiction? Well, if $\alpha$ is a least upper bound, then what has to be true about anything smaller than $\alpha$? It cannot be an upper bound! So then $\alpha$ minus, oh let's subtract something convenient (how about subtracting $x$?). Since $x$ is positive, we'll have $\alpha-x<\alpha$. So $\alpha-x$ is not an upper bound of $A$. But if $\alpha-x$ is not an upper bound, then $\alpha-x$ is less than some multiple of $x$, and let's call that multiple $m$. So we have $\alpha-x<mx$ for some $m\in\N$. Hence, $\alpha<(m+1)x$, a contradiction. The contradiction obtained here is due to the fact that even though $\alpha$ is an upper bound for $A$, we see that $\alpha$ is *less than* the quantity $(m+1)x$ even though $(m+1)x$ is a member of the set $A$. So $\alpha$ is not an upper bound for $A$, our contradiction. 

- **Rationals and the Archimedean property:** The rationals certainly seem to have the Archimedean property (after all $Q\subset\R$), but could we use the proof above to show that $\Q$ has the Archimedean property? No. Why not? There's no requirement for a least upper bound for the set $A$. So if we wanted to show this property, we would have to show it in a different way. 

- **Density of $\Q$ in $\R$:** The Archimedean property for $\R$ may seem like an innocuous statement, but it actually has another consequence that is worth pointing out and that may be surprising. Between any real numbers $x$ and $y$, where $x<y$, there exists a rational $q\in\Q$ such that $x<q<y$. Stated as a theorem:

  > **Theorem.** Between $x,y\in\R$, $x<y$, there exists $q\in\Q$ such that $x<q<y$. 

  The above theorem is often stated verbally by saying that "$\Q$ is*dense* in $\R$." Formally, this means that if you take any interval of real numbers, then there exists a rational number in that interval. Why is that? Let's prove it. It's not too bad to show once the Archimedean property has been established.

- **Proof of density of $\Q$ in $\R$:** Let's use the fact that the originally given form of the Archimedean property is equivalent to the form where if you give me a positive real $x$, then there exists a positive integer $n$ such that $\frac{1}{n}<x$. More succinctly, for any real $x>0$, there exists $n\in\N$ such that $\frac{1}{n}<x$. So let's choose $n$ such that $\frac{1}{n}<y-x$. (This is the Archimedean property in action, and recall that we are assuming $x<y$ so $y-x$ represents the distance between points here.) Envisioning this on the number line, we're thinking of two points $x$ and $y$, where $x<y$, looking at their difference, $y-x$, and finding a reciprocal $\frac{1}{n}$ that's smaller than that difference. And if we imagine the difference between $x$ and $y$ as being really really small, then $n$ might be quite large. Now, consider multiples of $\frac{1}{n}$:
  
  $$
  \frac{1}{n},\frac{2}{n},\frac{3}{n},\frac{4}{n},\frac{5}{n},\ldots .
  $$

  What do you know about the multiples of $\frac{1}{n}$, also by the Archimedean property? They're unbounded. They'll get as large as you like. What does that mean? Well, if they're unbounded, then eventually they're bigger than the number $x$. So we'll choose the first multiple such that $\frac{m}{n}>x$; that is, we're picking the very first multiple of $\frac{1}{n}$ that *just* got beyond $x$. A visual:
  
  $$
  \frac{1}{n},\frac{2}{n},\frac{3}{n},\frac{4}{n},\frac{5}{n},\ldots,x,\frac{m}{n},\ldots
  $$

  Now our claim is that $\frac{m}{n}<y$. That is, our first multiple of $\frac{1}{n}$ just beyond $x$ has to live between $x$ and $y$. It won't also be beyond $y$. Why is that? If not, then what would we have? We would have the following inequalities:

  $$
  \frac{m-1}{n}<x
  \qquad\text{and}\qquad
  \frac{m}{n}>y.
  $$

  But these inequalities, taken together, imply that

  $$
  \frac{1}{n}>y-x.
  $$

  Why? Because $\frac{m-1}{n}<x$ implies $\frac{1-m}{n}>-x$ and we add the two inequalities above to get $\frac{1-m}{n}+\frac{m}{n}>y-x$ or, when simplified, $\frac{1}{n}>y-x$. This is contradicts our original assumption that $\frac{1}{n}<y-x$. Hence, it must be the case that $\frac{m}{n}<y$. Since it is also the case that $x<\frac{m}{n}$, we get the inequality

  $$
  x<\frac{m}{n}<y
  $$

  by transitivity, as desired.

- **Properties of suprema:** Let's conclude by listing some properties of suprema which will be useful as you work with them. And they are all rather self-evident. 
	
	1. Let $\gamma$ be an upper bound for a set $A$. Then $\sup A\leq\gamma$ if and only if $\gamma$ is an upper bound for $A$.
	2. Suppose you know for all $\alpha\in A$ that $\alpha\leq\gamma$. Then $\sup A\leq\gamma$.
		
    *Note:* What does the property above mean? In effect, it means that if you have an inequality that says all $\alpha$ is bounded by $\gamma$, then you can insert $\sup A$ without changing the inequality; that is, $\alpha\leq\gamma$ implies that $\sup A\leq\gamma$.

	3. Suppose you know that for all $\alpha\in A$ that $\alpha<\gamma$. Then $\sup A\leq\gamma$. 
		
    *Note:* For the property above, it may be tempted to write $\sup A<\gamma$ as a conclusion, but that is not necessarily the case. You could think about this as when you take the supremum remember that it could actually achieve the bound even if everything is less than $\gamma$. For instance, look at all the negative real numbers. Certainly all the negative real numbers are strictly less than 0, but the supremum of the negative real numbers is $0$.

	4. If $\gamma<\sup A$, then there exists $\alpha\in A$ such that $\gamma<\alpha\leq\sup A$.

	5. If $A\subset B$, then $\sup A\leq\sup B$. For all $\alpha\in A$, $\alpha\in B$ so $\alpha\leq\sup B$. By property 2, $\sup A\leq\sup B$.
	
  6. How might we show when $\sup A=\sup B$? One strategy would be to show that for every $\alpha\in A$, there exists $\beta\in B$, such that $\alpha\leq\beta$. Showing this would show that $\sup A\leq\sup B$. Why? Well, the argument is similar to that in the property above except that you don't have the fact that $\alpha\in B$. But if you can show that $\alpha<\beta$, then $\beta<\sup B$, and therefore $\sup B$ is a bound for all things in $A$ because there's an element for each of them works and therefore bigger than $\sup A$. The method is similar for $\geq$.
	
  To show an upper bound is a least upper bound, then there are really two strategies for doing this. First you show it is an upper bound, and then you either show that anything that is smaller isn't an upper bound or you show that if something is an upper bound that all the other upper bounds are bigger than it.

