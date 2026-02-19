
## FDT – Fintech Fraud Detection Landing Page

A premium, scroll-animated fintech landing page for a UPI fraud detection platform, built with React + Vite + Tailwind CSS, using CSS-based Framer Motion-style animations (via Intersection Observer API and custom keyframes for 60fps performance).

---

### 🎨 Design System
- **Background:** `#F9F8FF` (light lavender base)
- **Primary Gradient:** `#C8B6FF → #A78BFA`
- **Accent:** `#7C3AED`
- **Text:** `#1E1B4B`
- **Cards:** `rgba(255,255,255,0.8)` with soft glassmorphism + `backdrop-blur`
- **Corners:** `rounded-2xl` / `rounded-3xl` throughout
- **Typography:** Modern, high-whitespace, bold headlines
- **Smooth scroll snapping** between sections

---

### 1️⃣ Hero Section
- Large bold headline: **"Real-Time AI Fraud Detection for UPI Transactions"**
- Subheadline about proactive fraud prevention
- 3 animated feature pills/badges (fade-in staggered)
- 3 buttons: **Watch Demo** (lavender gradient), **View User Web App** (outline), **View Admin Console** (outline)
- Animated radial lavender gradient background with floating orb blobs
- Subtle animated dot/grid pattern overlay

---

### 2️⃣ Problem Section – Animated Reveal
- Headline: **"The Growing Risk in Digital Payments"**
- On scroll: text fades up, statistics animate as count-up numbers
- 3 fraud stat cards sliding in from alternating sides (left/right)
- Cards show: transaction fraud rate, annual losses, detection delay stats

---

### 3️⃣ Solution Section – Storyboard Animation
- 4 sequential step cards that reveal one-by-one as user scrolls:
  - **Step 1:** User initiates transaction (animated mock phone UI)
  - **Step 2:** Behavioral feature extraction (animated connecting node lines)
  - **Step 3:** Ensemble ML scoring (animated pulsing bar graph)
  - **Step 4:** Decision engine – ALLOW / DELAY / BLOCK cards with color glow (green/amber/red)
- Each step animates with a blur-to-sharp + upward fade reveal

---

### 4️⃣ Advanced Features Section – Hover Expansion Cards
- 6 interactive cards in a 3×2 grid:
  1. Behavioral Profiling
  2. Graph Signal Detection
  3. Dynamic Risk Threshold Engine
  4. Risk Buffer Mechanism
  5. Explainable AI Reasoning
  6. WebAuthn Biometric Authentication
- On hover: card lifts with `translateY`, lavender glow shadow, subtle scale, icon animates

---

### 5️⃣ Comparison Section – Animated Table
- Side-by-side comparison: **Traditional Systems vs FDT**
- Rows: Threshold type, timing, transparency, behavioral profiling, adaptability
- Checkmarks and X marks animate in with a staggered reveal on scroll

---

### 6️⃣ Workflow Pipeline – Horizontal Animation
- Animated horizontal pipeline visualization:
  **User → Feature Engine → ML Ensemble → Risk Engine → Database → Real-Time Alert**
- Each node fades in with a connecting animated line drawing between nodes as user scrolls into view

---

### 7️⃣ Architecture Section – Animated Diagram
- Vertical architecture flow with animated connecting lines:
  React PWA → FastAPI Backend → ML Engine → PostgreSQL + Redis → Admin Dashboard
- Lines draw themselves on scroll entry, nodes pulse gently

---

### 8️⃣ CTA Section – Premium Centered
- Lavender gradient background section
- Headline: **"Secure Digital Payments Before Fraud Happens"**
- 3 buttons: View User Web App, View Admin Console, Watch Demo
- Subtle floating blob animation in the background

---

### 9️⃣ Footer
- Clean minimal footer
- Text: **FDT Project · Sri Sairam Engineering College · 2026**

---

### ⚙️ Technical Approach
- **Intersection Observer API** for scroll-triggered animations (no heavy Framer Motion library needed)
- **CSS custom keyframes** added to Tailwind config for all animations (fade-up, blur-in, slide-left/right, count-up)
- **CSS `scroll-snap`** for smooth section snapping
- **Button magnetic hover effect** via mouse event listeners
- All animations run at **60fps** using `transform` and `opacity` only (GPU-accelerated)
- Fully responsive — mobile animations simplified for performance
