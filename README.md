# ÌªçÔ∏è SecondChance - Second-Hand Marketplace

A modern, full-stack web application for buying and selling second-hand items.

## Ì∫Ä Quick Start

```bash
git clone https://github.com/nguyendodary/secondchance-marketplace.git
cd secondchance-marketplace
docker-compose up -d
```

Access:
- Frontend: http://localhost:3000
- API Docs: http://localhost:8080/api-docs

## Ì≥Å Structure

- `backend/` - Express.js API
- `frontend/` - React App
- `docker-compose.yml` - Docker config

## Ì¥å API Endpoints

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get item details
- `POST /api/items` - Create item
- `DELETE /api/items/:id` - Delete item
- `GET /api/search?category=X` - Search by category

## Ìª†Ô∏è Technologies

**Backend**: Express.js, MongoDB, Multer, Swagger
**Frontend**: React 19, React Router v7, Axios
**DevOps**: Docker, Docker Compose

## Ì≥ö Documentation

API Docs: http://localhost:8080/api-docs

## Ì≥Ñ License

ISC

---

**Repository**: https://github.com/nguyendodary/secondchance-marketplace
