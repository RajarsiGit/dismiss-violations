# CLAUDE.md

This file contains information for Claude Code to better understand and work with this project.

## Project Overview

Dismiss Violations is an Electron desktop application that provides a GUI for PostgreSQL database operations, specifically designed for handling violation data through Excel imports and batch processing.

## Key Technologies

- **Electron**: Desktop app framework
- **React**: Frontend UI framework
- **PostgreSQL**: Database
- **Node.js**: Backend runtime
- **Vite**: Frontend build tool
- **Tailwind CSS**: Styling framework

## Development Commands

### Start Development Environment
```bash
npm run dev
```
This starts both the React dev server and Electron app with hot reload.

### Build Commands
```bash
npm run build:react    # Build React frontend
npm run build:app      # Build desktop application
npm run start          # Start Electron app directly
```

### Frontend Development
```bash
cd frontend
npm run dev            # Start Vite dev server
npm run build          # Build for production
npm run lint           # Run ESLint
```

## Application Architecture

### Main Process (main.js:1)
- Electron main process handling window creation and IPC
- Database connection management using `pg` pool
- File operations for SQL scripts and Excel processing

### Renderer Process (frontend/)
- React application for the user interface
- Uses Vite for development and building
- Styled with Tailwind CSS

### IPC Handlers
- `connect-db`: Establish PostgreSQL connection
- `create-table`: Execute schema.sql to create table
- `upload-excel`: Process Excel files and insert data
- `run-procedure`: Execute stored procedure with batch processing

## Database Operations

### Table Schema (scripts/schema.sql:1)
Creates `dismissviolationstemp` table with violation data structure.

### Data Insertion (scripts/insert.sql)
Parameterized query for inserting Excel row data.

### Batch Processing (scripts/procedure.sql)
Stored procedure for batch operations with configurable limits.

## File Structure Context

- `main.js`: Electron main process and IPC handlers
- `preload.js`: Secure IPC bridge between main and renderer
- `frontend/`: React application source
- `scripts/`: SQL files for database operations
- `package.json`: Main app dependencies and build configuration
- `frontend/package.json`: Frontend-specific dependencies

## Common Tasks

### Adding New Database Operations
1. Add SQL script to `scripts/` directory
2. Create IPC handler in `main.js`
3. Expose handler in `preload.js`
4. Add frontend UI to call the operation

### Modifying Database Schema
1. Update `scripts/schema.sql`
2. Adjust Excel column mapping in `main.js:50-58`
3. Update documentation in README.md

### Adding New UI Features
1. Work in `frontend/src/` directory
2. Use existing Tailwind CSS setup
3. Follow React + Vite conventions

## Dependencies

### Main Application
- `electron`: Desktop app framework
- `pg`: PostgreSQL client
- `xlsx`: Excel file processing
- `concurrently`: Run multiple dev processes
- `electron-builder`: Application packaging

### Frontend
- `react` + `react-dom`: UI framework
- `@vitejs/plugin-react`: Vite React support
- `tailwindcss`: Utility-first CSS
- Font packages: Inter, Poppins, Roboto

## Build Configuration

Electron Builder configuration in `package.json:13-46` handles:
- Cross-platform builds (Windows, Mac, Linux)
- File inclusion/exclusion
- Code signing settings
- Installer configuration

## Security Notes

- Context isolation enabled in `main.js:16`
- Preload script provides secure IPC bridge
- No direct Node.js access from renderer process