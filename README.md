# Drac Jr.
An itty bitty web design tool for handling dark mode the right way

* Absolutely no bloat
* 100% vanilla
* No opinionated button/switch element - set `onClick={ToggleDark}` wherever you want
* No smoke and mirrors - set actual dark mode values in css via the `[data-theme=dark]` data attribute selector
* No blend-mode voodoo - keep all resultant colours completely predictable and explicitly defined

## Quick install:

`npm install drac-jr`

## How to use:
### 0. import DracJr
    import DracJr, { ToggleDark } from "drac-jr"
### 1. Run DracJr() somewhere sensible
    App = () => {
        DracJr()
        
        return ...
    
`DracJr()` runs an initial check to see whether the user has previously saved a preference with you.
...if not, the `(prefers-color-scheme: dark)` query is checked and OS/browser level preference applied

### 2. Add a light/dark toggle
    <button onClick={ToggleDark}>Dark Mode</button>

Every time a toggle is triggered, preference is saved via `localStorage.setItem()`

### 3. Apply your dark styles
    [data-theme=dark] body {
        background-color: #424242;
    }

...or if you really want to do things the right way:
    
    --text: black;
    --background: white;
    --dark-text: white;
    --dark-background: black;
    
    [data-theme="dark] {
        --text: var(--dark-text);
        --background: var(--dark-background);
    }
    
    body {
        color: var(--text);
        background-color: var(--background);
    }
    
