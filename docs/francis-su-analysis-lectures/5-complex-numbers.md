---
title: 5 - Complex numbers
hide_title: false
sidebar_label: 5 - Complex numbers
description: Lecture notes by Daniel Farlow to accompany Lecture 5 from Francis Su's YouTube video series
draft: false
tags:
  - Complex Numbers
  - Extending R
  - Cauchy-Schwarz Inequality
  - Lecture 5 (Francis Su)
keywords:
  - complex numbers
  - extension
  - cauchy-schwarz
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
        url="https://www.youtube.com/watch?v=63HpaUFEtXY"
    />
</div>

## Where we left off last time 

- **Picking back up:** Last time we mentioned that the real numbers they could be defined very naturally in terms of cuts. We saw that the real numbers were characterized by some properties. The real numbers are basically the only complete ordered field with the least upper bound property. Today we'll talk about a few extensions that are often convenient, namely the complex numbers. Some of these extensions won't necessarily enjoy all of the nice properties of the real numbers. But they're sometimes useful. We'll start with the extended reals.
- **The extended reals:** This is more of a convenience than anything. We'll define the extended reals as $\overline{\R}=\R\cup\{-\infty,+\infty\}$. This may be thought of as the reals, $\R$, with a couple of extra points, $-\infty$ and $+\infty$. It would be kind of pointless to define this set $\overline{\R}$ without mentioning how the creatures $-\infty$ and $+\infty$ play with the structure that's already on $\R$ (the one we are used to associating with $\R$ anyway) and why they are convenient. We can actually order this set. Note that $\R$ already has an order. So we'll use the usual order on $\R$ together with communicating how $-\infty$ and $+\infty$ behave. So where might we place $-\infty$ and $+\infty$ in the order that's on $\R$? At the very ends. For all $x\in\R$, we'll demand that $-\infty<x<\infty$. So the usual order on the reals together with the ordering $-\infty<x<\infty$ for any $x\in\R$. And now you might say well what about an arithmetic for $\overline{\R}$? After all, that's what we've worked so hard for concerning $\Q$ and then $\R$. (And really $\N$ and $\Z$ if we had bothered.) So is there an arithmetization of $\overline{\R}$ that we can undertake? Sure, but maybe not in the way that one might hope. Can we extend the arithmetic on the reals to the extended reals? And the answer is a qualified yes &#8212; we can try. We can say there's the usual addition on the real numbers but if you ask me to add a real number to positive infinity then I'll get $x+(+\infty)=+\infty$ or, similarly, $x+(-\infty)=-\infty$. And we can make a few more definitions as we like. For instance, if $x>0$, then we'll define $x(+\infty)=+\infty$. And if $x<0$, then $x(+\infty)=-\infty$, etc. We might also define $\frac{x}{+\infty}=0$ and $\frac{x}{-\infty}=0$. You can basically do things in the "natural way." 
- **Limitation of extended reals:** There's a reason you can only take the arithmetization of $\overline{\R}$ so far, but you cannot "finish" all of these definitions without running into some problems. There are a few things you end up leaving undefined. We'll have some problems defining certain things like $0\cdot+\infty$. We can see why we might begin to run into some problems in light of our definition that $\frac{x}{+\infty}=0$. The product $0\times+\infty$ should be well-defined, but it isn't. Or another thing we might have a problem with is $+\infty+(-\infty)$. No good way of doing that. The upshot of all of this is that $\overline{\R}$, the extended reals, is not a field. It's a set with some structure, but it's not a field. Well then why do we care about thinking about the extended reals? Well, it's convenient sometimes.
- **Why do we care about the extended reals?:** One thing that the extended reals ensures is that if you ask me to take the supremum of a subset $A$ of $\overline{\R}$, then we can say that $A$ will always be bounded by $+\infty$ and $-\infty$. So every subset of $\overline{\R}$ will have a supremum and infimum. Of course, the supremum actually could be $+\infty$. That's just another way of saying the set is unbounded. That is, if $A\subset\overline{\R}$ and $\sup A=+\infty$, then $A$ is unbounded above in the reals. If $A$ is bounded, then $A$ will have a supremum in $\R$, the usual reals. Such convenience is the main reason we care about the extended reals.

