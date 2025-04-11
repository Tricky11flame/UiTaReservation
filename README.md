
---

# Reservation UI : more than a Technical Assement

This project was developed as part of a frontend task for an internship program. The goal was to design a **clean, responsive, and modular UI** for a TA or hotel reservation dashboard using modern tools and best practices.

I used this opportunity to explore scalable folder structures, component design, state management, and UI libraries in a realistic development environment.

---

## 🧰 Tech Stack

- ⚛️ **React 19** → *(later downgraded to React 18 due to some peer dependency issues)*
- ⚡ **Vite** → For fast development builds
- 🎨 **Tailwind CSS** → For utility-first styling
- 📦 **ShadCN/UI** → For accessible and customizable components
- 🎯 **Lucide-react** → For clean and minimal icon sets

---

## 🧭 Project Journey

### 🧱 Setting Up Vite + Tailwind

```bash
npm create vite@latest my-project --template react-ts
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

→ Updated `tailwind.config.js` and added custom utilities for spacing and color.

---

### 🧩 Exploring ShadCN/UI

ShadCN made UI building much smoother with ready-made components like:

- `Button`
- `Dialog`
- `Card`
- `Separator`

These paired really well with Tailwind and helped me maintain consistency.

---

### 🔗 Lucide Icons Overview

Lucide is a modern icon library for React. It's lightweight, visually clean, and highly customizable.

📦 Install with:

```bash
npm install lucide-react
```

🔧 Use in code:

```tsx
import { Calendar, Grid3x3, Users } from "lucide-react";
```

🔍 Icons I found useful:

- `panel-left` – Sidebar
- `grid-3x3` – Layouts
- `clock` – Time picker
- `calendar` – Booking dates
- `users` – Guest count
- `mail`, `phone` – Contact fields
- `file-text` – Document preview
- `circle-plus` – Add action
- `message-circle-code` – Notes/comments

🎨 Style tips:

- Change icon color: `text-blue-400`
- Icon background: `bg-blue-400`

---

## 🗂️ Directory Structure

I broke down the UI into small, focused components — each file handles only one part of the UI. Here's a quick structure snapshot:

```bash
src/component/
├── body
│   ├── Body.tsx
│   └── card
│       ├── body
│       │   ├── Body.tsx
│       │   ├── rowLeft
│       │   │   ├── Booking.tsx
│       │   │   ├── CheckIn.tsx
│       │   │   ├── Guests.tsx
│       │   │   ├── RowLeft.tsx
│       │   │   └── ViewRoom.tsx
│       │   └── rowRight
│       │       ├── Amount.tsx
│       │       ├── Contact.tsx
│       │       ├── Docs.tsx
│       │       └── RowRight.tsx
│       ├── Card.tsx
│       └── title
│           ├── Dot.tsx
│           ├── Status.tsx
│           └── Title.tsx
├── structure.txt
└── title
    ├── lower
    │   ├── Date.tsx
    │   ├── Filter.tsx
    │   ├── Lower.tsx
    │   └── Search.tsx
    ├── Title.tsx
    └── upper
        ├── Action.tsx
        ├── Create.tsx
        ├── Menu.tsx
        └── Upper.tsx
```

> 🧼 10 directories, 25 files — well-organized and easy to scale.

---

## 🛠️ Tips and Tricks

### 📌 Fixing React Peer Dependency Conflicts

```bash
npm install --legacy-peer-deps
# or
npm install --force
```

🧠 Example: `react-day-picker` didn't support React 19.

---

### 🔄 Downgrade React (from 19 → 18)

```bash
npm install react@18 react-dom@18
```

✔️ Needed for compatibility with older packages.

---

### 📄 Generate Directory Tree for README

```bash
npx tree-node-cli -d -I 'node_modules,.next,.git' > structure.md
```

Use this to include the folder tree directly in documentation.

---

### 🔎 Search Where a Package is Used

```bash
grep -r "react-day-picker" .
```

→ Works on Mac/Linux. For Windows:

```cmd
findstr /s /i "react-day-picker" *
```

---

### 🧪 Deploy Locally Like Vercel

```bash
vercel build
vercel deploy --prebuilt
```

→ Helps match Vercel's CI build environment.

---

### 🧹 Clean and Reinstall All Node Modules

```bash
rm -rf node_modules package-lock.json
npm install
```

→ Useful after dependency errors.

---

### 🧲 Flex Trick for Positioning Elements

Want this: `[1 2 _ _ _ 3]`  
Instead of: `[1 2 3 _ _ _]`?

Use `ml-auto` on the last element:

```tsx
<div className="flex">
  <span>1</span>
  <span>2</span>
  <span className="ml-auto">3</span>
</div>
```

---

### 🔗 Push to GitHub From CLI

```bash
gh repo create your-repo-name --public --source=. --remote=origin --push
```

---

## 📒 My Learning Checklist

- ✅ Set up a scalable React + Vite project
- ✅ Explored ShadCN/UI components
- ✅ Used Tailwind CSS effectively
- ✅ Implemented modular folder structure
- ✅ Managed tricky React version conflicts
- ✅ Got comfortable with Lucide-react for iconography

---

## 🎉 Conclusion

This task helped me understand real-world component structuring and styling workflows. I focused on keeping the UI clean, the code maintainable, and the structure future-proof.

If you're a dev starting out or just looking for a **clear example of component architecture**, feel free to explore this repo.

Thanks for reading!

---