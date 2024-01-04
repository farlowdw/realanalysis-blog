---
title: 11 - Compact sets
hide_title: false
sidebar_label: 11 - Compact sets
description: Lecture notes by Daniel Farlow to accompany Lecture 11 from Francis Su's YouTube video series
draft: false
tags:
  - Compactness
  - Lecture 11 (Francis Su)
keywords:
  - compactness
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
        url="https://www.youtube.com/watch?v=zeVA74yivyg"
    />
</div>

## Where we left off last time

What have we been doing thus far in real analysis and what is some of the motivation for compact sets?

- **The infinite:** In dealing with our analysis of the real numbers, we are, in some sense, wrestling with the infinite. In what way are we wrestling with the infinite? What are some examples? The real numbers form an infinite set. Yes, and that was a little problematic at first because we had first of all infinitely many integers and when dealing with the construction of $\Q$ we had to deal with infinitely many pairs of numbers or numerators and denominators for fractions. And then we had this idea that there gaps still. And we wanted to fill them in somehow. That's really wrestling with the infinite. What are some other ways in which we wrestled with the infinite? Well, we had this idea that somehow there are bigger sets, that somehow the real numbers are larger than the rationals. Countable and uncountable infinite sets. Later on we are going to start talking about functions. Functions, in particular, we are often dealing with continuous functions, but what does it mean for a function to be continuous? That's really wrestling with the infinite because if we had a continuous function on a finite set then that would be rather boring. 

- **Finite sets are nice:** Why are finite sets nice? Well, they are small sets (i.e., bounded). There are only finitely many things. No better way to say it. Of course, the associated idea here is boundedness. What's another reason finite sets are nice? Well, they're closed sets in a rather trivial way since closed sets are those sets that contain all of their limit points. And finite sets have no limit points so they clearly contain all of their limit points. This will become apparent why we care about this soon. In the metric space that's the real numbers, finite sets actually contain their supremum and infimum. And if they contain their supremum\slash infimum, then we can rightfully talk about a maximum or minimum. That is, in $\R$, finite sets contain their $\sup$ and their $\inf$. (Thus, we can think about maximums and minimums.)  You give me a set of finite numbers then I can say there's a maximum and a minimum &#8212; what I mean is there's a supremum\slash infimum and it's *in* the set. Finally, another reason we like finite sets is that when doing things with finite sets, the process ends! It terminates. Okay but we're wrestling with the infinite in this course.

- **Compactness:** The idea of compactness is really about finiteness. In particular, if you have a set that is compact, then it is the next best thing to being finite. So compact sets are "the next best thing to being finite." That's a good way of thinking about compact sets. Now, when I make this definition of what it means for a set to be compact, it will not be apparent at first why any of these things are true about compact sets, but they are. Each of the things mentioned above for finite sets are also things that are true about compact sets. As the name suggests, "compact sets" are *compact*. That's sort of a way of saying they are small in some sense. 

## Definitions and compactness

What are some definitions and why is compactness an important concept? 

- **Cover (definition):** The first thing we need to do is to talk about what it means to cover a set. We are going to make a definition for an open cover of a set, and as the name suggests, what do you think one might mean by the words "open cover"? An open cover is just going to be a collection of open sets that cover a particular set. By an open cover of a set $E$ in a metric space $X$ we mean a collection $\{G_\alpha\}$ of open subsets of $X$ such that $E\subset\bigcup_\alpha G_\alpha$. Said less formally, an open cover of $E$ in $X$ is a collection of open sets $\{G_\alpha\}$ whose union contains $E$. As a note for these lectures, whenever the notation $X$ is used, it is understood that $X$ is a metric space (i.e., a set in $X$ is endowed with some metric). When drawing open sets, it is typical to draw them in a dashed fashion (i.e., you dot the boundaries of the open sets), but sometimes this is difficult to do and are thus drawn in sort of a curly or wavy way. Does the picture 

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f1.png').default} />
  </div>

  represent a cover of $E$? No! I've missed some points of $E$ clearly. So maybe we will throw in another open set to modify the picture like so:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f2.png').default} />
  </div>

  There is an open cover of $E$ now. Sometimes we just say the word *cover* because we are never going to talk about any other kind of cover. While we're at it, it makes sense to discuss the concept of a subcover. What is a subcover? A subcover would be a subcollection of $\{G_\alpha\}$ that is still a cover. So a subcover of $\{G_\alpha\}$, where we should note that when talking about a subcover you are always referencing the open cover of which it is a subcover, is a subcollection $\{G_{\alpha_\gamma}\}$, where this way of denoting the subcollection is chosen in such a way to make it clear that we are picking specific $\alpha$ since $\{G_\alpha\}$ may be possibly uncountable. So we might look at specific $\alpha$ and label them with its own subscript $\gamma$, hence the notation $\{G_{\alpha_\gamma}\}$. Later on, usually $\gamma$ will just be a finite set, but this is one way to write it. To concisely recap, a subcover of $\{G_\alpha\}$ is a subcollection $\{G_{\alpha_\gamma}\}$ that still covers $E$. Now, consider the picture

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f3.png').default} />
  </div>

  again. If I take a cover and I take the subcollection that is all the open sets, is that a subcover? Yes, it's still a subcover &#8212; it's still a cover. I haven't removed any sets. Let's thrown in another open set to modify the picture to look as follows:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f4.png').default} />
  </div>

  Would you agree that the set just thrown in, namely the bottom right circular one, is kind of extraneous? So all of the sets do indeed form a cover, but I don't need all of them. I could throw this circular set away, and the rest would be a subcover. Let's look at some examples now.

