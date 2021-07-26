# **Developer console
Code is prone to errors. You will quite likely make errors… Oh, what am I talking about? You are absolutely going to make errors, at least if you’re a human, not a robot.

But in the browser, users don’t see errors by default. So, if something goes wrong in the script, we won’t see what’s broken and can’t fix it.

To see errors and get a lot of other useful information about scripts, “developer tools” have been embedded in browsers.

Most developers lean towards Chrome or Firefox for development because those browsers have the best developer tools. Other browsers also provide developer tools, sometimes with special features, but are usually playing “catch-up” to Chrome or Firefox. So most developers have a “favorite” browser and switch to others if a problem is browser-specific.

Developer tools are potent; they have many features. To start, we’ll learn how to open them, look at errors, and run JavaScript commands.

Google Chrome
Open the page bug.html.

There’s an error in the JavaScript code on it. It’s hidden from a regular visitor’s eyes, so let’s open developer tools to see it.

Press F12 or, if you’re on Mac, then Cmd+Opt+J.

The developer tools will open on the Console tab by default.

It looks somewhat like this:


The exact look of developer tools depends on your version of Chrome. It changes from time to time but should be similar.

Here we can see the red-colored error message. In this case, the script contains an unknown “lalala” command.
On the right, there is a clickable link to the source bug.html:12 with the line number where the error has occurred.
Below the error message, there is a blue > symbol. It marks a “command line” where we can type JavaScript commands. Press Enter to run them.

Now we can see errors, and that’s enough for a start. We’ll come back to developer tools later and cover debugging more in-depth in the chapter Debugging in the browser.

Multi-line input
Usually, when we put a line of code into the console, and then press Enter, it executes.

To insert multiple lines, press Shift+Enter. This way one can enter long fragments of JavaScript code.

Firefox, Edge, and others
Most other browsers use F12 to open developer tools.

The look & feel of them is quite similar. Once you know how to use one of these tools (you can start with Chrome), you can easily switch to another.

Safari
Safari (Mac browser, not supported by Windows/Linux) is a little bit special here. We need to enable the “Develop menu” first.

Open Preferences and go to the “Advanced” pane. There’s a checkbox at the bottom:


Now Cmd+Opt+C can toggle the console. Also, note that the new top menu item named “Develop” has appeared. It has many commands and options.

Summary
Developer tools allow us to see errors, run commands, examine variables, and much more.
They can be opened with F12 for most browsers on Windows. Chrome for Mac needs Cmd+Opt+J, Safari: Cmd+Opt+C (need to enable first).
Now we have the environment ready. In the next section, we’ll get down to JavaScript.

####

# **Manuals and specifications**
This book is a _tutorial_. It aims to help you gradually learn the language. But once you’re familiar with the basics, you’ll need other sources.

## **Specification**
[The ECMA-262 specification](https://www.ecma-international.org/publications/standards/Ecma-262.htm) contains the most in-depth, detailed and formalized information about JavaScript. It defines the language.

But being that formalized, it’s difficult to understand at first. So if you need the most trustworthy source of information about the language details, the specification is the right place. But it’s not for everyday use.

A new specification version is released every year. In-between these releases, the latest specification draft is at [https://tc39.es/ecma262/](https://tc39.es/ecma262/).

To read about new bleeding-edge features, including those that are “almost standard” (so-called “stage 3”), see proposals at [https://github.com/tc39/proposals](https://github.com/tc39/proposals).

Also, if you’re developing for the browser, then there are other specifications covered in the [second part](https://javascript.info/browser-environment) of the tutorial.

## **Manuals**
MDN (Mozilla) JavaScript Reference is the main manual with examples and other information. It’s great to get in-depth information about individual language functions, methods etc.

One can find it at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference](https://javascript.info/browser-environment).

Although, it’s often best to use an internet search instead. Just use “MDN [term]” in the query, e.g. [https://google.com/search?q=MDN+parseInt](https://google.com/search?q=MDN+parseInt) to search for `parseInt` function.

## **Compatibility tables**
JavaScript is a developing language, new features get added regularly.

To see their support among browser-based and other engines, see:

* [http://caniuse.com](http://caniuse.com/) – per-feature tables of support, e.g. to see which engines support modern cryptography functions: [http://caniuse.com/#feat=cryptography](http://caniuse.com/#feat=cryptography).
* [https://kangax.github.io/compat-table](https://kangax.github.io/compat-table) – a table with language features and engines that support those or don’t support.

All these resources are useful in real-life development, as they contain valuable information about language details, their support etc.

Please remember them (or this page) for the cases when you need in-depth information about a particular feature.