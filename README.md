Here is a curated list of resources, question and exercises to go through that covers the essentials of being a competent full stack JS developer.

The contents have been broken down into **4** phases, covering the basics from HTML/CSS to APIs. It would be best to cover these phases in chronological order to gain a broad understanding from the basics to the more advanced topics.

# Phase 0

### A) Ice Breaker Questions

#### General Questions
Believe it or not, some people find that the most difficult part of the interview is the icebreaker portion that involves small talk 
and requires some clever improvisation on your part. You can prepare by knowing some of the questions potential employers might ask 
during this interview phase. Come up with a good story for each of the questions. If you don't have an answer for these, then maybe 
you are not as gung-ho about web design as you thought you were.

1. Have you learned something new or interesting lately?
   * Make sure you know all the relevant news and blogs. You should be reading them regardless, but doing so on a daily basis during your job search is important. Be ready to talk casually and fluently about the latest web trends.

2. Why did you get into coding, programming, etc.?
   * "Because I can make good $," "I don't like to dress up or shave," and "because I loved the movie Hackers," are not good enough answers. Well ... a comment about Hackers might fly but make sure you have a real backstory that describes your "Aha!" moment.
   
3. What is your preferred development environment?
   * This is your chance to talk shop and demonstrate some industry knowledge. Be prepared to talk about your favorite editor, browser, plug-ins, operating system, and other tools. Freshen up on your lingo.

4. What is the coolest thing you ever coded? Do you have any personal projects you are working on?
   * These two questions are interchangeable. Any developer worth his weight had to practice somewhere or on something before they landed their first gig. If not, how did you get this interview anyway?! Review your past experiences, and even if they were boring to you, figure out a new frame of reference that demonstrates passion and a zest for learning.

### B) General Website Optimization Questions
1. How do you optimize a website's assets?
   * There are a number of answers to this question: File concatenation, file compression, CDN Hosting, offloading assets, re-organizing and refining code, etc. Have a few ready.

2. What are three ways to reduce page load time?
   * Again there are many answers here: Reduce image sizes, remove unnecessary widgets, HTTP compression, put CSS at the top and script references at the bottom or in external files, reduce lookups, minimize redirects, caching, etc.

3. What kind of things must you be wary of when design or developing for multilingual sites?
   * Another problem with many solutions: setting the default language, using Unicode encoding, using the 'lang' attribute, being aware of standard font sizes and text direction, and language word length (may affect layout).

# Phase 1

### A) HTML

