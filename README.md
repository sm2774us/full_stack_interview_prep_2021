Here is a curated list of resources, question and exercises to go through that covers the essentials of being a competent full stack JS developer.

The contents have been broken down into **4** phases, covering the basics from HTML/CSS to APIs. It would be best to cover these phases in chronological order to gain a broad understanding from the basics to the more advanced topics.


# Phase 1

### A) HTML

* [10 Typical HTML Exercises](https://github.com/sm2774us/full_stack_interview_prep_2021#a-10-typical-html-exercises)
* [16 Essential HTML5 Questions](https://github.com/sm2774us/full_stack_interview_prep_2021#b-16-essential-html5-questions)
* [35 Helpful HTML & HTML5 Questions & Answers](https://github.com/sm2774us/full_stack_interview_prep_2021#c-35-helpful-html--html5-questions--answers)
* [40 important HTML interview questions with answers](https://github.com/sm2774us/full_stack_interview_prep_2021#d-important-html-interview-questions-with-answers)
* [HTML questions and answers for freshers and experienced developers](https://github.com/sm2774us/full_stack_interview_prep_2021#e-html-questions-and-answers-for-freshers-and-experienced-developers)
* [Top 50 HTML Questions](https://github.com/sm2774us/full_stack_interview_prep_2021#b-16-essential-html5-questions#f-top-50-html-questions)
* [Common HTML questions for freshers](https://github.com/sm2774us/full_stack_interview_prep_2021#g-common-html-questions-for-freshers)



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

#### B: 16 Essential HTML5 Questions

---

##### Q1. Give a simple implementation of the `<video>` tag to embed a video stored at `http://www.example.com/amazing_video.mp4`. Give the video a width of 640 pixels by 360 pixels. Provide the user with controls.

##### A1.
Here is one simple implementation:

```html
<video src="http://www.example.com/amazing_video.mp4" width="640" height="360" controls></video>
```

Alternatively, the source file may be indicated with a separate <source> tag inside the <video> element, as in:

```html
<video width="640" height="360" controls>
  <source src="http://www.example.com/amazing_video.mp4">
</video>
```

##### Q2. What were some of the key goals and motivations for the HTML5 specification?

##### A2.
HTML5 was designed to replace both HTML 4, XHTML, and the HTML DOM Level 2.

Major goals of the [HTML specification](http://www.w3.org/TR/html5/) were to:

* Deliver rich content (graphics, movies, etc.) without the need for additional plugins (e.g., Flash).
* Provide better semantic support for web page structure through the introduction of new structural element tags.
* Provide a stricter parsing standard to simplify error handling, ensure more consistent cross-browser behavior, and simplify backward compatibility with documents written to older standards.
* Provide better cross-platform support (i.e., to work well whether running on a PC, Tablet, or Smartphone).

##### Q3. What are some of the key new features in HTML5?

##### A3.
Key new features of HTML5 include:

* Improved support for embedding graphics, audio, and video content via the new [`<canvas>`](http://www.w3schools.com/tags/tag_canvas.asp), 
  [`<audio>`](http://www.w3schools.com/tags/tag_audio.asp), and [`<video>`](http://www.w3schools.com/tags/tag_video.asp) tags.
* Extensions to the JavaScript API such as [geolocation](http://www.w3schools.com/html/html5_geolocation.asp) and [drag-and-drop](http://www.w3schools.com/html/html5_draganddrop.asp) 
  as well for [storage](http://www.w3schools.com/html/html5_webstorage.asp) and [caching](http://www.w3schools.com/html/html5_app_cache.asp).
* Introduction of ["web workers"](http://www.w3schools.com/html/html5_webworkers.asp).
* Several new semantic tags were also added to complement the structural logic of modern web applications.
  These include the `<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>`, and `<aside>` tags.
* New form controls, such as `<calendar>`, `<date>`, `<time>`, `<email>`, `<url>`, and `<search>`.

##### Q4. What are "web workers"?

##### A4.
[Web workers](http://www.w3schools.com/html/html5_webworkers.asp) at long last bring multi-threading to JavaScript.

A web worker is a script that runs in the background (i.e., in another thread) without the page needing to wait for it to complete.
The user can continue to interact with the page while the web worker runs in the background. Workers utilize thread-like 
message passing to achieve parallelism.

##### Q5. How do you indicate the character set being used by an HTML5 document? How does this differ from older HTML standards?

##### A5.
In HTML5, the encoding used can be indicated with the `charset` attribute of a `<meta>` tag inside the document's `<head>` element:

```html
<!DOCTYPE html>
<html>
<head>
...
<meta charset="UTF-8">
...
</head>
...
</html>
```

This is a slightly simpler syntax from older HTML standards, which did not have the `charset` attribute.
For example, an HTML 4.01 document would use the `<meta>` tag as follows:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    ...
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    ...
  </head>
  ...
</html>
```

##### Q6. Discuss the differences between an HTML specification and a browser’s implementation thereof.

##### A6.
HTML specifications such as HTML5 define a set of rules that a document must adhere to in order to be "valid" according to that specification.
In addition, a specification provides instructions on how a browser must interpret and render such a document.

A browser is said to "support" a specification if it handles valid documents according to the rules of the specification.
As of yet, no browser supports all aspects of the HTML5 specification (although all of the major browser support most of it),
and as a result, it is necessary for the developer to confirm whether the aspect they are making use of will be supported by 
all of the browsers on which they hope to display their content. This is why cross-browser support continues to be a headache 
for developers, despite the improved specificiations.

In addition, while HTML5 defines some rules to follow for an invalid HTML5 document (i.e., one that contains syntactical errors), 
invalid documents may contain anything, and it is impossible for the specification to handle all possibilities comprehensively. 
Thus, many decisions about how to handle malformed documents are left up to the browser.

##### Q7. Briefly describe the correct usage of the following HTML5 semantic elements: `<header>`, `<article>`, `<section>`, `<footer>`.

##### A7.
The `<header>` element is used to contain introductory and navigational information about a section of the page. 
This can include the section heading, the author’s name, time and date of publication, table of contents, or other navigational information.

The `<article>` element is meant to house a self-contained composition that can logically be independently recreated outside of the page 
without losing it’s meaining. Individual blog posts or news stories are good examples.

The `<section>` element is a flexible container for holding content that shares a common informational theme or purpose.

The `<footer>` element is used to hold information that should appear at the end of a section of content and contain additional 
information about the section. Author’s name, copyright information, and related links are typical examples of such content.

##### Q8. Can a `<section>` contain `<article>` elements? Can an `<article>` contain `<section>` elements? Provide usage examples.

##### A8.
The answer to both questions is yes; i.e., a `<section>` can contain `<article>` elements, and an `<article>` can contain `<section>` elements.

For example, a personal dashboard page might contain a `<section>` for social network interactions as well as a `<section>` for the latest news articles, 
the latter of which could contain several `<article>` elements.

Conversely, an `<article>` might contain a `<section>` at the end for reader comments.

##### Q9. Can a web page contain multiple `<header>` elements? What about `<footer>` elements?

##### A9.
Yes to both. In fact, both the `<header>` and `<footer>` tags are designed to serve their respective purposes in relation to whatever their parent 
"section" may be. So not only can the page `<body>` contain a header and a footer, but so can every `<article>` and `<section>` element. 
In fact, a `<header>` should be present for all of these, although a `<footer>` is not always necessary.

##### Q10. Describe the relationship between the <header> and <h1> tags in HTML5.

##### A10.
In previous specifications of HTML, only one `<h1>` element was typically present on a page, used for the heading of the entire page. 
HTML5 specifies that `<h1>` represents the top-level heading of a "section", whether that be the page `<body>`, or an `<article>` or `<section>` element. 
In fact, every `<header>` element should at least contain an `<h1>` element. If there is no natural heading for the section, it is a good 
indication it should not use an `<article>` or `<section>` tag.

##### Q11. Write the code necessary to create a 300 pixel by 300 pixel `<canvas>`. Within it, paint a blue 100 pixel by 100 pixel square with the top-left corner of the square located 50 pixels from both the top and left edges of the canvas.

##### A11.
Here is one simple implementation:

```html
<canvas id="c" width="300" height="300"></canvas>

<script>
  var canvas = document.getElementById( "c" );
  var drawing_context = canvas.getContext( "2d" );
  drawing_context.fillStyle = "blue";
  drawing_context.fillRect( 50, 50, 100, 100 );
</script>
```

##### Q12. What is HTML5 Web Storage? Explain localStorage and sessionStorage.

##### A12.
With HTML5, web pages can store data locally within the user's browser.

Earlier, this was done with cookies. However, Web Storage is more secure and faster. The data is not included with every server request, 
but used ONLY when asked for.

The data is stored in name/value pairs, and a web page can only access data stored by itself. Unlike cookies, the storage limit is far 
larger (at least 5MB) and information is never transferred to the server.

The difference between localStorage and sessionStorage involves the lifetime and scope of the storage.

Data stored through localStorage is permanent: it does not expire and remains stored on the user's computer until a web app deletes it 
or the user asks the browser to delete it. SessionStorage has the same lifetime as the top-level window or browser tab in which the 
script that stored it is running. When the window or tab is permanently closed, any data stored through sessionStorage is deleted.

Both forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects. 
But sessionStorage is also scoped on a per-window basis. If a user has two browser tabs displaying documents from the same origin, 
those two tabs have separate sessionStorage data: the scripts running in one tab cannot read or overwrite the data written by scripts 
in the other tab, even if both tabs are visiting exactly the same page and are running exactly the same scripts.

##### Q13. What is the difference between `span` and `div`?

##### A13.
The difference is that `span` gives the output with `display: inline` and `div` gives the output with `display: block`.

`span` is used when we need our elements to be shown in a line, one after the other.

##### Q14. What is the Geolocation API in HTML5?

##### A14.
HTML5's Geolocation API lets users share their physical location with chosen web sites. JavaScript can capture a user's latitude and longitude 
and can send it to the back-end web server to enable location-aware features like finding local businesses or showing their location on a map.

Today, most browsers and mobile devices support the Geolocation API. The Geolocation API works with a new property of the global `navigator` object.

A Geolocation object can be created as follows:

```JavaScript
var geolocation = navigator.geolocation;
```

The `geolocation` object is a service object that allows widgets to retrieve information about the geographic location of the user's device.

##### Q15. What's one main result if you do not specify a `doctype` in an HTML page?

##### A15.
New HTML5-specific tags will not be interpreted by the browser.

##### Q16. What's the difference between the `<svg>` and `<canvas>` elements?

##### A16.
The `<svg>` element is a container for SVG graphics. SVG has several methods for drawing paths, boxes, circles, text, and even bitmap images.

SVG is a language for describing 2D graphics, but `<canvas>` allows you to draw 2D graphics on the fly using JavaScript.

SVG is XML-based, which means that every element is available within the SVG DOM. You can attach JavaScript event handlers for an element.

In SVG, each drawn shape is remembered as an object. If attributes of an SVG object are changed, the browser can automatically re-render the shape.

Canvas is rendered pixel by pixel. In canvas, once the graphic is drawn, it is forgotten by the browser. If its position should be changed, 
the entire scene needs to be redrawn, including any objects that might have been covered by the graphic.

##### Q12. What is the Geolocation API in HTML5?

##### A12.

##### Q12. What is the Geolocation API in HTML5?

##### A12.

---

#### C: 35 Helpful HTML & HTML5 Questions & Answers

---

##### Q1.
##### A1.

##### Q2.
##### A2.

##### Q3.
##### A3.

##### Q4.
##### A4.

##### Q5.
##### A5.

##### Q6.
##### A6.

##### Q7.
##### A7.

##### Q8.
##### A8.

##### Q9.
##### A9.

##### Q10.
##### A10.

##### Q11.
##### A11.

##### Q12.
##### A12.

##### Q13.
##### A13.

##### Q14.
##### A14.

##### Q15.
##### A15.

##### Q16.
##### A16.

##### Q17.
##### A17.

##### Q18.
##### A18.

##### Q19.
##### A19.

##### Q20.
##### A20.

##### Q21.
##### A11.

##### Q22.
##### A22.

##### Q23.
##### A23.

##### Q24.
##### A24.

##### Q25.
##### A25.

##### Q26.
##### A26.

##### Q27.
##### A27.

##### Q28.
##### A28.

##### Q29.
##### A29.

##### Q30.
##### A30.

##### Q31.
##### A31.

##### Q32.
##### A32.

##### Q33.
##### A33.

##### Q34.
##### A34.

##### Q35.
##### A35.

---

#### D: 40 important HTML interview questions with answers

---

##### Q1.
##### A1.

##### Q2.
##### A2.

##### Q3.
##### A3.

##### Q4.
##### A4.

##### Q5.
##### A5.

##### Q6.
##### A6.

##### Q7.
##### A7.

##### Q8.
##### A8.

##### Q9.
##### A9.

##### Q10.
##### A10.

##### Q11.
##### A11.

##### Q12.
##### A12.

##### Q13.
##### A13.

##### Q14.
##### A14.

##### Q15.
##### A15.

##### Q16.
##### A16.

##### Q17.
##### A17.

##### Q18.
##### A18.

##### Q19.
##### A19.

##### Q20.
##### A20.

##### Q21.
##### A11.

##### Q22.
##### A22.

##### Q23.
##### A23.

##### Q24.
##### A24.

##### Q25.
##### A25.

##### Q26.
##### A26.

##### Q27.
##### A27.

##### Q28.
##### A28.

##### Q29.
##### A29.

##### Q30.
##### A30.

##### Q31.
##### A31.

##### Q32.
##### A32.

##### Q33.
##### A33.

##### Q34.
##### A34.

##### Q35.
##### A35.

##### Q36.
##### A36.

##### Q37.
##### A37.

##### Q38.
##### A38.

##### Q39.
##### A39.

##### Q40.
##### A40.

---

#### E: HTML questions and answers for freshers and experienced developers

---

##### Q1.
##### A1.

---

#### F: Top 50 HTML Questions

---

##### Q1.
##### A1.

##### Q2.
##### A2.

##### Q3.
##### A3.

##### Q4.
##### A4.

##### Q5.
##### A5.

##### Q6.
##### A6.

##### Q7.
##### A7.

##### Q8.
##### A8.

##### Q9.
##### A9.

##### Q10.
##### A10.

##### Q11.
##### A11.

##### Q12.
##### A12.

##### Q13.
##### A13.

##### Q14.
##### A14.

##### Q15.
##### A15.

##### Q16.
##### A16.

##### Q17.
##### A17.

##### Q18.
##### A18.

##### Q19.
##### A19.

##### Q20.
##### A20.

##### Q21.
##### A11.

##### Q22.
##### A22.

##### Q23.
##### A23.

##### Q24.
##### A24.

##### Q25.
##### A25.

##### Q26.
##### A26.

##### Q27.
##### A27.

##### Q28.
##### A28.

##### Q29.
##### A29.

##### Q30.
##### A30.

##### Q31.
##### A31.

##### Q32.
##### A32.

##### Q33.
##### A33.

##### Q34.
##### A34.

##### Q35.
##### A35.

##### Q36.
##### A36.

##### Q37.
##### A37.

##### Q38.
##### A38.

##### Q39.
##### A39.

##### Q40.
##### A40.

##### Q41.
##### A41.

##### Q42.
##### A42.

##### Q43.
##### A43.

##### Q44.
##### A44.

##### Q45.
##### A45.

##### Q46.
##### A46.

##### Q47.
##### A47.

##### Q48.
##### A48.

##### Q49.
##### A49.

##### Q50.
##### A50.

---

#### G: Common HTML questions for freshers

---