<img width="953" alt="image" src="https://github.com/user-attachments/assets/dbde28cc-5f6d-4692-aae5-7809aac2008c" /># -todo-app-react-ts-node
This is a full-stack to-do list web application built with **React (TypeScript)** on the frontend and **Node.js (TypeScript)** with **PostgreSQL** on the backend. It allows users to create, update, check off, and delete tasks, while visualizing their progress through a dynamic progress bar. 

## 🛠️ Technologies Used

### Frontend
- React (with TypeScript)
- Vite (build tool)
- CSS3 for custom styling and responsive layouts
- React Router DOM for navigation

### Backend
- Node.js with Express (TypeScript)
- PostgreSQL for data persistence
- pg (node-postgres) for database interaction
- dotenv for environment configuration

## 📦 Features Implemented

- **Full CRUD for tasks** (Create, Read, Update, Delete)
- **Progress bar** that dynamically reflects task completion
- **Responsive UI** with a mobile-friendly layout
- **Landing page** with scrollable feature grid
- **Login screen UI** (non-authenticated prototype)
- **Modular file structure** for scalability and clarity

## 🔍 How It Works

1. The backend connects to a local PostgreSQL database and exposes RESTful API endpoints (`/tasks`).
2. The React frontend fetches and displays tasks, allows task creation, editing, and toggling completion status.
3. The progress bar updates based on the number of completed tasks.
4. The app includes separate views for landing, login, and task management.

## 💡 Why I Built This

As a hands-on learning project, I wanted to showcase:
- My **practical understanding of full-stack development**
- My ability to **design interactive user interfaces**
- My **initiative to build independently** without a prebuilt template
- How I approach **problem-solving**, especially when debugging RESTful interactions and dynamic rendering

I specifically referenced this project in my application for the **Full-Stack Software Engineering Internship (TypeScript/JS)** at **DataCamp**, as I admire DataCamp's mission of empowering learners through interactive tools — a mindset I embraced while building this tool from scratch.

## 🚧 Known Limitations

- ❌ The app is currently not deployed online (runs locally via `localhost`)
- ❌ There is **no real authentication** — the login screen is only a front-end design placeholder
- 🎨 UI/UX can be further enhanced for mobile and accessibility support
- 🧪 Testing (unit/integration) is not implemented — all functionality was manually tested

## Wireframes

While designing this app, I built a visual mock-up to help me. You can see it at this [link](https://www.canva.com/design/DAGkPc3y2jg/iemJ1ETMPED4Nck6NyH5FA/edit?utm_content=DAGkPc3y2jg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton). 


## 🚀 Local Setup

```bash
# Clone the repo
git clone https://github.com/your-username/todo-app-react-ts-node.git
cd todo-app-react-ts-node

# Set up backend
cd server
npm install
touch .env # Add your DATABASE_URL here
npm run dev

# Set up frontend
cd ../client
npm install
npm run dev


