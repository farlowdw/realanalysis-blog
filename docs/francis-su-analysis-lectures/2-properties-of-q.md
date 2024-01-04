---
title: 2 - Properties of Q
hide_title: false
sidebar_label: 2 - Properties of Q
description: Lecture notes by Daniel Farlow to accompany Lecture 2 from Francis Su's YouTube video series
draft: false
tags:
  - Rational Numbers
  - Arithmetic Structure
  - Ordered Field
  - Lecture 2 (Francis Su)
keywords:
  - rational numbers
  - arithmetic structure
  - ordered field
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
        url="https://www.youtube.com/watch?v=gTgkrVATzmk"
    />
</div>

## Summary

- We defined sets, relations, and equivalence relations.
- We defined $\Q$ as a collection of equivalence classes:

  $$
  \Q=\{\tfrac{p}{q} : q\neq0\},
  $$

  where $\frac{p}{q}$ is the class of ordered pairs $(p,q)$ such that $(p,q)\sim(m,n)$ if $pn=qm$ and $q,n\neq0$.

- Another idea you can define using the notion of a relation is that of a function (something that will be used in more detail later). The idea of an equivalence relation is basically a way of grouping together objects in a set that you want to consider as being equivalent. And so when we defined the rational numbers, we defined them as equivalence classes of certain objects, and those objects are named by these symbols "$\frac{p}{q}$," for instance. But the way you should think about them formally is as an object that represents a whole class of things. The first example of that might be the class

  $$
  \frac{1}{2}=\{(1,2),(2,4),(3,6),\ldots\}.
  $$

  Of course, all of these ordered pairs represent the same thing. You grew up thinking you could call this class $\frac{1}{2}$, $\frac{2}{4}$, $\frac{3}{6}$ and so on &#8212; these are all the same thing.  

  The *relation* is the usual cross-ratio you are used to thinking about (i.e., $\frac{p}{q}=\frac{m}{n}$ provided that $pn=qm$). Recall that this relation is an *equivalence relation*; that is, this relation is reflexive, symmetric, and transitive. 

-  We ended last time by constructing the rationals as a bunch of classes.

## Arithmetic structure on Q

Today we want to talk about the arithmetic structure of the rationals; that is, how do we define an arithmetic structure $(+,\times)$ on $\Q$? And in what sense does $\Q$ extend $\Z$? Our plan, then, is to talk about properties of $\Q$. In particular, we want to talk about its *arithmetic* and *order*, and properties, and we'll see that that leads into a discussion about the algebraic structure of $\Q$ which is naturally a field.

