// Highlight active bottom menu
document.querySelectorAll('.app-bottom-nav a').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// Sidebar toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent click from bubbling to document
  sidebar.classList.toggle('show');
});

// Close sidebar if clicking outside
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
    sidebar.classList.remove('show');
  }
});

// Dark/Light mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const lightModeToggle = document.getElementById('lightModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  darkModeToggle.style.display = 'none';
  lightModeToggle.style.display = 'inline';
});

lightModeToggle.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  lightModeToggle.style.display = 'none';
  darkModeToggle.style.display = 'inline';
});
