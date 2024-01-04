---
title: 23 - Discontinuous functions
hide_title: false
sidebar_label: 23 - Discontinuous functions
description: Lecture notes by Daniel Farlow to accompany Lecture 23 from Francis Su's YouTube video series
draft: false
tags:
  - Discontinuous Functions
  - Monotonicity
  - Discontinuities
  - Lecture 23 (Francis Su)
keywords:
  - discontinuous functions
  - monotonicity
  - discontinuities
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
        url="https://www.youtube.com/watch?v=42-YDJiDIWk"
    />
</div>

## Where we left off last time

What was the main idea concerning uniform continuity last time and what can be said about discontinuous functions?

- **Last time:** Last time we talked about uniform continuity. In general, we've talked a bit about what it means for a function to be continuous, and we've seen many definitions of continuity by now. One of them was a metric definition which basically said that a function is continuous if close enough points are mapped to close enough points. So if in the target you want to be $\epsilon$ apart from the image $f(p)$ of a point $p$, then in the domain you want to be at most $\delta$ apart from $p$. Now, of course, for a general function, the domain, that target $\delta$, might depend on the choice of point $p$. And the whole idea of uniform continuity is that that $\delta$ *does not* depend on $p$. So the function uniformly spreads things apart; that is, things that are no more than $\delta$ apart get sent to things that are no more than $\epsilon$ apart. And that's for no matter where you are in the space. That was the idea of uniform continuity. 

- **Discontinuous functions (what is there to say?):** It may seem an odd question as to what we can say about discontinuous functions. Truly, they are just functions that are not continuous! But of what use is that? It turns out that there is actually more interesting behavior going on with discontinuous functions than may be evident at first blush. 

- **Example 1:** The first example of a function that is not just discontinuous but *highly* discontinuous is something called the Dirichlet function. It's actually a function that's not continuous *everywhere*. We will let
  
  $$
  f(x)=
  \begin{cases}
  1 & \text{if}\ x\in\Q,\\
  0 & \text{if}\ x\not\in\Q.
  \end{cases}
  $$

  The way this function is defined makes it impossible to accurately draw, but it essentially looks like the following:

	<div align='center' className='centeredImageDiv'>
		<img width='400px' src={require('@site/static/img/lecture-images/L23-f1.png').default} />
	</div>

  It certainly looks as though $f$ should not be continuous at any $p$. Why is that? What's a brief argument for this? A very easy way to see this is that no matter what point you pick, if you take a ball around it, an open ball, it will contain rational and irrational points.  Where is its image going to be? It's going to contain points that are close to 1 and close to 0. So if you pick epsilon less than, say, a half, then $0<\epsilon<\frac{1}{2}$ will cause trouble in satisfying the definition of continuity. So this function $f$ is clearly not continuous. 

