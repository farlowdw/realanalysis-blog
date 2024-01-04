---
title: 12 - Relationship between compact sets and closed sets
hide_title: false
sidebar_label: 12 - Relationship between compact sets and closed sets
description: Lecture notes by Daniel Farlow to accompany Lecture 12 from Francis Su's YouTube video series
draft: false
tags:
  - Compactness
  - Compactness Results
  - Heine-Borel Theorem
  - Lecture 12 (Francis Su)
keywords:
  - compactness
  - heine-borel theorem
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
        url="https://www.youtube.com/watch?v=kkKfRaI-cqs"
    />
</div>

## Where we left off last time 

- **Compactness:** Last time we saw that compact sets are, in some sense, small sets. They're the next best thing to being finite. In particular, finite sets are compact. We also saw that compact sets are, in fact, bounded sets. We proved that last time. And today we will show that compact sets are, in fact, closed sets as well. But we'll also see some other relationships between closed sets and compact sets. 

- **Compact (definition):** A set $K$ in a metric space $X$ is compact if every open cover of $K$ has a finite subcover in $X$. We'll start off by showing something we alluded to last time, namely that it really doesn't matter what space you're embedded in. That is, compactness is actually an intrinsic property of a set, and it is actually does not depend on the metric space you're embedded in. 

