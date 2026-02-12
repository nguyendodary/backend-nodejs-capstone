# 🚀 Quick Start Guide

## Prerequisites
- Docker Desktop installed

## Steps

### 1. Install Docker
Download from: https://www.docker.com/products/docker-desktop

### 2. Start Application
```bash
docker-compose up -d
```

### 3. Wait 1-2 Minutes
Services are starting up...

### 4. Open in Browser
- **Frontend**: http://localhost:3000
- **API Docs**: http://localhost:8080/api-docs

### 5. Add Sample Data (Optional)
```bash
docker-compose exec backend node src/scripts/seed.js
```

## Common Commands

```bash
# View logs
docker-compose logs -f

# Stop application
docker-compose down

# Restart
docker-compose restart

# Check status
docker-compose ps
```

## That's It! 🎉

You now have SecondChance running locally!
