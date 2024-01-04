---
title: 16 - Subsequences and Cauchy sequences
hide_title: false
sidebar_label: 16 - Subsequences and cauchy sequences
description: Lecture notes by Daniel Farlow to accompany Lecture 16 from Francis Su's YouTube video series
draft: false
tags:
  - Subsequences
  - Cauchy Sequences
  - Lecture 16 (Francis Su)
keywords:
  - subsequences
  - cauchy sequences
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
        url="https://www.youtube.com/watch?v=kbkvMTGHiQk"
    />
</div>

## Where we left off last time

Where did we leave off last time and where were we going?

- **Recap:** Last time we talked about sequences and what it meant to be a sequence in a metric space. And we talked about how to prove that a sequence converges to a particular point. We'll talk a bit more about sequences today and sequences (their relation in particular) and what it means to be a Cauchy sequence. 

- **Warm up:** Last time we talked about what it means for a sequence to converge to a point; in particular, we said $\{p_n\}$ converges to $p$ means the following:
  
  $$
  (\forall\epsilon>0)(\exists N)(n>N\implies d(p_n,p)<\epsilon).
  $$

  We wrote $p_n\to p$ or $\lim_{n\to\infty}p_n=p$ to communicate this. So $p_n\to p$ so long as no matter what $\epsilon$ you give me there is some point in the sequence (namely $p_N$) beyond which all the points are within $\epsilon$ of $p$:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L16-f1.png').default} />
	</div>

  Let's now consider what happens in $\R$ or $\R^n$.

- **More warm up:** Consider the sequences $\{s_n\},\{t_n\}\in\C$ such that $s_n\to s$ and $t_n\to t$. 

- **Theorem 1:** Given $\{s_n\},\{t_n\}\in\C$ such that $s_n\to s$ and $t_n\to t$, we claim that
  
  $$
  \lim_{n\to\infty}(s_n+t_n)=s+t.
  $$

  The important idea of the sequence convergence definition is to find an $N$. To show convergence, you must find an $N$ for every $\epsilon$. How does that play out in the proof of this theorem? What are we trying to do? With $p_n\to p$, we were trying to bound the distance between $p_n$ and $p$. Here we will be trying to bound the distance between $s_n+t_n$ and $s+t$. So we have to show that $s_n+t_n$ is *close* to $s+t$. What do we know? What are we assuming? We are assuming that $s_n\to s$ and $t_n\to t$; that is, $s_n$ is close to $s$ and $t_n$ is close to $t$. We know these distances are small, and we want to show that the sum of the distances is small. Thus, essentially, we want to show that $|(s_n+t_n)-(s+t)|$ is small. In fact, we are trying to show that $|(s_n+t_n)-(s+t)|<\epsilon$ for some given $\epsilon$. And we want to know at what point in the sequence is the quantity $|(s_n+t_n)-(s+t)|$ small. Well, we know $|s_n-s|$ and $|t_n-t|$ are both small. So can we try to bound $|(s_n+t_n)-(s+t)|$ in terms of two things which we already know to be small? By the triangle inequality, we know that

  $$
  |(s_n+t_n)-(s+t)|=|(s_n-s)+(t_n-t)|\leq |s_n-s|+|t_n-t|,
  $$

  and the idea is to somehow use this bound. Since $|s_n-s|+|t_n-t|$ will be small eventually, it must be the case that $|(s_n+t_n)-(s+t)|$ will also be small eventually. Now, of course, the two "eventually" locations at which $|s_n-s|$ and $|t_n-t|$ become small may be different. 

  For instance, if we want $|s_n-s|$ to be really small, this may not happen until $n>100$. And if we want $|t_n-t|$ to be really small, then this may not happen until $n>1000000$. So if we want $|(s_n+t_n)-(s+t)|$ to be really small, then we need $n>1000000$ to ensure that *both* $|s_n-s|$ and $|t_n-t|$ become really small. Let's flesh this out more precisely.

  Given $\epsilon>0$, there exist positive integers $N_1,N_2$ such that if $n>N_1$ then $|s_n-s|<\frac{\epsilon}{2}$ and if $n>N_2$ then $|t_n-t|<\frac{\epsilon}{2}$. Let $N=\max\{N_1,N_2\}$. Then, for $n>N$, we have

  $$
  |(s_n+t_n)-(s+t)|\leq |s_n-s|+|t_n-t|<\tfrac{\epsilon}{2}+\tfrac{\epsilon}{2}=\epsilon,
  $$

  as desired. Thus, $s_n+t_n\to s+t$. 