## Structures based on the real numbers

What are some other structures that are built around the real numbers? Or other structures that come out of having the real numbers as a foundation?

- **Euclidean space $\R^k$:** We define $\R^k=\{(x_1,\ldots,x_k) \mid x_i\in\R\}$, where $(x_1,\ldots,x_k)$ represents a $k$-tuple. The set $\R^k$ becomes more interesting once you have endowed it with a structure. So what's one of the first things you might do to give it a structure? We might try to give $\R^k$ an order. There's nothing stopping us from giving $\R^k$ a lexicographic or dictionary order if we like (i.e., comparing first thing with another first thing, second with second, and so on), but we don't often give it that kind of structure because it doesn't happen to be so useful for many of our purposes. What's another structure we might try to give the set $\R^k$? An arithmetic! It would be natural to try to start with addition. Maybe we want to add two $k$-tuples. Perhaps one $k$-tuple is $(x_1,\ldots,x_k)$ and another $k$-tuple is $(y_1,\ldots,y_k)$. What's a natural way to define addition such that when we add these $k$-tuples we get back another $k$-tuple? It's natural to add element-wise. That is,

  $$
  (x_1,\ldots,x_k)+(y_1,\ldots,y_k)=(x_1+y_1,\ldots,x_k+y_k). 
  $$

  You've often seen the above perhaps not just $k$-tuples but as *vectors*; that is,

  $$
  \underbrace{(x_1,\ldots,x_k)}_{\overrightarrow{\mathbf{x}}}+\underbrace{(y_1,\ldots,y_k)}_{\overrightarrow{\mathbf{y}}}=\underbrace{(x_1+y_1,\ldots,x_k+y_k)}_{\overrightarrow{\mathbf{x}+\mathbf{y}}}
  $$

  There's a reason for looking at these $k$-tuples as vectors because what we are about to do is define a vector space structure. So our addition is element-wise. So what's another thing we might try to define for a set like this with an addition? You might try to define some kind of multiplication, and the obvious way of trying to multiply, namely

  $$
  (x_1,\ldots,x_k)+(y_1,\ldots,y_k)=(x_1y_1,\ldots,x_ky_k),
  $$

  doesn't lead to anything that's very nice. Sure, it might have some nice properties such as being closed under multiplication, it's commutative and associative. In fact, it even has an identity element (a $k$-tuple whose entries are all 1's). But there's no notion of inverse. So that element-wise multiplication is not so nice. It doesn't turn $\R^k$ into a field. So we generally don't try to endow $\R^k$ with a field structure. But it does have another kind of multiplication which gives it what's called a vector space structure, and that's scalar multiplication. And what you should notice about scalar multiplication is that when you multiply a vector (an element of $\R^k$) by a scalar (an element of $\R$), you are not taking in two vectors and returning a vector &#8212; you are taking in a scalar and a vector, and you are returning a vector in the following form (where $\alpha$ denotes a scalar):

  $$
  \alpha(x_1,\ldots,x_k)=(\alpha x_1,\ldots,\alpha x_k).
  $$

- **Why doesn't $\R^k$ have an inverse?:** If $\overrightarrow{\mathbf{1}}$ is behaving as an identity for $\R^k$, which it is, then you might ask yourself whether or not there was some way to multiply a vector by something to get a bunch of 1's, and you'll see you'll run into problems as soon as some of the coordinates are zero but not all of them. So if you want $\R^k$ to be a field, then there should be a single element that's not invertible, that doesn't have a multiplicative inverse. And that should be the additive identity which, in this case, is $\overrightarrow{\mathbf{0}}$. So with the "obvious multiplication" (i.e., component-wise) there will be some nonzero elements that are not invertible. 

