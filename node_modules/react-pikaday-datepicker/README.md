# React Pikaday Datepicker

Based on [https://www.npmjs.com/package/react-pikaday-datepicker](https://www.npmjs.com/package/react-pikaday-datepicker)

[![build status](http://img.shields.io/travis/rmdort/react-pikaday-datepicker.svg?style=flat)](https://travis-ci.org/rmdort/react-pikaday-datepicker)
[![npm version](http://badge.fury.io/js/react-pikaday-datepicker.svg)](http://badge.fury.io/js/react-pikaday-component)
[![Download Count](http://img.shields.io/npm/dm/react-pikaday-datepicker.svg?style=flat)](http://www.npmjs.com/package/react-pikaday-datepicker)

> Universal React component wrapper around [Pikaday.js](https://github.com/dbushell/Pikaday) datepicker.


## Install

```bash
npm install react-pikaday-datepicker --save
```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-pikaday-datepicker';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  onDateChange(date) {
    this.setState({ date });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <DatePicker 
            placeholder="Select Date"
            format="YYYY/MM/DD"
            maxDate={new Date('2020-07-26')}
            value={new Date(date)}
            onChange={::this.onDateChange}
        />
    </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('example')
);
```

## Properties

- `value`
- `onChange`
- `valueLink`
- `tabIndex`
- [Pikaday configuration options](https://github.com/dbushell/Pikaday#configuration) (except `onSelect` and `field`)
- other input attributes like `className`, `name`, `placeholder`, `disabled` and `readOnly`

---

**MIT Licensed**
