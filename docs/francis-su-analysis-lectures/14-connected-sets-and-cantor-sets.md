---
title: 14 - Connected sets and Cantor sets
hide_title: false
sidebar_label: 14 - Connected sets and cantor sets
description: Lecture notes by Daniel Farlow to accompany Lecture 14 from Francis Su's YouTube video series
draft: false
tags:
  - Cantor Set
  - Connected Sets
  - Lecture 14 (Francis Su)
keywords:
  - cantor set
  - connected sets
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
        url="https://www.youtube.com/watch?v=dazO9UoKmyA"
    />
</div>

## Where we left off last time

Let's recall some of the results and ideas from last time before discussing the Cantor set and connected sets.

- **Theorem due to Cantor:** Let $\{K_\alpha\}$ be a collection of compact subsets of some metric space $X$. If every finite subcollection of $\{K_\alpha\}$ has nonempty intersection, then the set $\{K_\alpha\}$ is said to have the finite intersection property or FIP; that is, if $\bigcap_{\alpha} K_\alpha\neq\emptyset$, then we say that $\{K_\alpha\}$ has FIP. 

- **Corollary to Cantor's theorem:** Suppose we have a sequence $\{K_n\}$ of compact sets that are nested. Then $\bigcap_{n=1}^\infty K_n$ is nonempty. This was the generalization of the nested interval theorem.

- **Characterization of compact metric spaces or compact spaces using closed sets:** The usual definition of compactness involves open covers, but there is a characterization of compact sets that you could take to be the definition, if you wanted, that talks about compactness and closed sets. That's the following characterization which is a theorem:

  > **Theorem.** The space $X$ is compact if and only if every collection of closed sets $\{D_\alpha\}$ satisfies the finite intersection property (here the finite intersection property is saying that if every finite subcollection has nonempty intersection, then $\bigcap_{\alpha} D_\alpha\neq\emptyset$.).

  What does this mean? If we have a collection of closed sets $\{D_\alpha\}$ that has the finite intersection property, and if that's true for any collection, then $X$ is compact and vice-versa. Let's see why this is true.

- **Forward direction (proof):** This direction is pretty trivial based on what we've shown already. Why is that? Well, what are we going to choose to be our compact subsets of a metric space? We're going to assume that $X$ itself is compact, and maybe we'd like to use Cantor's theorem. So you give me a collection of closed sets, and I want to show that it satisfies the finite intersection property. Then what sets will we use in Cantor's theorem if we want to apply that theorem? 

  Given closed sets $\{D_\alpha\}$, these are closed subsets of a compact set $X$ so they are compact. So apply previous theorem. 

- **Backward direction (proof):** Here we want to show that any collection of closed sets $\{D_\alpha\}$ that satisfies the finite intersection property implies that $X$ is compact. Let's just talk about how the proof might go. I want to show that every cover of $X$ has a finite subcover. So, given an open cover, can we use our assumption(s) effectively? So given an open cover, are there any natural closed sets to look at? Look at the complements! The complements are a bunch of closed sets.

  Another proof strategy would be proof by contraposition, where we would assume that $X$ was *not* compact and try to show that there exists a collection of closed sets $\{D_\alpha\}$ that did not satisfy the finite intersection property. How might this proof start? Well, by assumption, $X$ is not compact. Thus, there must exist an open cover with no finite subcover. We could start with that. What would that mean? Look at the complements which are closed, and if we have a cover, then the complements should basically have an empty intersection.

  What you see through all of this is that there is a way to deal with compactness just using closed sets.

- **Lack of characterization of compactness using closed covers:** There isn't a closed cover characterization of compactness, and that should make sense to us why? Well, points are closed in metric spaces. So, if you were to demand a space to have the property that every closed cover has a finite subcover, then you'd really just be demanding that the space is finite, which is a bit too strong of a condition. It's just saying something that you already want. Then if you say well let's just rule out points, saying you don't allow those in our closed cover characterization of compactness, then what are you doing? You're really taking a point and allowing a little interior ball around it, so you might as well use open covers. So you can't really expect to have a closed cover characterization, but there is a finite intersection property characterization of compactness that uses closed sets.

## The Cantor set and its properties

What is the Cantor set and what are some of its properties?