- **Euclidean space (continued):** So what do we have so far for $\R^k$? We have an addition, a multiplication, and we can see that scalar multiplication, even though it's not a full-fledged multiplication of two vectors, does satisfy a lot of the properties that we like when we are talking about fields. In particular, it happens to be associative, distributive, commutative, etc. Lots of nice properties. So it turns $\R^k$ into what's called a vector space. Our set $\R^k$ has some additional structure. It has what's called an inner product (or dot product in multivariable language), where an inner product is a product of vectors that takes in two vectors and returns a scalar. We define the inner product as

  $$
  \langle \overrightarrow{\mathbf{x}},\overrightarrow{\mathbf{y}} \rangle=\overrightarrow{\mathbf{x}}\cdot\overrightarrow{\mathbf{y}}=\sum_{i=1}^k x_iy_i
  $$

  So what does the inner product really do for us? Well, it's a notion that actually has some important geometric intuition that you've already studied in multivariable calculus or linear algebra. One of the first things you can do with an inner product is define a norm which is a notion of length. In linear algebra, for example, you might call this the length, magnitude, or absolute value, and you define this to be the inner product of $\overrightarrow{\mathbf{x}}$ with itself and take the square root:

  $$
  |\overrightarrow{\mathbf{x}}|=(\overrightarrow{\mathbf{x}}\cdot\overrightarrow{\mathbf{x}})^{1/2}.
  $$

  First of all, can we even take the square root here? Note that $\overrightarrow{\mathbf{x}}\cdot\overrightarrow{\mathbf{x}}=\sum_{i=1}^k x_ix_i$, where each summand $x_ix_i=x_i^2$ will be nonnegative. So taking the square root should not be an issue. The point is that square roots are possible and then we have a length. And this length corresponds with the geometric notion of the Euclidean length. There are lots of other notions of length, and of course when we starting talking about the phrase "metric space" we will, in fact, be working intimately with notions of length like the norm but necessarily the same. 

## Extending R to get a field

Is there a useful way to extend $\R$ such that we do get a field?

- **Complex number field:** It turns out that there's another way, if you like, to extend $\R$ in such a way that, in fact, you do get a field. For $\R^k$ we don't have a field, we don't have a natural notion of product that has the right kind of notion of inverses, but we can define an extension of $\R$, in fact the set itself will look like $\R^2$, but it will have a field structure. Such an extension is called the complex number field. The point here is that $\R^2$ can be given a field structure. It's just not the one you might first think of. Why? Well, if you give me ordered pairs $(a,b)$ and $(c,d)$, then I know how to add them:
  
  $$
  (a,b)+(c,d)=(a+c,b+d).
  $$

  This will be just like we expect. But the multiplication is probably different than expected:

  $$
  (a,b)\cdot(c,d)=(ac-bd,ad+bc).
  $$

  This is interesting &#8212; it's a very odd or funny notion of multiplication, but it does indeed yield a new ordered pair. So now the question is why is this a field structure? We have an addition and a multiplication. It will satisfy all the axioms &#8212; you just have to tell me what the zero and identity are. That is, what are the additive and multiplicative identities? So what plays the role of zero? Our additive identity will be $(0,0)$ and our multiplicative identity will be $(1,0)$. (Check these things.) It's a little more work to verify inverses, but things work out nicely. The other thing that's great about this is that this complex number field actually does extend the reals in a natural way. First of all, let's call this field $\C$. As a set $\C=\R^2$ with $+$ and $\times$ defined as above. The point is that with this additional structure we'll think of $\R^2$ as the complex numbers and so distinguish this set by writing $\C$. The point is that $\C$ extends $\R$ in a natural way &#8212; there's a subfield of $\C$ that behaves just like $\R$. What is it? Let's look at all ordered pairs $(a,0)$ where $a\in\R$ or simply the set $\{(a,0)\mid a\in\R\}$. For addition

  $$
  (a,b)+(c,d)=(a+c,b+d)
  $$

  and multiplication

  $$
  (a,b)\cdot(c,d)=(ac-bd,ad+bc)
  $$

  if we just make all the $b$'s and $d$'s zero then, in fact, you just get the usual addition of the first coordinate with the second coordinate and similarly for multiplication:

  $$
  (a,0)+(c,0)=(a+c,0)
  \qquad\text{and}\qquad
  (a,0)\cdot(c,0)=(ac-0,0+0)=(ac,0).
  $$

  So, in fact, the set $\{(a,0)\mid a\in\R\}$ behaves like $\R$; that is, it is a subfield isomorphic to $\R$. 

