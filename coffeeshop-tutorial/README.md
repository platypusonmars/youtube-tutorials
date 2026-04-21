# ☕ Coffee Order Builder

A small vanilla JavaScript app that lets you build a coffee order and watch the cup update in real time. Built as a beginner-friendly tutorial project covering objects, arrays, the DOM, and events — no frameworks, no build step.

## Demo

Open `index.html` in any modern browser. That's it.

## Project structure

```
index.html   – markup (radios, checkboxes, cup, summary)
style.css    – layout, cup visuals, CSS variables
script.js    – order state + update functions
```

## How it works

A single `order` object holds the current selection. Two functions — `updateCup()` and `updateSummary()` — read from it and redraw the UI. Every input change writes to `order` and calls both functions.

```
input change → update order → updateCup() + updateSummary()
```

The cup itself is pure CSS. JavaScript only writes two CSS variables (`--fill-colour` and `--fill-height`); the browser animates the rest via `transition`.

## Key concepts covered

- Objects and arrays as app state
- Bracket notation for lookups (`prices[order.drink]`)
- `querySelectorAll` + `forEach` to wire up inputs
- `addEventListener` for user input
- `classList.toggle` for showing/hiding badges
- Template literals + `innerHTML` for the summary
- CSS custom properties shared between CSS and JS

## Home assignments

Try these once you have the app running. They get progressively harder.

### 1. Add a new drink

Add **Mocha** to the menu.

- New radio button in `index.html`
- New entry in `prices` and `drinkColours` in `script.js`
- Nothing else should need changing

### 2. Temperature toggle

Add a Hot / Iced toggle.

- Add a new radio group in the HTML
- Store the choice on the `order` object
- When Iced is selected, tint the cup fill a bit lighter (hint: toggle an `iced` class on `.cup` via `classList.toggle`)
- Show the choice in the summary card

### 3. Reset button + order count

Add a **Reset** button that clears all extras and resets the drink to espresso, medium, regular milk. Bonus: add a "Place order" button that increments a counter and logs the order to the console each time it's clicked.

## License

MIT
