# React JS – Day 15

## 📅 13/08/2025
Day 15 of my React JS learning journey.

---

## 📚 Topics Covered
Today, I explored *two powerful ways* to style components in React:

### 1️⃣ CSS Modules
- CSS Modules help in writing *scoped CSS* so that styles apply only to the component where they are imported.
- Prevents *class name collisions* by generating unique class names automatically.
- Perfect for component-based styling.

*Example:*
```jsx
import styles from './UserProfile.module.css';

function UserProfile() {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>Anil Sidhu</h3>
      <p className={styles.role}>Software Developer</p>
    </div>
  );
}


---

2️⃣ Styled Components

A CSS-in-JS library for styling React components.

Allows writing actual CSS code inside JavaScript files.

Styles are tied directly to components.

Supports dynamic styling with props.


Example:

import styled from 'styled-components';

const Heading = styled.h1`
  color: pink;
  background-color: gray;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const Heading2 = styled.h2`
  color: red;
  background-color: black;
  border: 5px solid green;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
`;


---

🖼 Output Preview

CSS Modules Section: Displayed multiple user profile cards styled with CSS modules.

Styled Components Section: Created styled headings and buttons with different colors and borders.



---

🛠 Technologies Used

React JS

CSS Modules

Styled Components



---

💡 Key Takeaways

CSS Modules are great for component-specific styles without worrying about naming conflicts.

Styled Components are more dynamic and allow you to write styles directly in JS files.

Both methods have their advantages, and the choice depends on the project requirements.



---

🚀 How to Run This Project

1. Install dependencies:



npm install

2. Start development server:



npm run dev


---

✨ Day 15 was all about making React components look beautiful while keeping styles organized and maintainable!

