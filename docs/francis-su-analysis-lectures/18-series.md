---
title: 18 - Series
hide_title: false
sidebar_label: 18 - Series
description: Lecture notes by Daniel Farlow to accompany Lecture 18 from Francis Su's YouTube video series
draft: false
tags:
  - Series
  - Lecture 18 (Francis Su)
keywords:
  - series
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
        url="https://www.youtube.com/watch?v=v5CHTVDiMkQ"
    />
</div>

## Where we left off last time

Where did we leave off last time and where were we going?

- **Recap:** Last time we talked about sequences, and this time we will talk about an associated topic, namely series. Before plunging into series, let's recall some more of what we did last time:
  + **Sequence convergence:** We said that a sequence $\{p_n\}$ converges to $p$ means the following: For every $\epsilon>0$, there is an $N$ such that $n\geq N$ implies $d(p_n,p)<\epsilon$. 
	+ **Cauchy sequences:** A sequence $\{p_n\}$ is Cauchy means the following: For every $\epsilon>0$, there is an $N$ such that $n,m\geq N$ implies that $d(p_n,p_m)<\epsilon$. 
	+ **Convergence, Cauchyness, completeness:** Convergent sequences are Cauchy. In complete spaces, Cauchy sequences converge.
	+ **Completeness of the reals:** $\R$ is complete, so use Cauchy definition to test sequences for convergence.
	+ **Completion of an incomplete space:** If you have a space that is not complete, then you can complete it. (Think of how the completion of $\Q$ is $\R$.) There is a completion which is basically defined to be the set of all Cauchy sequences under some equivalence relation, and if you take a look at that, then you can put a metric on it in a nice way. You get a space that is, in fact, complete. And this is an alternative way of constructing $\R$ from $\Q$ from Dedekind cuts. And there was a question as to how do you do that if it looks like you're making definitions in terms of limits of distances. There's really not a problem because you just avoid referencing limits and you can still do everything. All you're doing is constructing the space, and it's only later that you define a metric on the space. So define the set of all Cauchy sequences. You can talk about what it means for two Cauchy sequneces to be equivalent, and you can just avoid referencing taking the distance between two points. What do you do? You're just talking about the difference of two rational numbers, and you can talk about that. You can say what it means for that to get small, close to 0. So there's really not a problem with constructing the reals from rationals in that way. 

## Series

What are series and why are they important?

- **Basic idea:** We want to talk about series, which is basically an example of a particular kind of sequence. So let's make some definitions here.

- **Motivation:** Just to get the ball rolling, the motivation is to try to understand sums of different forms. For example, what does the following mean:
  
  $$
  1+\frac{1}{4}+\frac{1}{9}+\frac{1}{16}+\cdots
  $$

  Of course, if there were no "$\cdots$" then we would know what this means. We talked about addition of fractions previously. But once the ellipses are thrown in, then once again we are wrestling with the infinite. In particular, what does the above mean if we write
  
  $$
  1+\frac{1}{4}+\frac{1}{9}+\frac{1}{16}+\cdots=\frac{\pi^2}{6}.
  $$

  Or what would this mean:
  
  $$
  1-1+1-1+\cdots
  $$

  We could write
  
  $$
  (1-1)+(1-1)+\cdots=0
  $$

  to communicate we think this infinite sum is 0. Surely no one can argue with the fact that the sum of infinitely many zeros is zero. But perhaps we group the terms in the following way:
  
  $$
  1+(-1+1)+(-1+1)+\cdots=1.
  $$

  Or maybe we could argue with Euler who said we should think of 
  
  $$
  1-1+1-1+\cdots=\tfrac{1}{2}.
  $$

  So this idea of an infinite sum we have to make meaningful somehow. We can't just throw around a bunch of infinite sums and expect everybody to get the same answer.

