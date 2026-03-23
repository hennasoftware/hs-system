# hs-system

hs-system is an open-source ERP-style template designed to manage the complete lifecycle of client-service
relationships.

It provides a flexible foundation for businesses that operate on a **"client → service → order"** model, enabling teams
to register customers, manage service availability, create orders, and automate communication workflows.

---

## Tech Stack

- **Frontend:** React (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Backend / Infra:** Firebase (Auth, Firestore, Functions, etc.)
- **Email Service:** Resend
- **Other integrations:** External APIs (extensible)

---

## Purpose

This project aims to serve as a **scalable and reusable template** for building internal systems or SaaS products
focused on service operations.

Instead of starting from scratch, you can use hs-system as a base and adapt it to your business needs.

---

## Core Features

- Customer management
  - Create and manage client records
- Service catalog
  - Define available services and offerings
- Order management
  - Create orders linked to clients and selected services
- Order lifecycle
  - Track order stages and updates
- Email automation
  - Trigger emails based on order events (via Resend)
- External integrations
  - Easily connect with third-party services

---

## Project Philosophy

hs-system is built with:

- **Modularity** → easy to extend and customize
- **Scalability** → suitable for growing systems
- **Developer experience** → clean architecture + modern stack
- **Open-source mindset** → built to be shared and improved collaboratively

---

## Use Cases

- Internal ERP systems
- Service-based SaaS platforms
- Client management tools
- Order/workflow automation systems

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-org/hs-system.git
cd hs-system
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file based on `.env.example`.

### 4. Run the project

```bash
npm run dev
```

---

## Environment & Services

This project depends on:

- Firebase (authentication, database, functions)
- Resend (email delivery)

Make sure to configure your credentials properly before running.

---

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).

See the [LICENSE](LICENSE) file for more details.

---

## Contributing

Contributions are welcome!

Feel free to:

- Open issues
- Suggest features
- Submit pull requests

---

## Vision

hs-system is not just a project — it's a foundation.

The goal is to evolve it into a robust ecosystem that helps developers and businesses build powerful service-based
systems faster and more efficiently.

---

## Contact

For questions, ideas, or collaborations, feel free to reach out or open an issue.
