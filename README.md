Here is a curated list of resources, question and exercises to go through that covers the essentials of being a competent full stack JS developer.

The contents have been broken down into **4** phases, covering the basics from HTML/CSS to APIs. It would be best to cover these phases in chronological order to gain a broad understanding from the basics to the more advanced topics.


# Phase 1

### A) HTML

* [10 Typical HTML Exercises](https://github.com/sm2774us/full_stack_interview_prep_2021#a-10-typical-html-exercises)
* [12 Essential HTML5 Questions](http://www.toptal.com/html5/interview-questions)
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


#### A: 10 Typical Html Exercises
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
The code is all valid apart from the last image specified in the `srcset` attribute; `320y` isn’t a valid value.
If the `y` is replaced with a `w`, it becomes valid though.