- **Recollection of openness in a metric space:** Recall the characterization we had for what it means for a set to be open in a metric space. So consider a metric space $X$ and maybe some smaller metric space $Y$:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L12-f1.png').default} />
  </div>

  We might ask, "What does it mean to be open in $X$?" Well, what does it mean for a set to be open? It means every point of the set is an interior point. Or another way of saying it is that every point can be perturbed a little bit and stay inside the set. That's what it means to say the set is open. But last time we made a distinction about what it means for a set to be open in $X$ as opposed to $Y$. You could imagine, for instance, a set $E$ such as

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L12-f2.png').default} />
  </div>

  which does not contain its boundary on the left-hand side (indicated by the dashes) but *does* contain its boundary on the right-hand side (indicated by the dark bold line), where we also notice the open endpoints of the bold boundary. Is the set $E$ open in $X$? No, it's not open in $X$ because you could be right on the bold boundary and perturb a little bit and you would leave the set $E$. The point would not be interior. There is not an open ball, neighborhood around it that's still within $X$. (In the picture this is communicated because *any* point to the right of the boundary would no longer be in $E$, thus causing $E$ to not be open in $X$. But is $E$ open in $Y$? Yes, because in $Y$, if we perturb it a little bit, would you still remain in $Y$if you only moved within $Y$? Yes. But what about the endpoints on the boundary? (In the picture, these endpoints are open even though you have to zoom in slightly to see it.) If the endpoints of the bolded boundary were actually in the set $E$, then $E$ would not be open in $Y$ either because you could march to the northwest direction of the top point and leave the set $E$. That point would not be interior to $E$ if it were included. So the set $E$ in this example here is an example of a set that is open in $Y$ but not open in $X$. But there is a relationship as we saw last time.

  The thing we proved last time was that even if the pictured set $E$ is not open $X$ but is open in $Y$, then there exists a corresponding set $G$ that is open in $X$ such that $E$ is the intersection of this set with $Y$. That is, $G\cap Y=E$. That was the theorem from last time, and we can visualize the result in this example with the picture 

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L12-f3.png').default} />
  </div>

  where $G$ is everything in the disc (indicated by diagonal lines going from top left to bottom right). So the theorem we proved last time was that if it is the case that $E\subset Y\subset X$, then $E$ is open in $Y$ if and only if $E=Y\cap G$ for some open $G$ in $X$. So this is the correspondence between being open in a metric space that is a subset of a bigger metric space. The book states this theorem more precisely as follows.

  > **Theorem.** Suppose $Y\subset X$. A subset $E$ of $Y$ is open relative to $Y$ if and only if $E=Y\cap G$ for some open subset $G$ of $X$.

  What this theorem essentially means is that any open set in $Y$, namely $E$ in our example, corresponds to some open set in $X$, namely $G$ in our example. The set $E$ could correspond to several open sets $G_\alpha$ in $X$ for which $E=G_{\alpha_\gamma}\cap Y$, but it must correspond to at least one such open set. Similarly, any open set in $X$ must correspond to an open set in $Y$ just by taking the restriction to $Y$. This insight is going to be the ingredient in showing that compactness is really not dependent on the space you're in. For example, consider again the following picture: 

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L12-f4.png').default} />
  </div>

  If we want to talk about the set $E$ being compact, then whether or not I choose to talk about compactness in $Y$ or compactness in $X$, it really does not matter. It's the same. Let's see why that's true. What we're really going to have here is some set $K$. So you might imagine the set $K$ depicted below by the very bold line. 

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L12-f5.png').default} />
  </div>

  And we might want to know whether or not the set $K$ is considered to be compact. And so now the question is what does it mean to be compact? I need to show that every open cover has a finite subcover, and if I want to talk about compactness in $Y$ then there had better be an open cover for $K$ in $Y$. So then we would use open sets like $E$ pictured above to cover $K$, and I want to know is it true that if $K$ is compact in $Y$, then is there some relationship between being compact in $X$, which would involve covering by sets like $G$ pictured above. The theorem we are about to prove says that the notions are, in fact, equivalent.

## Compactness results

 What are some key results and proofs concerning compactness?

- **Compactness independent of metric space:** We shall prove that, given $K\subset Y\subset X$, that $K$ is compact in $Y$ if and only if $K$ is compact in $X$. Let's go with the forward direction first in our proof.
  + **Forward direction:** What are we assuming here? We are assuming that $K$ is compact in $Y$. That means given any cover of $K$ by some open set $E$ in $Y$ I can find a finite subcover by similar sets $E_\alpha$. That's what we're allowed to use if we need it. But how should we actually start this proof? What do we want to show is compact? We want to show $K$ is compact in $X$. So we should start with an open cover of $K$ by sets of the form $G_\alpha$ (as in our picture above) in $X$. Our job, then, will be to show that $K$ does, in fact, have a finite subcover in $X$. Let's get started.

    Consider an open cover $\{U_\alpha\}$ of $K$ in $X$, where the sets $U_\alpha$ here are like $G$ in the previous picture, and $\alpha$ here just means an arbitrary open collection. We're not bothering to write the index set, but it could possibly be an uncountable index set. So we have an open cover of $K$ by a bunch of sets like $G$, namely $\{U_\alpha\}$. We want to show that $\{U_\alpha\}$ has a finite subcover. How can we do this? And all we know is that if we have sets like $E$ then we can find a finite subcover by such sets. Let $V_\alpha=U_\alpha\cap Y$. Then $\{V_\alpha\}$ are an open cover for $K$ in $Y$. Is it clear that $\{V_\alpha\}$ actually cover $K$? Yes, because $K\subset Y$. By compactness of $K$ in $Y$, there exists a finite subcover $\{V_{\alpha_1},\ldots,V_{\alpha_n}\}$. So we're just turning our intuition into a proof. So what's the finite subcover you're expecting to use now that's similar to $G$ in the previous picture? We should go back to the original $U$ sets. Which ones? The ones that are indexed by $\alpha_1,\ldots,\alpha_n$. Then $\{U_{\alpha_1},\ldots,U_{\alpha_n}\}$ is a finite subcover (of the original cover) of $K$ in $X$, as desired.
  
  + **Backward direction:** Now we will assume compactness in $X$ and show compactness in $Y$. So we'll start with what kinds of sets? What kind of cover? We should start with an open cover of $K$ in $Y$ for this direction of the proof. So consider an open cover $\{V_\alpha\}$ of $K$ in $Y$. So now we want to show that there is a finite subcover. The argument here is very similar. I start with a bunch of sets like $E$ covering $K$ in $Y$, and I want to find a finite subcover. What should I do? Well, by the theorem

    > **Theorem.** Suppose $Y\subset X$. A subset $E$ of $Y$ is open relative to $Y$ if and only if $E=Y\cap G$ for some open subset $G$ of $X$.

    we are saying that every element of the cover $\{V_\alpha\}$ corresponds to a bigger $G$ that's open in the bigger space $X$. That's an open cover. It has a finite subcover. And now restrict to get sets like $E$, and that's a finite subcover of the original cover. 

    More precisely, by the theorem relisted above, there exists open $U_\alpha$ such that $U_\alpha\cap Y=V_\alpha$. Then $\{U_\alpha\}$ cover $K$ in $X$ so there exists a finite subcover $\{U_{\alpha_1},\ldots,U_{\alpha_n}\}$. Then $\{V_{\alpha_1},\ldots,V_{\alpha_n}\}$ are a finite subcover of $\{V_\alpha\}$ for $K$ in $Y$. This is good enough for a sketch of the argument, but there are a few things to check. If someone really pressed you, then you might still want to explain why $\{U_\alpha\}$ still covers $K$ in $X$. 

  So what's the moral of the story here? The moral of the story is compactness is an intrinsic property of a set. It doesn't depend on what metric space you're embedded in. Just has to be one that contains that set. 

- **Motivation for proof that compact sets are closed:** Consider a metric space $X$ and some set $K$ embedded in $X$, where $K$ is a compact set (it's a compact car!) and $q$ represents an arbitrary point in $K$ while $p$ represents an arbitrary point in $X$ that is not in $K$ (so just an arbitrary point outside of $K$), and we want to show that $K$ is closed. 

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L12-f6.png').default} />
  </div>

  How are we going to show that $K$ is closed? What's one way we could try to do this? When is a set closed? A set is closed when it contains all its limit points or, alternately, a set is closed if its complement is open. Which of those characterizations might be most helpful here? Complements are open! Why might that be more helpful in this context where we are dealing with the definition of a concept like compactness? Because it's talking about open covers! So let's try that strategy.

  We are going to take *any* point outside of the set $K$ and show that there is a ball around it, a neighborhood around it, that misses the car. That's our goal. Why is that our goal? Well, we want to show that $K^c$ is an open set. What is an open set? (With what follows we will use $K^c$ instead of $E$ to more clearly illustrate what we are trying to show in this proof.) A set $K^c$ is an open set if every point of $K^c$ is an interior point. What's an interior point? A point $p$ is an interior point of $K^c$ if there is a neighborhood $N$ of $p$ such that $N\subset K^c$. It should be clear now that if we can find a neighborhood of $p$ in the picture such that this neighborhood misses all of $K$ then we will be done because $p$ is an arbitrary point of $K^c$; that is, if we can show that $K^c$ is an open set by showing that each $p$ is an interior point, then we will have shown that $K$ is closed, the desired conclusion.

  Let's return to our picture:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L12-f7.png').default} />
  </div>

  How can I produce a neighborhood or open set (recall that all neighborhoods are open sets) around $p$ such that it misses the car? To "miss the car" $K$ we kind of need to know something about the points that make up $K$. Let $q$ denote an arbitrary point of $K$. Then the notion of constructing a neighborhood around $p$ such that it misses the car will necessarily involve some idea concerning the distance from the arbitrary point $p$ in $K^c$ to the point $q$ in $K$. Now, when thinking about constructing such a neighborhood around $p$, we necessarily think of the distance or radius of such a neighborhood (after all, such a distance is the defining characteristic of a neighborhood), but instead of thinking about distances from $p$ you might look at balls or neighborhoods around $q$. 

  From the picture, it seems to be an agreeable notion that for any particular point $q_0$ in $K$ we have a predetermined ball such that this ball completely misses a ball for some point in $K^c$. Yes, so let's give it a name. Consider the set around $p$ that misses $q$'s ball. Denote this set by $U_q$. And also consider the set around $q$ that misses $p$'s ball. Denote this set by $V_q$.  

  Now, different $q$'s will have different balls, and their radii may change based on their proximity to $p$. The idea is that for every point $q$ there are partner sets that separate that point from $p$. Call them $U_q$ and $V_q$. What should we do now? Use the set of $V_q$'s as a cover for $K$! Yes, this will be a cover. So what? Since $K$ is compact, there is a finite subcover. If we have a finite subcover, then what this means here is that we have a finite number of these balls for $K$ and also a finite number of these balls for $K^c$ (i.e., partners). You could take the one of minimum distance. Why does that minimum have to be bigger than zero? Why does it have to exist? There are now finitely many distances we are talking about! Why does it have to be bigger than zero? Because it was bigger than zero to begin with. 

  The punchline is that now we've used finiteness. We basically have finiteness where we didn't have it before. That's what we mean when we say that compact sets are the next best thing to being finite. We are actually appealing to finiteness here. Okay, so let's give the proof now that motivation has been properly given.