- **Constructing the Cantor set:** Start with the interval $K_0=[0,1]$. Now construct $K_1$ by removing the middle third of $K_0$; that is, $K_1=[0,\frac{1}{3}]\cup[\frac{2}{3},1]$. Now remove the middle thirds of each interval again to make

  $$
  K_2=[0,\tfrac{1}{9}]\cup[\tfrac{2}{9},\tfrac{3}{9}]\cup[\tfrac{6}{9},\tfrac{7}{9}]\cup[\tfrac{8}{9},1].
  $$ 

  And continue on in this way to get a set that looks roughly as follows through $K_4$:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f1.png').default} />
	</div>

  What can we say about each of the sets $K_i$ above? How many intervals does $K_n$ have? It has $2^n$ intervals, but finitely many in any case. Are these intervals or sets closed? Yes, they are the finite union of intervals that are closed. Are these sets compact. Yes, because they are closed subsets of a compact set which we know the interval $[0,1]$ to be. So $K_i$ are closed, compact, and what else? They're not open because if you take a point at the endpoint, then it's not an interior point. But what are the sets $K_i$ in relation to each other? Nested! So their intersection is nonempty! Can you see some points that must be in every set? How about 0, 1, $\frac{1}{3}$, $\frac{1}{9}$, etc. So endpoints of intervals are definitely still in each $K_i$. 

  We will denote the cantor set as $C=\bigcap_{i=0}^\infty K_i$. This construction was made over 100 years ago, but with the advent of computers and computation, such sets actually pop up in very natural ways. The set $C$ has a very fractal-like structure. If you've ever seen pictures of so-called strange attractors in physics, they look very much like Cantor sets. Of trajectories. So what's so special about the set $C$? Here's a question: how many points are in such a set? There are infinitely many. We can see that fairly clearly. Are the points of $C$ only endpoints or are there any other points? Let's find out.

  What else can we say about $C$? Are there any intervals in it? No? Are there any interior points? Why not? If $C$ had an interior point, then what would go wrong? Well, eventually any such interval gets cut, so $C$ doesn't have any interior points. If you think there are only endpoints of intervals that make up $C$, then how many points are there? It's infinite sure. Countably many actually because it's the countable union of a finite number of endpoints for intervals. Here's a summary of some of the things we've just noted:

  + **Closure:** The set $C=\bigcap_{i=0}^\infty K_i$ is closed. Why? Because $C$ is the intersection of closed sets. 
  + **Perfect:** The set $C$ is perfect, which means $C$ is closed, and every point of $C$ is a limit point of $C$. What does that mean? No point is isolated. Can we think of any other perfect sets besides $C$? How about the closed interval? All of $\R$ is a perfect set. There are lots of perfect sets, but $C$ is a special perfect set because it's perfect and it has no interior. We haven't justified that each point of $C$ is a limit point, but we claim that this fact follows from the following insight.
  + **Ternary expansion:** The set $C$ consists of real numbers that have a certain property. When you write the real number in ternary, then its ternary expansion will only have 0's or 2's in its expansion. What does this mean? When we write a number in ternary, instead of using powers of 10, we will use powers of 3. So in ternary, we use three digits, namely 0, 1, and 2. It's probably quite clear that all of the numbers in the interval $[0,\frac{1}{3}]$ begin with 0 (we'll get to $\frac{1}{3}$ itself in a moment). In other words, each number in the first third interval of $K_0$ is of the form

    $$
    \frac{0}{3}+\text{something}.
    $$

    For the middle third of $K_0$, we'd have each number in this interval of the form

    $$
    \frac{1}{3}+\text{something},
    $$

    and finally for the last third of $K_0$, we'd have each number in this interval of the form

    $$
    \frac{2}{3}+\text{something}.
    $$

    We could continue this pattern, and if we wanted a point in, say, the fourth interval of $K_3$, namely some number in the interval $[\frac{8}{27},\frac{9}{27}]$, then we claim that all of the numbers in the interval $[\frac{8}{27},\frac{9}{27}]$ begin with the ternary expansion $.022\ldots$. Here's a picture:

    <div align='center' className='centeredImageDiv'>
      <img width='600px' src={require('@site/static/img/lecture-images/L14-f2.png').default} />
    </div>

    So ternary looks something like $\displaystyle\sum_{k=-\infty}^\infty a_k3^k$, where each number is written as a power of 3. So we would have numbers like

    $$
    \ldots a_2a_1a_0.a_{-1}a_{-2}\ldots
    $$

    For decimals, we're just considering everything to the right of $a_0$, of course. Now, what about $\frac{1}{3}$?
		
      * **Example 1:** We claim $\frac{1}{3}$ can be written in ternary using only 0's and 1's. How? We would have

        $$
        \frac{1}{3}=0.0222\overline{2},
        $$

        an analogous situation to how $0.999\overline{9}=1$ for decimal expansions. So the representation for $\frac{1}{3}$ is not unique because it could also be written $1.000\overline{0}$. Now, the only ones in decimal that are not unique are the ones that end in all 0s or all 9s because one could be turned into the other. The only ones in ternary that are not unique are the ones that end in all 0s or all 2s because one could similarly be turned into the other. 
	
      * **Example 2:** How many points are in the Cantor set? Uncountably many! Why? It's exactly the same argument as Cantor's diagonalization argument. What this shows us is that not only is every point of $C$ a limit point but that $C$ is uncountable. It also shows that $C$ has non endpoints of $K_i$ endpoints. 
	
      * **Example 3:** What's a point in $C$ that is not an endpoint? How about, say, $0.020202\ldots$? This is not an endpoint is it? What are the only endpoints? The endpoints are the numbers in ternary that end in either all 0 all 2's. So $0.020202\ldots$ is certainly never an endpoint. 
	
      * **Example 4:** Are there any interior points of $C$? No. What would it mean to be an interior point? Well, if there were an interval around such a point, then some of those points would have to have 1's in their ternary expansion.
	
      * **Example 5:** Is every point of $C$ a limit point? Yes. Why? Is it not the case that for any number that you give me I can write it as a limit of a bunch of numbers that have only 0's or 2's in their expansion? For instance, the number $0.020202\ldots$ is the limit of

        $$
        0.0,\quad
        0.02,\quad
        0.020,\quad
        0.0202,\ldots .
        $$

        Yes, every point is a limit point. What if our limit point has a finite ternary expansion? So how about 0.02? We could write 0.02 as the limit of

        $$
        0.022,\quad
        0.0202,\quad
        0.02002, \ldots.
        $$

        So why do we include the endpoints for the intervals in our construction? We'd have a much harder time showing lots of things. So, for instance, 
	
      * **Example 6:** Cantor sets are totally disconnected, but now we have to define what it means for a set to be connected. But the basic idea is that if you give me two points, then I can find a disconnection that will separate those two points.

	    * **Example 7:** How long is the Cantor set? What do we mean by that? What does it mean to define the length of a set for sets that are really strange like $C$? One way you could define the length of a set is to ask what the lengths are of possible intervals that cover the set. And then take the infimum of the sums of those lengths. We've already shown that closed intervals \ldots you can only have countably many disjoint intervals \ldots so you can talk about the sums of the lengths of closed intervals that cover a set. That has a certain length. Then do so for all such closed intervals that cover a particular set and take their infimum. Then you could use that to define the notion of length for a crazy set like $C$. What's interesting for this Cantor set is that it has length 0. We say $C$ has measure 0. Basically, for any $\epsilon>0$, the set $C$ can be covered by intervals of total length less than $\epsilon$. So we have uncountably many points but length 0!