- **Grade school days (geometric series):** We should be able to add something like the following:
  
  $$
  1+\frac{1}{3}+\frac{1}{9}+\frac{1}{27}+\cdots=\frac{1}{1-\frac{1}{3}}.
  $$

  We know the above because it is a special case of something like
  
  $$
  1+x+x^2+x^3+\cdots=\frac{1}{1-x},
  $$

  but again we have to ask ourselves why this is true? Perhaps we could multiply $(1+x+x^2+x^3+\cdots)(1-x)$ to get 1 to show why, but does doing that really make any sense? Maybe a little, but it's still worrying a bit. If we're not too careful, then we could add some things like
  
  $$
  1+2+4+8+\cdots=\frac{1}{1-2}=-1.
  $$

  Or even
  
  $$
  1-2+4-8+\cdots=\frac{1}{1-(-2)}=\frac{1}{3}.
  $$

  We could also get
  
  $$
  1-1+1-1+\cdots=\frac{1}{1-(-1)}=\frac{1}{2}.
  $$

  This is the kind of nonsense we can get if we are not careful, and Euler did exactly that actually. We have to make some sense of all of this in some way. Let's try to define a series in a meaningful way.

- **Series (definition):** Given a sequence $\{a_n\}$, we use the notation
  
  $$
  \sum_{n=p}^q a_n\qquad(p\leq q)
  $$

  to denote the sum $a_p+a_{p+1}+\cdots+a_q$. (The expression for $s_n$ stands for the $n$th partial sum.) With $\{a_n\}$ we associate a sequence $\{s_n\}$, where
  
  $$
  s_n=\sum_{k=1}^n a_k.
  $$

  We would have the following first few partial sums for the sequence discussed earlier:
  
  $$
  \underbrace{\underbrace{\underbrace{\underbrace{1}_{s_1}+\frac{1}{3}}_{s_2}+\frac{1}{9}}_{s_3}+\frac{1}{27}}_{s_4}+\cdots=\frac{1}{1-\frac{1}{3}}.
  $$

  Certainly these partial sums form a sequence, namely
  
  $$
  \{s_n\}=\{s_1,s_2,s_3,s_4,\ldots\}=\{1,\tfrac{4}{3},\tfrac{13}{9},\tfrac{40}{27},\ldots\}=\tfrac{3}{2}
  $$

  For $\{s_n\}$ we also use the symbolic expression
  
  $$
  a_1+a_2+a_3+\cdots
  $$

  or, more concisely,
  
  $$
  \sum_{n=1}^\infty a_n.
  $$

  This symbol is sometimes called an *infinite series* or just a *series*. The numbers $s_n$ are called the *partial sums* of the series. If $\{s_n\}$ converges to $s$, we say that the series *converges*, and we write
  
  $$
  \sum_{n=1}^\infty a_n=s.
  $$

  The number $s$ is called the sum of the series; but it should be clearly understood that $s$ *is the limit of a sequence of sums*, namely
  
  $$
  \sum_{n=1}^\infty a_n=\lim_{n\to\infty} s_n=\lim_{n\to\infty}\sum_{k=1}^n a_k=s
  $$

  and is not obtained simply by addition. If $\{s_n\}$ diverges, the series is said to diverge. Sometimes, for convenience of notation, we shall consider series of the form
  
  $$
  \sum_{n=0}^\infty a_n.
  $$

  And frequently, when there is no possible ambiguity, or when the distinction is immaterial, we shall simply write $\Sigma a_n$ in place of $\sum_{n=1}^\infty a_n$ or $\sum_{n=0}^\infty a_n$. 

  So a series *is* a sequence, and the sequence's terms are partial sums. It should then be clear that every theorem about sequences can be stated in terms of series (putting $a_1=s_1$ and $a_n=s_n-s_{n-1}$ for $n>1$), and vice versa. But it is nevertheless useful to consider both concepts.

  Informally, you can think of series as sums of a bunch of terms. Formally, we say no, what we mean is the partials sums as a sequence. We should really stick to the formal outlook because the informal one is exactly what leads to problems like the ridiculousness discussed above. 

