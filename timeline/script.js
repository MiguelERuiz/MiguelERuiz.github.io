const API_BASE = 'https://timeline-rb.onrender.com';

// Try to load token on page load
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  if (token) {
    document.getElementById('login-form').style.display = 'none';
    loadTimeline(token);
  }
});

function eventColor(categoryId) {
  if (categoryId === 2) {
    return 'red';
  }
  if (categoryId === 3) {
    return 'yellow';
  }
  return '';
}

function login() {
  const nickname = document.getElementById('nickname').value;
  const password = document.getElementById('password').value;

  fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nickname, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        document.getElementById('login-form').style.display = 'none';
        loadTimeline(data.token);
      } else {
        alert('Login failed');
      }
    })
    .catch(err => console.error('Login error:', err));
}

function loadTimeline(token) {
  fetch(`${API_BASE}/events`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(events => {
      const items = events.map(event => ({
        id: event.id,
        content: event.comments || "No comment",
        start: event.start_date,
        end: event.end_date,
        group: event.category_id,
        title: `Fecha: ${event.start_date}`,
        className: eventColor(event.category_id)
      }));

      const container = document.getElementById('timeline');
      container.style.display = 'block';
      const timeline = new vis.Timeline(container, items, {});
    })
    .catch(err => {
      console.error('Failed to load events:', err);
      alert('Could not load timeline. Please log in again.');
      localStorage.removeItem('token');
      document.getElementById('login-form').style.display = 'block';
    });
}