- **Imaginary numbers:** Note that, under our definition of multiplication, we have $(0,1)\cdot(0,1)=(-1,0)$. The interesting thing here is that we have multiplied something that is not real (i.e., $(0,1)$) by itself and got $(-1,0)$ which is real, namely a negative real. So we're beginning to see that this field has a very interesting property. If we denote the creature $(0,1)$ as $i$, for there's nothing you can do to stop me from doing that, then what we see is that $i^2=-1$. Because of this, we often write $a+bi$ for $(a,b)$ because, after all, with $i=(0,1)$, we have

  $$
  (a,0)+(b,0)(0,1)=a+bi,
  $$

  where $a,b\in\R$ and $i=(0,1)\in\C$. 

- **Visualizing complex numbers:** We still think about a complex number as an ordered pair &#8212; it's just that it has a part here that, in the first coordinate, behaves like the real numbers (recall how $(a,0)$ behaved above and the set $\{(a,0)\mid a\in\R\}$ in general). In the plane geometry we are accustomed to, we represent ordered pairs $(x,y)$ in $\R^2$ by plotting the $x$-value on typically horizontal axis we call the $x$-axis and the $y$-value on the typically vertical axis perpendicular to the $x$-axis which we call the $y$-axis. Similarly, for any complex number $(a,b)$, we will plot the first coordinate $a$, which behaves just like real numbers, on the horizontal axis which we will call the "real axis." The number $a$ is the real part $(1,0)$ that behaves just like the real numbers. The "non real part" is $b$, and we will plot this second coordinate $b$ on the vertical axis called the "imaginary axis." We should note that the terminology "imaginary part" arose in a very derogatory fashion. Basically, the mathematician who first coined this term basically said, "Imaginary. That part's imaginary." as if it didn't really have useful purpose although now these days we see it does serve useful purpose. And there's nothing imaginary about it. It's all part of some construction.

## Geometric interpretation of C

Is there a geometric interpretation of $\C$?

- **Geometric interpretations of complex numbers:** There are also several geometric notions associated with the creatures in $\C$. So, for example, if we let $z=a+bi$, then we define $\overline{z}$ as $\overline{z}=a-bi$. So the imaginary part gets negated, and we call $\overline{z}$ the conjugate of $z$. We should note that, for $z=a+bi$, the number $a$ is often denoted by $\re(z)$ while the number $b$ is often denoted by $\im(z)$. We note that $a$ and $b$ are both real numbers, but $b$ is simply the coefficient of $i$. 
- **Some properties of complex numbers:** If $z=a+bi=(a,b)$, then $\overline{z}=a-bi=(a,-b)$. Graphically, we can look at $\overline{z}$ as the reflection of $z$ about the real axis. The following are some properties to check:
  + $\overline{z+w}=\overline{z}+\overline{w}$
  + $\overline{z\cdot w}=\overline{z}\cdot\overline{q}$
  + $z+\overline{z}=2\re(z)$
  + $z-\overline{z}=2\im(z)$
  + $z\cdot\overline{z}=(a+bi)(a-bi)=a^2-bi^2=a^2+b^2$, where $a^2+b^2\in\R_{\geq0}$
		
    *Note:* For the above, if we envision a triangle with side $a$ on the real axis and side $b$ ranging up the imaginary axis, then the hypotenuse is the square root of $z\cdot\overline{z}$ or, perhaps more usefully, $\sqrt{a^2+b^2}$.

  + We define $|z|=(z\cdot\overline{z})^{1/2}$, and note $|z|=\sqrt{a^2+b^2}$ per the note above. The length $|z|=(z\cdot\overline{z})^{1/2}=\sqrt{a^2+b^2}$ corresponds with the geometric notion of length if you just thought about the complex numbers as the real numbers or $\R^2$, the real plane. It's the same as the length in $\R^2$. What we find is that we can find the length squared just by multiplying $z$ and $\overline{z}$. So in physics this property is used a lot. If you want to find the magnitude or amplitude of some complex wave form, you can multiply something by its conjugate. The equation $|z|=(z\cdot\overline{z})^{1/2}$ also suggests something. It suggests that if I wanted to define a complex space that is just like $\R^k$ except I do $\C^k$, then I could also define a collection of complex numbers whose dimension will be twice that of the real version if we thought of $\R^k$ as a vector space over $\R$. What does this mean? Well, we could also define an inner product! And the inner product on $\C^k$, well, it should look something like
  
    $$
    \overrightarrow{\mathbf{x}}\cdot\overrightarrow{\mathbf{y}}=\sum_{i=1}^k x_iy_i,
    $$

    except we might do something slightly different just to be consistent with some of the properties we have seen concerning conjugates. It suggests that in 
    
    $$
    \C^k=\{(z_1,\ldots,z_k)\mid z\in\C\}
    $$

    the inner product
    
    $$
    \langle\overrightarrow{\mathbf{x}},\overrightarrow{\mathbf{y}}\rangle,
    $$

    where $\overrightarrow{\mathbf{x}}$ and $\overrightarrow{\mathbf{y}}$ are vectors of complex numbers, is a sum of all the pieces $x_i$, $y_i$, but we are going to conjugate one of them, namely the right one $y_i$. That is, we have
    
    $$
    \langle\overrightarrow{\mathbf{x}},\overrightarrow{\mathbf{y}}\rangle=\sum_{i=1}^k x_i\overline{y}_i.
    $$

    So this is a notion of inner product that you'll have on a complex space. And if I want, then I could talk about length in the natural way. When you take the inner product of something with itself, then you get something positive, and that's because $z\cdot\overline{z}\geq0$. That's the reason behind using the conjugate of one of the arguments, the argument $y_i$ in the case above.

