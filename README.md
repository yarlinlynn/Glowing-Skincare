# ✨ Glowing Skincare Landing Page

A sleek and modern skincare landing page that showcases products and user interaction using **HTML**, **CSS**, and **JavaScript**.

### 📸 Preview
![glowing](https://github.com/user-attachments/assets/23797ee1-35f6-4f57-9187-703b55d9acdb)

## 💡 Features

- Responsive layout adapting to mobile and desktop
- Smooth **scroll animations** and **section reveal effects**
- **Product display** powered by a modular JavaScript `products.js` file
- **Interactive navbar** with scroll-based active link highlighting
- Contact form with UI feedback using Vanilla JS

<br/>

## 🛠 Tech Stack

- 🧾 **HTML5**
- 🎨 **CSS3** (Flexbox, responsive breakpoints, transitions)
- ⚙️ **JavaScript ES6+**

<br/>

## 📂 Project Structure

```text
Glowing-Skincare/
├── index.html                 # Main markup
├── assets/
│   ├── css/
│   │   └── style.css          # Styles and responsive layouts
│   └── js/
│       ├── script.js          # DOM interactions, scroll animation, form feedback
│       └── products.js        # Product data + dynamic rendering logic
└── README.md                  # Project documentation
```
## 🚀 Getting Started
1. Clone the repo:
```
git clone https://github.com/yarlinlynn/Glowing-Skincare.git
```
2. Navigate into the directory:
```
cd Glowing-Skincare
```
3. Open index.html in your browser (double-click or):
```
open index.html    # macOS
start index.html   # Windows
```

## 🧩 How It Works
products.js contains an array of skincare products (name, image, price, details).

script.js dynamically renders these products into the HTML and manages scroll animations, navbar highlighting, and a submission feedback message for the contact form.

Section visibility and menu activation are controlled by listening for scroll events and applying CSS classes.

## 📝 License
Open-source under the MIT License. Feel free to customize and enhance!