- **Questions about series:** Since we've defined a series as a special kind of sequence, namely a sequence of partials sums, it is natural to ask questions about this. We will often be interested when a series converges, for instance. We will say a series converges if the associated sequence does. 

- **Convergence of series:** When does a series converge? We could simply say that a series converges if and only if its associated sequence of partial sums converges, but that trades one problem for another problem. When does the sequence of partial sums converge? If $a_n=\frac{1}{n}$, then does the series
  
  $$
  1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\cdots
  $$

  converge? Of course, by asking whether or not this series converges, we are really asking whether or not the sequence of partial sums
  
  $$
  \{1,\tfrac{3}{2},\tfrac{11}{6},\tfrac{25}{12},\tfrac{137}{60},\ldots\}
  $$

  converges. The series in question has a special name (the harmonic series). How did we answer this question last time? We used the Cauchy criterion; that is, we checked whether or not $\{s_n\}$ was Cauchy. We looked at $s_m-s_n$, but what is the difference of partial sums if you add the first $m$ terms and then subtract the first $n$ terms? It's just all the terms in between. So for a series, checking the Cauchy criterion amounts to just checking a bunch of tails of things. So if $m>n$, we have
  
  $$
  s_m-s_n=a_{n+1}+\cdots+a_m.
  $$

  It's all the terms in between. And we showed last time, in fact, that $s_{2n}-s_n>\frac{1}{2}$. Thus, $\{s_n\}$ is not Cauchy, especially evident when we take $\epsilon<\frac{1}{2}$. There's no point in the sequence beyond which all of the terms are close because you could always find a number $s_n$ and another number $s_{2n}$ twice as far out whose difference is bigger than a half. So we know $\{s_n\}$ is not Cauchy and therefore does not converge. This is the general criterion and what we call the Cauchy criterion for series. 

- **Cauchy criterion (for sequences):** In <BibRef id='WR1976' pages='p. 53'></BibRef>, more specifically Theorem 3.11, we note the fact (contained in that theorem) that a sequence converges in $\R^k$ if and only if it is a Cauchy sequence is usually called the *Cauchy criterion* for convergence.

- **Cauchy criterion (for series):** The series $\Sigma a_n$ converges if and only if for every $\epsilon>0$ there is an integer $N$ such that if $m\geq n\geq N$ then
  
  $$
  \biggl|\sum_{k=n}^m a_k\biggr|<\epsilon.
  $$

  What you see above is really just a bunch of tails of these series. So in a series like
  
  $$
  1+\frac{1}{3}+\frac{1}{9}+\frac{1}{27}+\cdots=\frac{1}{1-\frac{1}{3}},
  $$

  past some point are any possible sums you take past some point going to be less than $\epsilon$? That's the question.