- **Homework note:** This note concerns problem 26 in <BibRef id='WR1976' pages='p. 45'></BibRef>, where this problem introduces a concept. This problem talks about a base for a metric space. So let's try to get some intuition as to why we care about a base. Actually, the term "base" is more particular to Rudin; nowadays, the term "basis" is more common than "base." What is a basis for a vector space? There are many ways to describe it, but the operative concept is that a basis is what you build other things from. So you can build any vector as a combination of basis vectors. Well, this is analogously the same concept here. What is a base or basis for the open sets of a metric space (or a topology in topology)? If you give me *any* open set $U$ and any point $x\in U$, then a base is some collection $\{V_\alpha\}$, where we don't really care which collection it is, but it has the following property: You give me any open $U$ and any point $x\in U$, then what's true about a basis is that there's a point of the basis that surrounds $x$ that's inside of $U$. Consider the following picture to make this clearer:

	<div align='center' className='centeredImageDiv'>
		<img width='200px' src={require('@site/static/img/lecture-images/L14-f3.png').default} />
	</div>

  Saying the above more precisely, for every $x\in U$, there exists $V_\alpha$ such that $x\in V_\alpha\subset U$. What's the big deal here? The big deal here is that I can do this for every point in $U$. So $U$ can be written as the union of a bunch of basis elements just by taking the union $V_\alpha$ for every point $x$. So every open set is the union of base elements. This problem in Rudin asks you to explore this concept. The reason is really that there are all these concepts that have to do with the size of a set. So if you have a metric space where the base is countable, then it's small in some sense. If you have a metric space that has a countable dense subset (i.e., separable), then it's small in some sense. And it turns out that if you have a metric space that is compact, then it has a countable base. A compact metric space has a countable dense subset. So these notions of smallness somehow coincide, and you're given other tools for showing that a space is not compact. If you know that a compact metric space has a countable base, and you find a metric space that doesn't, then it can't be compact. Other strategies for showing not compactness!

  So the idea of a basis is basically you can build up all open sets from just $V$'s. One basis for a metric space is just to look at balls. That's a basis. We've already seen that. But you could also take other things to be basis elements. So that's a word about bases.

