---
id: Card
section: components
---

A **card** is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.

Basic cards will have native keyboard interaction with **Tab** navigating between interactive elements and **Shift + Tab** navigating backwards. Any elements inside a card will follow their usual accessibility expectations. 

<br/>
In general, the card component already has accessibility built in. However, variants that will need additional considerations are:
- **Expandable variant:** for expandable variants it’s important to add additional details for screen reader users to understand this interaction. 
Add:

  ```
    toggleButtonProps=({
      id: ‘toggleId’, 
      ‘aria-label’: ‘toggleLabel’, 
      ‘aria-labelledby’: ‘titleId toggleId’, 
      ‘aria-expanded’: this.state.isExpanded
    )}
  ```
  Note in this example that the `aria-labelledby` is a combination of the id on the `CardTitle` and the id on the toggle button. This will then combine the card title and the toggle button's label (this is the `aria-label` with text defining the toggle button, like "Details") and create something like "Header Details, collapsed, button" for the screen reader user. These are highly recommended for accessibility.