* [10 Typical HTML Exercises](https://github.com/sm2774us/full_stack_interview_prep_2021#a-10-typical-html-exercises)
* [16 Essential HTML5 Questions](https://github.com/sm2774us/full_stack_interview_prep_2021#b-16-essential-html5-questions)
* [28 Helpful HTML & HTML5 Questions & Answers](https://github.com/sm2774us/full_stack_interview_prep_2021#c-28-helpful-html--html5-questions--answers)
* [40 important HTML interview questions with answers](https://github.com/sm2774us/full_stack_interview_prep_2021#d-40-important-html-interview-questions-with-answers)
* [HTML questions and answers for freshers and experienced developers](https://github.com/sm2774us/full_stack_interview_prep_2021#e-html-questions-and-answers-for-freshers-and-experienced-developers)
* [Top 50 HTML Questions](https://github.com/sm2774us/full_stack_interview_prep_2021#f-top-50-html-questions)
* [Common HTML questions for freshers](https://github.com/sm2774us/full_stack_interview_prep_2021#g-common-html-questions-for-freshers)



### B) CSS

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
The code is all valid apart from the last image specified in the **`srcset`** attribute; **`320y`** isn't a valid value.
If the **`y`** is replaced with a **`w`**, it becomes valid though.

##### Q2. The `main` element
Can you explain the definition of the `main` element? What is its goal? Are the two specifications (WHATWG and W3C) in agreement on its definition?

##### A2.
The **`main`** element has two different definitions depending on the specification used.

The W3C specification [describes it](https://www.w3.org/TR/html51/grouping-content.html#the-main-element) as the main content of the page, that is,
the content that describes the main topic of a page or is the central functionality of an application.
The specification also states that a document must not include more than one **`main`** element.

The WHATWG specification doesn't assign any semantic value to the **`main`** element and [describes it](https://html.spec.whatwg.org/multipage/semantics.html#the-main-element)
as a container for the dominant contents of another element. Also, according to WHATWG, you don't have a limit in the number of times 
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
To improve the accessibility in older technologies that don't support the new semantic elements,
the role of **`header`**, **`navigation`**, **`main`**, **`article`**, and **`contentinfo`** have been added 
to the **`header`**, **`nav`**, **`main`**, **`article`**, and **`footer`** elements respectively.

Other improvements have been made on the search form. First of all the form has been marked using the **`search`** role.
Then, an explicit **`label`** element has been added to give context for the **`input`** field, and it has been associated with 
the **`input`** through the use of the **`for`** attribute.

##### Q4. The **`small`** element
Describe when it's appropriate to use the **`small`** element and provide an example.

##### A4.
In HTML 4.01 the **`small`** element was a presentational element to mark up smaller text. [In HTML5](https://www.w3.org/TR/html5/text-level-semantics.html#the-small-element)
it should be used semantically to represent legal disclaimers, caveats, and so on. The text may well be "small", but this isn't required.

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
unintended sublevel in the hierarchy. To understand what problem it tried to address, let's consider the following markup:

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
(i.e. **`alt=""`**). An empty value is recommended when the image shown is used for decorative purposes only and therefore isn't part of 
the content of the page. With regards to accessibility, if the **`alt`** attribute is empty, screen readers will ignore the image. 
This is highly recommended because using a value of something like "Content separator" will only disturb the user when this text is spoken.

##### Q7. The **`time`** element
Is it possible to express a date range using a single **`time`** element?

##### A7.
No, it isn't possible. The information can be expressed using two [time elements](https://www.w3.org/TR/html5/text-level-semantics.html#the-time-element) though.
For example to describe a time interval ranging from November 6, 2014 to November 9, 2014, a developer can write:

```html
<time datetime="2014-11-06">6</time>-
<time datetime="2014-11-09">9 November 2014</time>
```

##### Q8. **`meter`** and **`progress`**
What's the difference between the **`meter`** element and the **`progress`** element?

##### A8.
The [meter element](https://www.w3.org/TR/html5/forms.html#the-meter-element) represents a scalar measurement within a _known_ range,
or a fractional value. This element isn't a good fit to measure something like external temperature because it doesn't have a fixed range.
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

##### Q6. Discuss the differences between an HTML specification and a browser's implementation thereof.

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
This can include the section heading, the author's name, time and date of publication, table of contents, or other navigational information.

The `<article>` element is meant to house a self-contained composition that can logically be independently recreated outside of the page 
without losing it's meaining. Individual blog posts or news stories are good examples.

The `<section>` element is a flexible container for holding content that shares a common informational theme or purpose.

The `<footer>` element is used to hold information that should appear at the end of a section of content and contain additional 
information about the section. Author's name, copyright information, and related links are typical examples of such content.

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

#### C: 28 Helpful HTML & HTML5 Questions & Answers

---

##### Beginner HTML Questions

###### Q1. What is HTML?
###### A1.
HTML stands for **H**yper**T**ext **M**arkup **L**anguage. It is the dominant markup language for creating websites and anything that can be viewed in a web browser. If you want to get some extra bonus points, you can learn the history of HTML and throw in some obscure facts.

###### Q2. What is the difference between HTML elements and tags?
###### A2.
HTML elements communicate to the browser how to render text. When surrounded by angular brackets `<>` they form HTML tags. For the most part, tags come in pairs and surround text.

###### Q3. What is "Semantic HTML?"
###### A3.
Semantic HTML is a coding style where the tags embody what the text is meant to convey. 
In Semantic HTML, tags like `<b></b>` for bold, and `<i></i>` for italic should not be used, reason being they just represent formatting, and provide no indication of meaning or structure.
The semantically correct thing to do is use `<strong></strong>` and `<em></em>`. 
These tags will have the same bold and italic effects, while demonstrating meaning and structure (emphasis in this case).

###### Q4. What does `DOCTYPE` mean?
###### A4.
The term `DOCTYPE` tells the browser which type of HTML is used on a webpage. In turn, the browsers use `DOCTYPE` to determine how to render a page. 
Failing to use `DOCTYPE` or using a wrong `DOCTYPE` may load your page in Quirks Mode. See example:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

###### Q5. What's the difference between standards mode and quirks mode?
###### A5.
Quirks Mode is a default compatibility mode and may be different from browser to browser, which may result to a lack of consistency in appearance from browser to browser.

###### Q6. What are the limitations when serving XHTML pages?
###### A6.
Perhaps the biggest issue is the poor browser support XHTML currently enjoys. Internet Explorer and a number of other user agents cannot parse XHTML as XML. Thus, it is not the extensible language it was promised to be. There are many other issues. Take your pick.

###### Q7. How many HTML tags are should be used for the most simple of web pages?
###### A7.
8 total. 4 pairs of tags.

> `<HTML>`
>
> `<HEAD>`
>
> `<TITLE>Simplest page ever!</TITLE>`
>
> `</HEAD>`
>
> `<BODY>`
>
> `Doesn't get simpler than this.`
>
> `</BODY>`
>
> `</HTML>`
>

###### Q8. How do you make comments without text being picked up by the browser?
###### A8.
Comments are used to explain and clarify code or to prevent code from being recognized by the browser. Comments start with "`*<!--`" and end with " `-->`".

###### Q9. What is the difference between linking to an image, a website, and an email address?
###### A9.
To link an image, use `<img>` tags. You need specify the image in quotes using the source attribute, `src` in the opening tag. 
For hyperlinking, the anchor tag, `<a>`, is used and the link is specified in the `href` attribute. Text to be hyperlinked should be 
placed between the anchor tags. Little known fact: href stands for "hypertext reference." When linking to an email, the `href` 
specification will be `"mailto:send@here.com."` See examples below:

```html
<a href="skilprelaunch2.wpengine.com">Skilledup</a>
```

```html
<a href="brad@skilledup.com">Email Me</a>
```

###### Q10. My hyperlink or image is not displaying correctly, what is wrong with it?
###### A10.
It could be any number of things, but the most common mistakes are leaving out a tag bracket or quote missing for `href`, `src`, or `alt` 
text may be the issue. You should also verify the link itself.

###### Q11. What is the syntax difference between a bulleted list and numbered list?
###### A11.
Bulleted lists use the `<ul>` tag, which stands for "unordered," whereas `<ol>` is used to create an ordered list.

###### Q12. What is the difference between `<div>` and `<frame>`?
###### A12.
A `<div>` is a generic container element for grouping and styling, whereas a `<frame>` creates divisions within a web page and 
should be used within the `<frameset>` tag. The use of `<frame>` and `<frameset>` are no longer popular and are now being replaced 
with the more flexible `<iframe>`, which has become popular for embedding foreign elements (ie. Youtube videos) into a page.

##### HTML5 Interview Questions

###### Q13. What is the difference between the application model of HTML and HTML5?
###### A13.
Trick question, there is no difference. HTML5 is a continuum of HTML and just a souped up version of the original HTML. There has been no major paradigm shift.

###### Q14. Ok, what's the real difference between HTML and HTML5?
###### A14.
There are many. From a broader perspective, HTML was a simple language for laying out text and images on a webpage, whereas HTML5 can be viewed as an application development platform that does what HTML does that and more, including better support for audio, video, and interactive graphics. It has a number of new elements, supports offline data storage for applications, and has more robust exchange protocols. Thus, proprietary plug-in technologies like Adobe Flash, Microsoft Silverlight, Apache Pivot, and Sun JavaFX are no longer needed, because browsers can now process these elements without additional requirements.

###### Q15. What is the new `DOCTYPE`?
###### A15.
Instead of typing out a ridiculously long `DOCTYPE` statement to tell the browser how to render your webpage, this long line of code has been truncated to `<!doctype html>`.

###### Q16. What are some new HTML5 markup elements?
###### A16.
There are several: `<article>`, `<aside>`, `<bdi>`, `<command>`, `<details>`, `<figure>`, `<figcaption>`, `<summary>`, `<header>`, `<footer>`, `<hgroup>`, `<mark>`, `<meter>`, `<nav>`, `<progress>`, `<ruby>`, `<rt>`, `<section>`, `<time>`, and `<wpr>`.

###### Q17. What elements have disappeared?
###### A17.
As mentioned above, `<frame>` and `<frameset>` have been eliminated. Other elements that are no longer supported include: `<noframe>`, `<applet>`, `<bigcenter>` and `<basefront>`.

###### Q18. What are the new media-related elements in HTML5?
###### A18.
HTML5 has strong support for media. There are now special `<audio>` and `<video>` tags. There are additional A/V support tags as well: `<embed>` is a container for 3rd party applications. `<track>` is for adding text tracks to media. `<source>` is useful for A/V media from multiple sources.

###### Q19. What are the new image elements in HTML5?
###### A19.
Canvas and WebGL. `<Canvas>` is a new element that acts as a container for graphical elements like images and graphics. Coupled with JavaScript, it supports 2D graphics. WebGL stands for Web Graphics Language, a free cross-platform API that is used for generating 3D graphics in web browsers.

###### Q20. What is the difference between SVG and `<Canvas>`?
###### A20.
`<Canvas>` is an element that manipulates two-dimensional (2D) pixels while Scalable Vector Graphics works in 2D and three-dimensional (3D) vectors. Essentially, `<Canvas>`is to SVG as Photoshop is to Illustrator.

###### Q21. What are some new input attributes in HTML5?
###### A21.
There are many new form elements including: `datalist`, `datetime`, `output`, `keygen`, `date`, `month`, `week`, `time`, `number`, `range`, `email`, and `url`.

###### Q22. What are `data`**-** attributes good for?
###### A22.
The HTML5 `data`**-** attribute is a new addition that assigns custom data to an element. It was built to store sensitive or private data that is exclusive to a page or application, for which there are no other matching attributes or elements.

###### Q23. What is the difference between HTML5 interaction in Sencha and Twitter/Bootstrap?
###### A23.
Sencha and Twitter/Bootstrap are both HTML development frameworks that integrate HTML5, CSS3, and JavaScript. The major difference is that in Sencha, the three languages are all comingled together in code, whereas in Bootstrap, HTML and CSS and decoupled.

###### Q24. What purpose do Work Workers serve and what are some of their benefits?
###### A24.
Web Workers are background scripts that do not interfere with the user interface or user interactions on a webpage, allowing HTML to render uninterrupted while JavaScript works in the background.

###### Q25. Describe the difference between cookies, `sessionStorage`, and `localStorage`.
###### A25.
Cookies are small text files that websites place in a browser for tracking or login purposes. Meanwhile, `localStorage` and `sessionStorage` are new objects, both of which are storage specifications but vary in scope and duration. Of the two, `localStorage` is permanent and website-specific whereas `sessionStorage` only lasts as long as the duration of the longest open tab.

###### Q26. What are some of the major new API's that come standard with HTML5?
###### A26.
To name a few: Media API, Text Track API, Application Cache API, User Interaction, Data Transfer API, Command API, Constraint Validation API, and the History API.

###### Q27. What is the difference in caching between HTML5 and the old HTML?
###### A27.
An important feature of HTML5 is the Application Cache. It creates an offline version of a web application. and stores website files such as HTML files, CSS, images, and JavaScript, locally. It is a feature that speeds up site performance.

###### Q28. Did you remember your portfolio?
###### A28.
If you have past experience, all eyes will be on your work portfolio.

**Tips:**
---
Whether you learned your web development skills through online self-study or through a traditional classroom, chances are, you're at least half-ready  for an interview, especially if you were diligent in your studies. If that's the case, these HTML5 interview questions will serve as a great refresher. If not, then they are a good gauge of your employment prospects unless you really prepare for the interview. Either way, relax and don't sound like a robot spitting out recorded answers. Over-rehearsing won't land you the job but it may get you an interview horror story. Remember that one of the most important things you can do is to bring a portfolio of past web work examples. Beyond knowing the ins and outs of HTML, it is the one thing that can truly demonstrate the quality of your work, and it can open the door to many web development jobs. Good luck on your interview!

---

#### D: 40 important HTML interview questions with answers

---

##### Q1. What is the relationship between SGML, HTML, XML and XHTML ?
##### A1.
SGML (**S**tandard **G**eneralized **M**arkup **L**anguage) is a standard which tells how to specify 
document markup. It's only a Meta language which describes how a document markup should 
be. HTML is a markup language which is described using SGML. 
So by SGML they created DTD which the HTML refers and needs to adhere to the same. So you 
will always find `DOCTYPE` attribute at the top of HTML page which defines which `DTD` is 
used for parsing purpose.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> 
```

Now parsing SGML was a pain so they created XML to make things better. XML uses SGML. 
For example in SGML you have to start and end tags but in XML you can have closing tags 
which close automatically (`</customer>`).

XHTML was created from XML which was used in HTML 4.0. So for example in SGML 
derived HTML `</br>` is not valid but in XHTML it's valid. You can refer XML DTD as shown 
in the below code snippet.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

![SGML-HTML-XML-and-XHTML-Relationship-image](./assets/SGML-HTML-XML-and-XHTML-Relationship.PNG)

In short SGML is the parent of every one. Older HTML utilizes SGML and HTML 4.0 uses 
XHTML which derived from XML.

##### Q2. What is HTML 5
##### A2.
HTML 5 is a new standard for HTML whose main target is to deliver everything without need to 
any additional plugins like flash, Silverlight etc. It has everything from animations, videos, rich 
GUI etc.
HTML5 is cooperation output between World Wide Web Consortium (W3C) and the Web 
Hypertext Application Technology Working Group (WHATWG).

##### Q3. In HTML 5 we do not need DTD why?
##### A3.
HTML 5 does not use SGML or XHTML it's completely a new thing so you do not need to refer 
DTD. For HTML 5 you just need to put the below doctype code which makes the browser 
identify that this is a HTML 5 document.

```html
<!DOCTYPE html
```

##### Q4. If I do not put <! DOCTYPE html> will HTML 5 work?
##### A4.
No, browser will not be able to identify that it's a HTML document and HTML 5 tags will not 
function properly.

##### Q5. Which browsers support HTML 5?
##### A5.
Almost all browsers i.e. Safari, Chrome, Firefox, Opera, Internet Explorer support HTML 5.

##### Q6. How is the page structure of HTML 5 different from HTML 4 or previous HTML?
##### A6.
A typical web page has headers, footers, navigation, central area and side bars. Now if we want 
to represent the same in HTML 4 with proper names to the HTML section we would probably 
use a DIV tag. 
But in HTML 5 they have made it more clear by creating element names for those sections which
makes your HTML more readable.

![HTML-4_layout_vs_HTML-5_layout-image](./assets/HTML-4_layout_vs_HTML-5_layout.PNG)

Below are more details of the HTML 5 elements which form the page structure.
 * `<header>`: Represents header data of HTML.
 * `<footer>`: Footer section of the page.
 * `<nav>`: Navigation elements in the page.
 * `<article>`: Self-contained content.
 * `<section>`: Used inside article to define sections or group content in to sections.
 * `<aside>`: Represent side bar contents of a page.

##### Q7. What is datalist in HTML 5?
##### A7.
Datalist element in HTML 5 helps to provide autocomplete feature in a textbox as shown below.

![HTML5-Datalist-element-image](./assets/HTML5-Datalist-element.PNG)

Below is the HTML code for DataList feature:-
```html
<input list="Country">
<datalist id="Country">
 <option value="India">
 <option value="Italy"> <option value="Iran">
 <option value="Israel">
 <option value="Indonesia">
</datalist>
```

##### Q8. What are the different new form element types in HTML 5?
##### A8.
There are 10 important new form elements introduced in HTML 5:-

1. Color.
2. Date
3. Datetime-local
4. Email 
5. Time 
6. Url
7. Range
8. Telephone 
9. Number
10. Search

Let's understand these elements step by step.

If you want to show color picker dialog box.

```html
<input type="color" name="favcolor">
```

![HTML-5-color-picker-dialog-box-image](./assets/HTML-5-color-picker-dialog-box.PNG)

If you want to show calendar dialog box.

```html
<input type="date" name="bday">
```

![HTML-5-calendar-dialog-box-image](./assets/HTML-5-calendar-dialog-box.PNG)

If you want to show calendar with local time.

```html
<input type="datetime-local" name="bdaytime">
```

![HTML-5-calendar-dialog-box-with-localtime-image](./assets/HTML-5-calendar-dialog-box-with-localtime.PNG)

If you want to create a HTML text with email validation we can set the type as "email".

```html
<input type="email" name="email">
```

![HTML-5-email-validation-image](./assets/HTML-5-email-validation.PNG)

For URL validation set the type as "url" as shown in the below HTML code.

```html
<input type="url" name="sitename">
```

![HTML-5-URL-validation-image](./assets/HTML-5-URL-validation.PNG)

For URL validation set the type as "url" as shown in the below HTML code.
If you want to display textbox with number range you can set type to number.

```html
<input type="number" name="quantity" min="1" max="5">
```

![HTML-5-number-range-textbox-image](./assets/HTML-5-number-range-textbox.PNG)

If you want to display a range control you can use type as range.

```html
<input type="range" min="0" max="10" step="2" value="6">
```

![HTML-5-range-control-image](./assets/HTML-5-range-control.PNG)

Want to make text box as search engine box.

```html
<input type="search" name="googleengine">
```

Want to only take time input.

```html
<input type="time" name="usr_time">
```

If you want to make text box to accept telephone numbers.

```html
<input type="tel" name="mytel">
```

##### Q9. What is output element in HTML 5
##### A9.
Output element is needed when you need calculation from two inputs to be summarized in to a 
label. For instance you have two textboxes ( see the below figure) and you want to add numbers 
from these textboxes and send them to a label.

[HTML-5-output-element-image](./assets/HTML-5-output-element.PNG)

Below goes the code of how to use output element with HTML 5.

```html
<form onsubmit="return false" oninput="o.value = parseInt(a.value) + 
parseInt(b.value)">
 <input name="a" type="number"> +
 <input name="b" type="number"> =
 <output name="o"></output>
</form>
```

You can also replace "parseInt" with "valueAsNumber" for simplicity. You can also use "for" in 
the output element for more readability.

```html
<output name="o" for="a b"></output>
```

##### Q10. What is SVG?
##### A10.
SVG stands for **S**calable **V**ector **G**raphics. It's a text based graphic language which draws images 
using text, lines, dots etc. This makes it lightweight and renders faster.

##### Q11. Can we see a simple example of SVG using HTML 5?
##### A11.
Let's say we want to display the below simple line using HTML 5 SVG.

![HTML-5-SVG-Simple-Line-Example-image](./assets/HTML-5-SVG-Simple-Line-Example.PNG)

Below is how the code of HTML 5. You can see the SVG tag which encloses the polygon tag for 
displaying the star image.

```svg
<svg id="svgelem" height="200" xmlns="http://www.w3.org/2000/svg">
 <line x1="0" y1="0" x2="200" y2="100"
 style="stroke:red;stroke-width:2"/>
</svg>
```

##### Q12. What is canvas in HTML 5?
##### A12.
Canvas is an HTML area on which you can draw graphics.

##### Q13. So how can we draw a simple line on Canvas?
##### A13.
* Define the Canvas area.
* Get access to canvas context area.
* Draw the graphic.

**Define the canvas area**

So to define canvas area you need to use the below HTML code. This defines the area on which you can draw.

```html
<canvas id="mycanvas" width="600" height="500" style="border:1px solid #000000;"></canvas>
```

**Get access to canvas area**

To draw on the canvas area we need to first get reference of the context section. Below is the code for canvas section.

```JavaScript
var c=document.getElementById("mycanvas");
var ctx=c.getContext("2d");
```

**Draw the graphic**

Now once you have access to the context object we can start drawing on the context. So first call the "move" method and start from a point, 
use line method and draw the line and then apply stroke over it.

```JavaScript
ctx.moveTo(10,10);
ctx.lineTo(200,100);
ctx.stroke();
```

Below is the complete code.

```JavaScript
<body onload="DrawMe();">
<canvas id="mycanvas" width="600" height="500" style="border:1px solid 
#000000;"></canvas>
</body>
<script>
function DrawMe()
{
  var c=document.getElementById("mycanvas");
  var ctx=c.getContext("2d");
  ctx.moveTo(10,10);
  ctx.lineTo(200,100);
  ctx.stroke();
}
```

You should get the below output.

![HTML-5-Canvas-Simple-Line-Example-image](./assets/HTML-5-Canvas-Simple-Line-Example.PNG)


##### Q14. What is the difference between Canvas and SVG graphics?
> Note :- If you see the previous two questions both canvas and SVG can draw 
>
> graphics on the browser. So in this question interviewer wants to know when 
>
> will you use what.
>

##### A14.

| SVG                                                       | Canvas                                                 |
| --------------------------------------------------------- | ------------------------------------------------------ |
| Here's it's like draw and remember. In other words any    | Canvas is like draw and forget. Once something is      |  
| shape drawn by using SVG can be remembered and            | drawn you cannot access that pixel and manipulate it.  |
| manipulated and browser can render it again.              |                                                        |

| SVG                                                       | Canvas                                                 |
| --------------------------------------------------------- | ------------------------------------------------------ |
| SVG is good for creating graphics like CAD software's     | Canvas is good for draw and forget scenarios like      |
| where once something is drawn the user wants to           | animation and games.                                   |
| manipulate it.                                            |                                                        |

| SVG                                                       | Canvas                                                 |
| --------------------------------------------------------- | ------------------------------------------------------ |
| This is slow as it needs to remember the co-ordinates for | This is faster as there is no intention of remembering |
| later manipulations.                                      | things later.                                          |

| SVG                                                       | Canvas                                                 |
| --------------------------------------------------------- | ------------------------------------------------------ |
| We can have event handler associated with the drawing     | Here we cannot associate event handlers with drawing   |
| object.                                                   | objects as we do not have reference of them.           |

| SVG                                                       | Canvas                                                 |
| --------------------------------------------------------- | ------------------------------------------------------ |
| Resolution independent.                                   | Resolution dependent.                                  |

##### Q15. How to draw rectangle using Canvas and SVG using HTML 5 ?
##### A15.
HTML 5 code Rectangle code using SVG.
```svg
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
 <rect width="300" height="100"
 style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/>
</svg>
```

HTML 5 Rectangle code using canvas.
```JavaScript
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.rect(20,20,150,100);
ctx.stroke();
```

```svg
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
 <circle cx="100" cy="50" r="40" stroke="black"
 stroke-width="2" fill="red"/>
</svg
```

```JavaScript
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;
context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 5;
context.strokeStyle = '#003300';
context.stroke();
```

```html
<!DOCTYPE html>
<html>
<body onload="DrawMe();">
<svg width="500" height="100">
 <circle id="circle1" cx="20" cy="20" r="10"
 style="stroke: none; fill: #ff0000;"/>
</svg>
</body>
<script>
var timerFunction = setInterval(DrawMe, 20);
alert("ddd");
function DrawMe()
{
var circle = document.getElementById("circle1");
var x = circle.getAttribute("cx");
var newX = 2 + parseInt(x);
if(newX > 500) 
{
 newX = 20;
}
 circle.setAttribute("cx", newX);
}
</script>
</html>
```

##### Q16. What are selectors in CSS?
##### A16.
Selectors help to select an element to which you want to apply a style. For example below is a 
simple style called as ‘intro” which applies red color to background of a HTML element.

```css
<style>
.intro
{
background-color:red;
}
</style>
```

To apply the above “intro” style to div we can use the "class" selector as shown below.

```html
<div class="intro">
  <p>My name is Shivprasad koirala.</p>
  <p>I write interview questions.</p>
</div>
```

##### Q17. How can you apply CSS style using ID value?
##### A17.
So let's say you have a HTML paragraph tag with id "mytext" as shown in the below snippet.

```html
<p id="mytext">This is HTML interview questions.</p>
```

You can create a style using "#" selector with the "id" name and apply the CSS value to the 
paragraph tag. So to apply style to "mytext" element we can use "#mytext" as shown in the 
below CSS code.

```css
<style>
#mytext
{
background-color:yellow;
}
</style>
```

##### Q18. Quick revision of some important selectors.
##### A18.
Set all paragraph tags back ground color to yellow.
```css
P,h1
{
  background-color:yellow;
}
```

Sets all paragraph tags inside div tag to yellow background.
```css
div p
{
  background-color:yellow;
}
```

Sets all paragraph tags following div tags to yellow background.
```css
div+p
{
  background-color:yellow;
}
```

Sets all attribute with “target” to yellow background.
```html
a[target]
{
  background-color:yellow;
}

<a href="http://www.questpond.com">ASP.NET interview questions</a>
<a href="http://www.questpond.com" target="_blank">c# interview questions</a>
<a href="http://www.questpond.org" target="_top">.NET interview questions with answers</a>
```

Set all elements to yellow background when control gets focus.
```css
input:focus
{
  background-color:yellow;
}
```

Set hyperlinks according to action on links.
```css
a:link {color:green;}
a:visited {color:green;}
a:hover {color:red;}
a:active {color:yellow;}
```

##### Q19. What is the use of column layout in CSS?
##### A19.
CSS column layout helps you to divide your text in to columns. For example consider the below 
magazine news which is one big text but we need to divide the same in to 3 columns with a 
border in between. That's where HTML 5 column layout comes to help.

![CSS-Column-Layout-image](./assets/CSS-Column-Layout.PNG)

To implement column layout we need to specify the following:-
* How many columns we want to divide the text in to ?

To specify number of columns we need to us column-count. "webkit" and "moz-column" are needed for chrome and firefox respectively.
```css
-moz-column-count:3; /* Firefox */
-webkit-column-count:3; /* Safari and Chrome */
column-count:3;
```

* How much gap we want to give between those columns ?
```css
-moz-column-gap:40px; /* Firefox */
-webkit-column-gap:40px; /* Safari and Chrome */
column-gap:20px;
```

* Do you want to draw a line between those columns , if yes how much thick ?
```css
-moz-column-rule:4px outset #ff00ff; /* Firefox */
-webkit-column-rule:4px outset #ff00ff; /* Safari and Chrome */
column-rule:6px outset #ff00ff;
```

Below is the complete code for the same.

```html
<style>
.magazine
{
-moz-column-count:3; /* Firefox */
-webkit-column-count:3; /* Safari and Chrome */
column-count:3;
-moz-column-gap:40px; /* Firefox */
-webkit-column-gap:40px; /* Safari and Chrome */
column-gap:20px;
-moz-column-rule:4px outset #ff00ff; /* Firefox */
-webkit-column-rule:4px outset #ff00ff; /* Safari and Chrome */
column-rule:6px outset #ff00ff;
}
</style>
```

You can then apply the style to the text by using the class attribute.

```html
<div class="magazine">
Your text goes here which you want to divide in to 3 columns.
</div>
```

##### Q20. Can you explain CSS box model?
##### A20.
CSS box model is a rectangular space around a HTML element which defines border, padding and margin. 

Border: - This defines the maximum area in which the element will be contained. We can make the border visible, invisible, define height and width etc.

Padding: - This defines the spacing between border and element.

Margin: - This defines the spacing between border and any neighboring elements.

![CSS-Box-Model-1-image](./assets/CSS-Box-Model-1.PNG)

For instance below is a simple CSS code which defines a box with border , padding and margin values.

```css
.box {
 width: 200px;
 border: 10px solid #99c;
 padding: 20px;
 margin: 50px;
}
```

Now if we apply the above CSS to a DIV tag as shown in the below code , your output would be as shown in the figure below. 
I have created two test "Some text" and "Some other text" so that we can see how margin property functions.

```html
<div align="middle" class="box">
Some text
</div>

Some other text
```

![CSS-Box-Model-2-image](./assets/CSS-Box-Model-2.PNG)

##### Q21. Can you explain some text effects in CSS 3?
##### A21.
Here the interviewer is expecting you to answer one of two text effects by CSS. Below are two effects which are worth noting.

1. Shadow text effect

```css
.specialtext
{
  text-shadow: 5px 5px 5px #FF0000;
}
```

![CSS3-Text-Effects-1-Shadow-Text-Effect-image](./assets/CSS3-Text-Effects-1-Shadow-Text-Effect.PNG)

2. Word wrap effect

```css
<style> 
.breakword
{word-wrap:break-word;}
</style>
```

![CSS3-Text-Effects-2-Word-Wrap-Effect](./assets/CSS3-Text-Effects-2-Word-Wrap-Effect.PNG)

##### Q22. What are web workers and why do we need them ?
##### A22.
Consider the below heavy for loop code which runs above million times. 

```JavaScript
function SomeHeavyFunction() {
  for (i = 0; i < 10000000000000; i++) {
    x = i + x;
  }
}
```

Let's say the above for loop code is executed on a HTML button click. Now this method execution is synchronous.
In other words the complete browser will wait until the for loop completes.

```html
<input type="button" onclick="SomeHeavyFunction();" />
```

This can further lead to browser getting freezed and unresponsive with an error message as  shown in the screen below.

![web-page-unresponsive-browser-message-image](./assets/web-page-unresponsive-browser-message.PNG)

So if we can move this heavy for loop in a JavaScript file and run it asynchronously that means 
the browser does need to wait for the loop then we can have a more responsive browser. That's 
what web worker are for.

Web worker helps to execute JavaScript file asynchronously.

##### Q23. What are the restrictions of Web Worker thread ?
##### A23.
Web worker threads cannot modify HTML elements, global variables and some window  properties like Window.Location.
You are free to use javascript data types, XMLHttpRequest calls etc.

##### Q24. So how do we create a worker thread in JavaScript?
##### A24.
To create a worker thread we need to pass the JavaScript file name and create the worker object.

```JavaScript
var worker = new Worker("MyHeavyProcess.js");
```

To send message to the worker object we need to use "PostMessage", below is the code for the same. 

```JavaScript
worker.postMessage();
```

When the worker thread sends data we get it in the "OnMessage" event on the callers end.

```JavaScript
worker.onmessage = function (e) {
document.getElementById("txt1").value = e.data;
};
```

![webworker-thread-image](./assets/webworker-thread.PNG)

The heavy loop is in the "MyHeavyProcess.js" javascript file, below is the code for the same. 
When the JavaScript file wants to send message he uses "postmessage" and any message sent from the caller 
is received in the "onmessage" event. 

```JavaScript
var x =0
self.onmessage = function (e) {
  for (i = 0; i < 1000000000; i++) {
    x = i + x;
  }
  self.postMessage(x); 
};
```

##### Q25. How to terminate a web worker
##### A25.

```JavaScript
w.terminate();
```

##### Q26. Why do we need HTML 5 server-sent events?
##### A26.
One of the common requirements in web world is getting updates from the server. Take the example 
of a stock ticker application where the browser has to take regular updates from the server for the
recent stock value.

![HTML-5-Server-Side-Events-image](./assets/HTML-5-Server-Side-Events.PNG)

Now to implement this kind of requirement developers normally write some kind of PULL code 
which goes to the server and fetches data in certain interval. Now PULL solution is good but it 
makes the network chatty with lot of calls and also it adds load on the server.
So rather than PULL it would be great if we can have some kind of PUSH solution. In simple 
words when the server has updates it will send updates to the browser client. That can be 
achieved by using "SERVER SENT EVENTS".

So the first thing the browser needs to do is connect to the server source which will send updates.
Let's say we have page "stock.aspx" which sends stock updates. So to connect to the page we 
need to use attach to the event source object as shown in the below code.

```JavaScript
var source = new EventSource("stock.aspx");
```

We also need to attach the function where we will receive messages when server sends update. 
For than we need to attach function to the "onmessage" event as shown in the below code.
```JavaScript
source.onmessage = function (event) {
  document.getElementById("result").innerHTML += event.data + "<br>";
};
```
 
Now from the server side we need to send events. Below are some lists of important events with 
command that needs to be sent from the server side. 

| Event | Command |
| :-    | :-      |
| Send data to the client. | data: hello |
| Tell client to retry in 10 seconds | retry: 10000 |
| Raise a specific event with data | event: success<br/>data: Your are logged in |

So for example if we want to send data below is the ASP.NET code for the same. Please note the content type is set to text/event.

```C#
Response.ContentType="text/event-stream";
Response.Expires=-1;
Response.Write("data: " + DateTime.Now.ToString());
Response.Flush();
```

To retry after 10 second below is the command.

```C#
Response.Write("retry: 10000");
```

If you want to attach an event we need to use the "addEventListener" event as shown in the below code.

```JavaScript
source.addEventListener('message', function(e) {
  console.log(e.data);
}, false);
```

From the server side the below message will trigger the "message" function of javascript.

```JSON
event: message
data : hello
```

##### Q27. What is local storage concept in HTML 5?
##### A27.
Many times we would like to store information about the user locally in the computer. For 
example let's say user has half-filled a long form and suddenly the internet connection breaks 
off. So the user would like you to store this information locally and when the internet comes 
back.He would like to get that information and send it to the server for storage.

Modern browsers have storage called as "Local storage" in which you can store this information.

##### Q28. How can we add and remove data from local storage?
##### A28.
Data is added to local storage using "key" and "value". Below sample code shows country data "India" added with key value "Key001".

```JavaScript
localStorage.setItem("Key001","India");
```

To retrieve data from local storage we need to use "getItem" providing the key name.

```JavaScript
var country = localStorage.getItem("Key001");
```

You can also store JavaScript object's in the local storage using the below code.

```JavaScript
var country = {};
country.name = "India";
country.code = "I001";
localStorage.setItem("I001", country);
var country1 = localStorage.getItem("I001");
```

If you want to store in JSON format you can use "JSON.stringify" function as shown in the  below code.

```JavaScript
localStorage.setItem("I001",JSON.stringify(country));
```

##### Q29. What is the lifetime of local storage?
##### A29.
Local storage does not have a life time it will stay until either the user clear it from the browser 
or you remove it using JavaScript code

##### Q30. What is the difference between local storage and cookies?
##### A30.
|    | Cookies | Local storage |
| :- | :-      | :-            |
| **Client side / Server side** | Data accessible both at client side and<br/>server side. Cookie data is sent to the<br/>server side with every request. | Data is accessible only at the local<br/>browser side. Server cannot access local<br/>storage until deliberately sent to the<br/>server via POST or GET |
| **Size**                      | 4095 bytes per cookie. | 5 MB per domain. |
| **Expiration**                | Cookies have expiration attached to it.<br/>So after that expiration the cookie and<br/>the cookie data get's deleted. | There is no expiration data. Either the<br/>end user needs to delete it from the<br/>browser or programmatically using<br/>JavaScript we need to remove the same |

##### Q31. What is session storage and how can you create one?
##### A31.
Session storage is same like local storage but the data is valid for a session. In simple words the data is deleted as soon as you close 
the browser. To create a session storage you need to use "sessionStorage.variablename".

In the below code we have a created a variable called as "clickcount".

If you refresh the browser the count increases. But if you close the browser and start again the "clickcount" variable starts from zero.

```JavaScript
if(sessionStorage.clickcount) {
  sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
} else {
  sessionStorage.clickcount = 0;
}
```

##### Q32. What is difference between session storage and local storage?
##### A32.
Local storage data persists forever but session storage is valid until the browser is open, as soon 
as the browser closes the session variable resets.

##### Q33. What is WebSQL?
##### A33.
WebSQL is a structured relational database at the client browser side. It's a local RDBMS inside the browser on which you can fire SQL queries.

##### Q34. Is WebSQL a part of HTML 5 specification?
##### A34.
No, many people label it as HTML 5 but it’s not part of HTML 5 specification. The specification is based around SQLite

##### Q35. So how can we use WebSQL ?
##### A35.
The first step we need to do is open the database by using “OpenDatabase” function as shown below. The first argument is the name of the database, the next is the version, then a simple 
textual title and finally the size of the database.

```JavaScript
var db=openDatabase('dbCustomer','1.0','Customer app’, 2 * 1024 * 1024);
```

To execute SQL we then need to use "transaction" function and call "executeSql" function to fire SQL.

```JavaScript
db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS tblCust(id unique, customername)');
  tx.executeSql('INSERT INTO tblcust (id, customername) VALUES(1, "shiv")');
  tx.executeSql('INSERT INTO tblcust (id, customername) VALUES (2, "raju")');
}
```

In case you are firing “select” query you will get data is “results” collection which we can loop and display in the HTML UI.

```JavaScript
db.transaction(function (tx) {
  tx.executeSql('SELECT * FROM tblcust', [], function (tx, results) {
    for (i = 0; i < len; i++) {
      msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
      document.querySelector('#customer).innerHTML += msg;
    }
  }, null);
});
```

##### Q36. What is application cache in HTML5?
##### A36.
One of the most demanded things by end user is offline browsing. In other words if internet connection is not available page should come 
from browser cache i.e. offline and application cache helps you to achieve the same.

Application cache helps you to specify which files should be cached and not cached.


##### Q37. So how do we implement application cache in HTML 5 ?
##### A37.
The first thing in we need to specify is the "manifest" file. "manifest" file helps you to define 
how your caching should work. Below is the structure of the manifest file:

```
CACHE MANIFEST
# version 1.0
CACHE :
Login.aspx
```

* All manifest file starts with CACHE MANIFEST statement.
* #( hash tag) helps to provide the version of the cache file.
* CACHE command specifies which files needs to be cached.
* The content type of the manifest file should be "text/cache-manifest".

Below is how cache manifest has been provided using ASP.NET C#.

```C#
Response.ContentType = "text/cache-manifest";
Response.Write("CACHE MANIFEST \n");
Response.Write("# 2012-02-21 v1.0.0 \n");
Response.Write("CACHE : \n");
Response.Write("Login.aspx \n");
Response.Flush();
Response.End();
```

One the cache manifest file is created the next thing is to provide the link of the manifest file in 
the HTML page as shown below.

```html
<html manifest="cache.aspx">
```

When the above file runs first time it gets added in the browser application cache and in case server goes down the page is served from the application cache.

##### Q38. So how do we refresh the application cache of the browser?
##### A38.
Application cache is removed by changing version number to a new version number as specified in the "#" tag in the below code.

```
CACHE MANIFEST
# version 2.0(new)
CACHE :
Login.aspx
Aboutus.aspx
NETWORK :
Pages.aspx
```

##### Q39. What is fallback in Application cache?
##### A39.
Fallback in application cache helps you to specify the file which will displayed if the server is 
not reachable. For instance in the below manifest file we are saying if someone hits "/home" and 
if the server is not reachable then "homeoffline.html" file should be served. 

```
FALLBACK:
/home/ /homeoffline.html
```

##### Q40. What is network in application cache ?
##### A40.
Network command says files which should not be cached. For example in the below code we are saying that "home.aspx" should never be 
cached and or available offline.

```
NETWORK:
home.aspx
```

---

#### E: HTML questions and answers for freshers and experienced developers

---

##### Q1. Do all HTML tags come in pair?
##### A1.
No, not all HTMLS tags come in pair. For e.g. `<img>`, `<br>`.

##### Q2. What are some of the common lists that can be used when designing a page?
##### A2.
Some of the common lists that can be used are:

a) Ordered list
b) Unordered list
c) Definition list
d) Menu list
e) Directory list

##### Q3. What is the advantage of collapsing white space?
##### A3.
* The browser collapses the multiple white spaces into a single white space in HTML.
* This allows the developers to arrange the HTML code in a well organized and legible format.

##### Q4. Is it possible to list elements straight in an html file?
##### A4.
Yes, it is possible with the use of indents.

##### Q5. Does a hyperlink apply only to text?
##### A5.
* No. The hyperlinks can be applied to both text as well as the images.
* It means that even the images can become clickable links with a capability to take the visitor to the next page.
* This can be done simply by using `<a href>` tag.

##### Q6. What hierarchy is being followed when in style sheets?
##### A6.
* Inline style takes priority over embedded style sheets.
* Embedded style take priority over external style sheets.
* If a single selector includes three different style definitions, the definition that is closest to the actual tag gets the priority.

##### Q7. What happens if the list-style-type property is used on a non-list element like a paragraph?
##### A7.
* Here the property will be ignored without having any effect on the paragraph.

##### Q8. What is the advantage of using frames?
##### A8.
* Frames make it easier to navigate through a site.
* The links that appear in the frame can appear through out the site.

##### Q9. How can I hide my source?
##### A9.
* No. you can’t hide your source as it is required by the browser to display your document.

##### Q10. How will you align a table to the right or left?
##### A10.
* To align the table to the right, you can use <TABLE ALIGN="right">
* To align the table to the left, you can use <TABLE ALIGN="left">

##### Q11. Why doesn't **`<TABLE WIDTH="100%">`** use the full browser width?
##### A11.
* This is because the graphical browser is designed to leave a margin between the display area and actual content.
* The navigator also leaves some space for the scroll bar on the right side of the display area. Though, if the page is not long enough, the scroll bar doesn’t appear.

##### Q12. How would you automatically transfer your visitors to a new web page?
##### A12.
* You can do it with the help of meta tag mentioned below:
```html
<META HTTP-EQUIV="Refresh" CONTENT="2"; URL="http://www.yourname.com">
```
* Place this tag between `<HEAD></HEAD>`.
* It will load yousite.com in 2 seconds.

##### Q13. You want only a vertical scrollbar and no horizontal scrollbar on your page. How would you do it?
##### A13.
* This can be done by defining the frame with SCROLLING = auto and having content to just fit into this frame.
* SCROLLING="yes" gets the scroll bar on both the sides, even when not needed.
* SCROLLING="no" doesn’t get the scrollbars at all, even when they are needed.

##### Q14. How do you refer to the .css file in the web page?
##### A14.
* .css file in the web page can be referred with the use of `<link>` tag.
* It should be kept between `<head></head>` tag.
Example:
```html
<link href="/css/mystyle.css" type="text/css" rel="stylesheet" />
```

##### Q15. What is a better way to design the layout of a web page – a table `tag` or `div`?
##### A15.
* The better way to design the layout of the webpage is by using the `<div>` tag.
* The `<table>` tag is used to present the data in tabular format.

##### Q16. What is a `<dl>` tag in HTML?
##### A16.
* `<dl>` is a definition list tag used in HTML.
* It is used with `<dt>` and `<dd>`.
* `<dt>` list the item while `<dd>` describes it.

##### Q17. What are empty HTML elements?
##### A17.
* HTML elements with no content are called empty elements.
* For eg: `<br>`

##### Q18.How to create nest tables within tables in HTML?
##### A18.
We can create nest table i.e. table inside a table.

To create table we use following attributes:

* `<table>……</table>`: declare starting and ending of table.
* `<tr>…</tr>`: declare table row.
* `<td>…</td>`: table data.

```html
<table>
       <tr>
             <td>first cell of the outer table</td>
             <td>second cell of the outer table, creating second table inside the first table
                           <table>
                                  <tr>
                                           <td>first cell of the second table</td>
                                           <td>second cell of the second table</td>
                                  </tr>
                           </table>
             </td>
       </tr>
</table>
```

##### Q19. Explain Non Breaking space in HTML.
##### A19.
When we add many spaces in the content then HTML remove all space except one space this is Non Breaking Space.
To overcome this problem we use '`&nbsp;`' (without space between & and nbsp;). Suppose we want to add 3 space 
between two words then we have to use &nbsp; three time.

Example:
actual code:- hello I m Rohit Srivastava.
Display as:- Hello I m Rohit Srivastava.

But when we use &nbsp:
Actual code:- Hello I&nbsp;m Rohit Srivastava.
Display as:- Hello I m Rohit Srivastava
NOTE: (without space between & and nbsp;)

##### Q20. How do I link to a location in the middle of an HTML document?
##### A20.

We can link to a location in the middle of an HTML document. Using Following steps:

**1. Label the destination of the link :** There are two ways of labeling destination using Anchor:
- NAME attribute:

Example:
```html
<h2><a name="destination">Destination: Explanation</a></h2>
```

- ID attribute:

Example:
```html
<h2 id="Destination_ID"> Destination: Explanation </h2>
```

**2. Link to the labeled destination :** We can link with the destination in the same URL page and with Different URL page.

Example:
Same URL: `<a href="#Destination"> Visit to destination</a>` or
Different URL: `<a href="thesis.html#section2">go to Section 2 of my thesis</a>`

##### Q21. Explain Cell Padding and Cell Spacing.
##### A21.
- **Cell Padding :** It refers to the gap or space between the cell content and cell border or cell wall.
- **Cell Spacing :** It refers to the gap between the two cells of same tables.

In HTML cell spacing and padding both are used with Table Border layout.

Example:
```html
<table border cellpadding=2>
<table border cellspacing=2>
<table border cellpadding=2 cellspacing=2>
```

##### Q22. How to create a button which acts like a link?
##### A22.
To create buttons which act as a hyperlink, there are two ways:
```html
<FORM ACTION="[url]" METHOD=get>
<INPUT TYPE=submit VALUE="Text on button">
</FORM>
```

```html
<INPUT TYPE="submit" VALUE="Go to my link location"
ONCLICK=" http://www.careerride.com/;" />
```

##### Q23. What is difference between HTML and XHTML?
##### A23.
The differences between HTML and XHTML are:

1. HTML is application of Standard Generalized Markup Language(SGML) whereas XML is application of Extensible Markup Language(XML).
2. HTML is a static Web Page whereas XHTML is dynamic Web Page.
3. HTML allows programmer to perform changes in the tags and use attribute minimization whereas XHTML when user need a new markup tag then user can define it in this.
4. HTML is about displaying information whereas XHTML is about describing the information.

##### Q24. How many types CSS can be include in HTML?
##### A24.
There are three ways to include the CSS with HTML:

**1. Inline CSS :** It is used when only small context is to be styled.
 * To use inline styles add the style attribute in the relevant tag.
**2. External Style Sheet :** Is used when the style is applied to many pages.
 * Each page must link to the style sheet using the `<link>` tag. The `<link>` tag goes inside the head section:
```html
<head>
  <link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```
**3. Internal Style Sheet :** Is used when a single document has a unique style.
 * Internal styles sheet needs to put in the head section of an HTML page, by using the <style> tag, like this:
```html
<head>
<style type="text/css">
hr {color:sienna}
p {margin-left:20px}
body {background-image:url("images/back40.gif")}
</style>
</head>
```

##### Q25. What are logical and physical tags in HTML?
##### A25.
* Logical tags are used to tell the meaning of the enclosed text. The example of the logical tag is `<strong> </strong>` tag.
  When we enclosed text in strong tag then it tell the browser that enclosed text is more important than other text.
* Physical text are used to tell the browser that how to display the text enclosed in the physical tag. Some example of the 
  physical tags are: `<b>`, `<big>`, `<i>`

##### Q26. Does HTML support JavaScript?
##### A26.
Yes, HTML supports JavaScript. We can use JavaScript anywhere in the HTML Coding. Mainly there are four sections 
where we can add JavaScript in HTML.

1. Head Section : We can add JavaScript in Head section of HTML.
`<head>…Javascript…</head>`
2. Body Section : `<body>…Javascript…</body>`
3. Head and Body both : We can add Javascript in both head and body section.
`<body…Javascript…</body>` and `<head>…Javascript…</head>`
4. External File : Script in and external file and then include in `<head>…</head>` section.

##### Q27. Explain marquee tag.
##### A27.
Marquee tag : Marquee tag is used when we want that some text or content move in the web page whether horizontally or vertically.

Syntax of Marquee tag:
```html
<marquee>move text</marquee>
```

Attribute of Marquee tag are: bgcolor, direction, height, width, vspace etc.

##### Q28. How do I add midi music to my web page?
##### A28.
We can add midi Music in our HTML web page using following tag:

```html
<bgsound src="music.mid" loop="1">
```

**Attribute LOOP = 1 :** Shows that music.mid is played only for one time. We can also set the value of loop to infinite. This tag is supported by Netscape and Internet Explorer.

Example:
```html
<embed src="canyon.mid" Autostart=TRUE Width=145 Height=60 Loop=true>
```

##### Q29. What are new Media Elements in HTML5?
##### A29.
Following are the New Media Elements are present in HTML5:

**1. <audio> tag :** For playing audio.
**2. <video> tag :** For playing video.
**3. <source> tag :** For media resources for media elements.
**4. <embed> tag :** For embedded content.
**5. <track> tag :** For text tracks used in media players.

##### Q30. Explain various HTML list tags.
##### A30.
In HTML we can list the element in two ways:

**1. Ordered list :** In this list item are marked with numbers.
Syntax:
```html
<ol>
<li> first item </li>
<li>second item </li></ol>
```

Display as:
1. First item
2. Second item.

**2. Unordered Lists :** In this item are marked with bullets.
Syntax:
```html
<ul>
<li> first item</li>
<li>second item </li></ul>
```

Display as:
- First item
- Second item.

##### Q31. Explain HTML background.
##### A31.
There are two types of background in HTML:

**1. Colored Background :** In this the background of the html is colored.
The Syntax is:
```html
<body bgcolor = “red”>
```

The value of the `bgcolor` can be set in three ways by hexadecimal number, an RGB value and Color name.

Example:
```html
<body bgcolor = “black”>
<body bgcolor = “rgb(0,0,0)”>
<body bgcolor = “#000000”>
```

**2. Image Background :** In this we set the background of the website by an image. Syntax used for this is :
```html
<body background=”study.gif”>
```

##### Q32. What is CSS?
##### A32.
CSS stands for **C**ascading **S**tyle **S**heets. By using CSS with HTML we can change the look of the web page by 
changing the font size and color of the font. CSS plays an important role in building the website. 
Well written CSS file can be used to change the presentation of each web page. By including only one CSS file. 
It gives web site developer and user more control over the web pages.

##### Q33. What is difference between HTML and HTML5?
##### A33.
The differences between HTML and HTML5 are:

1. Document of HTML is very large as compare to the HTML5.
2. Audio and Video tags are not present in HTML whereas HTML5 contains audio and video tags.
3. Vector technology is not integral part of HTML whereas HTML5 Vector technology is the integral part of it.
4. HTML supported by all old browsers whereas HTML5 is supported by new browser.
5. In HTML web sockets are not available whereas in HTML5 Full duplex communication channel is present.

##### Q34. How to insert JavaScript in HTML?
##### A34.
We can insert JavaScript in HTML using `<script>` tag. JavaScript can be enclosed in `<script type = text/javascript>` 
and ending with `</script>`.

Example:
```html
<html>
  <body>
        <script type="text/javascript">
               ...JavaScript….
        </script>
  </body>
</html>
```

##### Q35. What is the Use of SPAN in HTML and give one example?
##### A35.
**SPAN :** Used for the following things:

1. Highlight the any color text
2. For adding colored text
3. For adding background image to text.

Example:
```html
<p>
<span style="color:#000000;">
In this page we use span.
</span>
</p>
```

##### Q36. What are the different way in which website layout can be made?
##### A36.
Website layout describes how the webpage of the website will look. 
It describes the content that has to be placed in columns i.e. it can be either one or many columns. 
There are two ways in which different layout can be created and these are called as using table method or using div method.

There are basically two tags that are used `<table>` and `<div>`.

`<table>` : Using this is the simplest way to create a layout.

The example code is given as:
```html
<html>
<body>
<table width="500" border="0">
<tr>
<td colspan="2" style="background-color:#FFA500;">
<h1>Main Title</h1>
</td>
</tr>
<tr>
<td colspan="2" style="background-color:#FFA500;text-align:center;">
This is my page</td>
</tr>
</table>
</body>
</html>
```

`<div>` : It is used as a block element and is defined to group HTML elements together in one.
The `<div>` tag is used to create multiple layouts.

The sample code is given as:
```html
<html>
<body>
<div id="container" style="width:500px">
<h1 style="margin-bottom:0;">Main Title of Web Page</h1></div>
<b>Menu</b><br />
</div>
</body>
</html>
```

##### Q37. What is the importance of Doctype in HTML?
##### A37.
`Doctype` tag is not a HTML tag, it is just an instruction that is passed to the web browser to check for the information 
that is being provided by the markup language in which the page is written. Doctype is sometimes referred as 
Document type definition (DTD) that describes some rules that has to be followed while writing the markup language so to make 
the web browser understand the language and the content correctly. Doctype is very important to be placed in the beginning of the HTML 
and before the <HTML> tag to allow easy rendering of the pages that are used.
Differentiate different types of Doctypes from one another
Doctype helps the web browser to correctly render the web pages. There are different types of Doctype that are available and they are as follows:

1. Strict Doctype : It consists of all the HTML elements and it is also known as DTD (Document type definition) but it doesn't include the presentational and deprecated elements i.e. font, center, etc. Framesets related elements are also not allowed in this.
For example:
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`

2. Transitional Doctype : It consists of all the HTML elements and attributes. It is also known as DTD (Document type definition). It includes the presentational and deprecated elements i.e. font, center, etc. Framesets related elements are also not allowed in this.
For example:
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`

3. Frameset Doctype : It consists of all the HTML elements and attributes. It is also known as DTD (Document type definition). It includes the presentational and deprecated elements i.e. font, center, etc. Framesets related elements are also allowed in this.
For example:
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`

##### Q38. Why it is important to set the meta information?
##### A38.
Metadata is the data about the data or the information about the data. There is a tag `<meta>` that is being provided for the HTML document.
This information won't be displayed anywhere and will not be visible to the user. It will be parsable by the machine which will 
parse it according to the requirement. It consists of the elements that are related to the page description, keywords, document 
related element. The tag that is being used resides in the <head> section in HTML. The meta information is being used by the web browser 
or by the search engines to rank and let the user find the pages easily.
The meta information is being written as:
```html
<meta name="description" content="Here you will get everything" />
```

##### Q39. What are the different types of entities in HTML?
##### Q39.
The different types of entities that are present in HTML are < (less than) or > (greater then).
It allows the special or the reserved characters are matched with the source code and then it is saved.
The sample code is being given by:
```
&entity_name;
```
OR
```
&#entity_number;
```

There is always a concept associated with it that will create more simpler provision to avoid the spaces that are being coming in between the characters or the text.

##### Q40. What does the elements mean in syntax given for URL in HTML?
##### A40.
URL stands for Uniform Resource locater. This helps just like the Internet pooling concept where the people 
recognize themselves and others people connected together with each other. URL allows a document to be located on World Wide Web (www).
The example of the URL is as follows with the complete element:
scheme://host.domain:port/path/filename

This code has got with no meaning but there are some elements that are defined:

scheme - Is the type of internet service. In this HTTP can be used which has to most common type.
Host – It is used to control the host name and fetch the information from other templates as well.
Domain – It defines the internet domain that is google.com.
:port – It defines the port number on the Host where the default port that is being used is 80.
path – This defines the path of the server that consists of a hierarchical directory structure.
filename - It defines the unique name for the file or the document that saves it.

##### Q41. How to add helper plug-ins on the webpage using HTML?
##### A41.
A helper application is a program that is used in the browser to help the users with lots of information that is not being provided with the applications. These helper application is known as Plug-ins. Helper application includes audio, video, etc. The tag that is used to embed is <object>. Helper application allows easy incorporation of audio and video that is controlled by the user. Helper application allow the control over the volume setting and other functions like play, stop,etc.
```
<object width="420" height="360" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.career.com/qtplugin.cab">
<param name="src" value="hello.wav"/>
<param name="controller" value="true"/>
</object>
```

##### Q42. What is the purpose of canvas in HTML?
##### A42.
Canvas is an element that is used for the graphics for the web page. It uses JavaScript to bring the graphics functionality live. It allows easy way to draw the graphics and use different types of tools to create drawing on the web page. Canvas is just a rectangular area that controls the pixel of every element that is used in the web page. Canvas uses methods like paths, circles, etc.
The canvas element will be used as follows:
```html
<canvas id="can" width="200" height="100"></canvas>
```

The canvas element includes id, width and height settings and with the javascript it gets used like:
```html
<script type="text/javascript">
var c=document.getElementById("can");
var ctx=c.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,150,75);
</script>
```

##### Q43. What is the purpose of iframe in HTML?
##### Q43.
Iframe is called as inline frame that places one HTML document in a frame. It is different from the object element as the inline frame can be made in the target frame. The target frame consists of the links that is defined by other elements used in the web page. Iframe is used to focus on printing or viewing of the source. Iframe can be used by the user in those browser that supports it. If they have used iframe also then the incompatible browser won't display the actual but display of the alternative text will take place. The content of the iframe is being written in between <iframe>.........</iframe>.
The sample example is given below:
```html
<iframe src="http://www.abc.com"></iframe>
```

##### Q44. What are the different types of frames tags used in HTML?
##### Q44.
Frames allow the display of the document visually. It allows the window to be split into segments that can contain multiple different documents. It can utilize many resources and repeat some parts of the layout that can be used in a frame.

Frames consists of different types of tags and they are as follows:

1. `<frameset>...</frameset>` : It consists of the frames that includes the layout using the attributes of rows and cols.
2. `<frame>` or `<frame/>` : It consists of a single frame and gets included within the frameset. It is always come up with a src attribute that provides the source that has to be shown in a particular frame.
3. `<noframes>...</noframes>` : It consists of the normal HTML content that is used to show no frames.
4. `<iframe>...</iframe>` : It consists of internal frame that will contain the src attribute to include the frame that is internal to a particular region.

##### Q45. Write a code to change the color of the background or text? Explain the elements involved in it.
##### A45.
To change the color of the background of the body or the text there is a <body> tag that has to be included where there are 
some elements that has to be used to set the properties of it.
The code is as follows:
```html
<html>
<head>
</head>
<BODY BGCOLOR="#ffffff" TEXT="#000000" LINK="#000000" VLINK="#000000" ALINK="#ffff00">
</body>
</html>
```

The elements that are used in this tag is as follows:

1. BGCOLOR : Represents the background color which will be applied totally on the body if there is no other bgcolor used with any other tag internally.
2. TEXT : Represents the color of the text that will be applied to the complete text present in the body.
3. LINK : Represents the color of all the text links that are present inside the body.
4. VLINK : Represents the color of the links that has already been visited.
5. ALINK : Represents the color of the text links that will change when the page accessed will be active.

##### Q46. What is the main function of `<pre>` tag in HTML?
##### A46.
`<pre>` tag defines the pre-formatted text that is used to display the text with the fixed width and uses a predefined fonts and it keeps both spaces and line breaks separate and show the text as it is.
The code that can be used to display the text that can be written in whatever way the user wants is as follows:
```html
<pre>
Text in a pre element ----//
is displayed in a fixed-width
font, and it preserves
both spaces and
line breaks
</pre>
```

##### Q47. How can tables be made nested in HTML?
##### A47.
Tables can be made nested by making it come in another table. This consists of many attributes and tags that can be used in nesting the tables.

The tags that are used for the table is as follows:

`<TR>` : This is the tag that has to be written after the <table> tag and before any other tags. This makes a table row that store the data elements.
`<TD>` : This tag can be used anywhere and it consists of the data that has to come on the website.
`<TH>` : This tag consists of the table heading.

The sample code will explain the above explanation much better:
```html
<table>
<tr>
<td>this is the first cell</td>
<td>this is the second cell
<table> <!--Starting of the table that is embedded inside another table-->
<tr>
<td>this is the first cell second table</td>
<td>this is the second cell of second table</td>
</tr>
</table>
</td>
</tr>
</table>
```

##### Q48. How can tables be used inside a form? Explain with an example.
##### A48.
A form can consist of the table and its properties to display it on the web page. The form is placed with the 
`<td>` tag that includes the data of the table. This can also be used to position the form in relation to the other content. 
The table will be added within the form.

The code is given as:
```html
<FORM ACTION="[URL]">
<TABLE>
<TR>
<TH>This is the table heading</TH>
<TD><INPUT TYPE="text" NAME="account"></TD>
</TR>
<TR>
<TH>This is another heading for a button</TH>
<TD><INPUT TYPE="password" NAME="password"></TD>
</TR>
<TR>
<TD> </TD>
<TD><INPUT TYPE="submit" NAME="Log On"></TD>
</TR>
</TABLE>
</FORM>
```

In this the form elements are getting used inside the table tags like `<input type>`, `<text area>`, etc.
The form input will be given using the <td> tag that displays the table data and related information accordingly.

##### Q49. What are the different ways to use different colors for different links or same link?
##### A49.
The presentation is being done by CSS that is used with the HTML, to give the style to the HTML content.
This is called as style sheet. The links can be specified in different colors by the following way:
```css
a:link {color: blue; background: white}
a:visited {color: purple; background: white}
a:active {color: red; background: white}
```

This is the CSS properties that is being defined to set the color for the links that are active, visited and normal link. User can use the class attribute in the tags like <a> to use it and see the change in the link color. It is shown as:
```html
<a class="exp" href="[URL]">example of the link</a>
```

The style sheet can be modified according to the code that is being written. The coding will include:
```css
a.exp:link {color: yellow; background: black}
a.exp:visited {color: white; background: black}
a.exp:active {color: red; background: black}
```

##### Q50. How to upload files using HTML to website?
##### A50.
The uploading of files requires some necessary configuration like: An HTTP server that acts as a transaction between 
the user and the server. Access to the directory of cgi-bin that consists of the receiving script.

There are some scripts that are already available. Form for the implementation and the coding of it will be like:
```html
<form method="post" enctype="multipart/form-data" action="up.cgi">
```

The form that has to be uploaded will be done by the following given code:

```html
<input type=file name=upload><br>
This tag will contain the file name that has to be uploaded on the website.
Any remarks about the file will be written like:
<input type=text name=remark><br>
<input type=submit value=Press> This form will allow user to upload their own file in an easy way.
</form>
```

##### Q51. Write a program to include the custom button with the form
##### A51. 
Custom button can be given just by putting the image with the button or by using any other button then normal. Usually the button is being made by the <input> tag like:
```html
<input type= “submit” value= submit>
```

An image can be used for the custom button as an input type like:
```html
<input type = ”image” value = submit>
```

The input in the image format defines the graphical button that has to be placed in the form of submit on the web site. Image input type return the x-y coordinates rather than the normal text as a value. The attributes of Value and Alt will be used to set the name value attribute. The example for the same will be given as:
```html
<input type="image" name="submit" alt="submit" value="submit" src="submit.jpg">
```

##### Q52. How to prevent the display of "Getting framed" in HTML?
##### A52.
Getting framed refers to the document that is being displayed in someone else's frameset in your HTML.
This will be password protected and the permissions has to be taken before inserting the frameset.
The framing of the document can be avoided by using TARGET=_top applied to all the links that will lead to the document that are 
outside the scope of a particular user without permission. A javaScript can be used that will automatically handle the request 
to remove the existing framesets. This can be given as:
```html
<script type="text/javascript">
if (top.frames.length!=0)
{
    if (window.location.href.replace)
       top.location.replace(self.location.href);
    else
       top.location.href=self.document.href;
}
</script>
```

##### Q53. How to include a frameset inside another frameset?
##### A53.
One frameset can be defined inside another frameset if the accessing permission are provided directly. The frameset can be stored by using the JavaScript in the document that is being written by the user and the script is as follows:
```html
<SCRIPT TYPE="text/javascript">
if (parent.location.href == self.location.href)
{
    if (window.location.href.replace)
       window.location.replace('frame.html');
    else
       // causes problems with back button, but works
       window.location.href = 'frame.html';
}
</SCRIPT>
```

The anchor `<a>` tag is used to link the frameset that can be used to restore the frames that has been stored.
```html
<A HREF="frameset.html" TARGET="_top">Restore the frame
```

There is always a separate frameset document written for every content document. The frameset documents are generated automatically. 
The content document can be linked separately rather than linking them together.

##### Q54. How to update two frames at the same time using HTML?
##### A54.
To update the two frames at the same time there is a requirement for the HTML based techniques that links the documents with a 
new frameset document. It specifies a new frames that can be combined with other frames. There is a JavaScript that will be 
used to link the updated frame and the method that will be used is onClick(). HTML based technique allow the new frameset 
document with the attribute of TARGET=_top. In this the first frameset document uses a secondary frameset document that 
will be defined as the nested frameset. The following code explains it further:

```html
<frameset cols="*,3*">
<frame src="first.html" name="first_frameset">
<frame src="second.html" name="sec_frameset">
<noframes>
</body></noframes>
</frameset>
```

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