## Connected sets

 What are connected sets and what is their utility?

- **Motivation:** What does it mean for a set to be connected? Intuitively, does the set

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f4.png').default} />
	</div>

  appear to be connected? Sure. But does the set 

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f5.png').default} />
	</div>

  also appear to be connected? Probably not. But how do we make that feeling or notion precise? It turns out it's a lot easier to say what's not connected than what is. What's true about the set 

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f6.png').default} />
	</div>

  not being connected? I can somehow separate one from the other. 

- **Student consideration:** We could cover the seemingly not connected sets with disjoint open sets: 

  <div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f7.png').default} />
	</div>

  So we have two disjoint open sets that seem to separate the two allegedly disconnected sets. And that would rule out the following picture, where we cut the original seemingly connected set into two sets, $A$ and $B$, where $A$ contains the boundary but $B$ does not (indicated by the slight dashed line):

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f8.png').default} />
	</div>

  We could certainly cut such a set into two pieces, but we wouldn't want to call the sets $A$ and $B$ separated either, and the suggested criterion would prevent that. You can't put an open ball around $B$ and an open ball around $A$ without some overlap; that is, the balls would touch. The suggested criterion is a good topological definition for separated sets. The book uses a different notion which is equivalent, and the equivalent concept is as follows. Consider the following picture:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f9.png').default} />
	</div>

  We will call the sets $A$ and $B$ above separated if no point of $A$ is a limit point of $B$ and vice-versa. This would not be true for the picture 

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f10.png').default} />
	</div>

  because is it not true that some points of $A$ are limit points of $B$, especially if we go from the $B$ side toward the boundary? Consider the following picture:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f11.png').default} />
	</div>

  So we have the concept of what it means to be separated to prevent this sort of scenario. 

  Precisely, we say $A,B$ in $X$ are *separated* if *both* $A\cap\overline{B}$ and $\overline{A}\cap B$ are empty, where recall that $\overline{B}$ denotes the closure of the set $B$. (This is just precisely communicating what we just said, namely that no point of one is a limit point of the other.) This is what it means for two sets to be separated. Now we can say what it means to be connected. 

- **Connected:** We say $E$ is connected if $E$ is not a union of two nonempty separated sets. If we have two separated sets, then we call that a separation. So if you cannot find a separation of $E$, then $E$ is connected. So the pictures above give a clue as to what that means. How about an example in $\R^2$?

- **An example concerning connectedness:** In $\R^2$, let's look at the set of all rational points $E$; that is, $E=\{(x,y) \mid x,y\in\Q\}$. Is $E$ connected or not? It might look something like as follows:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f12.png').default} />
	</div>

  Is this set connected? No? If you say the answer is no, then you have to give me a separation. Find two sets none of whose closures intersect the other. The line $y=x$ would not work to split $E$ into two sets $A$ and $B$ because a lot of points with rational coordinates lie on that line. We want the separation to be one whose union is the whole thing. Something like making two sets such that one set is the set of all points $\leq y$ and the other set $> y$, it turns out our desired separation is not true because their closures include the diagonal. 

  What about looking at the line $x=\pi$? Clearly this line has no points of $E$ on it. We can let the dashed line $x=\pi$ partition $E$ into two sets, $A$ and $B$, where $A$ is the set of all points to the left of $x=\pi$ and $B$ is the set of all points to the right of $x=\pi$: 

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f13.png').default} />
	</div>

  We then have $A\cup B=E$, as desired, and can we say why $\overline{A}$ does not intersect $B$? Any point on the right side of the line $x=\pi$ (i.e., a point in $B$) cannot be a limit point of a point of the left side (i.e., of $A$) because the point on the right has a ball around it that completely avoids the line $x=\pi$. If $A$ has any limit points, then they would be *on* the line $x=\pi$, but they will not be over it. So the limit points of both sides can actually intersect, but here we only demand that one set does not intersect the closure of the other; that is, we must have that $A\cap\overline{B}$ and $\overline{A}\cap B$ are empty. Return to the following picture

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f14.png').default} />
	</div>

  what this means is that you can actually allow the open sets to overlap, but they cannot do so for points in $E$. So the characterization above is true when you think of $E$ and you use use the relative topology on $E$; that is, you think of $E$ as the whole space. This brings up another definition that may be useful that is not in <BibRef id='WR1976' pages=''></BibRef>. 
