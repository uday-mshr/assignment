import requests
import json

url = "http://localhost:3001/api/hotels"

# Sample JSON array with hotels from all cities
hotels_data = [
  {
    "name": "Deluxe Palace",
    "location": "Delhi",
    "pricePerNight": 1200
  },
  {
    "name": "Grand Inn",
    "location": "Delhi",
    "pricePerNight": 1000
  },
  {
    "name": "City Heights",
    "location": "Delhi",
    "pricePerNight": 900
  },
  {
    "name": "Royal Residency",
    "location": "Delhi",
    "pricePerNight": 1500
  },
  {
    "name": "Majestic Suites",
    "location": "Delhi",
    "pricePerNight": 1100
  },
  {
    "name": "Central Plaza",
    "location": "Delhi",
    "pricePerNight": 1300
  },
  {
    "name": "Golden Towers",
    "location": "Delhi",
    "pricePerNight": 800
  },
  {
    "name": "Elegant Stay",
    "location": "Delhi",
    "pricePerNight": 950
  },
  {
    "name": "Serene Haven",
    "location": "Delhi",
    "pricePerNight": 1400
  },
  {
    "name": "Regal Retreat",
    "location": "Delhi",
    "pricePerNight": 1150
  },
  {
    "name": "Ocean View Hotel",
    "location": "Mumbai",
    "pricePerNight": 1500
  },
  {
    "name": "Luxury Bay Resort",
    "location": "Mumbai",
    "pricePerNight": 1800
  },
  {
    "name": "Sunset Suites",
    "location": "Mumbai",
    "pricePerNight": 1200
  },
  {
    "name": "Harbour Heights",
    "location": "Mumbai",
    "pricePerNight": 1300
  },
  {
    "name": "City Lights Inn",
    "location": "Mumbai",
    "pricePerNight": 1600
  },
  {
    "name": "Golden Sands Hotel",
    "location": "Mumbai",
    "pricePerNight": 1400
  },
  {
    "name": "Marine Grand",
    "location": "Mumbai",
    "pricePerNight": 1100
  },
  {
    "name": "Skyline Plaza",
    "location": "Mumbai",
    "pricePerNight": 1000
  },
  {
    "name": "Regency Retreat",
    "location": "Mumbai",
    "pricePerNight": 1350
  },
  {
    "name": "Palm Grove Hotel",
    "location": "Mumbai",
    "pricePerNight": 1250
  },
  {
    "name": "Tech Park Suites",
    "location": "Bengaluru",
    "pricePerNight": 1100
  },
  {
    "name": "Garden View Hotel",
    "location": "Bengaluru",
    "pricePerNight": 1200
  },
  {
    "name": "Silicon Valley Inn",
    "location": "Bengaluru",
    "pricePerNight": 1000
  },
  {
    "name": "Green Oasis Resort",
    "location": "Bengaluru",
    "pricePerNight": 1300
  },
  {
    "name": "Urban Heights",
    "location": "Bengaluru",
    "pricePerNight": 1400
  },
  {
    "name": "Metro Mansion",
    "location": "Bengaluru",
    "pricePerNight": 950
  },
  {
    "name": "Central Square Hotel",
    "location": "Bengaluru",
    "pricePerNight": 1150
  },
  {
    "name": "Highland Retreat",
    "location": "Bengaluru",
    "pricePerNight": 1050
  },
  {
    "name": "Eco Haven",
    "location": "Bengaluru",
    "pricePerNight": 1250
  },
  {
    "name": "Lakeside Serenity",
    "location": "Bengaluru",
    "pricePerNight": 1350
  },
  {
    "name": "Hilltop Heights",
    "location": "Pune",
    "pricePerNight": 950
  },
  {
    "name": "Palm Grove Resort",
    "location": "Pune",
    "pricePerNight": 1100
  },
  {
    "name": "Cityscape Inn",
    "location": "Pune",
    "pricePerNight": 1200
  },
  {
    "name": "Serenity Suites",
    "location": "Pune",
    "pricePerNight": 1000
  },
  {
    "name": "Golden Meadows Hotel",
    "location": "Pune",
    "pricePerNight": 1300
  },
  {
    "name": "Peak View Lodge",
    "location": "Pune",
    "pricePerNight": 1050
  },
  {
    "name": "Tranquil Retreat",
    "location": "Pune",
    "pricePerNight": 1150
  },
  {
    "name": "Vista Heights",
    "location": "Pune",
    "pricePerNight": 1350
  },
  {
    "name": "Elegant Escapes",
    "location": "Pune",
    "pricePerNight": 1250
  },
  {
    "name": "Valley Vista Hotel",
    "location": "Pune",
    "pricePerNight": 1400
  },
  {
    "name": "Nizam Palace",
    "location": "Hyderabad",
    "pricePerNight": 1200
  },
  {
    "name": "Pearl City Hotel",
    "location": "Hyderabad",
    "pricePerNight": 1000
  },
  {
    "name": "Tech Hub Inn",
    "location": "Hyderabad",
    "pricePerNight": 900
  },
  {
    "name": "Royal Residences",
    "location": "Hyderabad",
    "pricePerNight": 1500
  },
  {
    "name": "Majestic Mansions",
    "location": "Hyderabad",
    "pricePerNight": 1100
  },
  {
    "name": "Cyber Heights",
    "location": "Hyderabad",
    "pricePerNight": 1300
  },
  {
    "name": "Golden Palms Resort",
    "location": "Hyderabad",
    "pricePerNight": 800
  },
  {
    "name": "Techie Towers",
    "location": "Hyderabad",
    "pricePerNight": 950
  },
  {
    "name": "Regal Retreat",
    "location": "Hyderabad",
    "pricePerNight": 1400
  },
  {
    "name": "Charminar Grand",
    "location": "Hyderabad",
    "pricePerNight": 1150
  },
  {
    "name": "Marina Bay Hotel",
    "location": "Chennai",
    "pricePerNight": 1500
  },
  {
    "name": "Southern Comfort Inn",
    "location": "Chennai",
    "pricePerNight": 1800
  },
  {
    "name": "City Lights Residency",
    "location": "Chennai",
    "pricePerNight": 1200
  },
  {
    "name": "Beachfront Bliss",
    "location": "Chennai",
    "pricePerNight": 1300
  },
  {
    "name": "Harbour View Lodge",
    "location": "Chennai",
    "pricePerNight": 1600
  },
  {
    "name": "Golden Sands Hotel",
    "location": "Chennai",
    "pricePerNight": 1400
  },
  {
    "name": "Metro Mansion",
    "location": "Chennai",
    "pricePerNight": 1100
  },
  {
    "name": "Skyline Plaza",
    "location": "Chennai",
    "pricePerNight": 1000
  },
  {
    "name": "Regency Retreat",
    "location": "Chennai",
    "pricePerNight": 1350
  },
  {
    "name": "Palm Grove Hotel",
    "location": "Chennai",
    "pricePerNight": 1250
  }
]


# Iterate through each hotel and send a POST request
for hotel in hotels_data:
    payload = json.dumps(hotel)
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.post(url, headers=headers, data=payload)

    print(response.text)
