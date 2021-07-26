# **Code editors**
A code editor is the place where programmers spend most of their time.

There are two main types of code editors: IDEs and lightweight editors. Many people use one tool of each type.

## **IDE**
The term [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) (**I**ntegrated **D**evelopment **E**nvironment) refers to a powerful editor with many features that usually operates on a “whole project.” As the name suggests, it’s not just an editor, but a full-scale “development environment.”

An IDE loads the project (which can be many files), allows navigation between files, provides autocompletion based on the whole project (not just the open file), and integrates with a version management system (like [git](https://git-scm.com/)), a testing environment, and other “project-level” stuff.

If you haven’t selected an IDE yet, consider the following options:

* [Visual Studio Code](https://code.visualstudio.com/) (cross-platform, free).
* [WebStorm](http://www.jetbrains.com/webstorm/) (cross-platform, paid).

For Windows, there’s also "Visual Studio", not to be confused with "Visual Studio Code". "Visual Studio" is a paid and mighty Windows-only editor, well-suited for the .NET platform. It’s also good at JavaScript. There’s also a free version [Visual Studio Community](https://www.visualstudio.com/vs/community/).

Many IDEs are paid, but have a trial period. Their cost is usually negligible compared to a qualified developer’s salary, so just choose the best one for you.

## **Lightweight editors**
"Lightweight editors" are not as powerful as IDEs, but they’re fast, elegant and simple.

They are mainly used to open and edit a file instantly.

The main difference between a "lightweight editor" and an "IDE" is that an IDE works on a project-level, so it loads much more data on start, analyzes the project structure if needed and so on. A lightweight editor is much faster if we need only one file.

In practice, lightweight editors may have a lot of plugins including directory-level syntax analyzers and autocompleters, so there’s no strict border between a lightweight editor and an IDE.

The following options deserve your attention:

* [Atom](https://atom.io/) (cross-platform, free).
* [Visual Studio Code](https://code.visualstudio.com/) (cross-platform, free).
* [Sublime Text](http://www.sublimetext.com/) (cross-platform, shareware).
* [Notepad++](https://notepad-plus-plus.org/) (Windows, free).
* [Vim](https://www.vim.org/) and [Emacs](https://www.gnu.org/software/emacs/) are also cool if you know how to use them.

## **Let’s not argue**
The editors in the lists above are those that either I or my friends whom I consider good developers have been using for a long time and are happy with.

There are other great editors in our big world. Please choose the one you like the most.

The choice of an editor, like any other tool, is individual and depends on your projects, habits, and personal preferences.

############3
# **Manuals and specifications**
This book is a _tutorial_. It aims to help you gradually learn the language. But once you’re familiar with the basics, you’ll need other sources.

## **Specification**
[The ECMA-262 specification](https://www.ecma-international.org/publications/standards/Ecma-262.htm) contains the most in-depth, detailed and formalized information about JavaScript. It defines the language.

But being that formalized, it’s difficult to understand at first. So if you need the most trustworthy source of information about the language details, the specification is the right place. But it’s not for everyday use.

A new specification version is released every year. In-between these releases, the latest specification draft is at [https://tc39.es/ecma262/](https://tc39.es/ecma262/).

To read about new bleeding-edge features, including those that are "almost standard" (so-called "stage 3"), see proposals at [https://github.com/tc39/proposals](https://github.com/tc39/proposals).

Also, if you’re developing for the browser, then there are other specifications covered in the [second part](https://javascript.info/browser-environment) of the tutorial.

## **Manuals**
MDN (Mozilla) JavaScript Reference is the main manual with examples and other information. It’s great to get in-depth information about individual language functions, methods etc.

One can find it at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference](https://javascript.info/browser-environment).

Although, it’s often best to use an internet search instead. Just use "MDN [term]" in the query, e.g. [https://google.com/search?q=MDN+parseInt](https://google.com/search?q=MDN+parseInt) to search for `parseInt` function.

## **Compatibility tables**
JavaScript is a developing language, new features get added regularly.

To see their support among browser-based and other engines, see:

* [http://caniuse.com](http://caniuse.com/) – per-feature tables of support, e.g. to see which engines support modern cryptography functions: [http://caniuse.com/#feat=cryptography](http://caniuse.com/#feat=cryptography).
* [https://kangax.github.io/compat-table](https://kangax.github.io/compat-table) – a table with language features and engines that support those or don’t support.

All these resources are useful in real-life development, as they contain valuable information about language details, their support etc.

Please remember them (or this page) for the cases when you need in-depth information about a particular feature.