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

- First version used nested blocks to represent the different levels in the tree

  - Keeping track of the hierarchy became difficult the deeper the element
  - Moving from one level to another was Inefficient
  - Used util to check status at once a node was reached

- Second implementation tries to resemble a file explorer
  - Used a util to extend each object in the sample data with statuses, type and node count to simplify implementation of Component logic
  - The Viewer component passes it's state setter to the root component as a ref. Having the state in the root would cause re-renders that prevented proper functionality. The ref is then passed as a prop