- **Compact sets are closed:** Clearly we are talking about compact sets being closed in a metric space, but why is this true? Let $K$ be compact, and consider $p\not\in K$. We want to show that $p$ has a neighborhood that does not intersect $K$. That's the same as showing that $p$ is not a limit point of $K$ which would also show that any point that's not in it is not a limit point so $K$ contains all its limit points or it's the same as showing that the complement of $K$ is open. Either way, we are done if we can do this. (So $p$ is interior to $K^c$\ldots if this is true for all $p$ then $K^c$ is open.) 

  For any $q\in K$, let $V_q=N_{r/2}(q)$, and let $U_q=N_{r/2}(p)$, where $r=d(p,q)$. Note that $\{V_q\}$ are an open cover of $K$. By compactness of $K$, there exists a finite subcover $\{V_{q_1},\ldots,V_{q_n}\}$. What should we do with the $U$ sets? We should look at their partner sets. Then let $W=U_{q_1}\cap U_{q_2}\cap\cdots\cap U_{q_n}$, where $W$ is the intersection of *finitely* many things. Since $W$ is the intersection finitely many open sets, then $W$ itself is open, and $W$ is a ball of radius of $\min d(p,q_i)$. So what do we claim about $W$? We have a bunch of partner sets, and the smallest one is the one we're interested in. So the claim is $W\cap V_{q_i}=\emptyset$ for each $i$. Why? Because $W\in U_{q_i}$, and $U_{q_i}\cap V_{q_i}=\emptyset$. We are done because $W$ is the desired neighborhood. 

