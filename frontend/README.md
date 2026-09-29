# StaffMessenger frontend

Angular web app for **StaffMessenger**: employee management pages and a chat between employees.

Part of the [StaffMessenger](../README.md) monorepo. The API is in [`backend/`](../backend/).

## Tech stack

- Angular 14, Bootstrap 5
- nginx and Docker

## Pages

| Route | Page |
|---|---|
| `/employees` | Employee list with update, delete and details actions |
| `/create-employee` | Add an employee |
| `/update-employee/:id` | Edit an employee |
| `/employee-details/:id` | Employee details |
| `/employee-login` | Chat: pick who you are |
| `/employee-login/:senderId` | Chat: pick a colleague |
| `/employee-login/:senderId/:receiverId` | Chat conversation |
| `/send-message`, `/receive-message`, `/open-chat` | Earlier messaging prototypes |

## Getting started

### Requirements

- Node.js 16
- Angular CLI 14 (`npm install -g @angular/cli@14`)
- The backend running on port 8080

### Configuration

| File | Used by | API URL |
|---|---|---|
| `src/environments/environment.ts` | `ng serve` | `http://localhost:8080/api/v1/` |
| `src/environments/environment.prod.ts` | `ng build` (production) | `/api/v1/`, forwarded to the backend by nginx |

### Run locally (development)

```bash
npm install
ng serve
```

Then open `http://localhost:4200/`.

### Production build

```bash
ng build
```

The output goes to `dist/angular_employee_frontend/`. The `Dockerfile` builds it and serves it with nginx (see `nginx.conf`), which also forwards `/api/` to the backend. Run the whole stack with `docker compose up --build` from the repository root.
