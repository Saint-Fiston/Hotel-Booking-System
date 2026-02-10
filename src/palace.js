import '../styles/palace.css'

// Function to toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// --- embedded hotel data ---
const embeddedHotelsData = [
    {
        "id": 1,
        "name": "The Palace Johannesburg",
        "location": "Johannesburg",
        "address": "15 Becker Street, Lenchele 0012",
        "description": "Luxury 5-star hotel in the heart of Johannesburg with panoramic city views.",
        "price_range": { "single": 1500, "double": 2200, "suite": 3500 },
        "amenities": ["Free WiFi", "Swimming Pool", "Fitness Center", "Restaurant", "Spa", "Room Service", "Air Conditioning", "Parking"],
        "room_types": [
            { "id": 11, "type": "Single Room", "description": "City view from the top of the world", "price": 1299.99, "capacity": 1, "images": "../hotelimag/imag-1.jpg" },
            { "id": 12, "type": "Single Room", "description": "City view from the top of the world", "price": 1549.99, "capacity": 1, "images": "../hotelimag/imag-2.jpg" },
            { "id": 13, "type": "Single Room", "description": "City view from the top of the world", "price": 1449.99, "capacity": 1, "images": "../hotelimag/imag-3.jpg" },
            { "id": 14, "type": "Single Room", "description": "City view from the top of the world", "price": 1389.99, "capacity": 1, "images": "../hotelimag/imag-4.jpg" },
            { "id": 15, "type": "Single Room", "description": "City view from the top of the world", "price": 1299.99, "capacity": 1, "images": "../hotelimag/imag-5.jpg" },
            { "id": 16, "type": "Single Room", "description": "City view from the top of the world", "price": 1599.99, "capacity": 1, "images": "../hotelimag/imag-6.jpg" },
            { "id": 117, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "../hotelimag/imag-7.jpg" },
            { "id": 118, "type": "Double Room", "description": "Double room with balcony", "price": 2200, "capacity": 2, "images": "../hotelimag/imag-8.jpg" },
            { "id": 119, "type": "Double Room", "description": "Executive double room", "price": 2200, "capacity": 2, "images": "../hotelimag/imag-9.jpg" },
            { "id": 120, "type": "Double Room", "description": "Family double room (extra cot available)", "price": 2200, "capacity": 2, "images": "../hotelimag/imag-10.jpg" },
            { "id": 121, "type": "Double Room", "description": "Pool view double room", "price": 2200, "capacity": 2, "images": "../hotelimag/imag-11.jpg" },
            { "id": 122, "type": "Double Room", "description": "Standard double room", "price": 2200, "capacity": 2, "images": "../hotelimag/imag-12.jpg" },
            { "id": 1123, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "../hotelimag/imag-13.jpg" },
            { "id": 1124, "type": "Suites", "description": "Penthouse suite, panoramic views", "price": 3500, "capacity": 2, "images": "../hotelimag/imag-14.jpg" },
            { "id": 1125, "type": "Suites", "description": "Junior suite with kitchenette", "price": 3500, "capacity": 2, "images": "../hotelimag/imag-15.jpg" },
            { "id": 1126, "type": "Suites", "description": "Presidential suite, 2 bedrooms", "price": 3500, "capacity": 2, "images": "../hotelimag/imag-16.jpg" },
            { "id": 1127, "type": "Suites", "description": "Honeymoon suite with jacuzzi", "price": 3500, "capacity": 2, "images": "../hotelimag/imag-17.jpg" },
            { "id": 1128, "type": "Suites", "description": "Business suite with office space", "price": 3500, "capacity": 2, "images": "..            npm run preview/hotelimag/imag-18.jpg" }
        ],
        "distance": "1.5 km from city center", "rating": 4.5, "reviews": 128
    },
    {
        "id": 2, 
        "name": "The Palace Cape Town", 
        "location": "Cape-Town", 
        "address": "42 Ocean View Drive, Waterfront 8001", 
        "description": "Beachfront luxury hotel with stunning views of Table Mountain.", 
        "price_range": { "single": 1800, "double": 2500, "suite": 4000 }, 
        "amenities": ["Free WiFi", "Swimming Pool", "Fitness Center", "Restaurant", "Spa", "Beach Access", "Air Conditioning", "Valet Parking"],
        "room_types": [
            { "id": 21, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1250, "capacity": 1, "images": "./hotelimag/imag-19.jpg" },
            { "id": 22, "type": "Single Room", "description": "Ocean view room with single bed", "price": 10, "capacity": 1, "images": "./hotelimag/imag-20.jpg" },
            { "id": 23, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-21.jpg" },
            { "id": 24, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-22.jpg" },
            { "id": 25, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-23.jpg" },
            { "id": 26, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-24.jpg" },
            { "id": 227, "type": "Double Room", "description": "Spacious room with two beds, ideal for partners or friends", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-25.jpg" },
            { "id": 228, "type": "Double Room", "description": "Spacious room with two beds, ideal for partners or friends", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-26.jpg" },
            { "id": 229, "type": "Double Room", "description": "Spacious room with two beds, ideal for partners or friends", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-27.jpg" },
            { "id": 230, "type": "Double Room", "description": "Spacious room with two beds, ideal for partners or friends", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-28.jpg" },
            { "id": 231, "type": "Double Room", "description": "Spacious room with two beds, ideal for partners or friends", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-29.jpg" },
            { "id": 232, "type": "Double Room", "description": "Spacious room with two beds, ideal for partners or friends", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-30.jpg" },
            { "id": 2233, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-31.jpg" },
            { "id": 2234, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-32.jpg" },
            { "id": 2235, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-33.jpg" },
            { "id": 2236, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-34.jpg" },
            { "id": 2237, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-35.jpg" },
            { "id": 2238, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-36.jpg" }
        ],
        "distance": "1.5 km from city center", "rating": 4.1, "reviews": 167
    },
    {
        "id": 3, 
        "name": "The Palace Durban", 
        "location": "Durban", 
        "address": "42 Ocean View Drive, Waterfront 8001", 
        "description": "Beachfront luxury hotel with stunning views.", 
        "price_range": { "single": 1800, "double": 2500, "suite": 4000 }, 
        "amenities": ["Free WiFi", "Swimming Pool", "Fitness Center", "Restaurant", "Spa", "Beach Access", "Air Conditioning", "Valet Parking"],
        "room_types": [
            { "id": 31, "type": "Single Room", "description": "Cozy room with single bed, perfect for solo travelers", "price": 1500, "capacity": 1, "images": "./hotelimag/imag-37.jpg" },
            { "id": 32, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-38.jpg" },
            { "id": 33, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-39.jpg" },
            { "id": 34, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-40.jpg" },
            { "id": 35, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-41.jpg" },
            { "id": 36, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-42.jpg" },
            { "id": 337, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-43.jpg" },
            { "id": 338, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-44.jpg" },
            { "id": 339, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-45.jpg" },
            { "id": 340, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-46.jpg" },
            { "id": 341, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-47.jpg" },
            { "id": 342, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-48.jpg" },
            { "id": 3343, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-49.jpg" },
            { "id": 3344, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-50.jpg" },
            { "id": 3345, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-51.jpg" },
            { "id": 3346, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-52.jpg" },
            { "id": 3347, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-53.jpg" },
            { "id": 3348, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-54.jpg" }
        ],
        "distance": "1.5 km from city center", "rating": 3.8, "reviews": 128
    },
    {
        "id": 4, 
        "name": "The Palace-Sandton", 
        "location": "Sandton", 
        "address": "42 Ocean View Drive, Waterfront 8001", 
        "description": "Beachfront luxury hotel with stunning views of Table Mountain.", 
        "price_range": { "single": 1800, "double": 2500, "suite": 4000 }, 
        "amenities": ["Free WiFi", "Swimming Pool", "Fitness Center", "Restaurant", "Spa", "Beach Access", "Air Conditioning", "Valet Parking"],
        "room_types": [
            { "id": 41, "type": "Single Room", "description": "Cozy room with single bed, perfect for solo travelers", "price": 1500, "capacity": 1, "images": "./hotelimag/imag-55.jpg" },
            { "id": 42, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-56.jpg" },
            { "id": 43, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-57.jpg" },
            { "id": 44, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-58.jpg" },
            { "id": 45, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-59.jpg" },
            { "id": 46, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-60.jpg" },
            { "id": 447, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-61.jpg" },
            { "id": 448, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-62.jpg" },
            { "id": 449, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-63.jpg" },
            { "id": 450, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-64.jpg" },
            { "id": 451, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-65.jpg" },
            { "id": 452, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-66.jpg" },
            { "id": 4453, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-67.jpg" },
            { "id": 4454, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-68.jpg" },
            { "id": 4455, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-69.jpg" },
            { "id": 4456, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-70.jpg" },
            { "id": 4457, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-71.jpg" },
            { "id": 4458, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 2, "images": "./hotelimag/imag-72.jpg" }
        ],
        "distance": "1.5 km from city center", "rating": 4.0, "reviews": 128
    },
    {
        "id": 5, 
        "name": "The Palace-Polokwane", 
        "location": "Polokwane", 
        "address": "42 Ocean View Drive, Waterfront 8001", 
        "description": "Beachfront luxury hotel with stunning views of Table Mountain.", 
        "price_range": { "single": 1800, "double": 2500, "suite": 4000 }, 
        "amenities": ["Free WiFi", "Swimming Pool", "Fitness Center", "Restaurant", "Spa", "Beach Access", "Air Conditioning", "Valet Parking"],
        "room_types": [
            { "id": 51, "type": "Single Room", "description": "Cozy room with single bed, perfect for solo travelers", "price": 1500, "capacity": 1, "images": "./hotelimag/imag-73.jpg" },
            { "id": 52, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-74.jpg" },
            { "id": 53, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-75.jpg" },
            { "id": 54, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-76.jpg" },
            { "id": 55, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-77.jpg" },
            { "id": 56, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-78.jpg" },
            { "id": 557, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-79.jpg" },
            { "id": 558, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-80.jpg" },
            { "id": 559, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-81.jpg" },
            { "id": 560, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-82.jpg" },
            { "id": 561, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-83.jpg" },
            { "id": 562, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-84.jpg" },
            { "id": 5563, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-85.jpg" },
            { "id": 5564, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-86.jpg" },
            { "id": 5565, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-87.jpg" },
            { "id": 5566, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-89.jpg" },
            { "id": 5567, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-90.jpg" },
            { "id": 5568, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-91.jpg" }
        ],
        "distance": "1.5 km from city center", "rating": 4.9, "reviews": 128
    },
    {
        "id": 6, 
        "name": "The Palace Pretoria", 
        "location": "Pretoria", 
        "address": "42 Ocean View Drive, Waterfront 8001", 
        "description": "Beachfront luxury hotel with stunning views of Table Mountain.", 
        "price_range": { "single": 1800, "double": 2500, "suite": 4000 }, 
        "amenities": ["Free WiFi", "Swimming Pool", "Fitness Center", "Restaurant", "Spa", "Beach Access", "Air Conditioning", "Valet Parking"],
        "room_types": [
            { "id": 61, "type": "Single Room", "description": "Cozy room with single bed, perfect for solo travelers", "price": 1500, "capacity": 1, "images": "./hotelimag/imag-92.jpg" },
            { "id": 62, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-93.jpg" },
            { "id": 63, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-94.jpg" },
            { "id": 64, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-95.jpg" },
            { "id": 65, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-96.jpg" },
            { "id": 66, "type": "Single Room", "description": "Ocean view room with single bed", "price": 1800, "capacity": 1, "images": "./hotelimag/imag-97.jpg" },
            { "id": 667, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-98.jpg" },
            { "id": 668, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-99.jpg" },
            { "id": 669, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-100.jpg" },
            { "id": 670, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-101.jpg" },
            { "id": 671, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-102.jpg" },
            { "id": 672, "type": "Double Room", "description": "Spacious room with queen bed, ideal for couples", "price": 2200, "capacity": 2, "images": "./hotelimag/imag-103.jpg" },
            { "id": 6673, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-104.jpg" },
            { "id": 6674, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-105.jpg" },
            { "id": 6675, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-106.jpg" },
            { "id": 6676, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-107.jpg" },
            { "id": 6677, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-108.jpg" },
            { "id": 6678, "type": "Suites", "description": "Luxurious suite with separate living area and premium amenities", "price": 3500, "capacity": 5, "images": "./hotelimag/imag-109.jpg" }
        ],
        "distance": "1.5 km from city center", "rating": 4.6, "reviews": 128
    }
];

let allFlattenedRoomTypes = []; 

const fakeReviews = [
    { name: "Alex .", rating: 5, comment: "Absolutely wonderful stay! The room was spotless and the staff were incredibly attentive. Loved the amenities!" },
    { name: "Hope Gopolang.", rating: 4, comment: "Great location and comfortable room. The breakfast was delicious. Would recommend." },
    { name: "Kea .", rating: 5, comment: "Exceeded all expectations. Beautiful hotel, fantastic service. The view from our room was breathtaking." },
    { name: "Forget M.", rating: 4, comment: "Very pleasant hotel. The room was spacious and clean. Good value for money."}
];

// Function to display individual room types
function displayRoomTypes(roomTypeList) {
    const roomTypesContainer = document.getElementById('room-types-container-grid'); 
    const loadingMessageElement = document.getElementById('loading-message'); 
    
    if (!roomTypesContainer) {
        console.error("Room types container (room-types-container-grid) not found!");
        if(loadingMessageElement) loadingMessageElement.textContent = "Critical error: Display area not found.";
        return;
    }
    
    roomTypesContainer.innerHTML = ''; 

    if (!roomTypeList || roomTypeList.length === 0) {
        roomTypesContainer.innerHTML = '<p id="loading-message" style="text-align:center; grid-column: 1 / -1;">No hotel rooms found matching your criteria.</p>';
        return;
    }
    
    if (loadingMessageElement) loadingMessageElement.style.display = 'none';

    roomTypeList.forEach(item => { 
        let imageUrl = item.roomImage || 'https://placehold.co/600x400/E0E0E0/B0B0B0?text=Image+Not+Available'; 
        
        const roomCard = document.createElement('div');
        roomCard.className = 'dynamic-hotel-card'; 
        
        const roomSpecificDescription = item.roomDescription || "A comfortable room at " + item.hotelName;
        const shortDescription = roomSpecificDescription.length > 100 ? roomSpecificDescription.substring(0, 97) + "..." : roomSpecificDescription;

        roomCard.innerHTML = `
            <div class="dynamic-hotel-image" style="background-image: url('${imageUrl}');" onerror="this.style.backgroundImage='url(https://placehold.co/600x400/E0E0E0/B0B0B0?text=Image+Error)'"></div>
            <div class="dynamic-hotel-content">
                <h3>
                    ${item.hotelName}
                    <span class="room-type-subtitle">${item.roomType}</span>
                </h3>
                <div class="dynamic-hotel-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${item.hotelAddress ? item.hotelAddress : (item.hotelLocation || 'Location not specified')}</span>
                </div>
                <p class="hotel-description" title="${roomSpecificDescription}">${shortDescription}</p>
                <div class="dynamic-hotel-meta">
                    <span class="dynamic-hotel-price">R${item.roomPrice ? item.roomPrice : 'N/A'}/night</span>
                    ${item.hotelRating ? `<span class="hotel-rating"><i class="fas fa-star"></i> ${item.hotelRating} (${item.hotelReviews || 0} reviews)</span>` : ''}
                </div>
                <button class="dynamic-book-offer" data-roomid="${item.roomId}" data-hotelid="${item.hotelId}">View Details & Book</button>
            </div>
        `;
        roomTypesContainer.appendChild(roomCard);
        
        // Add event listener for button
        roomCard.querySelector('.dynamic-book-offer').addEventListener('click', function() {
            openRoomModal(item); 
        });
    });
}

// Opens and populates the modal
function openRoomModal(roomItem) {
    document.getElementById('modalRoomImage').src = roomItem.roomImage || 'https://placehold.co/600x400/E0E0E0/B0B0B0?text=No+Image';
    document.getElementById('modalHotelName').textContent = roomItem.hotelName;
    document.getElementById('modalRoomType').textContent = roomItem.roomType;
    document.getElementById('modalRoomPrice').textContent = `R${roomItem.roomPrice || 'N/A'}/night`;
    document.getElementById('modalHotelAddress').textContent = roomItem.hotelAddress || roomItem.hotelLocation || 'N/A';
    document.getElementById('modalRoomCapacity').textContent = roomItem.roomCapacity || 'N/A';
    document.getElementById('modalHotelRating').textContent = roomItem.hotelRating || 'N/A';
    document.getElementById('modalHotelReviews').textContent = roomItem.hotelReviews || '0';
    document.getElementById('modalHotelDistance').textContent = roomItem.hotelDistance || 'N/A';
    document.getElementById('modalRoomDescription').textContent = roomItem.roomDescription || 'No specific room description available.';
    document.getElementById('modalHotelOverallDescription').textContent = roomItem.hotelOverallDescription || 'No overall hotel description available.';

    const amenitiesList = document.getElementById('modalAmenitiesList');
    amenitiesList.innerHTML = '';
    if (roomItem.hotelAmenities && roomItem.hotelAmenities.length > 0) {
        roomItem.hotelAmenities.forEach(amenity => {
            const li = document.createElement('li');
            let iconClass = 'fa-check-circle';
            if (amenity.toLowerCase().includes('wifi')) iconClass = 'fa-wifi';
            else if (amenity.toLowerCase().includes('pool')) iconClass = 'fa-swimmer';
            else if (amenity.toLowerCase().includes('parking')) iconClass = 'fa-parking';
            else if (amenity.toLowerCase().includes('restaurant')) iconClass = 'fa-utensils';
            else if (amenity.toLowerCase().includes('spa')) iconClass = 'fa-spa';
            else if (amenity.toLowerCase().includes('fitness') || amenity.toLowerCase().includes('gym')) iconClass = 'fa-dumbbell';
            
            li.innerHTML = `<i class="fas ${iconClass}"></i> ${amenity}`;
            amenitiesList.appendChild(li);
        });
    } else {
        amenitiesList.innerHTML = '<li>No amenities listed.</li>';
    }

    const reviewsContainer = document.getElementById('modalReviewsContainer');
    reviewsContainer.innerHTML = '';
    
    // FIXED: The loop was incorrectly structured before
    fakeReviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review-item';
        let starsHTML = '';
        
        for (let i = 0; i < 5; i++) {
            // FIXED: Correct star class logic
            starsHTML += `<i class="${i < review.rating ? 'fas' : 'far'} fa-star"></i> `;
        }
        
        // FIXED: This was inside the for loop before - now correctly outside
        reviewDiv.innerHTML = `
            <p>"${review.comment}"</p>
            <div class="review-stars">${starsHTML}</div>
            <p class="reviewer-name">- ${review.name}</p>
        `;
        reviewsContainer.appendChild(reviewDiv);
    });

    document.getElementById('roomDetailModal').classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

// Function to close the modal
function closeRoomModal() {
    document.getElementById('roomDetailModal').classList.remove('active');
    document.body.style.overflow = 'auto'; 
}

// Close modal if screen beside it is clicked
document.getElementById('roomDetailModal').addEventListener('click', function(event) {
    if (event.target === this) { 
        closeRoomModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const loadingMessageElement = document.getElementById('loading-message'); 

    embeddedHotelsData.forEach(hotel => {
        if (hotel.room_types && hotel.room_types.length > 0) {
            hotel.room_types.forEach(room_type => {
                // Resolve / sanitize image path so the preview/build can find assets.
                // If images are in a project-level `hotelimag/` folder, place that
                // folder in `public/` and paths like `/hotelimag/imag-1.jpg` will work
                // in both dev and `npm preview` builds. This logic attempts to
                // normalize malformed strings and fall back to an absolute path.
                let resolvedImage = null;
                try {
                    let imgStr = room_type.images && String(room_type.images).trim();

                    // If a long malformed string contains the actual path (e.g. "... hotelimag/imag-18.jpg"), extract it
                    const embedded = imgStr && imgStr.match(/(?:hotelimag|images|icons|partners)\/[\w\-@()%.,!~ ]+\.(?:png|jpe?g|svg|gif)/i);
                    if (embedded && embedded[0]) {
                        imgStr = '/' + embedded[0].replace(/^\//, '');
                    }

                    if (imgStr) {
                        // If the path starts with ./ or ../, convert to an absolute path at root
                        if (/^\.\.?\//.test(imgStr)) {
                            resolvedImage = imgStr.replace(/^\.\.?\//, '/');
                        } else if (/^\//.test(imgStr)) {
                            resolvedImage = imgStr;
                        } else {
                            // Try to resolve via import.meta for static literals (may work in dev)
                            try {
                                resolvedImage = new URL(imgStr, import.meta.url).href;
                            } catch (inner) {
                                // Fallback to using as-is (likely requires `hotelimag` to be in `public/`)
                                resolvedImage = imgStr;
                            }
                        }
                    }
                } catch (e) {
                    resolvedImage = room_type.images || null;
                }

                if (!resolvedImage) resolvedImage = null;

                allFlattenedRoomTypes.push({
                    hotelId: hotel.id,
                    hotelName: hotel.name,
                    hotelLocation: hotel.location,
                    hotelAddress: hotel.address,
                    hotelRating: hotel.rating,
                    hotelReviews: hotel.reviews,
                    hotelAmenities: hotel.amenities,
                    hotelOverallDescription: hotel.description,
                    hotelDistance: hotel.distance,
                    roomId: room_type.id,
                    roomType: room_type.type,
                    roomDescription: room_type.description,
                    roomPrice: room_type.price,
                    roomCapacity: room_type.capacity,
                    roomImage: resolvedImage || 'https://placehold.co/600x400/E0E0E0/B0B0B0?text=Image+Not+Available'
                });
            });
        } else {
            console.warn(`Hotel "${hotel.name}" (ID: ${hotel.id}) has no room_types array or it's empty.`);
        }
    });
    
    if (allFlattenedRoomTypes.length > 0) {
        if (loadingMessageElement) loadingMessageElement.style.display = 'none';
        displayRoomTypes(allFlattenedRoomTypes); 
    } else {
        console.error("No displayable hotel rooms found in the embedded data.");
        if (loadingMessageElement) {
            loadingMessageElement.textContent = "No hotel rooms are currently available.";
            loadingMessageElement.style.color = "orange"; 
            loadingMessageElement.style.display = "block"; 
        }
    }
    
    const searchLocation = sessionStorage.getItem('searchLocation');
    const searchType = sessionStorage.getItem('searchType');

    if (searchLocation && searchLocation !== "all") { 
        document.getElementById('search-location').value = searchLocation;
    }
    if (searchType && searchType !== "all") { 
        document.getElementById('search-room-type').value = searchType;
    }
    
    if (allFlattenedRoomTypes.length > 0 && ((searchLocation && searchLocation !== "all") || (searchType && searchType !== "all"))) {
        filterRoomTypes();
    }
});

// Function to filter individual room types
function filterRoomTypes() {
    const locationFilter = document.getElementById('search-location').value;
    const roomTypeFilter = document.getElementById('search-room-type').value;

    const filteredRoomTypes = allFlattenedRoomTypes.filter(item => {
        const matchesLocation = !locationFilter || locationFilter === "all" || (item.hotelLocation && item.hotelLocation.toLowerCase() === locationFilter.toLowerCase());
        const matchesRoomType = !roomTypeFilter || roomTypeFilter === "all" || (item.roomType && item.roomType.toLowerCase() === roomTypeFilter.toLowerCase());
        
        return matchesLocation && matchesRoomType;
    });

    displayRoomTypes(filteredRoomTypes);
}

// Export functions if needed globally
window.toggleMenu = toggleMenu;
window.closeRoomModal = closeRoomModal;
window.filterRoomTypes = filterRoomTypes;