- **Relative connection:** The set $E$ is connected in the relative sense (i.e., we are thinking of $E$ as its own space) if $E$ is not the union of two relatively nonempty nor trivial (i.e., "the whole thing" \ldots otherwise the other one would be empty) open sets in $E$. If $E$ were the union of two open sets in $E$, then what would the complement have to be? The other set. And it's closed. So another way to say it is that $E$ is connected if $E$ is not the union of two relatively nonempty nor trivial closed sets in $E$. In sum, two sets covered by open sets in the whole space $E$ are automatically separated in $E$. So if we just restrict ourselves to $E$, the fact that both sets are open means that they're also both closed, and therefore they're both clopen in $E$. And therefore the closure of a set in $E$ is just itself, and so it well never intersect the other set. So this is all taking place in $E$ in a relative sense. For the most part, we're not using these definitions, but it's good for culture. You'll encounter this in topology. 

  But if you're viewing $E$ as being embedded in a larger space, then you have to use the definition furnished in <BibRef id='WR1976' pages='p. 42'></BibRef>, namely that a set $E\subset X$ is said to be connected if $E$ is not the union of two nonempty separate sets.

- **Examples of connected sets:** What's an example of a connected set? Is the real line connected? Can we show that? Let's maybe show something a little smaller. How about the set $[a,b]$? Yes, the interval $[a,b]$ is connected. Let's prove this. To show something is connected, it will generally be easiest to use a proof by contradiction. Because if a set is not connected then there exists a separation, and you can work with that. 

  Suppose $[a,b]$ is not connected. Then there exists a separation $A$ and $B$, with $a\in A$. Maybe $A$ contains several different pieces, and $B$ contains several different pieces as well:

	<div align='center' className='centeredImageDiv'>
		<img width='300px' src={require('@site/static/img/lecture-images/L14-f15.png').default} />
	</div>

  The set $A$ could also contain the endpoint $b$. Although the picture may look like it, we don't mean that $b$ is necessarily contained in $B$. So what's wrong with this picture? We're trying to get a contradiction. What's true? Well, we have the $\overline{A}\cap B=\emptyset$ and $\overline{B}\cap A=\emptyset$. So we have to find a contradiction in the picture. Where would be a good place to start? Possibly some endpoints of intervals. How about the rightmost point of $A$ also known as the supremum of $A$. Let $s=\sup A$. Then $s\in\overline{A}$ because $s$ is either in the set or it's a limit point (i.e., approached by points of $A$). So we must have $s\in A$ or if it's not, then anything smaller must not be an upper bound so there has to be a point very close to the supremum. So if $s\in\overline{A}$, then $s\not\in B$. So we must have $s\in A$. But if $s\in A$, then $s\not\in\overline{B}$ by definition of separation. So if $s\not\in\overline{B}$, then there exists an interval $(s-\epsilon,s+\epsilon)$ containing no points of $B$. But $A$ and $B$ are the whole set $[0,1]$. So the interval $(s-\epsilon,s+\epsilon)$ must be all in $A$. But why is that a contradiction? Because $s=\sup A$; hence, for any $\epsilon>0$, it could not be the case that $(s-\epsilon,s+\epsilon)$ is *all* in $A$. 

  But what if $\sup A=b$? We would not get our contradiction anymore because there isn't anything beyond $s$. So what could we do? We could use the infimum of $B$. This proof really could have probably been made a lot easier by just looking at the infimum of $B$ or by starting with the set that doesn't contain $b$.