- **The tail of a sequence or series:** See [here](http://mathonline.wikidot.com/the-tail-of-a-sequence-of-real-numbers) and [here](http://mathonline.wikidot.com/the-tail-of-a-sequence-of-real-numbers) for write ups on limits, neighborhoods, and tails. (Write up consequences more thoroughly.)

- **Immediate corollary of Cauchy criterion for series:** For the Cauchy criterion for series, there's an immediate corollary we get by letting $m=n$. If $\Sigma a_n$ converges, this implies what if we choose $m=n$? The terms have to go to 0 because the terms, for any $\epsilon>0$, there's some point in the sequence beyond which all of the terms are smaller than $\epsilon$. So this means $\Sigma a_n$ convergent implies that $\lim_{n\to\infty} a_n=0$ (i.e., the terms go to 0, and this is sometimes called the term test for convergence). What about the converse? If $\lim_{n\to\infty} a_n=0$, then is it necessarily the case that $\Sigma a_n$ converges? No. Can we see an example? How about the harmonic series? That will do. 

- **Theorem about non-negative series:** If $a_n\geq0$, then $\Sigma a_n$ converges if and only if the partial sums are bounded. Can we see why this is true? Well, if $a_n\geq0$, then all the terms are bigger than or equal to 0, and the partial sums are thus increasing monotonically. And we know from a theorem last time that bounded, monotonic sequences converge. So the proof is sketched out as follows.

  If $a_n\geq0$, then the partial sums are monotonically increasing, but bounded monotone sequences converge, thus concluding the proof. This is a nice consequence of the Cauchy criterion. In fact, we will see that most of the convergence tests from calculus you have seen boil down to applying the Cauchy criterion in some useful way.

- **Comparison tests:** If you give me a series I know nothing about, then I can take one that I do know something about, and what can I do? I can compare them in some way. I can bound one by another. 
  + **Comparison test 1:** If $|a_n|\leq c_n$ for $n$ large enough, say $n\geq N_2$, and $\Sigma c_n$ converges, then $\Sigma a_n$ converges.
  + **Comparison test 2:** If $a_n\geq d_n\geq0$ for $n$ large enough, and if $\Sigma d_n$ diverges, then $\Sigma a_n$ diverges.

- **Proof of comparison test 1:** Fix $\epsilon>0$. Since $\Sigma c_n$ converges, we can use the Cauchy criterion. For this $\epsilon$, there exists $N_1$ such that $m,n\geq N_1$ implies $|\sum_{k=m}^n c_k|<\epsilon$. Now what I want to do is show the same criterion for the $a$'s, and I need to find a big enough $N$ that works. What $N$ should work? Let $N=\{N_1,N_2\}$. Then for $m,n\geq N$, $|\Sigma a_k|\leq\Sigma|a_k|\leq\Sigma c_k<\epsilon$, as desired.

- **Proof of comparison test 2:** Could we just use comparison test 1 to prove comparison test 2? The contrapositive of comparison test 1 states that if $\Sigma a_n$ converges, then $\Sigma d_n$ converges. Well, how do we now show that if $\Sigma a_n$ converges then $\Sigma d_n$ converges? Well, $d_n$ is smaller than $a_n$ in absolute value, and we needed the nonnegativity here. And we need nonnegativity in the statement of the second comparison test because if we didn't have nonnegativity, then is it possible that $\Sigma d_n$ diverges but $\Sigma a_n$ converges? Yeah, especially if the $d_n$'s are really negative and you're adding a bunch of negative things and they're going off to minus infinity. 

- **Using the comparison tests:** Now that we have the comparison tests, a good thing to ask ourselves is what should we start comparing things to? Well, the first basic sequence to compare to is the geometric series. Here's a theorem: If $|x|<1$, then $\sum_{n=1}^\infty x^n=\frac{1}{1-x}$. If $|x|\geq1$, then $\Sigma x^n$ diverges. Now, we're going to use comparison to compare a lot of things to the geometric series, but how are we going to show the geometric series converges or diverges under the given conditions?

  Well, to show something converges directly, you should go back to the partial sums. What are the partial sums here? We are going to momentarily assume that $x\neq1$. Let $s_n=1+x+\cdots+x^n$. Now, this is a finite sum, so you can't really stop me from multiplying $s_n$ by $1-x$ and seeing that you actually just get the following:
  
  $$
  s_n=\frac{1-x^{n+1}}{1-x},
  $$ 

  where this result is just due to simple polynomial arithmetic. Now what? These are the partial sums. Take the limit! So
  
  $$
  \lim_{n\to\infty}s_n=\frac{1}{1-x}\cdot\lim_{n\to\infty}(1-x^{n+1})=\frac{1}{1-x},
  $$

  as desired, where we've used the fact that $0\leq x<1$. Now, if $x\geq1$, then the terms do not go to zero so the series $\Sigma x^n$ diverges.

- **Remark on theorems concerning series:** In one fell swoop, we've actually just eliminated many of the major theorems about series, and we care a lot about series because, well, there are many examples: In calculus, for example, if you're doing limits of Riemann sums, then that's the sum of a bunch of little areas of  blocks. If you're constructing wave functions, wave forms from a bunch of sines and cosines, you're adding infinitely many of them, you have to worry if the sums at any given point actually converge. That's a series.

## Series results

What are some other results concerning series we can establish that might be useful?

- **Opening remarks:** Earlier we showed that the harmonic series, which is the sum of the reciprocals, diverges. It does not converge. So here's a question: What can we say about the sum $\Sigma \frac{1}{n^p}$? Does it converge or diverge? And, if so, for which $p$? We know that if $p=1$, then this sum diverges. What if $p>1$? Well, if $p=2$, then we get $\frac{\pi^2}{6}$. What about $p=\frac{1}{2}$? Or $p=-2$? Another certain theorem by Cauchy may be of use here.

- **Cauchy's condensation test (see <BibRef id='WR1976' pages='p. 62'></BibRef> for other proof):** Suppose $a_1\geq a_2\geq a_3\geq\cdots\geq0$. Then the series $\sum_{n=1}^\infty a_n$ converges if and only if the series
  
  $$
  \sum_{k=0}^\infty 2^ka_{2^k}=a_1+2a_2+4a_4+8a_8+\cdots
  $$

  converges. The idea is that we will compare these sequences to each other. 

  Let's see that there's a good comparison in at least one direction. Let
  
  $$
  s_n=a_1+a_2+\cdots+a_n=\underbrace{(a_1)}_{1\,\text{term}}+\underbrace{(a_2+a_3)}_{2\,\text{terms}}+\underbrace{(a_4+a_5+a_6+a_7)}_{4\,\text{terms}}+\cdots,
  $$ 
  
  and note how we've strategically grouped the terms in blocks of powers of 2. Now let
  
  $$
  t_k=a_1+2a_2+4a_4+\cdots+2^ka_{2^k}=(a_1)+(a_2+a_2)+(a_4+a_4+a_4+a_4)+\cdots.
  $$

  By looking at the terms of $s_n$ and $t_k$ grouped the way they are, we can see what looks to be a good comparison. But what's a good comparison here? Well, just compare the suggested groupings above highlighted by parentheses. We'll imagine 
  
  $$
  s_n=a_1+(a_2+a_3)+(a_4+a_5+a_6+a_7)+\cdots+a_n
  $$

  changing to 
  
  $$
  s_n\leq a_1+(a_2+a_2)+(a_4+a_4+a_4+a_4)+\cdots+t_k.
  $$

  So we'll make the comparison by imagining that $t_k$ converges to show that $s_n$ converges as long as we pick $n$ and $k$ appropriately. So that's the idea. Notice that if $n<2^k$, then $s_n<t_k$. That's really what we've just done. As long as $s_n$ ends before $t_k$ goes out to that point, then we're in good shape, and everything else we have is extra. That's the idea. What about the other direction?

  Well, we'd have
  
  $$
  2s_n=2a_1+2a_2+2(a_3+a_4)+2(a_5+a_6+a_7+a_8)+\cdots+2a_n
  $$

  and
  
  $$
  t_k=a_1+(a_2+a_2)+4a_4+8a_8+\cdots+t_k,
  $$

  and once again we have a comparison but in the other direction. We can make $2s_n$ bigger than $t_k$. So if $n>2^k$, then $t_k<2s_n$, and we'll use comparison here. And if the $s_n$ converges so does the $2s_n$. That's the idea. This may have seemed like a rather curious theorem, but it will be useful in considering the harmonic series.

- **Convergence or divergence of the harmonic series:** The sum $\Sigma \frac{1}{n^p}$ converges if $p>1$ and diverges if $p\leq 1$. Let's prove this.

  Let's first dispose of a case where it's clear it doesn't converge. If we take $p<0$, then this just becomes stuff like $\Sigma \frac{1}{n^{-2}}$ which clearly does not converge. Terms do not go to zero. So if $p\leq0$, then the terms do not go to zero and the series diverges. If $p>0$, then consider $\sum_{k=0}^\infty 2^k\frac{1}{2^{kp}}=\sum_{k=0}^\infty 2^{(1-p)k}$. What kind of sum is this? It's geometric, and we know the geometric series converges when the ratio is strictly less than 1. Now, $2^{1-p}<1$ if and only if $1-p<0$ or simply $p>1$ which gives us our condition for convergence (and diverges otherwise), and the result follows by comparison with the geometric series by taking $x=2^{1-p}$. 

- **A nice application:** The series $\sum_{k=0}^\infty\frac{1}{n!}$ arises frequently. (The Taylor series is a prime example.) We have
  
  $$
  \sum_{k=0}^\infty\frac{1}{n!}=\frac{1}{0!}+\frac{1}{1!}+\frac{1}{2!}+\cdots
  $$

  converges to something we call $e$. (We can define $e$ this way.) Let's just convince ourselves that the series in question converges to something. Why does it converge to something? Are the terms nonnegative? Yes, so the sequence is increasing. So if we can show the partial sums are bounded then we will be in good shape. Are they bounded? Yes, the partial sums are bounded, and that's easy to show. We'd have

  $$
  \begin{align*}
  \sum_{k=0}^\infty\frac{1}{n!}
  &=\frac{1}{0!}+\frac{1}{1!}+\frac{1}{2!}+\frac{1}{3!}+\frac{1}{4!}+\cdots\\[1em]
  &< 1+1+\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\cdots\\[1em]
  &< 3.
  \end{align*}
  $$

  So the partial sums are bounded by 3 and the terms are nonnegative so our series converges to something. Let's let that something be called $e$. We don't know anything about $e$, but let's call $e$ what this series converges to. How fast does our series converge? We claim the convergence is actually very rapid. Why? Let's look at the partial sums of the series:

  $$
  \sum_{k=0}^\infty\frac{1}{n!}=\underbrace{\underbrace{\underbrace{\frac{1}{0!}+\frac{1}{1!}}_{s_1}+\frac{1}{2!}}_{s_2}+\frac{1}{3!}}_{s_3}+\cdots.
  $$

  Now let's go out to the $n$th term and look at $e-s_n$. Well that's just

  $$
  \begin{align*}
  e-s_n
  &=\frac{1}{(n+1)!}+\frac{1}{(n+2)!}+\cdots\\[1em]
  &<\frac{1}{(n+1)!}\biggl(1+\frac{1}{n+1}+\frac{1}{(n+1)^2}+\cdots\biggr)\\[1em]
  &<\frac{1}{(n+1)!}\cdot\frac{n+1}{n}\\[1em]
  &= \frac{1}{n\cdot n!}.
  \end{align*}
  $$

  So after all is said and done, what you see is how rapid its convergence is. The $n$th term is no farther from $e$, whatever $e$ is, than the very very small number $\frac{1}{n\cdot n!}$. 

  Why did we point that out? We can use this to see very quickly that $e$ is irrational. The convergence is so rapid there's no way $e$ could have been a rational number. Why? If $e$ were some rational number, say $e=\frac{m}{n}$, then consider the $n$th partial sum $s_n$ and look at $e-s_n$ which we know from above is $\frac{1}{n\cdot n!}$. Then note that
  
  $$
  n!(e-s_n)<\frac{1}{n},
  $$

  where $e-s_n>0$ because that quantity just represents all of the leftover nonnegative terms. So we really have
  
  $$
  0<n!(e-s_n)<\frac{1}{n}.
  $$

  But notice what happens here. If $e=\frac{m}{n}$ is rational, then $n!\cdot e=n!\cdot\frac{m}{n}=\eta\in\Z$ and also $n!\cdot s_n=\ell\in\Z$. So if $e$ were rational, then we'd have some integer $\eta+\ell=\gamma$, where
  
  $$
  0<\gamma<\frac{1}{n},
  $$

  which clearly cannot be the case for any integer $\gamma$.
