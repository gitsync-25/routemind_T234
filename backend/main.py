from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="RouteMind API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "RouteMind Backend is running"
    }


@app.post("/optimize")
def optimize_route(data: dict):
    return {
        "distance": "24.6 km",
        "eta": "34 mins",
        "fuel": "3.2 L",
        "cost": "₹428",
        "traffic": "Medium",
        "confidence": "98%"
    }


@app.get("/tracking")
def tracking():
    return {
        "lat": 28.6139,
        "lng": 77.2090,
        "speed": 62,
        "eta": "14 mins"
    }


@app.get("/fleet")
def fleet():
    return [
        {
            "id": "TRK-204",
            "driver": "Rahul Sharma",
            "fuel": 76,
            "status": "Active"
        },
        {
            "id": "TRK-187",
            "driver": "Amit Kumar",
            "fuel": 64,
            "status": "Delivering"
        },
        {
            "id": "TRK-112",
            "driver": "Priya Singh",
            "fuel": 52,
            "status": "Maintenance"
        }
    ]


@app.get("/insights")
def insights():
    return {
        "deliveries": 98,
        "fuelSaved": 12.8,
        "efficiency": 94,
        "aiScore": 96
    }