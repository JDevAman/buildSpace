
# ⚔️ AOT Themed Personal Portfolio - `devAman`

An Attack on Titan–inspired developer portfolio designed with cinematic visuals, smooth scrolls, and an immersive tech showcase. Built with React, TailwindCSS, Framer Motion, and Three.js.

---

## 🎯 Theme Overview

- **Design**: Minimalistic, military-style UI with AOT influence (no comic or rumbling overlays).
- **Focus**: Professional feel with subtle anime flavor.
- **Core Experience**: Scout Regiment themed interface, pulsating emblem loader, 3D visuals, smooth interactions.

---

## 🧱 Sections Breakdown

### 🌀 Preloader

- **Visual**: 3D **Scout Regiment emblem** centered on screen.
- **Animation**:
  - Left-right **slow rotation** (Three.js or CSS transform).
  - **Pulsating glow** or **shimmer** on edges.
- **Text**:  
  ```
  "Shinzo wo Sasageyo..."
  ```
- **Progress bar**: Minimal and synced to asset loading progress.

---

### 🏠 Home / Hero Section

- **Header Navigation** (top-right):
  ```
  devAman        | Home | About | Experience | Skills | Projects | Contact
  ```
  - `devAman` as stylized text-based logo (Orbitron font).
  - Transparent background with backdrop blur.
  - Smooth transitions on scroll.

- **Main Hero**:
  - Centered **3D Scout Regiment Emblem** with ambient rotation.
  - Scroll parallax or tilt interaction on mouse movement.
  - Text Overlay:
    ```
    WELCOME TO SCOUTVERSE
    Pushing Code Like It’s a Final Season
    ```
  - CTA Button: `Explore My Journey →`

---

## 🎨 Theme Guidelines

### Color Palette
- Charcoal Black `#1a1a1a`
- Ash Gray `#2d2d2d`
- Thunder Blue `#00d4ff`
- Blood Red Accents `#ff6b6b`

### Typography
- **Headers**: Orbitron, Bebas Neue
- **Body**: Clean sans-serif (e.g., Inter, Open Sans)
- **Aesthetic**: Clean, dossier-style layout

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite, Tailwind CSS
- **3D/Animations**: Three.js, @react-three/fiber, Framer Motion
- **Charts**: Chart.js (Radar for Skills)
- **Contact**: EmailJS + optional OpenAI integration
- **Deployment**: Netlify / Vercel

---

## 🔜 Coming Up

- Experience, About, Skills, and Project sections under development.
- “Connect” section with character cards (Levi for email, Mikasa AI).
- Smooth transitions, radial skills chart, project previews.

---

## 📁 Folder Structure

```
/public
  ├─ models/
  ├─ images/
  └─ sounds/

/src
  ├─ components/
  ├─ assets/
  ├─ hooks/
  ├─ utils/
  ├─ pages/
  └─ App.jsx
```

---

## ✅ TODO

- [x] Define theme, fonts, and base layout
- [x] Setup preloader with logo and text
- [x] Hero section with 3D emblem
- [ ] About, Experience, Skills, Projects (In Progress)
- [ ] AI + Contact integration
