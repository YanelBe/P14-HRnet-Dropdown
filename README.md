# A Simple Dropdown Component For React

A simple dropdown component for React.

## Prerequisites:

- [NodeJS (**Version 14 or higher**)](https://nodejs.org/en/)

- [NPM](https://www.npmjs.com/)


## Description

This is a simple dropdown menu component for React. You can use it to display a number of elements on a list when clicking on the dropdown menu.

Some CSS styles are applied by default, but you can use a few props to change the style of the component (see the Example section below).

You can interact with the component with you keyboard. It is entirely focusable. Here are the keyboard options :

-   `ENTER`: Opens the dropdown menu. When a choice is highlighted, pressing Enter will select the choice and close the menu.

-   `UP`: Will move the highlight to the selected option up on the list.

-   `DOWN/RIGHT`: Will move the highlight to the selected option down on the list.

-   `PAGE UP`: Will move the highlight to the first option on the list.

-   `PAGE DOWN`: Will move the highlight to the last option on the list.

-   `ESCAPE`: Closes the dropdown menu.


## Installation

- You can install the component using : `$ npm i @yanbe/hrnet-dropdown`


## Usage

This component is a React component, and should be usable in any React application.

You can import the Dropdown component like this :

```jsx

import { Dropdown } from "@yanbe/hrnet-dropdown";

``` 


## Example

Here is an example of the component being used in a simple way :


```jsx

import React, { useState } from "react";
import { Dropdown } from "@yanbe/hrnet-dropdown";



function App() {

  // This is a simple array containing the data that will be used for the dropdown in this example
  const options = [
    "Option 1", 
    "Option 2", 
    "Option 3", 
    "Option 4", 
    "Option 5", 
    "Option 6", 
    "Option 7", 
    "Option 8", 
    "Option 9", 
    "Option 10"
  ];
  
  // We use a React State to handle the selection of an option
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">

      <h1>Dropdown Demo</h1>

      <Dropdown
        data={options}
        label="Choices"
        placeholder="Please Select An Option"
        onSelected={handleSelectedOption}
        id="dropdown-example"
        errorMessage=""
        containerStyle={{ 
            width: '300px' 
            }}
        toggleStyle={{ 
            backgroundColor: '#eee', 
            padding: '10px' 
            }}
        menuStyle={{ 
            backgroundColor: '#fff', 
            border: '1px solid #ccc', 
            borderRadius: '4px' 
            }}
        itemStyle={{ 
            padding: '8px 12px', 
            cursor: 'pointer' 
            }}
        highlightedStyle={{ 
            backgroundColor: '#f0f0f0' 
            }}
        
      />
      <p>Your choice : {selectedOption}</p>

    </div>
  );
}

export default App;

```

## Props


| Prop               | Type                  | Description                                                                                   |
| :----------------- | :-------------------- | :-------------------------------------------------------------------------------------------- |
| `data`             | `arrayOf string`      | **Required**. The data passed to the dropdown menu.                                           |
| `label`            | `string`              | The label text above the dropdown menu.                                                       |
| `placeholder`      | `string`              | The text showing by default on the dropdown menu.                                             |
| `onSelected`       | `func`                | The callback function called when a choice is selected.                                       |
| `id`               | `string`              | The unique ID of the dropdown menu.                                                           |
| `errorMessage`     | `string`              | The error message showing below the dropdown that you can enable if needed.                   |
| `containerStyle`   | `object`              | Empty by default. Prop to enable CSS styles that you can apply to the dropdown container.     |
| `toggleStyle`      | `object`              | Empty by default. Prop to enable CSS styles that you can apply to the dropdown toggle.        |
| `menuStyle`        | `object`              | Empty by default. Prop to enable CSS styles that you can apply to the dropdown menu.          |
| `itemStyle`        | `object`              | Empty by default. Prop to enable CSS styles that you can apply to the dropdown list.          |
| `highlightedStyle` | `object`              | Empty by default. Prop to enable CSS styles that you can apply to a highlighted list element. |