---
title: 17 - Complete spaces
hide_title: false
sidebar_label: 17 - Complete spaces
description: Lecture notes by Daniel Farlow to accompany Lecture 17 from Francis Su's YouTube video series
draft: false
tags:
  - Complete Space
  - Incomplete Space
  - Bounded Sequences
  - Lecture 17 (Francis Su)
keywords:
  - complete space
  - incomplete space
  - bounded sequences
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
        url="https://www.youtube.com/watch?v=6-PSUkwGnnA"
    />
</div>

## Where we left off last time

Where did we leave off last time and where were we going? Something about complete spaces.

- **Cauchy sequences:** Last time we made a curious definition, that of a Cauchy sequence, which is a sequence where all the points of a sequence get close to each other, and we wanted to see what some of the consequences of being Cauchy were. We saw that if a sequence converged, then it was Cauchy. In the other direction, we inquired as to whether or not all Cauchy sequences were convergent in every metric space, and we saw the answer was no. This motivated the definition of a ``complete space'' where all Cauchy sequences converge. Thus, in a complete space, being convergent and being Cauchy are the same thing. That is why complete spaces are of interest. But then the big question was which spaces are complete. 

- **Spaces that are complete:** Last time we saw that $\Q$ was not complete. We conjectured that maybe $\R$ is. On the way to seeing whether or not this conjecture is true, let's try to establish another conjecture, that about compact spaces being complete.

