# Build an image gallery

## Starting State
At start of execution, we have: an HTML page that has three main elements in the body: 
   1. A header `<h1>`
   2. A `<div>` element with the class *full-img* that contains:
      - an image `<img>` with the class *displayed-img*
      - a `<div>` element with the class *overlay* 
      - a `<button>` element with the class *dark*
   3. A `<div>` element with the class *thumb-bar*, meant to contain a bar of thumbnails underneath. 

These elements are modified by a CSS page called in the head of the document. *displayed-img* has an initial source of `img/pic1.jpg`, and the *overlay* and *dark* elements are styled to overlap it. The *thumb-bar* is initially empty. A Javascript source is called in the body.

## Javascript Pseudocode
1. START
2. GET a reference to document elements we want to modify:
   1. *displayed-img*
   2. *overlay*
   3. *dark*
   4. *thumb-bar*
3. INIT an array of picture names, `pictures`
4. INIT an object, `altTexts`, that takes a simplified image filename as a key and sets the attribute to that image's alt text
5. FOR each picture in `pictures`
   - INIT a new `<img>` element
   - SET that element's `src` attribute to the filename in `pictures`
   - SET that element's `alt` attribute to the corresponding alt text in `altTexts`
   - DISPLAY the `<img>` element in the thumb bar
   - INIT an event listener that calls a function, `changeImage`, to change *displayed-img* to this `<img>` element when it is clicked on
6. ENDFOR
7. INIT an event listener that calls a function, `changeDarkness`, that changes the opacity of the background-color attribute of *overlay* and the text of *dark* when *dark* is clicked on
8. Function changeImage
   - Pass In: the `src` and `alt` attributes of the image that was clicked on
   - Change the `src` and `alt` attributes of *displayed-img* to those of the passed image
   - Pass Out: nothing
9. Endfunction
10. Function changeDarkness
    - Pass In: a `<button>` element that was clicked on
    - IF the button's class is *dark* THEN
      - change the opacity of *overlay* to semi-transparent
      - change the text of the button to "Lighten"
      - change the class of the button to *light*
    - ELSE
      - change the opacity of *overlay* to completely transparent
      - change the text of the button to "Darken"
      - change the class of the button to *dark*
    - ENDIF
    - Pass Out: nothing
11. Endfunction
12. END