- **Recap of proof of compact sets being closed:** The amazing idea used in the proof is that we can separate $p$ from each point; there are infinitely many points, but that's where compactness comes in. It's a beautiful idea. So we now know that if a set is compact then it must be closed. 

- **A consequence of compact sets being closed:** An easy consequence of the observation that compact sets are closed is that the open interval $(0,1)$ is not compact. We've already seen an open cover that doesn't have a finite subcover (i.e., concentric things getting bigger and bigger). But now we can see from this theorem that it's also clearly not compact. If it's going to be compact, then it has to be closed. What else can we say about the relationship between compact sets and closed sets? Compact sets are closed, but are closed sets necessarily compact? No? Give me an example. How about the entire real line in the real line? It's not compact because it's not bounded. So notice that $\R$ (in $\R$) is not compact because it is not bounded even though it is closed. So closed sets are not necessarily compact. What about $[0,\infty)$? It's closed, but it's not compact because it's not bounded either. Are closed and bounded sets compact? Not necessarily in every metric space! But it is true in $\R$! This result is known as the Heine-Borel theorem. Interesting aside question: Given some arbitrary set $J$, is it possible to make $J$ a compact set by finding an appropriate metric space $X$ for which we are not dealing with a pseudometric? Okay, so closed sets are not necessarily compact, but here's one thing we can say (and this leads up to the Heine-Borel theorem): A closed subset $B$ of a compact set $K$ is compact.

## The Heine-Borel theorem

How might we set ourselves up well for the proof of the Heine-Borel theorem?

