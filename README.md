Here is a curated list of resources, question and exercises to go through that covers the essentials of being a competent full stack JS developer.

The contents have been broken down into **4** phases, covering the basics from HTML/CSS to APIs. It would be best to cover these phases in chronological order to gain a broad understanding from the basics to the more advanced topics.


# Phase 1

### A) HTML

* [10 Typical HTML Exercises](https://github.com/sm2774us/full_stack_interview_prep_2021#a-10-typical-html-exercises)
* [12 Essential HTML5 Questions](https://github.com/sm2774us/full_stack_interview_prep_2021#b-12-essential-html5-questions)
* [35 Helpful HTML & HTML5 Questions & Answers](http://www.skilledup.com/articles/html-html5-interview-questions-answers)
* [40 important HTML 5 questions with answers](http://www.codeproject.com/Articles/702051/important-HTML-Interview-questions-with-answe)
* [HTML questions and answers for freshers and experienced developers](http://www.careerride.com/Interview-Questions-HTML.aspx)
* [Top 50 HTML Questions](http://career.guru99.com/top-50-html-interview-questions/)
* [Common HTML  questions for freshers](http://www.javatpoint.com/html-interview-questions)



### CSS

- [25 helpful CSS questions and answers](http://www.skilledup.com/articles/25-css-interview-questions-answers)
- [CSS  questions and answers for freshers and experienced developers](http://www.careerride.com/Interview-Questions-CSS.aspx)
- [CSS Questions and Answers](http://www.techrepublic.com/blog/software-engineer/css-interview-questions-and-answers/)
- [Questions and Exercises About CSS](https://css-tricks.com/interview-questions-css/)
- [Top 50 CSS(Cascading Style Sheet) Questions covering the most of tricky CSS moments](http://career.guru99.com/top-50-csscascading-style-sheet-interview-questions/)

---

#### A: 10 Typical HTML Exercises

---

##### Q1. Markup validation
Consider the following markup:
```html
<figure>
   <picture>
      <source media="(min-width: 40em)"
      srcset="large.jpg 1024w, medium.jpg 640w, small.jpg 320y">
      <img src="medium.jpg" alt="London by night">
   </picture>
   <figcaption>A landscape of London by night</figcaption>
</figure>
```
Is it valid? If not, can you explain why?

##### A1.
The markup uses [the picture element](https://www.w3.org/TR/html-picture-element/), which is a pretty new addition to the specification.
The code is all valid apart from the last image specified in the **`srcset`** attribute; **`320y`** isn’t a valid value.
If the **`y`** is replaced with a **`w`**, it becomes valid though.

##### Q2. The `main` element
Can you explain the definition of the `main` element? What is its goal? Are the two specifications (WHATWG and W3C) in agreement on its definition?

##### A2.
The **`main`** element has two different definitions depending on the specification used.

The W3C specification [describes it](https://www.w3.org/TR/html51/grouping-content.html#the-main-element) as the main content of the page, that is,
the content that describes the main topic of a page or is the central functionality of an application.
The specification also states that a document must not include more than one **`main`** element.

The WHATWG specification doesn’t assign any semantic value to the **`main`** element and [describes it](https://html.spec.whatwg.org/multipage/semantics.html#the-main-element)
as a container for the dominant contents of another element. Also, according to WHATWG, you don’t have a limit in the number of times 
you can use the **`main`** element in a single document. If you have multiple **`article`** elements on a page, you may want to markup the 
**`main`** content of each **`article`** with a separate **`main`** element.

##### Q3. WAI-ARIA
Consider the following snippet:
```html
<header>
   <h1>Main title</h1>
   <form action="/" method="get">
      <input type="search">
      <input type="submit">
   </form>
</header>
<ul>
   <li><a href="/">Home</a></li>
   <li><a href="/products">Products</a></li>
   <li><a href="/about">About</a></li>
</ul>
<main>
   <article>
      <h1>Main title</h1>
      <p>This is the content of this section</p>
   </article>
</main>
<footer>
   <small>Copyright &amp;copy; Aurelio De Rosa 2014</small>
</footer>
```

Can you improve its accessibility using [WAI-ARIA roles](https://www.w3.org/WAI/intro/aria.php) where appropriate,
taking into account older technologies?

##### A3.
The code can be rewritten as follows:
```html
<header role="header">
  <h1>Main title</h1>
  <form action="/" method="get" role="search">
     <label for="search">Search:</label>
     <input id="search" type="search">
     <input type="submit">
  </form>
</header>
<nav role="navigation">
  <ul>
     <li><a href="/">Home</a></li>
     <li><a href="/products">Products</a></li>
     <li><a href="/about">About</a></li>
  </ul>
</nav>
<main role="main">
  <article role="article">
     <h1>Main title</h1>
     <p>This is the content of this section</p>
  </article>
</main>
<footer role="contentinfo">
  <small>Copyright &amp;copy; Aurelio De Rosa 2014</small>
</footer>
```

To improve the accessibility, the main navigation list has been wrapped with a **`nav`** element.
To improve the accessibility in older technologies that don’t support the new semantic elements,
the role of **`header`**, **`navigation`**, **`main`**, **`article`**, and **`contentinfo`** have been added 
to the **`header`**, **`nav`**, **`main`**, **`article`**, and **`footer`** elements respectively.

Other improvements have been made on the search form. First of all the form has been marked using the **`search`** role.
Then, an explicit **`label`** element has been added to give context for the **`input`** field, and it has been associated with 
the **`input`** through the use of the **`for`** attribute.

##### Q4. The **`small`** element
Describe when it’s appropriate to use the **`small`** element and provide an example.

##### A4.
In HTML 4.01 the **`small`** element was a presentational element to mark up smaller text. [In HTML5](https://www.w3.org/TR/html5/text-level-semantics.html#the-small-element)
it should be used semantically to represent legal disclaimers, caveats, and so on. The text may well be "small", but this isn’t required.

An example of its use is shown below:

```html
<img src="image.jpg" alt="London by night">
<small>The copyright of this image is owned by Aurelio De Rosa</small>
```

##### Q5. Subheadings
Subheadings are one of the most common elements in any website. A few years ago the **`hgroup`** tag was introduced to address this need, 
but it has since been removed from the specs. Can you describe why **`hgroup`** was dropped and how the markup can be addressed today?

##### A5.
The **`hgroup`** element was introduced to group multiple heading elements (**`h1`**–**`h6`**) in order to avoid the creation of an 
unintended sublevel in the hierarchy. To understand what problem it tried to address, let’s consider the following markup:

```html
<article>
   <h1>Main title</h1>
   <h2>This is a subtitle</h2>
   <p>This is the content of this section</p>
</article>
```

Outlining the document hierarchy of the previous snippet gives us the following representation:

```
h1
|
---h2
   |
   p
```

This simple schema shows that the paragraph content of the snippet is seen as the content of the **`h2`** instead of the **`h1`**,
regardless if this was the intended behavior or not. So if the intention was simply to create a subheading and to associate 
the **`p`** with **`h1`**, the original markup was incorrect.

The **`hgroup`** element was introduced to address this issue with ease. Therefore, it was removed from the HTML5 specification in April 2013,
due to lack of implementations and lack of use cases, making its use invalid.

A possible solution to create a subtitle so that the paragraph is associated to the **`h1`** is shown below:

```html
<article>
   <h1>
       Main title
       <span>This is a subtitle</span>
   </h1>
   <p>This is the content of this section</p>
</article>
```

##### Q6. Images and accessibility
Is the **`alt`** attribute mandatory on **`img`** elements? If not, can you describe a scenario where it can be set to an empty value?
Does an empty value affect accessibility in any way?

##### A6.
The [alt attribute](https://www.w3.org/TR/html5/embedded-content-0.html#alt) is mandatory on **`img`** elements but its value can be empty 
(i.e. **`alt=""`**). An empty value is recommended when the image shown is used for decorative purposes only and therefore isn’t part of 
the content of the page. With regards to accessibility, if the **`alt`** attribute is empty, screen readers will ignore the image. 
This is highly recommended because using a value of something like "Content separator" will only disturb the user when this text is spoken.

##### Q7. The **`time`** element
Is it possible to express a date range using a single **`time`** element?

##### A7.
No, it isn’t possible. The information can be expressed using two [time elements](https://www.w3.org/TR/html5/text-level-semantics.html#the-time-element) though.
For example to describe a time interval ranging from November 6, 2014 to November 9, 2014, a developer can write:

```html
<time datetime="2014-11-06">6</time>-
<time datetime="2014-11-09">9 November 2014</time>
```

##### Q8. **`meter`** and **`progress`**
What’s the difference between the **`meter`** element and the **`progress`** element?

##### A8.
The [meter element](https://www.w3.org/TR/html5/forms.html#the-meter-element) represents a scalar measurement within a _known_ range,
or a fractional value. This element isn’t a good fit to measure something like external temperature because it doesn’t have a fixed range.
However, **`meter`** can be used to describe the occupied memory of a hard disk.

The [progress element](https://www.w3.org/TR/html5/forms.html#the-progress-element) is used to show the completion progress of a task. Unlike the **`meter`** element, the progress described by 
**`progress`** can be indeterminate. For example you could describe that a given task is progressing but that it is unknown when 
the task will be completed.

##### Q9. The **`longdesc`** attribute
What is the **`longdesc`** attribute? Can you explain its purpose?

##### A9.
[The **`longdesc`** attribute of the **`img`** element](https://www.w3.org/TR/html-longdesc/) has been around since HTML 4 and is also 
valid in HTML5. This attribute is designed to provide a more detailed description of an image, compared to the information offered in the 
**`alt`** attribute. The interesting thing is that instead of providing a description by itself (like the **`alt`** attribute does), 
**`longdesc`** points to a hyperlink containing the description.

An example of the use of **`longdesc`** is presented below:

```html
<img src="italy.jpg"
     alt="This image represents the map of Italy" longdesc="italy.html#description">

<!-- other content here ... -->

<section id="description">
  <h2>Italy</h2>
  <p>The shown map of Italy illustrates its division 
  in regions...</p>
</section>
```

##### Q10. The **`mark`** element
What is the **`mark`** element? Can you describe an example of use for this element?

##### A10.
The [mark element](https://www.w3.org/TR/html5/text-level-semantics.html#the-mark-element) represents highlighted text.
A typical use is to highlight every instance of the keyword or keywords searched by a user.

---

#### B: 12 Essential HTML5 Questions

---

##### Q1.

##### A1.