# Overview

An extension of `<form>` that provides client-side (ajax) form handling and other features.  The goal of the project is to package common web form idioms in a flexible and relatively unopinionated web component.

Requires [x-tag](http://www.x-tags.org/).

# Usage

```html
<form is="x-form" action"/api/endpoint/url" method="post">
    <label>
        Name:
        <input type="text" name="name" required>
    </label>

    <input type="submit">
</form>
```

Creates a form that will POST to /api/endpoint/url using XMLHttpRequest.  The submit button will be disabled on the form's submit event.

# Accessors

## value

Returns form input as a JavaScript object by calling the `getData()` method.

# Methods

## disableSubmitButton()

Adds the `disabled` attribute to `<input type="submit">`.

## enableSubmitButton()

Removes the `disabled` attribute to `<input type="submit">`.

## getData()

Returns form data as a JavaScript object a la the [serializeObject jQuery plugin](http://css-tricks.com/snippets/jquery/serialize-form-to-json/).

## sendRequest(url, method)

Creates a simple XMLHttpRequest to "`url`" using "`method`" and Content-Type "`application/x-www-form-urlencoded`".