- **Some properties about the norm:** Clearly, $|z|\geq0$. We also have $\re(z)\leq|z|$. (You can think about this as the side length of a triangle, $a=\re(z)$, compared to the hypotenuse, $|z|$.) What about $|\overline{z}|$? Well, we'd have $|\overline{z}|=|z|$. What about $|zw|$? If the world is just, then we'd hope that $|zw|=|z|\,|w|$. But it's not altogether obvious. The main ingredient in showing this is a rather remarkable fact from number theory, namely

  $$
  (ac-bd)^2+(ad+bc)^2=(a^2+b^2)(c^2+d^2).
  $$

  What this identity is saying is that if you take the sum of two squares (i.e., $a^2+b^2$), and another sum of two squares (i.e., $c^2+d^2$), and take their product, then you get something that's the sum of two squares (i.e., $(ac-bd)^2+(ad+bc)^2$). So does taking lengths play nice with the arithmetic? Well, for multiplication it does, as we see above. How about $|z+w|$? We do note have $|z+w|=|z|+|w|$, but we do have

  $$
  |z+w|\leq|z|+|w|,
  $$

  a very important inequality that's a version of the triangle inequality. The reason we call it that is because you could imagine $\overrightarrow{\mathbf{z}}$ as being a vector measured from the origin, and $\overrightarrow{\mathbf{w}}$ as a vector measured from the origin as well but displaced to the endpoint of $\overrightarrow{\mathbf{z}}$ &#8212; this means their sum, $\overrightarrow{\mathbf{z}+\mathbf{w}}$, is the other side of the triangle that joins the legs $\overrightarrow{\mathbf{z}}$ and $\overrightarrow{\mathbf{w}}$. And, of course, we know that no one leg of a triangle can be longer than *both* of the other legs. Hence, $|z+w|\leq|z|+|w|$. How do we show this though? Well let's just begin. We first want the length of $z+w$ or $|z+w|$. I don't have a good way of dealing with the length, but I do have a good way of dealing with the length squared, or $z\cdot\overline{z}$. In this case, the length squared is

  $$
  \begin{align*}
  |z+w|^2
  &= (z+w)(\overline{z}+\overline{w})\\[0.5em]
  &= z\cdot\overline{z}+z\cdot\overline{w}+w\cdot\overline{z}+w\cdot\overline{w}\\[0.5em]
  &= |z|^2+2\re(z\overline{w})+|w|^2\\[0.5em]
  &\leq |z|^2+2|z|\,|w|+|w|^2\\[0.5em]
  &= (|z|+|w|)^2. 
  \end{align*}
  $$

  where a key observation is to note that $z\cdot\overline{w}$ is the conjugate of $w\cdot\overline{z}$, and if we add two conjugates we get twice the real part of one of them. But what's that? That's twice the real part of $z\overline{w}$ as indicated above. What's twice the real part of something though? What did we really want? Well, what's the relationship between the real part of $z\overline{w}$, or $\re(z\overline{w})$, and the product of the lengths of $z$ and $w$? It's less than or equal to! It's one part of the hypotenuse. So that's why there's only one place above where there's an inequality. The real part, $\re(zw)$, is bounded by the absolute value (recall we have $\re(z)\leq|z|$ for all $z\in\C$), and hence

  $$
  \begin{align*}
  \re(z\overline{w})
  &\leq|z\overline{w}|\\[0.5em]
  &=|z|\,|\overline{w}|\\[0.5em]
  &= |z|\,|w|
  \end{align*}
  $$

  Before fully fleshing out the proof, we note the following:

  + Since $|z|=(z\cdot\overline{z})^{1/2}$ we clearly have $|z|^2=z\cdot\overline{z}$. But we also have $|z+w|=[(z+w)(\overline{z}+\overline{w})]^{1/2}$ or simply
    
    $$
    |z+w|^2=(z+w)(\overline{z}+\overline{w}).
    $$

	+ Since $\overline{z\cdot w}=\overline{z}\cdot\overline{w}$, we have $\overline{w\cdot\overline{z}}=\overline{w}\cdot\overline{\overline{z}}=\overline{w}\cdot z$.

  Using all of the information above, we provide the full proof as follows:

  $$
  \begin{align*}
  |z+w|^2
  &= (z+w)(\overline{z}+\overline{w}) & \text{(since $|z|=(z\cdot\overline{z})^{1/2}$)}\\[0.5em]
  &= z\cdot\overline{z}+z\cdot\overline{w}+w\cdot\overline{z}+w\cdot\overline{w} & \text{(expand)}\\[0.5em]
  &= |z|^2+z\overline{w}+w\overline{z}+|w|^2 & \text{(since $|z|=(z\cdot\overline{z})^{1/2}$)}\\[0.5em]
  &= |z|^2+\overline{w\overline{z}}+w\overline{z}+|w|^2 & \text{(since $\overline{w\overline{z}}=\overline{w}z$)}\\[0.5em]
  &= |z|^2+2\re(w\overline{z})+|w|^2 & \text{(since $z+\overline{z}=2\re(z)$)}\\[0.5em]
  &\leq |z|^2+2|z\overline{w}|+|w|^2 & \text{(since $\re(z)\leq|z|$)}\\[0.5em]
  &= |z|^2+2|z|\,|\overline{w}|+|w|^2 & \text{(since $|zw|=|z|\,|w|$)}\\[0.5em]
  &= |z|^2+2|z|\,|w|+|w|^2 & \text{(since $|\overline{z}|=|z|$)}\\[0.5em]
  &= (|z|+|w|)^2. & \text{(since $a^2+2ab+b^2=(a+b)^2)$)}
  \end{align*}
  $$

  Hence, $|z+w|\leq|z|+|w|$, as desired. So the length $|z|=(z\cdot\overline{z})^{1/2}$ plays nicely, for the most part, with the arithmetic structure on $\C$, except we have the triangle inequality $|z+w|\leq|z|+|w|$ in a place where we might have hoped there would be inequality. 

