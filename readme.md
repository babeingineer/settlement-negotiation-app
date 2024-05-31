# Settlement Negotiation Application

This application facilitates a settlement process between two parties, Party A and Party B. The system manages iterative negotiation of settlement amounts by Party A, along with approvals or objections from Party B. The process ensures that all changes and responses are reflected on both Party A's and Party B's interfaces.

## Features

- **Submit Settlement Amount:** Party A can submit a settlement amount.
- **Modify Settlement Amount:** Party A can modify the submitted amount until Party B responds.
- **Approval or Objection:** Party B can either raise an objection or agree to the amount.
- **Iterative Negotiation:** The loop continues until Party B agrees, leading to a "settled" stage.
- **Real-Time Updates:** Real-time updates using WebSockets.
- **Restart Negotiation:** Interface to restart the negotiation process.

## Technologies Used

- **Frontend:** React, TypeScript, Tailwind CSS, Antd, Vite
- **Backend:** Node.js, Socket.io

## Setup and Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or pnpm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/babeingineer/settlement-negotiation-app.git
   cd settlement-negotiation-app
   ```

2. Install the dependencies:

   **Frontend:**
   ```sh
   cd frontend
   npm install
   # or
   pnpm install
   ```

   **Backend:**
   ```sh
   cd backend
   npm install
   # or
   pnpm install
   ```

### Running the Application

1. Start the backend server:
   ```sh
   npm run start:backend
   ```

2. Start the frontend development server:
   ```sh
   npm run start:frontend
   ```

3. Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)