## Examples of covers, subcovers, etc.

What are some examples of covers, subcovers, and the like?

- **Example 1:** In $\R$, let's look at the set $[\frac{1}{2},1)$, the half-open interval. We claim this set has the cover $\{V_n\}$, where $V_n=(\frac{1}{n},1-\frac{1}{n})$. Maybe we start with $n=3$ and keep on going. So the claim, then, is that $\{V_n\}_{n=3}^\infty$ covers the set $[\frac{1}{2},1)$. So what does this cover look like? The first few sets are set is $(\frac{1}{3},\frac{2}{3})$. The second set is then $(\frac{1}{4},\frac{3}{4})$ and then 

  $$
  V_3=(\tfrac{1}{3},\tfrac{2}{3}),\quad
  V_4=(\tfrac{1}{4},\tfrac{3}{4}),\quad
  V_5=(\tfrac{1}{5},\tfrac{4}{5}),\quad
  V_6=(\tfrac{1}{6},\tfrac{5}{6}),
  $$

  and so on. You get ever increasing intervals. Are these open sets? Is this an open cover of the set $[\frac{1}{2},1)$? Yes. Why? We'll just say why. Is it clear that $\frac{1}{2}$ is covered? Yes, by all the sets. Is it clear that $\frac{3}{4}$ is covered? Yes, not by $V_4$ but by $V_5$. And would you agree that *any* point just to the left of 1 eventually gets covered by one of the sets? Yes. But there are lots of covers for this set. This set also has the cover $\{(0,2)\}$, where we note the importance of enclosing $(0,2)$ with braces to indicate that we have a collection even though this collection has only one element, namely the interval $(0,2)$. Is this an open cover? An aside question: Do we ever need an uncountable index set? And the answer is yes for some metric spaces, although it turns out for most of the metric spaces that we care about you could have a countable subcollection. For example, here's a cover of the real numbers. Let's take all balls centered at any possible point. That's an uncountable collection of open sets. Returning to our example involving the set $[\frac{1}{2},1)$, this set also has the cover $\{W_x\}_{x\in[\frac{1}{2},1)}$, where $W_x=N_{\frac{1}{10}}(x)$. So we have the cover $\{W_x\}_{x\in[\frac{1}{2},1)}$ here, where for every point $x$ in the set $[\frac{1}{2},1)$ I have an open ball around that point. Basically, around every point I'm taking a ball of a particular radius. So this cover just consists of a bunch of balls around points. And how many of them are there? Uncountably many, one for every one between $\frac{1}{2}$ and 1. These are all covers, yes? So one of the questions to ask is whether or not you need everything in the cover? Above we have three different covers for the same set. Do we need all these sets? So, given a cover, do we need all the sets to still cover the set? Let's consider our coverings separately.
	
    1. For $\{V_n\}_{n=3}^\infty$, do we need all of the sets? No. We could throw some of the open sets away. So $\{V_n\}_{n=3}^\infty$ has a subcover (many subcovers actually). How about $\{V_n\}_{n=122}^\infty$? Does this still cover the set? 
    2. What about the cover $\{(1,2)\}$? We can't throw away the only element. So the only subcover for $\{(1,2)\}$ is the open cover itself. 
    3. What about the cover $\{W_x\}_{x\in[\frac{1}{2},1)}$? Can I throw away some of these sets? How many can we throw away? So $\{W_x\}$ has a subcover $\{W_{5/10},W_{6/10},W_{7/10},W_{8/10},W_{9/10}\}$. Would you agree this is a subcover? Not only is it a subcover but there are only finitely many elements so it is a finite subcover. 

  So why do we care so much about open covers? That will become apparent shortly.

