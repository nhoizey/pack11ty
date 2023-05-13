# ITCSS principles

This Sass code tries to follow the principles of ITCSS as defined by Harry Roberts.

Styles are split into 7 layers, by increasing specificity:

| **Layer** | **Name**   | **Usage**                                             |
| --------- | ---------- | ----------------------------------------------------- |
| Layer 1   | Settings   | global variables, config switches                     |
| Layer 2   | Tools      | default mixins and functions                          |
| Layer 3   | Generic    | ground-zero styles, normalize.css, resets, box-sizing |
| Layer 4   | Base       | unclassed HTML elements, a.k.a. type selectors        |
| Layer 5   | Objects    | cosmetic-free design patterns                         |
| Layer 6   | Components | designed components, chunks of UI                     |
| Layer 7   | Trumps     | helpers and overrides                                 |

Resources:

- [Managing CSS Projects with ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss) (slides)
