# 🏏 CrickIQ – Smart Cricket Scoring App

**CrickIQ** is a modern, offline-first web app built for cricket enthusiasts to **create matches, record scores, track performances**, and view analytics — all in one place.  
It’s designed for simplicity, speed, and accuracy, perfect for both casual and competitive cricket scoring.

---

## 🚀 Features

### 🧩 Core Features
- **Start Match** – Create a new match quickly with team and player selection.  
- **Add Score** – Record runs, wickets, extras (wide, no ball, byes, leg byes).  
- **Live Scoreboard** – Real-time updates of batting and bowling stats.  
- **Performance Page** – View player and team averages, strike rates, and totals.  
- **Team List** – Manage multiple teams with saved player data.  
- **Contact Us** – Reach out for support, suggestions, or feature requests.  
- **Dark / Light Mode** – Seamless theme switching for any environment.

---

## 📁 Project Structure
/crickIQ-app/
│
├── splash.html → Landing / Splash Screen
├── index.html → Home / Dashboard
│
├── start_match/
│ └── start_match.html → Create or resume matches
│
├── add_score/
│ └── add_score.html → Live scoring interface
│
├── team_list/
│ └── team_list.html → View and manage teams
│
├── performance/
│ └── performance.html → Player and match performance analytics
│
├── contact/
│ └── contact.html → Contact / Support form
│
├── assets/
│ ├── css/ → Stylesheets
│ ├── js/ → Scripts (with jQuery)
│ ├── images/ → Logos, icons, and UI images
│ └── manifest.json → Web App Manifest
│
├── manifest.json → PWA setup for installable app
└── service-worker.js → Offline cache & PWA functionality


---

## ⚙️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5, jQuery  
- **Offline Storage:** IndexedDB / LocalStorage  
- **PWA:** Installable web app with manifest and service worker  
- **Hosting:** GitHub Pages / Firebase Hosting (Free Tier)  
- **Optional Cloud Sync:** Firebase (Free Tier)

---

## 🌍 Language Support

Integrated **Google Translate** for automatic multi-language translation:

```html
<script type="text/javascript">
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  }
</script>
<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

🧠 Future Enhancements

🏆 Tournament & Leaderboard mode

📊 Advanced analytics dashboard

☁️ Firebase Sync for multi-device usage

🔔 Push Notifications (FCM)

📱 Android & iOS app deployment

🛠️ Setup & Usage

Clone the repository

git clone https://github.com/yourusername/crickIQ-app.git


Open splash.html in your browser
The app runs directly in the browser — no server required.

Install as PWA
On mobile or desktop, click “Install CrickIQ” when prompted.

📬 Contact

For feedback or support:

Website: https://yourdomain.com/crickiq

Email: support@crickiq.app

Telegram (optional): @CrickIQ_Bot (coming soon)

🏏 Slogan

“CrickIQ – Play Smart. Score Smarter.”

🧾 License

This project is licensed under the MIT License – you’re free to use, modify, and distribute with attribution.
