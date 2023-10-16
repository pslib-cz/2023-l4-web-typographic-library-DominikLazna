[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/zprwltzm)
# Typography CSS library
**Author:** [*Dominik Lazna*](https://github.com/DominikLazna)
## Description
Typography.css is a free typography library created as a school project. It creates default styles for your text, headings and lists. Typographic.css also contains multiple predefined components such as cards, buttons, grid gallery and tables.
## Demo site
Link to **[demo](https://pslib-cz.github.io/2023-l4-web-typographic-library-DominikLazna/)** site for preview.
## Content
1. [Implemantation](#Implementation)
2. [Fonts](#Fonts)
3. [Colors](#Colors)
4. [Text](#Text)
5. [Headings](#Headings)
6. [Lists](#Lists)  
       6.1. [Ordered list](#Ordered-list)  
       6.2. [Unordered list](#Unordered-list)  
7. [Components](#Components)  
       7.1. [Cards](#Cards)  
       7.2. [Buttons](#Buttons)  
       7.3. [Grid gallery](#Grid-gallery)  
       7.4. [Tables](#Tables)  
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
Inside the `:root` selector you can see all of the predefined colors.
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
* 12px for `<h6>`
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nemo est dolore libero nulla, numquam distinctio repellendus fugiat iste quae accusamus, saepe suscipit. In minus labore, veritatis sapiente cum illo.
        </p>
    </figcaption>
</figure>
```
### Buttons
To create a button add `class="btn"` to `<a>` tag. You can also use `class="btn btn--slashed"` for skewed button.
```html
<a class="btn" href="#">Button</a>
```
```html
<a class="btn btn--slashed" href="#">Button</a>
```
### Grid gallery
If you want to create a gallery, you can use the predefined grid gallery using the syntax below:
```html
<div class="gallery">
    <a href="./imgs/moon.webp">
        <figure class="gallery__item">
            <img class="gallery__img" src="./imgs/moon.webp" alt="View on the moon">
            <figcaption class="gallery__caption"><p class="gallery__title">Moon</p></figcaption>
        </figure>
    </a>
    <a href="./imgs/city.webp">
        <figure class="gallery__item">
            <img class="gallery__img" src="./imgs/city.webp" alt="View on city">
            <figcaption class="gallery__caption"><p class="gallery__title">City</p></figcaption>
        </figure>
    </a>
    <a href="./imgs/ocean.webp">
        <figure class="gallery__item">
            <img class="gallery__img" src="./imgs/ocean.webp" alt="View on vast ocean">
            <figcaption class="gallery__caption"><p class="gallery__title">Ocean</p></figcaption>
        </figure>
    </a>
</div>
```
### Tables
To create a table use the `<table>` tag. For further styled table use `class="table__cell"` on `<td>` tags and `class="table__head-cell"` on `<th>` tags.
```html
<table>
    <caption class="table__caption">Example of table</caption>
    <thead>
        <tr>
            <th class="table__head-cell">Games</th>
            <th class="table__head-cell">Company</th>
            <th class="table__head-cell">Copies sold</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="table__cell">Cyberpunk 2077</td>
            <td class="table__cell">CD Projekt Red</td>
            <td class="table__cell">25 mil</td>
        </tr>
        <tr>
            <td class="table__cell">Mass Effect 2</td>
            <td class="table__cell">BioWare</td>
            <td class="table__cell">5 mil</td>
        </tr>
        <tr>
            <td class="table__cell">Red Dead Redemption 2</td>
            <td class="table__cell">Rockstar Games</td>
            <td class="table__cell">55 mil</td>
        </tr>
        <tr>
            <td class="table__cell">Halo 2</td>
            <td class="table__cell">Bungie</td>
            <td class="table__cell">8 mil</td>
        </tr>
    </tbody>
</table>
```