- **Example 2:** Consider the following modified Dirichlet function:

  $$
  f(x)=
  \begin{cases}
  \frac{1}{q} & \text{if}\ x=\frac{p}{q}\ \text{in lowest terms},\\
  0 & \text{if} x\not\in\Q.
  \end{cases}
  $$

  What will this look like? It will look something like the following:

	<div align='center' className='centeredImageDiv'>
		<img width='400px' src={require('@site/static/img/lecture-images/L23-f2.png').default} />
	</div>

  So this function has a different value for different rationals based on the size of its denominator in lowest terms. It's a very cool function. If we take any particular value, then how many times would a horizontal line go above that value? Only finitely many times. So if my target were to look at an $\epsilon$-ball around 0, then how many times does the given function leave the $\epsilon$-ball around 0? Finitely many times. (See page 124 of [this document](https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch7.pdf) or Exercise 4.3.6 in <BibRef id='SA2001' pages='p. 113'></BibRef>. Also see <BibRef id='MS2008' pages='p. 99'></BibRef> which is probably the best for making this clear.) No matter what $\epsilon$ is. 

  > **Note about finitely many points.** As explained [here](https://www.physicsforums.com/threads/spivak-thomaes-function-proof-explanation.848927/), if we have $x\to a$, no matter what $a$ is, then at all nearby irrationals $f$ has value 0. Also, at all sufficiently nearby rationals different from $a$, the function $f$ has value $1/n$ for arbitrarily large $n$. (Spivak fleshes out this argument in more detail in <BibRef id='MS2008' pages='p. 99'></BibRef>. Hence, in both cases, the value of $f(x)$ is as small as you like for $x$ near $a$ but $x\neq a$. That is, given $\epsilon>0$, there are only a finite number of points $x$ where $f(x)>\epsilon$. So just get $x$ closer to $a$ than any of these points, and then you will have $|f(x)-0|<\epsilon$, and Spivak outlines this in more detail too.

  So what is this function doing at the rationals? It's doing something nonzero. And it's pretty clear that at the rationals it's not continuous. What's happening at the irrationals? At the irrationals, say at $\sqrt{2}-1$, what's happening at that point? Its value is 0, and is there a neighborhood around it that will land in the target $\epsilon$-ball around 0? If there's only finite many times the function leaves the $\epsilon$-ball, then certainly this will be the case. What neighborhood should we use? How should we make $\delta$? Well, there are finitely many rationals where $f$ exceeds the $\epsilon$-ball around 0. So take the minimum distance between this point and another that goes outside of the $\epsilon$-ball. So you have a $\delta$-ball for every $\epsilon$. So while $f$ is discontinuous at all rationals, it is actually continuous at all irrationals. So, in fact, we see the set of discontinuities is a countable set, and it's continuous everywhere else. With the previous example, the set of discontinuities was uncountable. It was everything. What's interesting with this example is that where $f$ is continuous and where it's discontinuous doesn't have to comprise an interval. 

  Here's an interesting question: Is there a function that is continuous at all rationals but discontinuous at all irrationals? Let's try to learn some things about discontinuities, and maybe that will shed some insight on to what is happening. We can try to classify discontinuities. 

- **Classifying discontinuities:** Suppose we have a function $f\colon(a,b)\to\R$ that looks as follows:

	<div align='center' className='centeredImageDiv'>
		<img width='400px' src={require('@site/static/img/lecture-images/L23-f3.png').default} />
	</div>

  So we have a "jump discontinuity" of sorts. Suppose we took a sequence of points $\{t_n\}$ approaching $x$ from the right, and we followed the images of these points. What's going to happen with these images? It certainly looks as though they will converge to $q$. More precisely, for all $\{t_n\}$ in $(x,b)$ with $t_n\to x$, we have $f(t_n)\to q$. We will write $f(x^+)=q$ or $\lim_{t\to x^+}f(t)=q$. So we now have a notation to describe what is happening here. So we actually have a right-hand limit, but the function $f$ does not have a limit at $x$. But it has a right-hand limit and we denote it as above. Similarly, we'll write $f(x^-)=q'$ or, equivalently, $\lim_{t\to x^-}f(x)=q'$. By previous discussions, we have $\lim_{t\to x}f(x)$ exists if and only if $f(x^+)=f(x^-)$. Now, if $f$ is discontinuous but $f(x^+)$ and $f(x^-)$ exist, then we will say that $f$ has a discontinuity of the first kind. (Sometimes people call this a "simple discontinuity.") Otherwise, the function is said to have a discontinuity of the second kind. So a question we should ask ourselves is whether or not there are discontinuities of the second kind. Basically, we want discontinuities of the first kind to be a kind of silly discontinuity. What about other kinds of discontinuities? Of course. Let's see.

- **Discontinuity of the second kind:** What would have to be true to have a discontinuity of the second kind? Maybe the limit doesn't exist on either side. Suppose we have the function
  
  $$
  f(x)=
  \begin{cases}
  0 & \text{if}\ x\leq0,\\
  \sin(1/x) & \text{if}\ x>0.
  \end{cases}
  $$

  This curve will look as follows:

	<div align='center' className='centeredImageDiv'>
		<img width='700px' src={require('@site/static/img/lecture-images/L23-f4.png').default} />
	</div>

  So at $x=0$, there is a discontinuity of the second kind. Which limit does not exist? The one coming from the right.

- **Revisiting examples:** Let's return to a previous example:

	<div align='center' className='centeredImageDiv'>
		<img width='400px' src={require('@site/static/img/lecture-images/L23-f5.png').default} />
	</div>

  What kind of discontinuities did we have? Discontinuities of the second kind. All discontinuities are of the second kind. How about the modified Dirichlet function:

	<div align='center' className='centeredImageDiv'>
		<img width='400px' src={require('@site/static/img/lecture-images/L23-f6.png').default} />
	</div>

  What kinds of discontinuities do we have here? It's continuous at all irrationals and discontinuous at all rationals. What kind of discontinuities do we have? Well, what about the discontinuity at $x=1$? Is it of the first kind or of the second kind? If it is of the first kind, how would we show that? Well, there are lots of rationals and irrationals as we approach $x=1$ from either side. Note that if we took an $\epsilon$-ball around 0 then we could find a $\delta$-ball around $x=1$ so that $f$ is within $\epsilon$ of 0, which would show that on the left- and right-hand side we have a limit of 0. So in this second example, with the modified Dirichlet example, all discontinuities are of the first kind. These are simple discontinuities. So we've changed here the nature of the discontinuities. Let's do another example. 

- **Another discontinuous example:** Suppose we have the function

  $$
  f(x)=
  \begin{cases}
  x^2 & \text{if}\ x\in\Q,\\
  0 & \text{if}\ x\not\in\Q.
  \end{cases}
  $$

  What kind of function is this? It would look like the following:

	<div align='center' className='centeredImageDiv'>
		<img width='400px' src={require('@site/static/img/lecture-images/L23-f7.png').default} />
	</div>

  What kind of discontinuities do we have here? First of all, where are the discontinuities? Every point except possibly $x=0$. Is it continuous or discontinuous here? To show that $f$ is continuous at $x=0$, let's show that, in fact, around $x=0$ and its image (which is 0), that for $\epsilon$-ball there is a $\delta$ around which that if you're within that $\delta$ then you're within the $\epsilon$. True? Yes. So $f$ is continuous at 0. What is the nature of the discontinuities? Are they all of the second kind? Yeah, let's see why. How could we verify that? Suppose we considered a point $r\in\Q$ and its image:

	<div align='center' className='centeredImageDiv'>
		<img width='400px' src={require('@site/static/img/lecture-images/L23-f8.png').default} />
	</div>

  We want to know whether or not this has a limit coming from the left or from the right. Well, the only possibility is that the limit coming from the right would be 0. You could test all the other points, but it's pretty clear it's not going to be anything else. Regardless, there's not going to be a $\delta$-ball that will leave you within $\epsilon$ of the proposed limit (or even the proposed limit of 0 either). So $f$ is continuous at 0 and discontinuous of the second kind elsewhere. Good. So now we have some idea what simple discontinuities are and what crazy discontinuities are. 

## Monotonicity and discontinuities

What happens when we try to restrict the kinds of discontinuities that can occur? What is good about monotonic functions and how do they play a role in all of this?

- **Motivation:** We can restrict the kinds of discontinuities that can occur, and this leads to the topic of monotonic functions.

- **Definitions:** A monotonic function $f\colon(a,b)\to\R$ basically means either monotonically increasing or monotonically decreasing. We say $f$ is monotonically increasing if $x\leq y$ implies that $f(x)\leq f(y)$. We say $f$ is monotonically decreasing if $x\leq y$ implies that $f(x)\geq f(y)$. What can we say about monotonic functions?

- **Motivating example:** Consider the following function:

	<div align='center' className='centeredImageDiv'>
		<img width='400px' src={require('@site/static/img/lecture-images/L23-f9.png').default} />
	</div>

  Clearly this function is monotonic. Are we prepared to make any kinds of conjecture about the kinds of discontinuities a monotonic function could have? Only simple? Is there any way a monotonic function could have a discontinuity of the second kind? It turns out no. 

- **Theorem concerning discontinuities and monotonic functions:** If $f$ is monotonically increasing on $(a,b)$, then $f(x^+)$ and $f(x^-)$ exist for all $x\in(a,b)$. 

  Let's see if we believe that. Why is it true? What's the idea here? Why do the left- and right-hand limits have to exist? We claim something more is true. In fact, whatever the value of $x$ is, if we look at all the values $f$ achieves to the left of $x$ and take their supremum, then $f(x)$ should still be at least as much as that, and if we look at all the function values on the right of $x$ and look at their infimum, then $f(x)$ should be less than or equal to that infimum. So we have
  
  $$
  \sup_{t\in(a,x)} f(t)\leq f(x)\leq\inf_{t\in(x,b)} f(t).
  $$

  How do we know the supremum and infimum actually exist? These values are bounded by $f(x)$. So we are okay in claiming they exist because $\sup_{t\in(a,x)} f(t)$ is bounded above and below. Similarly, $\inf_{t\in(x,b)} f(t)$ is bounded above and below so exists as well. Does that help us? Does it give us some idea as to what is happening? Let's see.

  From above, let's let $A=\sup_{t\in(a,x)} f(t)$. Then our claim is that $A=f(x^-)$. Let's draw another picture to represent what is happening:

	<div align='center' className='centeredImageDiv'>
		<img width='400px' src={require('@site/static/img/lecture-images/L23-f10.png').default} />
	</div>

  So all we have to do to verify that $A=f(x^-)$ is to show that the limit of all the values coming from the left is, in fact, the number $A$. Let's take an $\epsilon$-ball around $A$ (it doesn't matter whether or not it contains the other side):

	<div align='center' className='centeredImageDiv'>
		<img width='400px' src={require('@site/static/img/lecture-images/L23-f11.png').default} />
	</div>

  Given $\epsilon>0$, consider $A-\epsilon$. Certainly there are some values of $f(t)$ that are bigger then $A-\epsilon$ since $A$ is a supremum. Thus, there exists $\delta>0$ such that $A-\epsilon<f(x-\delta)\leq A$ by the definition of supremum (since $A$ is a supremum). That means there is at least one point we can find to the left of $x$ (i.e., $x-\delta$) whose value lives in the $\epsilon$-ball (i.e., $A-\epsilon$). Can we show that all the points within some neighborhood on the left of $x$ must live in the $\epsilon$-ball? Yes, because the function is monotonic. So, in fact, the $\delta$ pictured above works. So any $t\in(x-\delta,x)$ must satisfy $f(x-\delta)\leq f(t)\leq A$. So $f(t)\in(A-\epsilon,A)$, as desired. That's the basic idea. The argument is similar for the other side. 

