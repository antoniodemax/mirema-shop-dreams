# Mirema Shop Dreams (Frontend)

**Mirema Shop Dreams** is a modern e-commerce frontend built with **React**, **Tailwind CSS**, and **Supabase**. Tailored for users in Nairobi, Kenya, it delivers a sleek, responsive, and secure shopping experience with real-time updates and local delivery details.

---

## 🌟 Features

- 🔄 **Real-Time Product Updates** with Supabase
- 🖥️ **Responsive UI** across devices (mobile, tablet, desktop)
- 🛍️ **Product Showcase** with discounts and ratings
- 🔐 **User Authentication** powered by Supabase Auth
- 🚚 **Fast Delivery Info** throughout Nairobi
- 🔒 **Secure Shopping** using HTTPS & modern best practices
- 📍 **Store Locator** with location integration

---

## 🛠 Tech Stack

| Category         | Technology                  |
|------------------|-----------------------------|
| **Framework**     | React                      |
| **Styling**       | Tailwind CSS               |
| **Routing**       | React Router               |
| **State Mgmt**    | React Hooks                |
| **Icons**         | Lucide React               |
| **Backend/API**   | Supabase (DB & Auth)       |
| **Build Tool**    | Vite                       |
| **HTTP Client**   | Axios / native Fetch       |

---

## 📁 Project Structure
mirema-shop-dreams/
├── public/
├── src/
│ ├── api/
│ │ └── api.ts # Supabase API logic
│ ├── components/ # UI Components
│ │ ├── Navbar.tsx
│ │ ├── Hero.tsx
│ │ ├── FeaturedProducts.tsx
│ │ └── Footer.tsx
│ ├── pages/ # Route Views
│ │ ├── Index.tsx
│ │ ├── Products.tsx
│ │ ├── Location.tsx
│ │ ├── Dashboard.tsx
│ │ ├── Login.tsx
│ │ └── Signup.tsx
│ ├── App.tsx # Main App Component
│ └── main.tsx # Entry Point
├── .env # Environment Variables
├── package.json
├── vite.config.ts



---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- A [Supabase](https://supabase.io/) project (free tier is sufficient)

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/mirema-shop-dreams.git
cd mirema-shop-dreams

2. **Install dependencies**

bash
Copy
Edit
npm install
# or
yarn install

4. **Configure environment variables**

Create a .env file in the root directory:

env
Copy
Edit
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Mirema Shop Dreams (Frontend)

**Mirema Shop Dreams** is a modern e-commerce frontend built with **React**, **Tailwind CSS**, and **Supabase**. Tailored for users in Nairobi, Kenya, it delivers a sleek, responsive, and secure shopping experience with real-time updates and local delivery details.

---

## 🌟 Features

- 🔄 **Real-Time Product Updates** with Supabase  
- 🖥️ **Responsive UI** across devices (mobile, tablet, desktop)  
- 🛍️ **Product Showcase** with discounts and ratings  
- 🔐 **User Authentication** powered by Supabase Auth  
- 🚚 **Fast Delivery Info** throughout Nairobi  
- 🔒 **Secure Shopping** using HTTPS & modern best practices  
- 📍 **Store Locator** with location integration  

---

## 🛠 Tech Stack

| Category         | Technology                  |
|------------------|-----------------------------|
| **Framework**     | React                      |
| **Styling**       | Tailwind CSS               |
| **Routing**       | React Router               |
| **State Mgmt**    | React Hooks                |
| **Icons**         | Lucide React               |
| **Backend/API**   | Supabase (DB & Auth)       |
| **Build Tool**    | Vite                       |
| **HTTP Client**   | Axios / native Fetch       |

---

## 📁 Project Structure

```
mirema-shop-dreams/
├── public/
├── src/
│   ├── api/
│   │   └── api.ts            # Supabase API logic
│   ├── components/           # UI Components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedProducts.tsx
│   │   └── Footer.tsx
│   ├── pages/                # Route Views
│   │   ├── Index.tsx
│   │   ├── Products.tsx
│   │   ├── Location.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Login.tsx
│   │   └── Signup.tsx
│   ├── App.tsx               # Main App Component
│   └── main.tsx              # Entry Point
├── .env                      # Environment Variables
├── package.json
├── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- A [Supabase](https://supabase.io/) project (free tier is sufficient)

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/mirema-shop-dreams.git
cd mirema-shop-dreams
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## 🧪 Usage

### Navigation Routes

| Route        | Description                          |
|--------------|--------------------------------------|
| `/`          | Homepage with hero + featured items  |
| `/products`  | View available products              |
| `/location`  | Store locator                        |
| `/login`     | Sign in to user account              |
| `/signup`    | Register a new user                  |
| `/dashboard` | User dashboard (requires login)      |

### API Integration

All Supabase interactions are managed via `src/api/api.ts`.

#### Example:

```ts
import { supabase } from './client'

export const fetchProducts = async () => {
  const { data, error } = await supabase.from('products').select('*')
  if (error) throw error
  return data
}
```

---

## 📦 Deployment

To build the app for production:

```bash
npm run build
# or
yarn build
```

Deploy the generated `dist/` folder to any static host:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Firebase Hosting](https://firebase.google.com)

Ensure environment variables are configured on your hosting platform.

---

## 🤝 Contributing

We welcome contributions to improve **Mirema Shop Dreams**.

### How to Contribute

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make changes & commit
git commit -m "Add: your feature"

# 4. Push to GitHub
git push origin feature/your-feature-name

# 5. Open a Pull Request
```

---

## 🐛 Issues

Found a bug or want to suggest a feature? [Open an issue](https://github.com/your-username/mirema-shop-dreams/issues)

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 🙏 Acknowledgments

- [React](https://reactjs.org)  
- [Supabase](https://supabase.io)  
- [Tailwind CSS](https://tailwindcss.com)  
- [Lucide Icons](https://lucide.dev)  
- [Vite](https://vitejs.dev)  

---

## 📬 Contact

**MiremaShopDreams**  
📧 Email: [info@miremashopdreams.com](mailto:info@anthonypeterodhiambo.com)  
🌐 Website: *Coming soon*

> Built with ❤️ in Nairobi.