## The Cauchy-Schwarz inequality

What's the big deal about the Cauchy-Schwarz inequality?

- **Introduction and statement:** A final thing to say about complex numbers concerns something related to Euclidean space or complex vector space. It's probably the most important inequality in all of analysis. It says the following: Imagine $a_1,\ldots,a_n$ and $b_1,\ldots,b_n$, where $a_i,b_i\in\C$. Then

  $$
  \biggl|\sum_{i=1}^n a_i\overline{b}_i\biggr|^2\leq
  \sum_{i=1}^n |a_i|^2\sum_{i=1}^n |b_i|^2.
  $$

  Note we conjugate one of the factors like before. Of course, the conjugate of a real number is itself so the real number version would have no conjugate. So if you're dealing with real numbers then you can forget the bars. If we take the sum of the $a_i$'s and $b_i$'s, which we should recognize as something (an inner product, whether or not we are dealing with real or complex vectors), then this particular length $\bigl|\sum_{i=1}^n a_i\overline{b}_i\bigr|^2$ is basically the length of the inner product squared. It will be less than or equal to the sum of the $a_i$'s squared times the sum of the $b_i$'s squared or $\sum_{i=1}^n |a_i|^2\sum_{i=1}^n |b_i|^2$. Again, if this were real numbers, then we could lose the absolute value bars. What's so great about this inequality? Really what it's saying is the following: If you want to think about this as vectors, it's basically saying that in $\R^k$ we have

  $$
  |\overrightarrow{\mathbf{v}}\cdot\overrightarrow{\mathbf{w}}|\leq|\overrightarrow{\mathbf{v}}|\,|\overrightarrow{\mathbf{w}}|.
  $$

  How does the above inequality come from the Cauchy-Schwarz inequality? Basically just take the square root of both sides. Why do we care so much about the Cauchy-Schwarz inequality? Well, the inequality $|\overrightarrow{\mathbf{v}}\cdot\overrightarrow{\mathbf{w}}|\leq|\overrightarrow{\mathbf{v}}|\,|\overrightarrow{\mathbf{w}}|$ is something you often encounter in multivariable calculus (such as when you think of the length of $\overrightarrow{\mathbf{v}}\cdot\overrightarrow{\mathbf{w}}$ as being the length $|\overrightarrow{\mathbf{v}}|\,|\overrightarrow{\mathbf{w}}|$ times the sine of the angle between the vectors $\overrightarrow{\mathbf{v}}$ and $\overrightarrow{\mathbf{w}}$, then you see that the inequality $|\overrightarrow{\mathbf{v}}\cdot\overrightarrow{\mathbf{w}}|\leq|\overrightarrow{\mathbf{v}}|\,|\overrightarrow{\mathbf{w}}|$ is true. 

  In the complex vector case, this inequality is actually the basis for the Heisenberg uncertainty principle. Basically, the Heisenberg uncertainty principle says something about position and momentum, namely that they cannot both be determined with very much precision. And it's based on the Cauchy-Schwarz inequality. So let's prove this.

- **Proof of the Cauchy-Schwarz inequality:** Let's think about vectors in $\C^n$. Let $\overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}}\in\C^n$. Notice that $0\leq|\overrightarrow{\mathbf{a}}-y\overrightarrow{\mathbf{b}}|^2$, regardless of whatever $y$ could be. It'll be chosen later on in a nice way. For now, recalling that $\langle \overrightarrow{\mathbf{x}},\overrightarrow{\mathbf{y}} \rangle=\overrightarrow{\mathbf{x}}\cdot\overrightarrow{\mathbf{y}}=\sum_{i=1}^k x_i\overline{y}_i$ and $|\overrightarrow{\mathbf{x}}|=(\overrightarrow{\mathbf{x}}\cdot\overrightarrow{\mathbf{x}})^{1/2}$ or $|\overrightarrow{\mathbf{x}}|^2=(\overrightarrow{\mathbf{x}}\cdot\overrightarrow{\mathbf{x}})=\langle \overrightarrow{\mathbf{x}},\overrightarrow{\mathbf{x}} \rangle$, we have the following:

  $$
  \begin{align*}
  0\leq|\overrightarrow{\mathbf{a}}-y\overrightarrow{\mathbf{b}}|^2
  &=\langle \overrightarrow{\mathbf{a}}-y\overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{a}}-y\overrightarrow{\mathbf{b}} \rangle\\[0.5em]
  &= \sum(a_i-yb_i)(\overline{a}_i-\overline{y}\overline{b}_i)\\[0.5em]
  &= \sum(a_i\overline{a}_i-\overline{y}a_i\overline{b}_i-y\overline{a}_ib_i+y\overline{y}b_i\overline{b}_i)\\[0.5em]
  &= \sum a_i\overline{a}_i - \sum \overline{y}a_i\overline{b}_i - \sum y\overline{a}_ib_i + \sum y\overline{y}b_i\overline{b}_i\\[0.5em]
  &= \langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{a}}\rangle - \overline{y}\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}}\rangle -y\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{a}}\rangle +|y|^2\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}}\rangle\\[0.5em]
  &= \langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{a}}\rangle-\frac{|\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle|^2}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}. & \text{(let $y=\tfrac{\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}}\rangle}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}$ and simplify)}
  \end{align*}
  $$

  Hence, we have
  
  $$
  0\leq\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{a}}\rangle-\frac{|\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle|^2}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}
  $$

  or simply
  
  $$
  |\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}}\rangle|\leq |\overrightarrow{\mathbf{a}}|\,|\overrightarrow{\mathbf{b}}|,
  $$

  as desired.

