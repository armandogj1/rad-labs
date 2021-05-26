# Radiator Labs Code Challenge

## Setup

```sh
npm install
```

## Starting the app

```sh
npm start
```

## Dependencies

- [PropTypes](https://www.npmjs.com/package/prop-types)
- [uuid](https://www.npmjs.com/package/uuid)

## Implementation

- Chose to use create-react-app to generate the boilerplate

- First version used nested blocks to represent the different levels in the tree

  - Keeping track of the hierarchy became difficult the deeper the element
  - Moving from one level to another was inefficient and clumsy
  - Used util to check status of node once a node was reached, making status unknown up the tree

- Second implementation tries to resemble a file explorer

  - Used a util to extend each object in the sample data with statuses, type and node count to simplify implementation of Component logic. Bubbling up statuses and count up the tree
  - The Viewer component passes it's state setter to the root component as a ref. Having the state in the root would cause re-renders that prevented proper functionality. The ref is then passed as a prop
  - Thought about storing the data into a shared context but traversing the data could done in recursive manner. The data is therefore passed as a prop

- CSS
  - Separated css into multiple files, but did not scope them
  - Minimal styling, primarily to position elements cleanly. Used combination of flexbox and grid

## Possible Improvements

- Include some data visualization using graphs or charts
- Add more granular information at each level, ie: counts of nodes per status
- Display a flat list of all nodes with sorting by property of choice