- **Example 2:** How about the set $[0,1]$ in $\R$ (note that by mentioning $\R$ we are declaring the metric space from which to choose our open sets)? Would you agree it has a cover $\{V_n\}\cup\{W_0,W_1\}$, where $W_0$ and $W_1$ basically cover the endpoints ($W_0$ goes from $-1/10$ to $1/10$ while $W_1$ goes from $9/10$ to $11/10$. And all the other sets look like before. Would you agree $\{V_n\}\cup\{W_0,W_1\}$ is a cover for $[0,1]$? Yes. Do we need all the sets to make the cover? No. Does it have a subcover that's proper? Which ones can we throw away? To clarify, does the cover $\{V_n\}_{n=3}^\infty$ have a finite subcover? No, because no matter how far you go you won't, with only finitely many sets, you will not cover everything. If you had only finitely many sets, then there's a largest index, where the largest index might be, say, 22 million. Then $V_{\text{22 million}}$ wouldn't cover everything. It covers all the other sets so you can throw them away, but it won't cover the endpoint. So the cover $\{V_n\}_{n=3}^\infty$ does not have a finite subcover whereas the cover $\{V_n\}\cup\{W_0,W_1\}$ does. What is one? How about $\{W_0,W_1,V_{11}\}$? We are ready now to make our definition for what it means for a set to be compact. With this definition, you should ask yourself why it is saying, in some sense, that such a set is "small."

## Compactness

How do we define compactness and what is its significance?

- **Compactness (definition):** Say a set $K$ is compact in $X$ if every open cover of $K$ contains a finite subcover. So what is this saying? It's saying that, to show that a set is compact, you want to show that every open cover has a smaller subcover that is, in fact, finite. Or, said another way, to show a set is *not* compact, means there exists an open cover without no finite subcover. What are some examples? Before going through an example or two, note that the definition of a compact set is *not* saying that there is a finite cover. Many people think the definition is saying that a set is compact if there is a finite cover. This is clearly not what we are saying because every set has a finite cover. Just take the whole metric space. Isn't that an open set? 

- **Examples:** Is $[\frac{1}{2},1)$ compact? No. Because there is an open cover with no finite subcover, namely $\{V_n\}$. What else is not compact? How about $\Z$ in $\R$? I claim it is not compact which means you should show me an open cover for $\Z$ in $\R$ that has no finite subcover. Can we think of an open cover of $\Z$ with open sets (open intervals) that clearly has no finite subcover? How about covering every integer with a little interval around it? Can you argue why this has no finite subcover? If you take any one away, you can't even remove one, without destroying its covering property (taking one away would necessarily mean an integer was not covered). So $\Z$ in $\R$ is not compact. How about $[0,1]$? Does it have a finite subcover? Yes, we saw above that $\{V_n\}\cup\{W_0,W_1\}$ covers $[0,1]$ and that $\{W_0,W_1,V_{11}\}$ was a finite subcover of $\{V_n\}\cup\{W_0,W_1\}$. Does this mean $[0,1]$ is compact? Not necessarily! Because we need to show that *every* open cover has a finite subcover. So $[0,1]$ may be compact, but I'd need to check every open cover. (Or prove a theorem, which is what we will do later.) It's worth mentioning that $[\frac{1}{2},1)$ is not compact because there is an open cover with no finite subcover, namely $\{V_n\}$, but that doesn't mean that there couldn't be some open cover with a finite subcover like $\{W_{5/10},W_{6/10},W_{7/10},W_{8/10},W_{9/10}\}$. So to show a set is not compact, it is generally a lot easier because you just have to exhibit an open covering with no finite subcover. 

- **Finite sets are compact:** So here's a uestion. We said something about compact sets being somehow the next best thing to being finite. It sure would be nice if finite sets were compact. Are finite sets compact? Yes. So here's a theorem: Finite sets are compact. This is actually an example where you can show every open cover has a finite subcover. Consider some open cover $\{G_\alpha\}$. Consider the following picture that has several open sets that cover the finite set:

  <div align='center' className='centeredImageDiv'>
    <img width='250px' src={require('@site/static/img/lecture-images/L11-f5.png').default} />
  </div>

  Can someone give me an argument why an open cover for a finite set has a finite subcover? Every point could be in lots of sets, but just pick one. And you can pick one for each point. The set would then be covered, and such a covering is both a subcover and finite. So how would we write that? Consider an open cover $\{G_\alpha\}$ covering $x_1,\ldots,x_N$. For all $x_i$, choose $G_{\alpha_i}$ (that is, choose *one* $G_\alpha$) that contains $x_i$, where $i$ is the same index. Then $\{G_{\alpha_i}\}_{i=1}^N$ covers the set. What else is compact? If we can prove some things, it might give us some intuition as to what compact sets look like. We really have no intuition yet.

- **Compact sets are bounded:** To show that compact sets are bounded, we first have to say what we mean by bounded. So remember we are in some metric space. Let's say a set $K$ is bounded in $X$ if there is some ball that contains the entire set; that is, $K$ is bounded if $K\subset N_r(x)$ for some $x\in X$. (The book's definition says that $E$ is bounded if there is a real number $M$ and a point $q\in X$ such that $d(p,q)<M$ for all $p\in E$.) Consider the picture

  <div align='center' className='centeredImageDiv'>
    <img width='250px' src={require('@site/static/img/lecture-images/L11-f6.png').default} />
  </div>

  where we have a set $K$ and the ball doesn't have to be centered around any particular point in $K$ &#8212; it could just be in $X$. This is a bounded set because it's in a big enough ball. Now let's show, in fact, that compact sets can't be too big. They're small. They're bounded. And this is somehow related to being finite, the next best thing to being finite. Okay so why is it that a compact set is bounded? Well, what do we have? What is the hypothesis now? Let's give the set a name. So here's a proof. Let $K$ be compact. Then every open cover has a finite subcover. So we can pick *any* open cover we want and use the fact that it will have a finite subcover. So let's pick a good open cover that will help us show that $K$ is bounded. What can we do to show that $K$ is bounded? Can we think of some open balls that cover $K$ that might be helpful? In some sense, I want to show that the distance between two points in $K$ can't be too big. So it might be helpful to cover the set $K$ with a bunch of balls of what radius? Pick one. What if we had balls of radius 1? So let's draw another picture:

  <div align='center' className='centeredImageDiv'>
    <img width='450px' src={require('@site/static/img/lecture-images/L11-f7.png').default} />
  </div>

  If I had a bunch of balls of radius 1, then that's a lot of them, and I could use the trick we used with $\{W_x\}_{x\in[\frac{1}{2},1)}$. What's compactness going to give you? A cover by finitely many balls of radius 1! Now why would that help you show $K$ is bounded if there are just finitely many balls of radius 1? Suppose there were now just 17 balls of radius 1 that covered $K$. We now claim a ball of radius $17+1=18$ would cover everything or something like that. So finiteness is now playing a big role here. Because this cover has a finite number of balls that form a subcover, *nothing* can be more than 17 balls away. And these are all radius 1. So let's write this down.

  Let $K$ be compact. Let $B(x)=N_1(x)$, the ball of radius 1. Then $\{B(x)\}_{x\in K}$ is an open cover of $K$, which is just like the example with $W_x=N_{\frac{1}{10}}$ earlier, where we just had a ball around every single point with a particular radius, namely $\frac{1}{10}$. By compactness of $K$, there exists a finite subcover $\{B(x_i)\}_{i=1}^N$. What should I say now? If there were 17 sets now that covered this thing, then what's the bound? What's the center of the ball that we would use? Well, how about any point? How far apart will the other points be from one of the centers if there were 17 balls? Well, at most 17. Another way &#8212; would you agree that the set of all pairwise distances is finite? Before moving on, there is a fairly significant objection to the picture we have been working off of thus far: What if $K$ is disconnected and we had 17 balls that covered $K$? That's one of the problems with the crude picture we've been working with thus far:

  <div align='center' className='centeredImageDiv'>
    <img width='450px' src={require('@site/static/img/lecture-images/L11-f8.png').default} />
  </div>

  We can represent the case when $K$ is disconnected as follows:

  <div align='center' className='centeredImageDiv'>
    <img width='450px' src={require('@site/static/img/lecture-images/L11-f9.png').default} />
  </div>

  As indicated above, if there were 17 balls, then you might not have any relationship between some of them (namely the ones that are disconnected in some sense). So that is why we will work out another strategy for this proof because if you try to work out a proof where you do not take account of the fact that $K$ may be disconnected then your proof will fail for that exact reason or issue. So another way to do this is to look at all possible pairwise distances &#8212; how many such distances are there? Finitely many! So I can take the maximum (that number is achieved because we are dealing with a finite set). That maximum is the maximum distance between centers so then how much farther can any other two points be (imagine points on opposite ends of their balls)? The true maximum distance between any two points would be the maximum distance between centers in addition to two radii length, in this case 2 since we are dealing with unit balls. Let's formalize this.

  Let $R=\max_{1\leq i,j\leq N}\{d(x_i,x_j)\}$, where this maximum exists because the set $x_1,\ldots,x_N$ is finite. Then $N_{R+2}(x_1)$ contains all of $K$. To actually show that $N_{R+2}(x_1)$ contains all of $K$, you would use what? What property of metrics is going to come in handy here? The triangle inequality!

