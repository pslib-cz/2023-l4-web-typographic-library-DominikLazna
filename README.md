[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/zprwltzm)
# Typography CSS library
**Author:** [*Dominik Lazna*](https://github.com/DominikLazna)
## Demo site
Link to **[demo](http://www.github.io)** site for preview.
## Implementation
1. Download [Typography.css](css/typography.css)
2. Copy CSS file into your project
3. Link CSS file via stylesheet in your HTML files
```html
<link href="typography.css" rel="stylesheet">
```
## Fonts
Typography.css is using [Titilium Web](https://fonts.google.com/specimen/Titillium+Web?query=titil) for its font. If you want to use different one, simply remove the predefined one from the file and paste yours.
## Colors
Inside the root selector you can see all of the predefined colors.
```html
:root {
    --blue: #3877ff;
    --blue-opacity: rgba(55, 119, 255, .5);
    --light-blue-gray: #283044;
    --dark-blue-gray: #232939;
    --white: #ffffff;
    --grey: #97A5C2;
}
```
## Text
Document's font size is set to `16px`. There are multiple tags that you can further use to customize the text, such as `<b>`, `<i>`, `<mark>`, `<s>`.
## Headings
You can use headings from `<h1>` to `<h6>`. The font sizes are as follows:
* 32px for `<h1>`
* 28px for `<h2>`
* 24px for `<h3>`
* 20px for `<h4>`
* 16px for `<h5>`
* 21px for `<h6>`
## Lists
There are two types of predefined lists. If you want to, you can also use `class="list-blue"` like this `<ol class="list-blue">` or like this `<ul class="list-blue">` to give the list a little more style.
### Ordered list
You can create ordered list using the `<ol>` tag.
```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3
        <ol>
            <li>Sub-item 1</li>
            <li>Sub-item 2</li>
        </ol>
    </li>
    <li>Item 4</li>
</ol>
```
### Unordered list
You can create unordered list using the `<ul>` tag.
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3
        <ul>
            <li>Sub-item 1</li>
            <li>Sub-item 2</li>
        </ul>
    </li>
    <li>Item 4</li>
</ul>
```
## Components
### Cards
Cards are used for creating independent content with image and text. There are two types of cards.
*See syntax below:*
```html
<figure class="card">
    <img class="card__img" src="./imgs/cyberpunk.webp" alt="View of cyberpunk city">
    <figcaption class="card__caption">
        <h3 class="card__heading">Cyberpunk City</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nemo est dolore libero nulla, numquam distinctio repellendus fugiat iste quae accusamus, saepe suscipit. In minus labore, veritatis                   apiente cum illo
        </p>
    </figcaption>
</figure>
```
```html
<figure class="card">
    <img class="card__img card__img--slashed" src="./imgs/cyberpunk.webp" alt="View of cyberpunk city">
    <figcaption class="card__caption">
        <h3 class="card__heading card__heading--slashed">Cyberpunk City</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nemo est dolore libero nulla, numquam distinctio repellendus fugiat iste quae accusamus, saepe suscipit. In minus labore, veritatis                   sapiente cum illo.
        </p>
    </figcaption>
</figure>
```
### First
### Second