- **Closed subsets of compact metric spaces:** We showed compact sets are closed, but now we are addressing the question of whether or not closed sets, in particular cases, are compact because they're not necessarily compact in general (as was seen above), but one instance where we can say they are compact is if we take a closed subset of a compact set. Let's prove this: A closed subset $B$ of a compact set $K$ is compact.

  Consider some compact set $K$ with $B$ as a closed subset of $K$ such as the following:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L12-f8.png').default} />
  </div>

  The claim is then that $B$ is compact. This is another fun argument with compactness. So, we want to show $B$ is compact. Which means we should start with an open cover of what? We should start with an open cover of $B$! The temptation is to start with an open cover of $K$, but that is a mistake. We will need to use the fact that $K$ is compact at some point certainly, but our goal is to show that $B$ is compact from this. (And we know that $B$ has an open cover because $B$ is a subset of $K$, and $K$ is already known to have an open cover\ldots but which one should we use? That's a question addressed below.) So let's start with an open cover of $B$. Let $\{U_\alpha\}$ be an open cover of $B$. So here's an open cover of $B$ by sets here:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L12-f9.png').default} />
  </div>

  Of course, there could be *many* more sets involved in this open covering, but the above suffices. Now we want to find a finite subcover of $B$ using this collection $\{U_\alpha\}$. How can we do that? What do we know? We know $K$ is compact. So if we're going to use the fact that $K$ is compact, then I'm going to need to have an open cover of $K$. Certainly, if we want to find an open cover of $K$, then there must be some relationship with the sets $\{U_\alpha\}$. So let's use our sets $\{U_\alpha\}$ which don't necessarily cover all of $K$. So what should we do? Add more sets perhaps. Now, would you agree that if we add more sets, then it might be a bad thing to add infinitely many sets? Because then when you take the finite subcover you might not get any of the original sets $\{U_\alpha\}$. So can we see an open set or sets that cover(s) the things that we have missed? Here is a hint: $B$ is closed. How is this helpful? The sets $\{U_\alpha\}$ cover $B$, and we need something or some things to cover everything outside. I know that $B$ is closed. Therefore, $B^c$ must be open, and what does this do? It covers everything outside of $B$! So $B^c$ is everything outside of $B$, possibly more than $K$, but that's okay, we don't have a problem with that:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L12-f10.png').default} />
  </div>

  Everything enclosed with horizontal dashes represents $B^c$ in the figure above. (Note how the dashes go through the open sets that cover $B$ but do not cut across $B$ itself.) Since $B$ is closed, we know $B^c$ is open, and the question is whether or not we have an open cover of $K$ now. Yes. And $K$ is compact. Therefore, $K$ has an open cover.

  Right now we have that $\{U_\alpha\}$ is an open cover of $B$ and that $B^c$ is open (because $B$ is closed). So $\{U_\alpha\}\cup\{B^c\}$ is an open cover of $K$. Therefore, by compactness, there exists a finite subcover of $K$, namely the collection $\{U_{\alpha_1},\ldots,U_{\alpha_n},B^c\}$, where we throw in $B^c$ as a safety precaution (throwing $B^c$ into the collection does not change the finiteness requirement of the subcover). Recall the open covering of $B$ we had at the beginning:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L12-f11.png').default} />
  </div>

  If this open covering covered all of $K$ as well, then $B^c$ might not be needed in our collection $\{U_{\alpha_1},\ldots,U_{\alpha_n},B^c\}$, but otherwise it's $B^c$ together with some things of $\{U_\alpha\}$.  So right now we have that $\{U_{\alpha_1},\ldots,U_{\alpha_n},B^c\}$ is a finite subcover of the cover $\{U_\alpha\}\cup\{B^c\}$, where $B^c$ may or may not be needed in $\{U_{\alpha_1},\ldots,U_{\alpha_n},B^c\}$, but its inclusion or exclusion does not effect the finiteness condition so we include it anyway. Is the collection $\{U_{\alpha_1},\ldots,U_{\alpha_n},B^c\}$ a finite subcover of the original open cover $\{U_\alpha\}$ of $B$? If so, then we are done. If not, then we will need to do some more work. Well, $\{U_{\alpha_1},\ldots,U_{\alpha_n},B^c\}$ may *not* be a finite subcover of $\{U_\alpha\}$ because it may have $B^c$ in it. So what can we do? Well, $B^c$ is not covering $B$ anyway so it's not necessary for $B$. It might be necessary for $K$, but it's not necessary for $B$. We are now in a place to wrap things up.

  Let $\{U_\alpha\}$ be an open cover of $B$. Note that $B^c$ is open since $B$ is closed. Thus, $\{U_\alpha\}\cup\{B^c\}$ is an open cover of $K$. By compactness, there exists a a finite subcover $\{U_{\alpha_1},\ldots,U_{\alpha_n},B^c\}$ of $\{U_\alpha\}\cup\{B^c\}$. Note that $B^c\cap B=\emptyset$; thus, $\{U_{\alpha_1},\ldots,U_{\alpha_n}\}$ covers $B$ and is a finite subcover of the original cover $\{U_\alpha\}$ of $B$.

- **Recap of proof for compactness of closed subsets of compact sets:** What have we shown? We've shown that if you consider a "small set" (i.e., a compact set) and take a subset of this small set, then this subset is also a "small set" (i.e., the subset of a compact set is also compact). What else can we say about compact sets? 

