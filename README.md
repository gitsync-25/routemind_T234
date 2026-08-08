# RouteMind

RouteMind is an AI-powered logistics management and fleet tracking dashboard designed to help logistics teams optimize routes, monitor vehicles, manage fleet operations, and gain actionable insights.

## Live Application

- Frontend: https://routemind-t234-4f73yr4bi-vaibhav-modanwal-s-projects.vercel.app/
- Backend API: https://routemind-t234.onrender.com
- API Documentation: https://routemind-t234.onrender.com/docs

## Features

### Dashboard
- Real-time logistics overview
- Delivery statistics
- Active driver monitoring
- Vehicle availability
- AI-based fuel savings insights

### AI Route Planner
- Pickup and destination planning
- Driver and vehicle selection
- Route optimization
- Estimated distance and ETA
- Fuel and cost estimation
- Traffic and confidence indicators

### Live Fleet Tracking
- Interactive Leaflet map
- Vehicle locations
- Route visualization
- Fleet status monitoring
- Vehicle tracking information

### Fleet Management
- Vehicle information
- Driver assignment
- Fuel monitoring
- Vehicle health
- Maintenance status

### Insights
- Delivery performance
- Fuel savings
- Fleet efficiency
- AI score
- Weekly performance trends
- AI recommendations

### Settings
- Company profile
- Notification preferences
- AI preferences
- Route optimization settings

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- React Leaflet

### Backend
- Python
- FastAPI
- Uvicorn

### Deployment
- Vercel — Frontend
- Render — Backend API
- GitHub — Source Code

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Backend health check |
| POST | `/optimize` | Optimize a delivery route |
| GET | `/tracking` | Get tracking information |
| GET | `/fleet` | Get fleet information |
| GET | `/insights` | Get logistics insights |

## Project Structure

```text
routemind_T234/
├── app/
├── backend/
├── components/
├── context/
├── hooks/
├── lib/
├── public/
├── types/
├── package.json
└── README.md



Deployment Architecture
User
  |
  v
Vercel
Next.js Frontend
  |
  v
Render
FastAPI Backend
  |
  +-- /optimize
  +-- /tracking
  +-- /fleet
  +-- /insights