- **Recap:** So what have we done? We've defined compactness in a very curious way. We have shown that compact sets are somewhat like finite sets. Finite sets are, in fact, compact. Compact sets behave in the same way finite sets do, namely that they are bounded. The concept of compactness is an intrinsic notion of the set and it doesn't matter what metric space you are in. 

## Compactness as an intrinsic part of a set

How is compactness an intrinsic notion of a set?

- **Motivation:** We have this property of a set that we call compactness, and of course we've learned lots of other properties of sets. A set could be open. A set could be closed. One set could be dense in another set. These are all definitions that we've learned for sets in $\R^n$. But the notion of compactness is actually an intrinsic property to the set, and it doesn't matter what metric space you are in. That's different from some of the other notions. 

- **Open sets depending on what set you are in:** In $\R^1$, the set $(0,1)$ is open. But if we view this set as being embedded in $\R^2$, this set is no longer open. Not every point is an interior point. What's wrong? In $\R^1$, a neighborhood looks like an open interval, but in $\R^2$ a neighborhood looks like a whole disc doesn't it? So the particular set $(0,1)$ as a subset of $\R^2$ is no longer open. So we're looking at $(0,1)$ as a subset of $\R^2$, namely the subset $\{(a,0)\mid a\in(0,1)\}$. So openness actually depends on what set you are in. Compactness does not. Before we see that, we need to see how we relate the notions of openness in one set when it's embedded in a bigger set. 