- **Corollary of proof:** If you have a closed set $F$ and a compact set $K$, not necessarily related, in a metric space $X$, then the intersection $F\cap K$ is compact. Why is this a simple corollary? Well, if $K$ is compact, then $K$ is closed. Hence, $F\cap K$ is closed because $F$ and $K$ are both closed. But $F\cap K$ is then a closed subset of a compact set and is therefore compact. 

- **Lemma for Heine-Borel Theorem (nested interval property):** We want to show, in the Heine-Borel theorem, that closed and bounded subsets of the real line are compact. To do that, we first need to show that closed intervals are compact, which we have not done yet. So we need to do that. And to do that, we need the nested interval theorem.

- **Nested interval theorem:** The intersection of nested closed intervals in $\R$ are not empty. (The same fact will be true in $\R^k$ is we replace "intervals" with $k$-cells, which may be thought of as closed boxes in many senses.) We can imagine we have $I_n=[a_n,b_n]$, where by nested we mean 

  $$
  \text{if $m>n$ then $a_n\leq a_m\leq b_m\leq b_n$ for $n,m\in\N$}
  $$

  and $I_1\supset I_2\supset I_3\cdots$. The idea is that there exists a point in *all* (i.e., the *intersection*) of the closed intervals. How do we know there exists such a point? What's a possibly good candidate to consider? What if we start to consider $a_1,a_2,a_3$, and so on? How about a supremum for the $a_i$? Why does such a supremum have to exist? Because we have a bunch of real numbers! We're definitely upper bounded by $b_1$. 

  Let $x=\sup\{a_i\}$, which exists because they are bounded by $b_1$. So we have a candidate and it exists. Why must $x$ be in all of these intervals? Is it clear that $x$ is at least bigger than all the $\{a_i\}$? Yes! It's the supremum. So, clearly we have $x\geq a_i$ for all $i$ because $x$ is the supremum. Why is $x$ less than all the $b$'s? We have to be a little more careful here. Why does $x$ have to be less than, say, $b_{52}$? We claim $x\leq b_n$ for all $n$ because $b_n$ is an upper bound for all $a_n$ by the equation above. So what are we saying? You give me any $b$, I claim it is bigger than every $a$, and the reason is you give me any $b$ like $b_n$ it's bigger than $a$ because, for example, $b_{52}$ is bigger than $a_{52}$. If you want to show, for instance, that $b_{52}$ is bigger than $a_{100}$, then all you have to do is appeal to the equation above and note that $a_{100}\leq b_{100}\leq b_{52}$. And we can do that for any $n$, and that is enough to conclude the proof. This is such an important concept that it is even powerful enough to prove that $\R$ is uncountable, a task you may recall took quite a bit of effort to do previously.

- **Uncountability of the reals using the nested interval theorem:** Suppose $\R$ is countable; that is, list $\R$ as a sequence: $\R=\{x_1,x_2,x_3,\ldots\}$. Se we can list out the $x_i$ on the real line in no particular order. They could be hopping around. Well, you cannot stop me from choosing an interval $I_1$ that misses $x_1$. Then we will choose another interval, $I_2$, such that $I_2$ is in $I_1$ (i.e., $I_1\supset I_2$) but $I_2$ misses both $x_1$ and $x_2$. (Clearly $I_2$ will miss $x_1$ since $I_2\subset I_1$ and $I_1$ already missed $I_2$.) We could continue this process indefinitely, where we would have a nested sequence of intervals such that each interval $I_i$ missed the real number $x_i$. However, by the nested interval theorem, the intersection of all $I_i$ is nonempty; thus, there exists a point in the intersection of all the $I_i$ that is not on the original list for $\R$, a clear contradiction to how we have constructed the intervals $I_i$. More concisely, there exists $x\in\bigcap I_n$ such that $x\not\in\R$. This concludes the proof. 

  Where's the hard work done in the proof above? In the previous proof for the uncountability of $\R$, we expended a fair amount of effort, but the above looks fairly painless. So where was the hard work done? It's in all the machinery we built up for suprema and other such facts. Next time we will prove the Heine-Borel theorem characterizing compact sets in Euclidean space.