- **Proof technique:** The proof for the theorem above points out a key proof technique. One sequence converges, maybe not as fast as the other, but our job is to find a point in the sequence beyond which we can bound our sum, as motivated before the precise proof above.

- **Theorem 2:** Suppose $c$ is a scalar and that $s_n\to s$. Then

  $$
  \lim_{n\to\infty}cs_n=cs
  $$

  and

  $$
  \lim_{n\to\infty}(c+s_n)=c+s.
  $$

  Let's just do one of these, the first one. What idea should help us show that $\lim_{n\to\infty}cs_n=cs$. What bound are we interested in? What should we bound? Let's bound $|cs_n-cs|$, and we hope that gets small eventually. What do we know is small eventually? We know that $s_n\to s$; thus, $|s_n-s|$ is small eventually. So how can we connect the value $|cs_n-cs|$ to $|s_n-s|$? We have

  $$
  |cs_n-cs|=|c|\,|s_n-s|.
  $$

  Let's actually prove this now. 

  Given $\epsilon>0$, there exists $N$ such that $n>N$ implies $|s_n-s|<\frac{\epsilon}{|c|}$. Then *for this $N$* (emphasis just to illustrate that we found our $N$), $n>N$ implies that

  $$
  |cs_n-cs|=|c|\,|s_n-s|<|c|\cdot\frac{\epsilon}{|c|}=\epsilon,
  $$

  as desired. So $cs_n\to cs$.

  For the other proof, given $\epsilon>0$, there exists $N$ such that $n>N$ implies $|s_n-s|<\epsilon$. Then $n>N$ implies that

  $$
  |(c+s_n)-(c+s)|=|(c-c)+(s_n-s)|=|s_n-s|<\epsilon,
  $$

  as desired.

- **Theorem 3:** Given $s_n\to s$ and $t_n\to t$, then $\lim_{n\to\infty}s_nt_n= st$. What should we be trying to bound here? We should be trying to bound $|s_nt_n-st|$. We note that

  $$
  |s_nt_n-st|=|(s_n-s)(t_n-t)+s(t_n-t)+t(s_n-s)|,
  $$

  where this idea may seem quite random at first. It's rather natural to first look at the product $(s_n-s)(t_n-t)$, but we get cross terms and the signs are all wrong. We add the other terms to balance things out. But the equation above is quite good because we can ultimately look at the core part of the identity as follows:
  
  $$
  s_nt_n-st=\underbrace{(s_n-s)}_{\substack{\text{eventually}\\\text{small}}}\underbrace{(t_n-t)}_{\substack{\text{eventually}\\\text{small}}}+s\underbrace{(t_n-t)}_{\substack{\text{eventually}\\\text{small}}}+t\underbrace{(s_n-s)}_{\substack{\text{eventually}\\\text{small}}}.
  $$

  For the above, we note that the $s$ and $t$ outside of the parentheses are really scalars, and so we may possibly apply a theorem we just proved here. There are many good things about our seemingly "out of the hat" way of rewriting $s_nt_n-st$. Of course, the trick now is to figure out which $N$ works. That's what's more difficult here. Let's prove this now. 

  Given $\epsilon>0$, let $K=\max\{s,t\}$. Then there exists $N_1,N_2$ such that $n>N_1$ implies that $|s_n-s|<\frac{\epsilon}{3K}$. Similarly, $n>N_2$ implies that $|t_n-t|<\frac{\epsilon}{3K}$. Let $N=\max\{N_1,N_2\}$. Then $|s_nt_n-st|<\frac{\epsilon^2}{9K^2}+\frac{\epsilon}{3}+\frac{\epsilon}{3}$. We have a slight problem with the $\frac{\epsilon^2}{9K^2}$ term. The issue involves both $\epsilon^2$ and $K^2$. What could we do? Well, if $\epsilon<K$, then $\frac{\epsilon}{K}<1$, and I can get rid of one of the squared terms because $(\frac{\epsilon}{K})^2=\frac{\epsilon^2}{K^2}<1$. We would have the following:

  $$
  \begin{align*}
  |s_nt_n-st|
  &< \frac{\epsilon^2}{9K^2}+\frac{\epsilon}{3}+\frac{\epsilon}{3} & \text{(by triangle inequality)}\\[1em]
  &<\frac{\epsilon}{9K}+\frac{\epsilon}{3}+\frac{\epsilon}{3} & \text{(by letting $\epsilon<K$)}\\[1em]
  &< \frac{\epsilon}{3}+\frac{\epsilon}{3}+\frac{\epsilon}{3} & \text{(if $K>1$)}\\[1em]
  &= \epsilon.
  \end{align*}
  $$

  How can we make sure the modifications\slash restrictions to our choice of $K$ actually work? We can let $K=\max\{s,t,1,\epsilon\}$ to ensure we obtain the desired conclusion above.

