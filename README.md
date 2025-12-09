# Mega Blog

A modern, feature-rich blogging platform built with React and Appwrite, offering a seamless content creation and management experience.

## 🚀 Live Demo

**Check out the live site:** [https://sijanblog.netlify.app/](https://sijanblog.netlify.app/)

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful glassmorphism design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- ✍️ **Rich Text Editor** - Powered by TinyMCE for advanced content creation
- 🔐 **Authentication** - Secure user registration and login with Appwrite
- 📝 **CRUD Operations** - Create, read, update, and delete blog posts
- 🖼️ **Image Upload** - Integrated image storage with Appwrite
- 🏠 **Beautiful Landing Page** - Engaging hero section with feature showcase
- 📧 **Contact Form** - Email integration with EmailJS
- 🗺️ **Google Maps** - Interactive map on contact page
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 🎯 **State Management** - Redux Toolkit for efficient state handling

## 🛠️ Technologies Used

### Frontend

- **React 19.2.0** - Modern React with functional components
- **React Router DOM 7.9.6** - Client-side routing
- **Redux Toolkit 2.10.1** - State management
- **TailwindCSS 4.1.17** - Utility-first CSS framework
- **TinyMCE** - Rich text editor
- **React Hook Form** - Form validation and handling

### Backend & Services

- **Appwrite** - Backend as a Service (Authentication, Database, Storage)
- **EmailJS** - Email delivery service
- **Vite 7.2.2** - Fast build tool and dev server

### Deployment

- **Netlify** - Hosting and continuous deployment

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Appwrite account (for backend services)
- TinyMCE API key
- EmailJS account (for contact form)

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/sijanbroo/blog-site.git

# Navigate to project directory
cd mega-blog

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Appwrite Configuration
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id

# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id

# TinyMCE API Key
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

### Running Locally

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
mega-blog/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header/       # Navigation header
│   │   ├── Footer/       # Footer component
│   │   ├── post-form/    # Post creation/editing form
│   │   ├── PostCard.jsx  # Blog post card
│   │   ├── RTE.jsx       # Rich text editor wrapper
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Homepage with landing
│   │   ├── AllPosts.jsx  # Posts listing page
│   │   ├── Post.jsx      # Single post view
│   │   ├── AddPost.jsx   # Create new post
│   │   ├── EditPost.jsx  # Edit existing post
│   │   ├── Contact.jsx   # Contact page
│   │   ├── Login.jsx     # Login page
│   │   └── Signup.jsx    # Registration page
│   ├── appwrite/         # Appwrite service files
│   │   ├── auth.js       # Authentication service
│   │   └── config.js     # Database & storage service
│   ├── conf/             # Configuration
│   │   └── conf.js       # Environment variables
│   ├── store/            # Redux store
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies
```

## 🎯 Key Features Explained

### Authentication & Authorization

- Secure user registration and login powered by Appwrite Auth
- Protected routes for authenticated users
- Session management with Redux Toolkit

### Content Management

- Create rich blog posts with TinyMCE editor
- Upload and manage images via Appwrite Storage
- Edit and delete your own posts
- View all published posts in a responsive grid

### User Experience

- Beautiful landing page with hero section when no posts exist
- Glassmorphism design with gradient effects
- Smooth hover animations and transitions
- Mobile-friendly navigation with hamburger menu

### Contact & Communication

- Contact form with EmailJS integration
- Google Maps integration for location
- Real-time form validation

## 🌐 Deployment

This project is deployed on Netlify with automatic deployments from the main branch.

### Deploy Your Own

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

**Important:** Don't forget to configure all environment variables in your Netlify dashboard.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sijan Shrestha**

- Website: [https://sijanblog.netlify.app/](https://sijanblog.netlify.app/)
- GitHub: [@sijanbroo](https://github.com/sijanbroo)

## 🙏 Acknowledgments

- [Appwrite](https://appwrite.io/) - Backend as a Service
- [TinyMCE](https://www.tiny.cloud/) - Rich text editor
- [EmailJS](https://www.emailjs.com/) - Email service
- [Netlify](https://www.netlify.com/) - Hosting platform

## 📞 Support

For issues or questions, please [open an issue](https://github.com/sijanbroo/Blog-Site/issues) on GitHub.

---

**⭐ Star this repo if you find it helpful!**

Last updated: December 2025
