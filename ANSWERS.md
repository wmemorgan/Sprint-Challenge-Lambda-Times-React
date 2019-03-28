## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

  _PropTypes are used to check the data that is being passed is the correct type (number, string, array, etc). This is particularly helpful in Javascript because it is a dynamically typed language which means it doesn't enforce data types._

- [ ] Describe a life-cycle event in React?

  _The React life-cycle are stages a class component goes through when rendering and managing state. The life-cycle comprised of 3 phases:_

  _1. Mounting_
  _2. Updating_
  _3. Unmounting_

  _These stages enable a developer to control when a particular method could be invoked._

- [ ] Explain the details of a Higher Order Component?

_HOC is an advanced ReactJS pattern that allows developers the capability of reuse a component's functionality in other components. This pattern is implemented as a function that receives a component as an argument and returns a new component._

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.


  | Style Method | Benefits |
  | ------ | -------- |
  | CSS (regular and preprocessors) | Universal language for UI styling that works in all web applications |
  | Reactstrap: a ReactJS version of the Bootstrap library | Has prebuilt components using the same naming conventions as bootstrap. Can quickly develop polished UI by leveraging bootstrap library. |
  | Styled Components | Can use regular CSS syntax. Has the same benefits of a CSS preprocessor (nesting, variables, mixins, code-splitting) combined with the modular and reusable flexibility of ReactJS components. |