- **Strategy for showing sequences converge:** Your goal is to find an $N$. The idea you start with is to bound the thing (i.e., the sequence and its limit) you want to show converges, and you want to do so in terms of things you know are small.

## Subsequences

What are subsequences and why are they important?

- **Motivating idea:** Suppose you have a sequence $\{p_n\}$ and you look at a set of indices $n_1<n_2<n_3<\cdots$ in $\N$ an increasing sequence, where this needs to be infinite. Then $\{p_{n_i}\}$ is a subsequence.

  Consider, for example, the sequence

  $$
  \{\underbrace{\tfrac{1}{2}}_{n_1},\underbrace{\tfrac{2}{3}}_{n_2},\underbrace{\tfrac{3}{4}}_{n_3},\underbrace{\tfrac{4}{5}}_{n_4},\underbrace{\tfrac{5}{6}}_{n_5},\ldots\}.
  $$

  What is a subsequence exactly? Well, a subsequence is basically picking out a sequence that's a subset of the original sequence. So we could look at

  $$
  \{\tfrac{1}{2},\underbrace{\text{\textcircled{$\tfrac{2}{3}$}}}_{p_{n_1}=p_2},\tfrac{3}{4},\underbrace{\text{\textcircled{$\tfrac{4}{5}$}}}_{p_{n_2}=p_4},\underbrace{\text{\textcircled{$\tfrac{5}{6}$}}}_{p_{n_3}=p_5},\ldots\}
  $$

  to begin the subsequence

  $$
  \{\tfrac{2}{3},\tfrac{4}{5},\tfrac{5}{6},\ldots\}.
  $$

  It looks like the original sequence converges to 1, but does the subsequence converge? Maybe it converges to 1 also. Are there subsequences that don't converge? Does *every* subsequence of our original sequence have to converge? Does it have to converge to 1? 

  More specifically, if $p_n\to p$, then must every subsequence converge to $p$? Yes. There's a fairly easy way to see this which is based on something we showed last time, namely that every neighborhood of a convergent sequence contains all but finitely many points. That is, every neighborhood of $p$ contains all but finitely many points of $p_n$. So if that's true and we have that $p_n\to p$, then it's easy to show that the subsequence converges to the same $p$. In fact, you can tell how far in the sequence you need to go. For example, if you need to go out to the 100th term to get the sequence to be within $\epsilon$ of the limit, then how far do you need to go to have the subsequence be within $\epsilon$? Well, 100 would certainly work! You actually may only need to go less far. So subsequences of convergent sequences also converge and to the same limit. What about sequences that don't converge? Could they have convergent subsequences? Sure.

- **Convergent subsequences of divergent sequences:** Consider the sequence

  $$
  \{1,\pi,\tfrac{1}{2},\pi,\tfrac{1}{3},\pi,\tfrac{1}{4},\pi,\ldots\},
  $$

  which certainly does not converge. But it does have a subsequence that converges. Certainly the sequence $\{\pi,\pi,\pi,\ldots\}$ would work, but that's not the only one! The subsequence
  
  $$
  \{1,\tfrac{1}{2},\tfrac{1}{3},\tfrac{1}{4},\ldots\}
  $$

  would also work. There are many other convergent subsequences, in fact. The subsequence $\{1,\tfrac{1}{2},\pi,\pi,\pi,\ldots\}$ could also work, etc. We have a name for such limits. They are called *subsequential limits*. 
	
- **Existence of convergent subsequence for divergent sequence:** Must every sequence contain a convergent subsequence? No. How about the natural numbers? We would have $\{1,2,3,4,\ldots\}$, and that certainly does not have a convergent subsequence. If there were a subsequence that converged to some number $p$ here, then you could show that beyond some point you are bigger than $2p$ and you'd never be close to $p$. Can't have a convergent subsequence. Must a *bounded* sequence have a convergent subsequence? In general metric spaces, this is not true. Let's consider an example to see why this is true. 

  Consider the metric space $\Q$ with the usual metric. Then the sequence

  $$
  \{3,3.1,3.14,3.141,3.1415,3.14159,\ldots\}
  $$

  does not converge, and it does not have a convergent subsequence either. In $\Q$ at least. Of course, if you are working in $\R$, then the original sequence does converge, namely to $\pi$, and every subsequence would as well. So, in general metric spaces, it is not necessarily true that a bounded sequence has a convergent subsequence, but it seems as though if we are in $\R$ or $\R^n$ then we may have this fact. What about in general compact metric spaces? 

