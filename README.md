# indonesia-numbering-formatter
Number and currency formatter in Indonesia numbering system based on "Pedoman Umum Ejaan Bahasa Indonesia" (PUEBI)

# Installation

### npm
```bash
npm i indonesia-numbering-formatter
```

# Usage

## ReactJS
```javascript
import React from "react";
import ReactDOM from "react-dom";
import idx from "indonesia-numbering-formatter";
```

In JSX

```javascript
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p> {idx.format(2000)} </p>
        <p> {idx.formatCurrency(10000)} </p>
        <p> {idx.unformat("1.0,2") * 2}</p>
      </div>
    );
  }
}
export default App
```
[See demo here](https://codesandbox.io/embed/indonesianumberingformatterdemo-3yr1t)