## Another note

Consider the following, where $y=\frac{\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}}\rangle}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}$:

$$
\begin{align*}
0
&\leq|\overrightarrow{\mathbf{a}}-y\overrightarrow{\mathbf{b}}|^2 \\[1em]
&= \langle \overrightarrow{\mathbf{a}}-y\overrightarrow{\mathbf{b}}, \overrightarrow{\mathbf{a}}-y\overrightarrow{\mathbf{b}}\rangle \\[1em]
&= \sum(a_i-yb_i)(\overline{a}_i-\overline{y}\overline{b}_i)\\[1em]
&= \sum(a_i\overline{a}_i-\overline{y}a_i\overline{b}_i-y\overline{a}_ib_i+y\overline{y}b_i\overline{b}_i)\\[1em]
&= \sum a_i\overline{a}_i - \sum \overline{y}a_i\overline{b}_i - \sum y\overline{a}_ib_i + \sum y\overline{y}b_i\overline{b}_i\\[1em]
&= \langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{a}}\rangle - \overline{y}\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}}\rangle -y\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{a}}\rangle +y\overline{y}\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}}\rangle\\[1em]
&= \langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{a}} \rangle-\biggl(\frac{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{a}} \rangle}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}\biggr)\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle- 
\biggl(\frac{\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}\biggr)\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{a}} \rangle+
\biggl(\frac{\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}\biggr)
\biggl(\frac{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{a}} \rangle}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}\biggr)
\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle\\[1em]
&= \langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{a}} \rangle
-\frac{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{a}} \rangle\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}
-\frac{\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{a}} \rangle}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}
+\frac{\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{a}} \rangle}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}\\[1em]
&= \langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{a}} \rangle-\frac{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{a}} \rangle\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}\\[1em]
&=\frac{\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{a}} \rangle\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle-\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{a}} \rangle\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle}{\langle \overrightarrow{\mathbf{b}},\overrightarrow{\mathbf{b}} \rangle}\\[1em]
&=\frac{|\overrightarrow{\mathbf{a}}|^2\,|\overrightarrow{\mathbf{b}}|^2-|\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle|^2}{|\overrightarrow{\mathbf{b}}|^2}.
\end{align*}
$$

Thus, we have

$$
0\leq\frac{|\overrightarrow{\mathbf{a}}|^2\,|\overrightarrow{\mathbf{b}}|^2-|\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle|^2}{|\overrightarrow{\mathbf{b}}|^2}
\implies
|\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle|^2
\leq
|\overrightarrow{\mathbf{a}}|^2\,|\overrightarrow{\mathbf{b}}|^2
$$

or simply,

$$
|\langle \overrightarrow{\mathbf{a}},\overrightarrow{\mathbf{b}} \rangle|
\leq
|\overrightarrow{\mathbf{a}}|\,|\overrightarrow{\mathbf{b}}|,
$$

as desired.