- **Convergence of subsequences in compact metric spaces:** It seems as though if we are dealing with compact metric spaces, then any sequence should have a convergent subsequence. It may help to first introduce a definition not in <BibRef id='WR1976' pages=''></BibRef>: 

  > **Sequentially compact metric space:** A metric space $X$ is said to be *subsequentially compact* if every sequence has a convergent subsequence that converges to some point of $X$. 

  And the question was really whether or not it is true that a compact set is also sequentially compact? Does compactness imply sequential compactness? What does sequentially compact really mean? It means a space is "small enough" that every sequence, even if the sequence does not converge, you can find some subsequence that converges. Compactness basically implies sequential compactness.

- **Theorem (compactness and sequential compactness):** If $X$ is compact, then $X$ is sequentially compact. This is stated in <BibRef id='WR1976' pages='p. 51'></BibRef> as follows: "If $\{p_n\}$ is a sequence in a compact metric space $X$, then some subsequence of $\{p_n\}$ converges to a point of $X$." So, in a compact space $X$, every sequence has a subsequenece that converges to a point of $X$. 

  Without being explicit, sometimes there can be confusion. For instance, the set

  $$
  \{3,3.1,3.14,3.141,3.1415,3.14159,\ldots\}
  $$

  looks like it converges, but this is kind of meaningless without saying what space we are in. The sequence above converges to $\pi$, but $\pi\not\in\Q$. What we are saying when we have sequential compactness is that any sequence has a subsequence that converges to a point in the metric space under consideration, where it is clear from the above set that $\Q$ is not sequentially compact. A fact worth noting but which we will not prove here is that sequential compactness is equivalent to compactness.

- **Corollary of theorem about compactness implying sequential compactness:** An immediate corollary of the theorem, "If $X$ is compact, then $X$ is sequentially compact." is that every bounded sequence in $\R^k$ contains a convergent subsequence. Well, $\R^k$ is not compact so how can we say this is an immediate corollary? Since we have a *bounded* sequence, it lives in a compact subset of $\R^k$, and therefore it lives in a compact metric space, so it contains a convergent subsequence converging to a point of that set which is in $\R^k$. This corollary has a special name called the Bolzano-Weierstrass theorem. Let's now prove the theorem of which this result was the corollary.

- **Proof that compactness implies sequential compactness:** Why is it that compactness gives us enough to show sequential compactness? Compactness actually gives us many nice things, but what's true here? We have some sequence in a compact metric space $X$ that's sort of hopping around perhaps:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L16-f2.png').default} />
	</div>

  There are a couple of cases to consider here. We could consider the case where we let $R=\operatorname{range}\{p_n\}$ (that is, all the values that are actually hit). If $R$ is finite, then can we show that our sequence has a convergent subsequence? Yes, because if we only hit finitely many things and there are infinitely many points of the sequence, then one of those points must be hit infinitely many times. So if $R$ is finite, then some $p\in\{p_n\}$ is achieved infinitely many times. So you just use that subsequence. This is a version of the pigeonhole principle, namely that if you drop infinitely many pigeons into finitely many holes then some hole must have infinitely many pigeons.

  What if $R$ is infinite? We'd have an infinite subset of a compact set, and recall that if you have an infinite subset of a compact set, then that set must have a limit point. So in our picture above, what this means is that there must be some point that is accumulated on. There are probably many, but there's at least one limit point. So, if $R$ is infinite, then by Theorem 2.37 in <BibRef id='WR1976' pages='p. 38'></BibRef> (which we proved here in these notes as well), since $X$ is compact, $R$ has a limit point. Let's call it $p$. Now, the claim is that $p$ must be a subsequential limit. Of what subsequence though? We can start labeling some of the points as follows:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L16-f3.png').default} />
	</div>

  Maybe we label $p$ and ask ourselves what subsequence will converge to $p$ if it is a limit point:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L16-f4.png').default} />
	</div>

  As noted above, we can take a neighborhood of $P$, say $\frac{1}{N}$. Eventually, one of the points would live inside of this neighborhood (make the neighborhood as large as you like at first), let's say $p_{101}$:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L16-f5.png').default} />
	</div>

  But how could we construct a subsequence that gets closer? We could consider another neighborhood of $p$, say $\frac{1}{N+1}$, where there have to be points inside:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L16-f6.png').default} />
	</div>

  In fact, there doesn't just have to be points inside but infinitely many points inside. There must be a point beyond $p_{101}$ in the sequence that lives in this neighborhood since there are infinitely many points in it. We can use this idea to construct a subsequence. 

  Alternatively, there exists a sequence in $R$ converging to $p$, which we've already shown, but maybe it looks something like this: $p_{101}$, $p_{50}$, $p_{47}$, $p_2$, $p_{10}$, $p_{300}$, $p_8$, \ldots . When we have found this sequence, it's not technically a subsequence because its indices do not increase, but there has to be a subsequence where the indices do increase. Why? Well, there are infinitely many terms beyond $p_{101}$ so there has to be one that's bigger, namely, $p_{300}$. Then you could pick the next bigger one. And when you've picked those ones out, you have a subsequence. 

  The fact that every sequence in a compact metric space has a convergent subsequence will be appealed to often.

