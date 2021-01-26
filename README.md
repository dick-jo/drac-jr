# Drac Jr.
An itty bitty dark mode handler

Drac Jr works via CSS Data Attributes allowing for dark mode styling using the `[data-theme=dark]` selector

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
    
