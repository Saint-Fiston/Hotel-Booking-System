import '../styles/styles.css';
import '../styles/styles.css';

function handleSearch() {
    const location = document.getElementById('location').value;
    const type = document.getElementById('type').value; 
    const checkIn = document.querySelectorAll('input[type="date"]')[0].value; 
    const checkOut = document.querySelectorAll('input[type="date"]')[1].value; 
    
    sessionStorage.setItem('searchLocation', location);
    sessionStorage.setItem('searchType', type); 
    sessionStorage.setItem('searchCheckIn', checkIn);
    sessionStorage.setItem('searchCheckOut', checkOut);
    
    window.location.href = 'palace.html';
}