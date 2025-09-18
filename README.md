# Dismiss Violations

An Electron + React application for managing PostgreSQL table creation, Excel uploads, and stored procedure execution.

## Overview

This application provides a desktop interface for:
- Connecting to PostgreSQL databases
- Creating tables with predefined schema
- Uploading Excel files and inserting data into the database
- Executing stored procedures for batch processing

## Features

- **Database Connection**: Connect to PostgreSQL databases with custom credentials
- **Table Management**: Create `dismissviolationstemp` table with predefined schema
- **Excel Upload**: Import Excel files containing violation data
- **Batch Processing**: Execute stored procedures with configurable batch limits

## Tech Stack

- **Backend**: Electron with Node.js
- **Frontend**: React with Vite
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS
- **Build Tools**: Electron Builder

## Prerequisites

- Node.js (latest LTS version recommended)
- PostgreSQL database
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dismiss-violations
   ```

2. Install dependencies:
   ```bash
   npm install
   cd frontend
   npm install
   cd ..
   ```

## Development

Start the development environment:
```bash
npm run dev
```

This will:
- Start the React development server on http://localhost:5173
- Launch the Electron app with hot reload

## Building

### Build React Frontend
```bash
npm run build:react
```

### Build Desktop App
```bash
npm run build:app
```

## Database Schema

The application creates a table `dismissviolationstemp` with the following structure:
- `ArchiveID` (int8)
- `ArchiveID Field` (varchar 100)
- `Archive Table` (varchar 100)
- `TagName` (varchar 100)
- `CloudID` (int2)
- `SoID` (int2)
- `Nodename` (varchar 100)

## Excel File Format

Excel files should contain columns matching the database schema:
- ArchiveID
- ArchiveID Field
- Archive Table
- TagName
- CloudID
- SoID
- Nodename

## Usage

1. Launch the application
2. Connect to your PostgreSQL database using the connection form
3. Create the required table structure
4. Upload Excel files with violation data
5. Execute batch procedures as needed

## File Structure

```
dismiss-violations/
├── main.js                 # Electron main process
├── preload.js             # Electron preload script
├── package.json           # Main package configuration
├── frontend/              # React frontend
│   ├── src/              # Source files
│   ├── package.json      # Frontend dependencies
│   └── dist/             # Built frontend files
└── scripts/              # SQL scripts
    ├── schema.sql        # Table creation script
    ├── insert.sql        # Data insertion script
    └── procedure.sql     # Stored procedure script
```

## License

[Add your license information here]