- **Compact metric spaces are complete:** What's an example of a compact metric space? How about the interval $[0,1]$? We know $\R$ is not compact because it's unbounded. What's another example of a compact metric space? How about a set that is finite? Is it true that in a finite metric space, one with only 5 points in it, you have a sequence that, if it is Cauchy, then it converges? We have 5 possibilities, and I have to pick an infinite string of things, and they all get close to each other eventually, then what must be true? This sequence, which may hop around initially, must do what? It must settle down on one and stay because all the points are getting close to each other. As soon as $\epsilon$ gets smaller than the minimum distance between 2 points, then all the points have to be at the same point of the space. That's kind of a trivial theorem when the space is finite. 

  Compact spaces are a little more interesting concerning convergence, but they are not too far off the idea presented above for finite sets. And remember that compactness is the next best thing to being finite. The proof below will use the insight we established last time, namely that compactness implies sequential compactness. So we are going to use that fact. 

  To show a space is complete, what we want to do is take a sequence, say $\{x_n\}$, and let it be Cauchy in $X$. What is our goal? Our goal is to show $\{x_n\}$ converges. To do that, of course, we need to figure out what point it converges to. That would be nice to specify here. Now, since $X$ is compact, it is sequentially compact, meaning every sequence has a convergent subsequence. How are we going to use that fact here to show that $\{x_n\}$ converges? Well, there exists a subsequence, $\{x_{n_k}\}$ converging to a point of $X$. Let's call this point of convergence $x\in X$. 

  Let's draw ourselves a picture of a sequence in $X$ and a point $x\in X$ of interest:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L17-f1.png').default} />
	</div>

  In particular, we've identified a subsequence (the circled points) which appears to be converging to $x$:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L17-f2.png').default} />
	</div>

  Where do we go from here? We want to show that the entire sequence converges to the point $x$. How are we going to show that all of the *other* points also get close to $x$ if our subsequence $\{x_{n_k}\}$ gets close to $x$? Consider one point that is not circled. Past some point of the sequence, non-circled points are all close to circled points. And circled points are close to $x$. So what we want to try to do then is show that non-circled points are also close to $x$. For any $\epsilon>0$, we want to show that all the points are eventually within $\epsilon$ (in the picture we've zoomed in):

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L17-f3.png').default} />
	</div>

  So past what point of the sequence would we like to take a look? Well, past a point that will get the circled points within how far of $x$? How about $\frac{\epsilon}{2}$?  So maybe past some $\frac{\epsilon}{2}$ all the circled points are within $\frac{\epsilon}{2}$ of $x$. Past some point there's a big $N$ for which that is true: 

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L17-f4.png').default} />
	</div>

  How far would we like to look for the Cauchy part? How about when they are within $\frac{\epsilon}{2}$ of $x$ as well? And that might happen for a different index $N$. Then take the maximum of the indices beyond which both of these things are true. That's the basic idea. Let's make this precise. 

  Fix $\epsilon>0$. Since $\{x_n\}$ is Cauchy, there exists $N_1$ such that if $i,j\geq N_1$, then $d(x_i,x_j)<\frac{\epsilon}{2}$. Since $X$ is compact, it is sequentially compact, which means we have a subsequence $\{x_{n_k}\}$ that converges to $x$. That is, there exists $N_2$ such that $n_k\geq N_2$ implies $d(x_{n_k},x)<\frac{\epsilon}{2}$. Let $N=\max\{N_1,N_2\}$. If $n\geq N$, then $d(x_n,x)\leq d(x_n,x_{n_k})+d(x_{n_k},x)$ for any $n_k\geq N$ (fix one). So we have

  $$
  \begin{align*}
  d(x_n,x)
  &\leq d(x_n,x_{n_k})+d(x_{n_k},x) \\[1em]
  &<\tfrac{\epsilon}{2}+\tfrac{\epsilon}{2}\\[1em]
  &=\epsilon.
  \end{align*}
  $$

  Thus, given $\epsilon>0$, we found an $N$ that shows $x_n\to x$. So we've used the Cauchy definition here in a very essential way. So what does this mean? It means $X$ is complete. And this is for any sequence since $\{x_n\}$ was arbitrary.

  An exceedingly quick corollary is that $[0,1]$ is a complete metric space. Not only that, but if you want to look at a compact set in a larger space, isn't the $k$-cell complete? Yes, the ones in $\R^n$. Lots of things now we know are complete. Is $\R^n$ complete? It's not compact, we know that. Is Euclidean space complete? Yes! Why? We've just shown that compact spaces are complete. Even though $\R^n$ is not compact, can we show that it is complete? Can we show that every Cauchy sequence converges? Yes. Before doing this, one thing to note is that another example of complete spaces is if you take a closed subset of a compact set, then it must be complete because they are compact. In particular, Cantor sets are complete. As another corollary, $\R^n$ is complete. This is basically easy to justify because Cauchy sequences are bounded and they'll live in a bounded subset of $\R^n$. Let's write out the proof idea.

- **$\R^n$ is complete:** If $\{x_n\}$ is Cauchy, then it is bounded. (To show Cauchy sequences are bounded, recall the mental picture: The points are getting close to each other. So you give me an $\epsilon>0$, and past some point in the sequence all the points are within $\epsilon$ of each other; thus, there are only finitely many points are not. So basically take one of the points within $\epsilon$, and look at the maximum distance from it to all the points not within $\epsilon$ and add $\epsilon$ as well. More concretely, let $\epsilon=17$. Then there exists $N$ such that for all $n,m\geq N$ we have $d(x_n,x_m)<17$. So let $R=\max\{d(x_N,x_1),\ldots,d(x_N,x_{N-1}),17\}$. So the sequence is bounded by a ball of radius $R$ around $x_N$ or simply by $B_R(x_N)$.) 

  So if a sequence is Cauchy, then it is bounded. If it is bounded, then it is in a ball. If it's in a ball, then you could just put it in a closed ball or a closed $k$-cell. So $B_R(x_N)\subset$ some $k$-cell in $\R^n$, so $B_R(x_N)\subset$ is complete and $\{x_n\}$ converges because $k$-cells are complete.

  What have we just done? We have shown that if we take a Cauchy sequence in $\R^n$, then it necessarily converges. That is, $\R^n$ is complete. What does this mean? Well, in the space we care most about, namely $\R^n$, to be Cauchy is the same as being convergent. So we don't need to know what the limit is of a sequence to show that a sequence actually has a limit.

- **Example 1:** Does the sequence

  $$
  1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\cdots+\frac{1}{n}
  $$

  converge? The first term is 1. The second term is 1.5. And so on. If you just write out the first few terms, then it's unclear whether or not it converges. In fact, $x_n$ grows very slowly. Does it converge? How could we tell? We could ask whether or not it is Cauchy. If it is Cauchy, then we know it converges. If we show it is not Cauchy, then it diverges. 

  Consider the difference between the first $n$ reciprocals and the first $m$ reciprocals (where let's just assume $n>m$):

  $$
  \begin{align*}
  |x_n-x_m|
  &=\biggl|\biggl(1+\cdots+\frac{1}{m}+\frac{1}{m+1}+\cdots+\frac{1}{n}\biggr)-\biggl(1+\cdots+\frac{1}{m}\biggr)\biggr| & \text{(by definition)}\\[1em]
  &=\biggl|\frac{1}{m+1}+\frac{1}{m+2}+\cdots+\frac{1}{n}\biggr| & \text{(by arrangement)}\\[1em]
  &= \frac{1}{m+1}+\frac{1}{m+2}+\cdots+\frac{1}{n} & \text{(since $n>m$)}\\[1em]
  &\geq \frac{n-m}{n} & \text{($n-m$ terms, each $\geq\tfrac{1}{n}$)}\\[1em]
  &= 1-\frac{m}{n}. & \text{(simplify)}
  \end{align*}
  $$

  Let $n=2m$ (there's nothing you can do to stop me from doing that), then we see that

  $$
  |x_{2n}-x_n|>\frac{1}{2},
  $$

  and this is true for every $n$. Does this sequence have any hope of being Cauchy? No, it cannot be Cauchy because as soon as you let $\epsilon<\frac{1}{2}$, then you will never find a point in the sequence beyond which all of the terms are closer than $\frac{1}{2}$ from each other because we've just shown that pairs of terms infinitely far out, as far as you would like to go, have a distance greater than $\frac{1}{2}$ from each other. So this sequence is not Cauchy and therefore diverges. 

- **Example 2:** Suppose $x_1=1$, $x_2=2$, and $x_n=\frac{1}{2}(x_{n-1}+x_{n-2})$. Does this sequence converge? Well, we have no idea what its limit is, but if we can show it is Cauchy, then we will know whether or not it has a limit. It will not tell us what that limit is, but it will tell us whether or not it exists. This sequence is Cauchy and therefore converges in $\R$, but this would not actually be the case in $\Q$ because we wouldn't know if the limit were rational. Where do such sequences arise? Lots of places such as recursive methods for finding roots. This is Newton's method. You can show it converges theoretically without finding its limit.

## Incomplete spaces

What happens if we look at spaces that are not complete?

- **Embedding an incomplete space in a complete space:** If $X$ is not complete, can it be embedded in a space that is complete? It's helpful to think about a universe that consists only of $\Q$, and maybe we could say a sequence converges not in $\Q$ but to some point in a larger space, which we have not yet defined. So $\Q$ can be embedded in $\R$, it turns out, and we can see why the more general question of embedding an incomplete space in a complete space might be of interest.

- **Theorem about embedding metric spaces:** Every metric space $(X,d)$ has a *completion* $(X^*,d)$. What do we mean by *completion* here? What we mean is there is a way to define a big space $(X^*,d)$ that has, as a subset, a smaller space $(X,d)$, such that the metric $d$ on the big space, when restricted to the smaller space, gives the same metric $d$ as the small space. Let's sketch out the idea here. Before doing so, it's instructive to think about the fact that there may be *many* completions. Thus, in what sense, if any, is the completion we are about to construct unique, as it is defined? Because we could, for instance, embed $\Q$ in $\R^2$. So this theorem says there is a completion, but the proof actually shows you exactly what completion it is, and the construction is actually unique, as it is defined, but there could in theory be several completions that are not isomorphic, but the one the proof suggests is unique.

- **Idea for metric space embedding theorem:** In what follows, where $X$ is written, think $\Q$ for ease of thought, but $X$ could be any metric space. (See <BibRef id='WR1976' pages='p. 82'></BibRef>, exercise 24, for the full exercise.) How are we going to get at those things that are not already in the space? We've done something like this before. We can use Cauchy sequences! If my space has some gaps in it, then well we cannot really talk about the gaps because we don't have a way of defining them (recall the problem with nailing down what $\sqrt{2}$ actually was). Maybe we can get at those gaps using things that are already in the space, namely the Cauchy sequences that are in the space!

  Given $X$, let $X^*=\{\text{set of all Cauchy sequences in}\, X\}$, but there is a slight problem with this definition of $X^*$. If we left the definition of $X^*$ as it currently stands, then there are way too many things in this space. It's huge. So imagine the rationals. There are lots of Cauchy sequences that converge to 0. So I don't want to say they are all different. So I am going to look at the set of all Cauchy sequences under an equivalence relation! 

  Thus, given $X$, let
  
  $$
  X^*=\{\text{set of all Cauchy sequences in $X$ under the equivalence relation $\sim$}\},
  $$

  and of course we now have to say what the equivalence relation $\sim$ actually is. We will say $\{p_n\}\sim\{q_n\}$ are equivalent if $\lim_{n\to\infty} d(p_n,q_n)=0$. (Note how we avoided saying $\{p_n\}$ and $\{q_n\}$ are equivalent if they have the same limit because some Cauchy sequences do not converge or have a limit in some metric spaces. So we will say they are equivalent if their difference gets small, and we communicate that idea by writing $\lim_{n\to\infty} d(p_n,q_n)=0$.) What's beautiful here is that you can define a metric on this. For $P,Q\in X^*$, where we note that $P$ and $Q$ are points in our metric space $X^*$ while each one is a sequence in the other metric space $X$, let's define a distance between them. Let $\Delta(P,Q)=\lim_{n\to\infty}d(p_n,q_n)$, where $\{p_n\}\in P$ and $\{q_n\}\in Q$, and note that these are simply equivalence class representatives of $P$ and $Q$, respectively. Of course, we have to show that $\Delta$ is well-defined (i.e., if you pick two different representatives then you will get the same distance), and that is exercise 24(b) in <BibRef id='WR1976' pages='p. 81'></BibRef>. Then $X^*$ is complete with $X$ isometrically embedded in $X^*$, where isometrically embedded means there is a bijection with a subset of $X^*$ that preserves distances. What should that bijection be? Which sequence in $X^*$ should I correspond with a point $p\in X$. How about $p$, $p$, $p$, ... . This is what's called the completion of $X$. So if you do the completion of $\Q$ with the way we have defined $X^*$, then you get $\R$ and nothing else. So it is actually a unique construction here that we have for the completion. So this is another way of constructing $\R$ from $\Q$. 

## Bounded sequences

What is the deal with bounded sequences and why are they important?

- **Monotonically increasing (definition):** A sequence $\{s_n\}$ of real numbers is said to be monotonically increasing if $s_n\leq s_{n+1}\quad$ $(n=1,2,3,\ldots)$.
- **Monotonically decreasing (definition):** A sequence $\{s_n\}$ of real numbers is said to be monotonically decreasing if $s_n\geq s_{n+1}\quad$ $(n=1,2,3,\ldots)$.
- **Theorem about monotonic bounded sequences:** Suppose $\{s_n\}$ is monotonic. Then $\{s_n\}$ converges if and only if it is bounded. 

  Why do these sequences converge? They are increasing or decreasing to some bound $B$. What do they converge to, if anything? Their supremum (when increasing) or infimum (when decreasing). Let's prove this.

  Given $\{s_n\}$, let $s=\sup(\operatorname{range}\{s_n\})$. Why does $\{s_n\}$ converge to $s$ as a sequence? To show convergence, for every $\epsilon$, we have to find an $N$ beyond which everything is within $\epsilon$.

  Given $\epsilon>0$, there exists $N$ such that $s-\epsilon<S_N\leq s$. But then for all $n\geq N$ we have $s-\epsilon<s_N\leq s_n$, so this $N$ works for $\epsilon$. This is the idea.

- **Statement about regular boundedness:** Some sequences diverge not because they bounce around but because they keep going in one direction. 

  Let $\{s_n\}$ be a sequence of real numbers with the following property: For every real $M$ there is an integer $N$ such that $n\geq N$ implies $s_n\geq M$. We then write
  
  $$
  s_n\to+\infty.
  $$

  Similarly, if for every real $M$ there is an integer $N$ such that $n\geq N$ implies $s_n\leq M$, we write

  $$
  s_n\to-\infty.
  $$

  We should note that we now use the symbol $\to$ for certain types of divergent sequences, as well as for convergent sequences, but that the definitions of convergence of limit are in no way changed. 

- **Note about subsequential limits:** Given $\{s_n\}$, let $E=\{\text{all possible subsequential limits}\}$, where we may allow $+\infty$ and $-\infty$ to be subsequential limits here. There's no harm in doing that. So now we could ask something about this set $E$. As a set, $E$ may have a supremum and infimum. Let
  
  $$
  s^*=\sup E
  \qquad\text{and}\qquad
  s_*=\inf E,
  $$

  where note that $s^*$ and $s_*$ will always exist because we are working in the extended reals. We may have $\pm\infty$, but that is not a cancer. It is worth noting, however, that $s^*$ and $s_*$ are often called the *upper* and *lower* limits of $\{s_n\}$, and we use the following notation to communicate this:

  $$
  \limsup_{n\to\infty} s_n=s^*
  \qquad\text{and}\qquad
  \liminf_{n\to\infty} s_n=s_*.
  $$
	
- **Note about limit superior and limit inferior:** We can think of the limit superior in the following way: The limit superior is the limit of a certain set of suprema, and really what you're doing is you're looking at all the terms past a point (so below look at all the $k$ bigger than $n$, take their supremum, and then take the limit as $n$ goes to infinity):

  $$
  \limsup s_n = \lim_{n\to\infty}\Bigl(\sup_{k>n} s_k\Bigr).
  $$
  
  The net effect of this is it chops off all the initial behavior of the sequence, and you're only looking at the long-term behavior of the sequence, and this concept arises when we talk about ratio tests. This is similar for the limit inferior:
  
  $$
  \liminf s_n = \lim_{n\to\infty}\Bigl(\inf_{k>n} s_k\Bigr).
  $$

  You can prove that the formulations above are equivalent to the definitions for $s^*$ and $s_*$.

- **Example 1:** If $s_n\to s$ then $\liminf s_n=\limsup s_n=s$. If the whole sequence $\{s_n\}$ converges, then we must have $\liminf s_n=\limsup s_n=s$ because we're just chopping off the initial behavior looking for the lower subsequential limit and the upper subsequential limit, and all subsequential limits have to be $s$ if it converges.

- **Example 2:** Let
  
  $$
  \{s_n\}=\{0.1,\tfrac{3}{2},0.11,\tfrac{4}{3},0.111,\tfrac{5}{4},0.1111,\tfrac{6}{5},\ldots\}.
  $$

  What are $\limsup s_n$ and $\liminf s_n$? It looks like $s^*=1$ and $s_*=\frac{1}{9}$. If we were to say a number is bigger than the $\limsup$, then what is another way of saying that? Does it mean that all the terms are less than $x$ if $s^*<x$? No, but it must mean what? Not all the terms are less than $x$, but can we say that *eventually* all of the terms are less than $x$? Yes, eventually that has to be true if $x>\limsup s_n$. (This is stated precisely as Theorem 3.17(b) in <BibRef id='WR1976' pages='p. 56'></BibRef>.)