## Cauchy sequences

What are Cauchy sequences and why are they important?

- **Motivation:** The whole point of studying Cauchy sequences is to try to get a handle on the following question: How can you tell whether or not $\{p_n\}$ converges if you do not already know its limit? In other words, in many of our definitions, they require you to know what the limit is of a sequence in order for us to determine whether or not it converges. So you might have a sequence you have no idea whether or not it converges (i.e., whether or not it has a limit) and what that point of convergence or limit could be. Our idea is to define a kind of sequence that gives us a criterion for perhaps being able to answer this question.

  More precisely, maybe we have a bunch of points:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L16-f7.png').default} />
	</div>

  We cannot tell whether or not these points are converging to anything. But if they converge to something we don't know, then the points must be getting close to each other. So if they do converge, then the $p_n$ must be getting close to each other. That's the key idea.

- **Cauchy sequence (definition):** The sequence $\{p_n\}$ is Cauchy if the following is true:

  $$
  (\forall\epsilon>0)(\exists N)(m,n\geq N\implies d(p_m,p_n)<\epsilon).
  $$

  What's the relationship between this definition and what it means for a sequence to be convergent? Are they the same? What do you think at least is true? If a sequence converges, then it must be Cauchy. Let's prove that.

- **If a sequence converges, then it is Cauchy (proof idea):** All we have to do is try to show that points get close to each other, and we know they get close to $p$ so how will we show that they get close to each other? What are we going to try to bound the distance between? The distance from $p_n$ to $p_m$ or simply $d(p_n,p_m)$, where we will resist the urge to write $|p_n-p_m|$ because we are now dealing in an arbitrary metric space and not just $\R$. What do we know is small? We know the $d(p_n,p)$ is small and that $d(p,p_m)$ is small. Maybe we can relate those distances using the triangle inequality:

  $$
  d(p_n,p_m)\leq d(p_n,p)+d(p,p_m).
  $$

  This is the key idea. 

- **If a sequence converges, then it is Cauchy (proof):** Given $\epsilon>0$, there exists $N$ such that $n\geq N$ implies that $d(p,p_n)<\frac{\epsilon}{2}$. So for this $N$, $n,m\geq N$ implies that
  
  $$
  d(p_n,p_m)\leq d(p_n,p)+d(p,p_m)<\tfrac{\epsilon}{2}+\tfrac{\epsilon}{2}=\epsilon.
  $$

  So we know that convergent sequences are Cauchy sequences. What about the reverse direction? Are Cauchy sequences convergent?

- **Are Cauchy sequences convergent?:** Consider again the sequence
  
  $$
  \{3,3.1,3.14,3.141,3.1415,3.14159,\ldots\}.
  $$

  This sequence in $\Q$ is Cauchy but not convergent. It would be wise to try to pin down conditions for when it is true that Cauchy sequences are convergent. When will this be the case? 

- **Complete metric space (definition):** A metric space $X$ is said to be complete if every Cauchy sequence converges to a point of $X$. So this is a desirable property; it's the property that we want. In a complete metric space, Cauchy means convergent. So it is then natural to wonder what spaces are, in fact, complete. Which metric spaces are complete? We know $\Q$ is not complete. What about $\R$? Is $\R$ complete?