- **Addition:** A natural first question is what we mean by *addition* of rational numbers. To set the stage a little bit, it's helpful to be reminded of the fact that all we have right now, as we've defined the rationals (which is our "universal set"), is a bunch of classes, and we will represent them as fractions instead of ordered pairs:

  <div align='center' className='centeredImageDiv'>
    <img width='800px' src={require('@site/static/img/lecture-images/L2-f1.png').default} />
  </div>

  In the left-hand figure above, we have simply drawn a few equivalence class representatives. In the right-hand figure above, we have grouped the fractions in such a way that equivalent ones appear in the same partition or bubble. (This may be a good time to talk about the relationship between equivalence relations and partitions.)

  Now, how are we going to *define* addition? It is important to note that we have agency in this matter. No matter what we choose, however, addition should be well-defined (i.e., unambiguous). In some cases, arithmetic operations for some mathematical objects may seem unnatural (e.g., multiplication of matrices). There should be some guiding *motivation* behind our definitions. So what might it mean to add infinite series exactly? Or multiply them? You get the idea.

  In this case, we essentially want to add two classes together (recall that fractions are equivalence classes). What should that mean? What does it mean to add one class (i.e., a fraction) to another class (i.e., another fraction)? What would that mean? Let's take two stabs at it, one that is no good and another that leads to a desirable definition.

  + **Definition (bad):** Let's define the addition of two rational numbers $\frac{a}{b}$ and $\frac{c}{d}$ as
  
    $$
    \frac{a}{b}+\frac{c}{d}=\frac{a+c}{b+d}.
    $$

    Why is this not a good definition? Besides the fact that it seems to be somewhat meaningless (another issue worth addressing) it has a more basic problem &#8212; the definition is not [*well-defined*](http://mathworld.wolfram.com/Well-Defined.html). For example, if we are instructed to add the fraction $\frac{1}{2}$ to the fraction $\frac{1}{3}$, then we will have the following according to our rule:

    $$
    \frac{1}{2}+\frac{1}{3}=\frac{1+1}{2+3}=\frac{2}{5}.
    $$

    Of course, $\frac{1}{2}$ is also equivalent to $\frac{2}{4}$, and we can try to rewrite the above with this substitution (with the hope being that we will obtain a consistent answer of $\frac{2}{5}$):

    $$
    \frac{2}{4}+\frac{1}{3}=\frac{2+1}{4+3}=\frac{3}{7}.
    $$

    This is clearly a problem. Anytime you are dealing with an object that is defined in terms of classes, the definitions you use should not depend on the representatives you pick.

    Another example might be equivalence classes of college students. One way to define an equivalence relation is to look at all the freshmen, sophomores, juniors, and seniors. Class by class, and there are four classes, and these are equivalence classes. I want it to be the case that anytime I define something in terms of freshmen, sophomores, juniors, and seniors (i.e., the equivalence classes) that the answer should not depend on the person chosen (i.e., the representative). I might ask a question about college students. I might ask how many classes a student has taken. And the answer might depend on which class you're in but it shouldn't depend on which person you pick in the class as a representative. Of course, that particular question is not well-defined for the equivalence classes of college students (in the freshman class alone, many people take a wide variety of classes ranging from, possibly, as few as 1 to as many as, say, 7 &#8212; regardless, the result will depend on a particular representative of the class instead of being true for *any* representative of the class as a whole). What is a question whose answer is well-defined for the classes of students? Perhaps, "What year will you graduate?" This may be cause for concern for some, but for the most part what year you're predicted to graduate has a well-defined answer. We want the same thing for our definition of addition of rational numbers. In this sense, the definition of addition we proposed above is not well-defined and thus not useful. What we want is a notion of addition that does not depend on the representatives chosen. We want addition of classes to be well-defined.
		
  + **Definition (another bad one):** Let's now define the addition of two rational numbers $\frac{a}{b}$ and $\frac{c}{d}$ as

    $$
    \frac{a}{b}+\frac{c}{d}=\frac{0}{1}.
    $$

    Is this definition well-defined? Yes! It clearly does not depend on what class representatives are used &#8212; it doesn't even depend on what classes are used! But it's completely boring and meaningless. Worthless you might say. So let's give it another go.
	
  + **Definition (good):** Let's now define the addition of two rational numbers $\frac{a}{b}$ and $\frac{c}{d}$ as

    $$
    \frac{a}{b}+\frac{c}{d}=\frac{ad+bc}{bd}.
    $$

    What would we have to do in order to show that this definition is well-defined? We must show that if $(a,b)\sim(a',b')$ and $(c,d)\sim(c',d')$, then $(ad+bc,bd)\sim(a'd'+b'c',b'd')$.
	
- **Showing that addition of rationals is well-defined:** We must show that if $(a,b)\sim(a',b')$ and $(c,d)\sim(c',d')$, then $(ad+bc,bd)\sim(a'd'+b'c',b'd')$. Consider the following:

  1. Given $(a,b)\sim(a',b')$, we have $ab'=ba'$, where $b,b'\neq0$.
	2. Given $(c,d)\sim(c',d')$, we have $cd'=dc'$, where $d,d'\neq0$.
	3. We want to show that $(ad+bc,bd)\sim(a'd'+b'c',b'd')$. By the definition of $\sim$, this means we want to show that $(ad+bc)b'd'=bd(a'd'+b'c')$.
	4. Consider the following:

    $$
    \begin{align*}
    (ad+bc)b'd'
    &= adb'd'+bcb'd' & \text{(distributivity)}\\[0.5em]
    &= ab'dd'+cd'bb' & \text{(associativity and commutativity in $\Z$)}\\[0.5em]
    &= ba'dd'+dc'bb' & \text{(substitution via given information)}\\[0.5em]
    &= bda'd'+bdb'c' & \text{(associativity and commutativity in $\Z$)}\\[0.5em]
    &= bd(a'd'+b'c'). & \text{(distributivity)}
    \end{align*}
    $$

    From the above, we see that the addition of rational numbers is well-defined.
	
- **Multiplication:** By now, of course, you know that we are trying to create arithmetic with some meaning, and you've already learned some of the meaning of multiplication so it makes sense to do this the way you learned in grade school. So if I want to multiply two rational numbers $\frac{a}{b}$ and $\frac{c}{d}$, then I can define the product to be

  $$
  \frac{a}{b}\times\frac{c}{d}=\frac{ac}{bd}.
  $$

  You will need to check that this is well-defined. Again, that means that you are going to have to convert the above statement into a statement about ordered pairs, namely if $(a,b)\sim(a',b')$ and $(c,d)\sim(c',d')$, then $(ac,bd)\sim(a'c',b'd')$.

  We have an arithmetic, and it's good news that addition and multiplication are well-defined, and there's a reason for that. It's because it has a physical meaning, the one you grew up learning.

- **Showing that multiplication of rationals is well-defined:** We must show that if $(a,b)\sim(a',b')$ and $(c,d)\sim(c',d')$, then $(ac,bd)\sim(a'c',b'd')$. Consider the following:

  1. Given $(a,b)\sim(a',b')$, we have $ab'=ba'$, where $b,b'\neq0$.
	2. Given $(c,d)\sim(c',d')$, we have $cd'=dc'$, where $d,d'\neq0$.
	3. We want to show that $(ac,bd)\sim(a'c',b'd')$. By the definition of $\sim$, this means we want to show that $acb'd'=bda'c'$.
	4. Consider the following:
    
    $$
    \begin{align*}
    acb'd'
    &= ab'cd' & \text{(associativity and commutativity in $\Z$)}\\[0.5em]
    &= ba'dc' & \text{(substitution via given information)}\\[0.5em]
    &= bda'c'. & \text{(associativity and commutativity in $\Z$)}
    \end{align*}
    $$

    From the above, we see that the multiplication of rational numbers is well-defined.

## Q extending Z

In what sense does $\Q$ extend $\Z$?

We've defined rationals in terms of integers, but I want to know in what sense this new construction really *extends* the integers. (See the note in the first lecture about embeddings and isomorphisms for a more algebraic treatment.)

- **First things:** Well, the first thing you have to tell me is which elements of $\Q$ correspond to a particular integer. The integer 5, for example. What class is equivalent to 5 as an integer? The class $\frac{5}{1}$. We say that $\frac{5}{1}$ corresponds to 5 or, more broadly, $\frac{n}{1}$ corresponds to $n$, where $n$ is an integer. This correspondence would be kind of uninteresting if it weren't also for the fact that the arithmetic *also* extends. 

  What you want to check is that $\{\frac{n}{1} : n\in\Z\}$ behaves "like $\Z$." This is an informal way of saying that the subset $\{\frac{n}{1} : n\in\Z\}$ of the rationals is *isomorphic* to $\Z$. The correspondence is $\frac{n}{1}\leftrightarrow n$. We can check that $\frac{n}{1}+\frac{m}{1}=\frac{n+m}{1}$ and $\frac{n}{1}\times\frac{m}{1}=\frac{nm}{1}$. What do we have now? We have a picture that's no longer looking like a bunch of random elements of $\Q$, where some elements belong to the same equivalence class, but now, somehow, has a structure that tells me how I might add certain elements, multiply elements, and some special classes behave just like the integers do. Now what? We have this thing $\Q$ that extends the integers, but the integers also have another property. There's an *ordering*; that is, $\Z$ has an order.

## Order relations

What is an order relation exactly? We note that there seems to be an order relation on $\Z$, but does $\Q$ have an order relation?

You grew up learning about what the order might be, but let's think carefully about how we might define a notion of order that is consistent with the ordering of the integers. First of all, what is an order? Hint: It takes two things in and it describes some kind of relation between the two. It's a relation! And what sort of property should it satisfy? We'll define it as follows:

> **Definition (order).** An *order* on a set $S$ is a *relation* $<$ satisfying 
> 
> 1. **Trichotomy:** If $x,y\in S$, then exactly one of these is true:
> 
>   $$
>   x<y,\quad
>   x=y,\quad
>   y<x.
>   $$
> 		
> 2. **Transitivity:** If $x,y,z\in S$ and if $x<y$ and $y<z$, then $x<z$.
> 
> If you have an order on $S$, then you call $S$ an ordered set.

- **Order on $\Z$:** In the integers, what is an order? You have to be somewhat careful here.
  + **Student attempt:** We say $a<b$ if $b-a$ is positive. I like that, but what is *positive*? Greater than zero. But *greater* depends on an order so you've defined order in terms of positive and positive in terms of order, and we want to avoid that, but that was a nice try. But you have the right definition, so we just have to decide what positive means. What is positive? What does it mean for an integer to be positive? The absolute value of $a$ is $|a|$. We haven't defined absolute value. 
	+ **Correct result:** I know you're trying to define positive in terms of other things, but why not just say what positive is? Let's just write down a set. In $\Z$, we are going to say that $m<n$ if $n-m$ is positive, that is, in the set $\{1,2,3,4,5,\ldots\}$. By the way, there are many other notions of order you can consider. We just gave one. But there are lots of other ways to order the integers.
- **Order on $\Z\times\Z$:** In $\Z\times\Z$, we can say $(a,b)<(c,d)$ if $a<c$ OR ($a=c$ and $b<d$). This is called the *dictionary order* for obvious reasons.
- **Order on $\C$:** Does there exist an order on $\C$? We don't know what complex numbers are just yet, but for those who do, would the dictionary order described above work for the complex numbers? Well, first of all, does it satisfy the trichotomy law? Sure. Is it transitive? No? What would keep it from being transitive? We're just checking dictionary order. There's nothing to keep it from being transitive. Right? So it would work for the complex numbers as well if we are thinking of complex numbers as ordered pairs of real numbers.
	
  *Note on subtraction of rational numbers:* We will define subtraction as adding the negative of, where negative is multiplying by $-1$. We know how to multiply two rationals, and we will associate to $-1$ the rational number $\frac{-1}{1}$ (recall the correspondence between $\Q$ and $\Z$) and perform the multiplication that way. In particular, what that means is that anytime you want to subtract two rationals that's the same as adding $\frac{-c}{d}$, and just treat $-c$ as an integer. We know how to multiply negative numbers that are integers.

- **Order on $\Q$:** How are we going to define an order on $\Q$? How about we do something very similar to what we did for $\Z$? We are going to say $\frac{m}{n}$ is positive if $mn>0$. We've just made a definition involving the rationals &#8212; what's one thing you should worry about when making a definition involving a bunch of equivalence classes? That it's well-defined! To check this, you'd need to give me another member in the same equivalence class as $\frac{m}{n}$, say $\frac{p}{q}$. Then we have $mq=np$, and we can check that $pq>0$ by working from there.

  + **Proof sketch.** Suppose $\frac{m}{n}$ is positive. Then $mn>0$ by definition. Furthermore, suppose $(m,n)\sim(p,q)$, whereby $mq=np$, with $n,q\neq0$. Our goal is to show that we must have $pq>0$. First note that $m\neq0$, whereby we may also conclude that $p\neq0$ (this is important to note in order to preserve strict inequality in the chain of deductions below) [see one of the lecture end notes on how $p\neq0$ is deduced from the given info]:

    $$
    \begin{align*}
    mn>0 
    &\iff mnp^2>0 & \text{(multiply through by $p^2$)}\\
    &\iff mp(np)>0 & \text{(associativity and commutativity)}\\
    &\iff mp(mq)>0 & \text{(since $mq=pn$)}\\
    &\iff m^2(pq)>0 & \text{(associativity and commutativity)}\\
    &\iff pq>0. & \text{(for $c>0$, $a>b$ iff $ac>bc$)}
    \end{align*}
    $$

    Given that the above definition of a positive rational number is well-defined, we will say that $\frac{m}{n}<\frac{m'}{n'}$ if $\frac{m'}{n'}-\frac{m}{n}$ is positive.

- *Note:* It should be mentioned that sometimes we write "$y>x$" for $x<y$. We're already using the words "less than" and "greater than" to think about these symbols because they come from our notion of order that we've grown up with. Sometimes we'll also write $x\leq y$ to mean $x<y$ or $x=y$. 
	
  **Implications of ordering on $\Q$:** So we have just defined by what we mean by order on $\Q$. Stepping back from what appears as rather tedious work, we no longer have this picture of $\Q$ as a box with jumbled elements all over the place. Now there's a way to think about the rationals the same way we think about the integers. We think about the integers as ordered living on some kind of line perhaps, where "$\text{this}_1$" is to the left of "$\text{this}_2$" if "$\text{this}_1$" is less than "$\text{this}_2$." So the rationals actually live on such a line as well.

## A new picture of Q

We have this notion of order for the integers:

<div align='center' className='centeredImageDiv'>
  <img width='800px' src={require('@site/static/img/lecture-images/L2-f2.png').default} />
</div>

There are some rationals here and we can check that, for instance, $\frac{1}{2}$ is less than 1 and greater than 0. And $\frac{1}{4}$ is between 0 and $\frac{1}{2}$. And so on. We can give a modified picture below (note the correspondence(s) between the rationals and the integers such as $-2$ and $-2/1$ and so on):

<div align='center' className='centeredImageDiv'>
  <img width='800px' src={require('@site/static/img/lecture-images/L2-f3.png').default} />
</div>

Of course, there are many more rational numbers. The new picture of $\Q$ (i.e., as an *ordered* set as opposed to just a jumble of equivalence classes) is good enough to answer a few questions. 

- **Good enough:** The set $\Q$ is good enough to solve some questions we might be wondering about. For instance, if I have 3 cakes, and I want to divide them among 5 people, and I might be interested in equal shares for everybody, then I need to solve the equation $5x=3$. Is there an integer solution here? No. Is there a fraction? Yeah! In fact, it's clear what that fraction is because of the multiplication rule for rational numbers. We can see that $x=\frac{3}{5}$ satisfies this equation. Why? Well, 5 is the same as $\frac{5}{1}$, and we would thus have the following:

  $$
  5x=\frac{5}{1}\times\frac{3}{5}=\frac{5\times3}{1\times5}=\frac{15}{5}=\frac{3}{1}=3.
  $$

  This is just the arithmetic you learned in grade school, but now it's on firm foundations. From here on out, you can assume you know the properties of the rationals, lest you are asked something foundational. So rationals are good enough to answer some questions, but there are some questions for which the set $\Q$ is ill-suited. It cannot be used to solve all equations, for instance.

- **Not good enough:** The set $\Q$ is not good enough to solve $x^2=2$ for rational $x$.
- **Illustration (proof that $\sqrt{2}$ is irrational):** The equation has no solution in $\Q$. Another way of stating this is, "The square root of 2 is not rational." But let's avoid saying that here because we have not defined the square root of 2. All we're saying is that in the rationals there is no solution to the equation $x^2=2$. It's a classic proof by contradiction. 

  > **Proof (by contradiction).** Assume $x^2=2$ has a solution in $\Q$; that is, suppose $x=\frac{p}{q}$, where $p,q\in\Z$, and assume that $p,q$ are in "lowest terms" or have no common factors. Then $(\frac{p}{q})^2=2$; hence, $p^2=2q^2$. Then $p^2$ is even (i.e., $p^2$ is divisible by 2), whereby we see that $p$ is even (because if $p$ were odd, then $p^2$ would be odd). We let $p=2m$, where $m\in\Z$; hence, $p^2=4m^2=2q^2$. Then $2m^2=q^2$. Then $q^2$ is even, hence $q$ is even. This contradicts the fact that $p$ and $q$ are in lowest terms. So, $x^2=2$ must have no solution in $\Q$.

  So we have the rationals. They have an order, they have an arithmetic, and they are good enough to solve some equations but not others. In order to try to figure out what it is that characterizes the rationals, we'll have to talk about some properties they satisfy.

## The set Q as a field

What does it mean for $\Q$ to be a field? The rational numbers will have to satisfy the properties that characterize a field. Recall the properties of a field.

> **Field (definition).** A field is a set $F$ with two operations $+$, $\times$ satisfying axioms:
> 
> - **(A1)** $F$ is closed under $+$.
> - **(A2)** $+$ is commutative.
> - **(A3)** $+$ is associative.
> - **(A4)** $F$ has an additive identity, call it 0.
> - **(A5)** Every element has an additive inverse.
> - **(M1)** $F$ is closed under $\times$.
> - **(M2)** $\times$ is commutative.
> - **(M3)** $\times$ is associative.
> - **(M4)** $F$ has a multiplicative identity, call it 1.
> 	
>   *Note:* In <BibRef id='WR1976' pages='p. 5'></BibRef>, we see that M4 concerns the field $F$ that contains an element $1\neq0$ such that $1x=x$ for every $x\in F$; that is, we are talking about a multiplicative identity. The requirement that $1\neq0$ seems very bizarre at first, especially for people who have not seen any abstract algebra. A nice discussion may be found in <BibRef id='IS1995' pages='p. 80, 117'></BibRef> having to do with inconsistent systems and messing up the laws of arithmetic. There is also a discussion in <BibRef id='GBRudin1' pages='p. 4'></BibRef>.
> 
> - **(M5)** Every element except 0 has a multiplicative inverse.
> - **(D)** $\times$ distributes over $+$.

For the rationals, what are the identity elements (additive and multiplicative)? The zero element is the class $\frac{0}{1}$. The identity element is $\frac{1}{1}$. We can check that all of the axioms hold for $\Q$ to be a field.

Is $\Z$ a field? No, because it does not satisfy (M5) in particular. We will see shortly that $\R$ is a field. The interesting thing about $\Q$ is that it's not just a field but it's an *ordered* field. Despite what the name implies, an ordered field is not just a set that is both a field and has an order. What else would you like to be true about an ordered field besides the fact that such a set is ordered and a field? What else would you like to be true? Hint: For a field we have two operations, and that's nice, but the operations must play together nicely, hence the distributive property. Here is now a set, $\Q$, that has these two structures (i.e., being an ordered set and being a field) &#8212; what else would we hope to be true? That the order and the field properties play nicely! 

**Ordered field (definition).** An ordered field is a field with an order so that (aside: how would you like the order and the field properties to play nicely together? What would you suggest? There are two operations to a field. Maybe I want to know how they relate to the ordering.) order is "preserved" by the field operations.

> 1. $y<z\implies x+y<x+z$,
> 2. $y<z, x>0\implies xy<xz$.
> 	
>   *Note:* Item (2) above is equivalent to, but differently stated, than what appears in Rudin. This way of stating the second defining property of an ordered field makes it clear that you are trying to have the order be preserved by the field operations.

So we have $\Q$ being an ordered field which basically says something about its structure.

We're heading towards constructing the real numbers. And our hope is that maybe the real numbers, whatever they are, might be good enough to solve the algebraic equation $x^2=2$ as well as other things. Hopefully they will also somehow contain the rationals or extend the rationals in some sense. And in some sense they will fill in the holes in the number line that we began to get a picture of. So it will also be an ordered field, but it will have a special property called *completeness*. So it will be called what is called a complete ordered field. So it will live on a line, like a number line, but it won't have the holes that the rationals do. The rationals don't solve the equation $x^2=2$ even though we know that's the length of a hypotenuse of a right triangle with two sides of unit length.

## Equivlence of ordered field statements

Francis Su claims that the second condition he gives for an ordered field, namely

$$
y<z, x>0\implies xy<xz
$$

is equivalent to the one Rudin gives, namely

$$
a>0,b>0\implies ab>0.
$$

Let's prove this equivalence.

We will first show that Su's formulation implies Rudin's and then that Rudin's implies Su's, thereby establishing equivalence.

- **($\textbf{Su}\implies\textbf{Rudin}$):** We are given $y<z,x>0\implies xy<xz$ by Su and trying to establish that $a>0,b>0\implies a,b>0$ follows for Rudin. To that end, begin by identifying $y$ with 0 in Su's formulation (i.e., $y=0$). Then the implication
  
  $$
  y<z, x>0\implies xy<xz
  $$

  becomes

  $$
  0<z, x>0\implies 0<xz
  $$

  or simply

  $$
  z>0, x>0\implies xz>0.
  $$

  If we now identify $z$ with $a$ and $x$ with $b$, that is, $z=a$ and $x=b$, then the equation above becomes

  $$
  a>0,b>0\implies ab>0,
  $$

  as desired. Thus, Su's formulation implies Rudin's formulation.

- **($\textbf{Rudin}\implies\textbf{Su}$):** We are given $a>0,b>0\implies ab>0$ by Rudin and trying to establish that $y<z,x>0\implies xy<xz$ follows for Su. Begin by recalling that, for any $\alpha,\beta\in\R$, $\alpha<\beta$ and $0<\beta-\alpha$ are two ways of saying the same thing; that is, $\alpha<\beta\iff0<\beta-\alpha$ for any $\alpha,\beta\in\R$. Hence, we note that $y<z\iff 0<z-y$. If we now identify $a$ with $x$ and $b$ with $z-y$, that is, $a=x$ and $b=z-y$, then the inequality
  
  $$
  a>0,b>0\implies ab>0
  $$

  becomes
  
  $$
  x>0,z-y>0\implies (x)(z-y)>0
  $$

  or simply

  $$
  x>0,z-y>0\implies xz-xy>0
  $$

  due to distributivity. Since $xz-xy>0\iff xy<xz$, we may rewrite the equation above as
  
  $$
  x>0,z-y>0\implies xy<xz,
  $$

  or simply
  
  $$
  y<z,x>0\implies xy<xz
  $$

  as desired. Thus, Rudin's formulation implies Su's formulation.

Since each formulation implies the other, both formulations are logically equivalent. As Su notes, he prefers his formulation due to the fact that it more clearly conveys the idea that you are trying to have the order preserved by the field operations.