- **Relative open sets:** Let's be very careful about what we mean by "open" now. We previously defined what it means for a set to be open, but now let's think a bit about the metric space that we're in. If we have a subset $Y$ of a metric space $X$, then would it not be reasonable to think that $Y$ is also a metric space? Yes, whatever the metric is that is being applied in $X$ can and will be applied to a subset of $X$. So we say that $Y$ inherits a metric from $X$. So if $Y\subset X$, where $X$ is a metric space, then $Y$ inherits the metric from $X$. So if we are going to define what we mean for a set to be open in $Y$ or in $X$, then we need to come back to the definition. A set is open if every point is an interior point. That was the definition we had earlier. But what does it mean to be interior? A point is interior if it has an open ball around it that's contained in that metric space. But now we have to worry about which metric space we are talking about. So let's talk about what it means to be an open ball. 

  Can you see a situation where $Y$ is a subset of $X$ where the notion of an open ball in $Y$ and an open ball in $X$ might be different? How about the following picture:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f10.png').default} />
  </div>

  The picture above is what an open ball in $X$ looks like, but what will an open ball in $Y$ look like? Above we have $N_r(x)$ in $X$, but what will $N_r(x)$ in $Y$ look like? Will the open ball be smaller? Will it have a smaller radius? No, it will not have a smaller radius, but it's going to be just the stuff inside of $Y$:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f11.png').default} />
  </div>

  So the modified picture above with the dashing is $N_r(x)$ in $Y$. The difference between the pictures should be clear. So now the question remains: What's the connection between general sets that are open, not just open balls, but general sets that are open in $Y$ as opposed to general sets that are open in $X$? So now we want to know when a set in $Y$ will be open. Can we give a criterion that would help me decide when a set is open? So here's an example. Suppose we take the following set:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f12.png').default} />
  </div>

  Is this dashed set open, where the boundary for $Y$ is included? Is this set open in $Y$? What does it mean to be open in $Y$? It means that every point is an interior point. Consider the following picture:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f13.png').default} />
  </div>

  Is the illustrated point an interior point? Yes, because it has a ball around it in $Y$ that's still open. This is the open ball around $x$ that is in $Y$. That point is an interior point. What's a point that might not be interior? A point on the edge? Consider the following picture:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f14.png').default} />
  </div>

  This added point has an open ball around it that's contained &#8212; in $Y$! Are we now convinced that the originally drawn set

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f15.png').default} />
  </div>

  is open in $Y$? Do you agree that it has neighborhoods, it's just that you forget everything outside, and what remains are all the points in $Y$ a distance $r$ from $x$. So the pictured set is, in fact, open in $Y$. Is it open in $X$? No. But is there a relationship between sets that are open in $Y$ and sets that are open in $X$? Yes, the claim is that there is, a very nice criterion in fact. And the criterion is that a set is open in $Y$ if and only if there exists a set in $X$

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f16.png').default} />
  </div>

  that is open whose intersection with $Y$ is this given set. We'll give this set a name. We'll call it $E$. Before stating the theorem, let's just make an important definition: A set $U$ is open in $Y$ ("relative to $Y$") if every point of $U$ is an interior point of $U$. Of course, the key difference here is that the notion of *interior* means using neighborhoods in $Y$, using those kinds of funny, possibly half cut off discs. This is no different from the definition we had before; we're just paying particularly close attention to what set we are living in. So the metric space matters for the concept of openness. So here's a theorem:

  > **Theorem.** Suppose $E\subset Y\subset X$. Then $E$ is open in $Y$ if and only if $E=Y\cap G$ for some $G$ open in $X$. (See the picture below.)

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f17.png').default} />
  </div>

  This is a very nice criterion because it allows us to pass between open sets in one space and open sets in a bigger space. Does this seem believable? It's an if and only if so here's a proof idea. One direction should be fairly clear. Would you agree that if you have a set $G$ then its intersection with $Y$ has got to be open in $Y$? Why? What does it mean to be open in $G$? Well, it means every point has a neighborhood around it in $X$ that's also in $G$. So in $Y$, what's the neighborhood you're going to use? The same one, but just restricted to $Y$! 

  To say something's an interior point you're referring to a particular set. So the claim is that if $x$ is interior to $G$, then it's interior to $E$ using possibly cut-off neighborhoods. That's basically using this correspondence between neighborhoods in $X$ and neighborhoods in $Y$. So the proof idea in the backwards direction uses the fact that if $N_r(x)\in G$ then $N_r(x)\cap Y$ is the neighborhood of $x\in E\subset Y$. 

  What about the forward direction? If a set is open, then that means around every point there's a neighborhood, but possibly a cut-off neighborhood, that's in $E$. Can you think of a set $G$ that would also then be open? Suppose you have a bunch of cut-off neighborhoods. What could you do with those neighborhoods? Include the stuff that it suggests! And then what will the set $G$ be? Define $G$. Union all these neighborhoods! So if I missed a part, then include it:

  <div align='center' className='centeredImageDiv'>
    <img width='350px' src={require('@site/static/img/lecture-images/L11-f18.png').default} />
  </div>

  So then why is the union of a bunch of open balls open? Well, by definition, because every point now has a neighborhood that shows it's interior. So if $E$ is open in $Y$ then every point $x$ has a neighborhood $N_{r_x}(x)\subset Y\cap E$. Then $\bigcup_{x\in E} N_{r_x}(x)$ in $X$ is open. Call it $G$. Then we are done.

  The upshot of all of this is that I can tell when a set is open in a smaller space just by seeing if it's the intersection of something from the bigger space that's also open. What we want to do next time is show that if a set $K$ is compact in $Y$, then it's equivalent to saying that $K$ is compact in $X$. So compactness really doesn't depend on the metric space that you're in (as opposed to openness which clearly does). To say that a set is small really does not depend on the metric space that you're in. And then when want to show some other analogies with finite sets.

