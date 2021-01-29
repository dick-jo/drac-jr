# Drac Jr.
An itty bitty web design tool for handling dark mode the right way

* Absolutely no bloat
* 100% vanilla
* Checks user light/dark preference at OS/browser level
* Automatically saves preference for future visits
* No opinionated button/switch element - set `onClick={ToggleDark}` wherever you want
* No smoke and mirrors - set actual dark mode values in css via the `[data-theme=dark]` data attribute selector
* No blend-mode voodoo - keep all resultant colours completely predictable and explicitly defined

## Quick install:

`npm install drac-jr`

...or just copy `dist/drac-jr.js' 

If you're using React, Node etc. then the `src` version is totally fine. Otherwise the `dist` version should be solid.

## How to use:
### 0. import DracJr
    import DracJr, { ToggleDark } from "drac-jr"
### 1. Run DracJr() somewhere sensible
    App = () => {
        DracJr()
        
        return ...
    
...or for simple/vanilla browser setups:
    <script src="./drac-jr.js"></script>    

`DracJr()` runs an initial check to see whether the user has previously saved a preference with you.
...if not, the `(prefers-color-scheme: dark)` query is checked and OS/browser level preference applied

### 2. Add a light/dark toggle
    <button onClick={ToggleDark}>Lights out</button>
    
...or for simple/vanilla browser setups:
    <button onclick="ToggleDark()">Lights out</button>
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
    
