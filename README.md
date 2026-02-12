# 🛍️ SecondChance - Modern Second-Hand Marketplace

A beautiful, modern full-stack web application for buying and selling second-hand items with a sleek UI and comprehensive API documentation.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-ISC-green)
![Status](https://img.shields.io/badge/status-active-success)

## ✨ Features

- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 📱 **Responsive Design** - Works perfectly on all devices
- 🔍 **Smart Search** - Filter items by category
- ➕ **Easy Listing** - Add items with images
- 📚 **API Documentation** - Interactive Swagger docs
- 🐳 **Docker Ready** - One-command deployment
- ⚡ **Fast Performance** - Optimized for speed

## 🚀 Quick Start

### Prerequisites
- Docker Desktop installed

### Run Application

```bash
docker-compose up -d
```

Wait 1-2 minutes, then open:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **API Docs**: http://localhost:8080/api-docs

### Add Sample Data

```bash
docker-compose exec backend node src/scripts/seed.js
```

## 📁 Project Structure

```
secondchance/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── middleware/     # Express middleware
│   │   ├── routes/         # API routes
│   │   ├── scripts/        # Utility scripts
│   │   ├── uploads/        # Uploaded images
│   │   └── index.js        # Main app file
│   ├── Dockerfile
│   └── package.json
│
├── frontend/                # React application
│   ├── public/             # Static files
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css      # Component styles
│   │   └── index.css       # Global styles
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml      # Docker orchestration
└── README.md
```

## 🔌 API Endpoints

### Items
- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get item details
- `POST /api/items` - Create new item
- `DELETE /api/items/:id` - Delete item

### Search
- `GET /api/search?category=Electronics` - Search by category

## 🎨 Design System

### Colors
- **Primary**: #1a1a2e (Dark Blue)
- **Secondary**: #16213e (Darker Blue)
- **Accent**: #0f3460 (Deep Blue)
- **Highlight**: #e94560 (Red)

### Components
- Gradient navbar with active states
- Card-based item display
- Smooth hover animations
- Responsive grid layout
- Modern form inputs
- Alert notifications

## 🛠️ Technologies

### Backend
- Express.js - Web framework
- MongoDB - Database
- Multer - File uploads
- Swagger - API documentation

### Frontend
- React - UI library
- React Router - Navigation
- Axios - HTTP client
- CSS3 - Modern styling

## 📖 Documentation

- **API Docs**: http://localhost:8080/api-docs
- **Backend**: See `backend/src/routes/` for endpoint details
- **Frontend**: See `frontend/src/components/` for component details

## 🐛 Troubleshooting

### Port Already in Use
```bash
docker-compose down
docker-compose up -d
```

### MongoDB Connection Error
```bash
docker-compose logs mongodb
```

### Frontend Can't Connect to Backend
1. Check backend is running: `docker-compose ps`
2. Wait 1-2 minutes for services to start
3. Check `.env` file has correct API URL

## 🚀 Deployment

### Backend
1. Set environment variables
2. Deploy `backend` folder
3. Ensure MongoDB is accessible

### Frontend
1. Update `REACT_APP_API_URL` in `.env`
2. Run `npm run build`
3. Deploy `build` folder

## 📝 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://mongodb:27017/secondChance
PORT=8080
NODE_ENV=production
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8080
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Made with ❤️ by SecondChance Team**