- **Corollary to above theorem:** The corollary to the above theorem is that monotonic functions have no discontinuities of the second kind. This corollary has a very interesting consequence, and this is the following theorem.

- **Consequence of corollary (theorem):** If $f$ is monotonic on $(a,b)$, then the set of points $D$ where $f$ is not continuous is countable. 

  If we look at a function that is monotone, like the one above, then if it has discontinuities, then they are basically jump discontinuities. So why must there only be countably many jumps? Well, for every point, the function $f$ has a left- and right-hand limit that exists. Basically, every discontinuity has a gap, and those gaps are intervals. Those intervals are all disjoint since our function is monotonic. So you could pick a rational in every interval. Then there cannot be uncountably many disjoint intervals in $\R$. So the proof idea is basically that for all $x$ where $f$ is discontinuous to pick $r(x)\in\Q$ such that $f(x^-)<r(x)<f(x^+)$. So the thing to notice is that if you have two discontinuities, then the $r$ you pick will actually be different. So if $x,y\in D$, then $r(x)\neq r(y)$ because $f$ is monotone. So what you would have is a one-to-one correspondence between the set of discontinuities and a subset of the rationals. What does this mean? Well, one of the consequences of this is that if we did have a function that was not continuous at the irrationals but continuous at the rationals, then the function could not be monotonic. 
