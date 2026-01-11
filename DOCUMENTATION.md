# Fintrack - Application Documentation

## Project Overview

**Fintrack** is a financial control application built with Angular for managing expenses, taxes, and tracking financial activities. The application provides a comprehensive dashboard with CRUD operations for expenses and reporting capabilities.

---

## Technical Stack

### Current Version
- **Angular**: v21.0.0
- **Angular Material**: v21.0.0
- **Angular CDK**: v21.0.0
- **TypeScript**: ~5.9.3
- **RxJS**: ~7.8.0
- **Zone.js**: ~0.15.1
- **Styling**: SCSS
- **Additional Libraries**:
  - `@swimlane/ngx-charts`: ^20.5.0 (for charts/graphs)
  - `ng2-currency-mask`: ^13.0.3 (for currency input formatting)
  - `@fortawesome/fontawesome-free`: ^6.5.1 (for icons)
  - `bootstrap`: ^5.3.6
  - `@ng-bootstrap/ng-bootstrap`: ^19.0.0

### Architecture
- **Standalone Components**: Yes (all components are standalone)
- **Routing**: Angular Router configured with lazy loading structure
- **HTTP Client**: Configured with `provideHttpClient()`
- **Animations**: Configured with `provideAnimationsAsync()`
- **Build System**: Angular CLI v21.0.0

---

## Current Implementation Status

### ✅ What's Implemented

#### 1. Project Structure & Configuration
- ✅ Angular 21 project setup with standalone components architecture
- ✅ Angular Material installed and configured
- ✅ HTTP Client configured in `app.config.ts`
- ✅ Animations configured
- ✅ Environment configuration (`environment.local.ts`)
- ✅ Material theme configured (Indigo-Pink theme)
- ✅ Date locale configured (pt-PT)

#### 2. Application Configuration
- **`app.config.ts`**: 
  - Router provider
  - HTTP client provider
  - Animations provider
  - Material date locale (pt-PT)
- **`app.routes.ts`**: 
  - Root redirect to `/dashboard`
  - Dashboard route (`/dashboard`)
  - Expenses route (`/expenses`)
  - Taxes route (`/taxes`)
  - All routes use `LayoutComponent` as wrapper
- **`main.ts`**: Application bootstrap

#### 3. Layout & Navigation

##### Layout Component (`layout.component.ts`)
- **Location**: `src/app/shared/ui/layout/layout.component.ts`
- **Status**: ✅ Fully implemented
- **Features**:
  - Sidebar navigation menu
  - Main content area with router outlet
  - Menu items: Dashboard, Expenses, Taxes, Incomes
  - Active route highlighting
  - Responsive layout structure

##### Header Component (`header.component.ts`)
- **Location**: `src/app/shared/ui/layout/header/header.component.ts`
- **Status**: ✅ Implemented
- **Features**:
  - Application logo (Fintrack)
  - Logo image from assets

#### 4. Expenses CRUD - ✅ FULLY IMPLEMENTED

##### Expense Service (`expenses.service.ts`)
- **Location**: `src/app/expenses/data-access/expenses.service.ts`
- **Status**: ✅ Complete CRUD implementation
- **Methods**:
  - `getExpenses()`: Get all expenses
  - `filterExpenses(filterOptions)`: Filter expenses with options
  - `getExpense(id)`: Get single expense by ID
  - `saveExpense(payload)`: Create new expense
  - `updateExpense(id, payload)`: Update existing expense
  - `deleteExpense(id)`: Delete expense
  - `getExpenseValue(filterOptions)`: Get total expense value with filters
- **Error Handling**: Implemented with RxJS catchError
- **API Integration**: Connected to backend at `http://localhost:3000`

##### Expense Model (`expense.ts`)
- **Location**: `src/app/expenses/util/model/expense.ts`
- **Interfaces**:
  - `Expense`: { id, name, value, date, type }
  - `ExpenseResponse`: Extends DefaultResponse with expenses array

##### Expense Dashboard Component (`expense-dashboard.component.ts`)
- **Location**: `src/app/expenses/feature/expense-dashboard/expense-dashboard.component.ts`
- **Status**: ✅ Fully implemented
- **Features**:
  - Display expenses in Material table
  - Filtering by type, date range
  - Sorting (ASC/DESC)
  - Pagination (Material Paginator)
  - Total expenses value display
  - Open expense detail modal (create/edit)
  - Filter persistence in localStorage
  - Type options loading from service

##### Expense Detail Component (`expense-detail.component.ts`)
- **Location**: `src/app/expenses/feature/expense-detail/expense-detail.component.ts`
- **Status**: ✅ Fully implemented
- **Features**:
  - Material Dialog for create/edit
  - Reactive Forms with validation
  - Form fields:
    - Name (text input)
    - Type (Material select dropdown)
    - Value (currency mask input)
    - Date (Material datepicker)
  - Create new expense
  - Edit existing expense
  - Delete expense (with confirmation)
  - Form validation
  - Save/Cancel actions

##### Expense Routes (`expenses.routes.ts`)
- **Location**: `src/app/expenses/shell/expenses.routes.ts`
- **Routes**:
  - `/expenses` → `ExpenseDashboardComponent`

#### 5. Shared UI Components

##### Data Table Component (`data-table.component.ts`)
- **Location**: `src/app/shared/ui/data-table/data-table.component.ts`
- **Status**: ✅ Implemented
- **Features**:
  - Material Table integration
  - Dynamic column display
  - Clickable rows
  - Type icon display
  - Customizable fields
  - Empty state handling

##### Action Bar Component (`action-bar.component.ts`)
- **Location**: `src/app/shared/ui/action-bar/action-bar.component.ts`
- **Status**: ✅ Implemented
- **Features**:
  - "Add New" button
  - Date range picker (Material Datepicker)
  - Type filter dropdown
  - Sort order toggle (ASC/DESC)
  - Filter change events

##### Type Select Component (`type-select.component.ts`)
- **Location**: `src/app/shared/ui/type-select/type-select.component.ts`
- **Status**: ✅ Implemented
- **Features**:
  - Type selection with icons
  - Material button integration

##### Button Component (`button.component.ts`)
- **Location**: `src/app/shared/ui/button/button.component.ts`
- **Status**: ✅ Implemented

#### 6. Dashboard Features

##### Dashboard Component (`dashboard.component.ts`)
- **Location**: `src/app/dashboard/dashboard.component.ts`
- **Status**: ✅ Implemented
- **Features**:
  - Material Grid Layout
  - Expense Report widget
  - Tax Report widget
  - Income Report widget

##### Expense Report Component (`expense-report.component.ts`)
- **Location**: `src/app/dashboard/feature/expense-report/expense-report.component.ts`
- **Status**: ✅ Implemented
- **Features**:
  - Material Card
  - NgxCharts integration
  - Monthly expense visualization
  - API integration for report data

##### Tax Report Component (`tax-report.component.ts`)
- **Location**: `src/app/dashboard/feature/tax-report/tax-report.component.ts`
- **Status**: ✅ Implemented

##### Income Report Component (`income-report.component.ts`)
- **Location**: `src/app/dashboard/feature/income-report/income-report.component.ts`
- **Status**: ✅ Implemented

#### 7. Services

##### Types Service (`types.service.ts`)
- **Location**: `src/app/shared/data-access/types.service.ts`
- **Status**: ✅ Implemented
- **Methods**:
  - `getTypes()`: Get all expense/income types

##### Dashboard Report Service (`dashboard-report.service.ts`)
- **Location**: `src/app/dashboard/data-access/dashboard-report.service.ts`
- **Status**: ✅ Implemented
- **Methods**:
  - `getExpensesReport()`: Get expense report data

##### Taxes Service (`taxes.service.ts`)
- **Location**: `src/app/taxes/data-access/taxes.service.ts`
- **Status**: ✅ Implemented
- **Methods**:
  - `filterTaxes(filterOptions)`: Filter taxes

#### 8. Models & Types

##### Shared Models
- **`filter-options.ts`**: FilterOptions class with date range, pagination, sorting
- **`response.ts`**: DefaultResponse and ReportResponse interfaces
- **`types.ts`**: ValueType interface and saveType enum
- **`table.ts`**: Table field definitions (ExpensesTableFields, TaxesTableFields, IncomesTableFields)

##### Expense Model
- **`expense.ts`**: Expense interface and ExpenseResponse interface

##### Tax Model
- **`tax.ts`**: Tax interface and TaxResponse interface

#### 9. Utilities

##### Pipes
- **`type.pipe.ts`**: Type transformation pipe

##### Functions
- **`type-function.ts`**: Type-related utility functions (getTypeIcon)

#### 10. Styling & Assets

##### Global Styles
- **`styles.scss`**: Global stylesheet
- **SCSS Structure**:
  - `_colors.scss`: Color variables
  - `_fonts.scss`: Font definitions
  - `_reset.scss`: CSS reset
  - `components/_buttons.scss`: Button styles

##### Assets
- Logo images (logo-fintrack.png, logo-fintrack-white.png)
- FontAwesome icons integration

---

## ❌ What's NOT Implemented / Needs Work

### Missing Features

1. **Incomes Module**
   - Route exists in navigation but no implementation found
   - No income service or components

2. **Taxes Module**
   - Partial implementation (service exists, dashboard component exists)
   - May need completion

3. **Error Handling**
   - Basic error handling in services
   - No global error handler
   - No user-friendly error messages/notifications
   - No retry mechanisms

4. **Loading States**
   - No loading indicators/spinners
   - No skeleton loaders
   - No progress tracking

5. **Notifications**
   - No success/error notifications (Material Snackbar not used)
   - No toast messages

6. **Form Validation**
   - Basic validation exists
   - No custom validators
   - No server-side validation handling

7. **Testing**
   - Spec files exist but may not be complete
   - No E2E tests mentioned

8. **Authentication**
   - No auth implementation
   - No route guards
   - No user management

9. **Advanced Features**
   - No export/import functionality
   - No advanced filtering/search
   - No bulk operations
   - No recurring expenses

---

## Project Structure

```
src/app/
├── app.component.ts          # Root component
├── app.config.ts            # App configuration (HTTP, Router, Animations)
├── app.routes.ts            # Main routing
├── dashboard/
│   ├── dashboard.component.ts      # Dashboard with reports
│   ├── data-access/
│   │   └── dashboard-report.service.ts
│   ├── feature/
│   │   ├── expense-report/          # Expense report widget
│   │   ├── tax-report/              # Tax report widget
│   │   └── income-report/            # Income report widget
│   └── shell/
│       └── dashboard.routes.ts
├── expenses/
│   ├── data-access/
│   │   └── expenses.service.ts      # ✅ Full CRUD service
│   ├── feature/
│   │   ├── expense-dashboard/       # ✅ List view with filters
│   │   └── expense-detail/         # ✅ Create/Edit/Delete dialog
│   ├── shell/
│   │   └── expenses.routes.ts      # ✅ Routes configured
│   └── util/
│       └── model/
│           └── expense.ts           # ✅ Expense model
├── taxes/
│   ├── data-access/
│   │   └── taxes.service.ts
│   ├── feature/
│   │   └── taxes-dashboard/
│   ├── shell/
│   │   └── taxes.routes.ts
│   └── util/
│       └── model/
│           └── tax.ts
└── shared/
    ├── data-access/
    │   └── types.service.ts         # Types service
    ├── model/
    │   ├── filter-options.ts        # Filter model
    │   ├── response.ts              # Response interfaces
    │   ├── table.ts                 # Table field definitions
    │   └── types.ts                 # ValueType, saveType enum
    ├── ui/
    │   ├── action-bar/              # ✅ Filter bar component
    │   ├── button/                  # Button component
    │   ├── data-table/              # ✅ Material table component
    │   ├── layout/                  # ✅ Layout & header
    │   └── type-select/             # Type selector component
    └── util/
        ├── pipes/
        │   └── type.pipe.ts
        └── type-function.ts
```

---

## API Integration

### Backend API
- **Base URL**: `http://localhost:3000` (configured in `environment.local.ts`)
- **Endpoints Used**:
  - `GET /expenses` - Get all expenses
  - `POST /expenses/filter` - Filter expenses
  - `GET /expenses/:id` - Get single expense
  - `POST /expenses` - Create expense
  - `PATCH /expenses/:id` - Update expense
  - `DELETE /expenses/:id` - Delete expense
  - `POST /expenses/value` - Get expense total value
  - `GET /types` - Get expense/income types
  - `GET /reports/expenses` - Get expense report data

---

## Development Scripts

Available npm scripts:
- `npm start` / `ng serve` - Start development server (port 4200)
- `npm run build` / `ng build` - Build for production
- `npm run watch` - Build with watch mode
- `npm test` / `ng test` - Run unit tests
- `npm run local` - Start with local configuration

---

## Key Features Summary

### ✅ Implemented Features

1. **Expenses Management**
   - ✅ Full CRUD operations (Create, Read, Update, Delete)
   - ✅ List view with Material table
   - ✅ Filtering (by type, date range)
   - ✅ Sorting (ASC/DESC)
   - ✅ Pagination
   - ✅ Create/Edit dialog (Material Dialog)
   - ✅ Currency formatting
   - ✅ Date picker
   - ✅ Total value calculation

2. **Dashboard**
   - ✅ Multi-widget layout
   - ✅ Expense report with charts
   - ✅ Tax report
   - ✅ Income report

3. **UI/UX**
   - ✅ Material Design components
   - ✅ Responsive layout
   - ✅ Navigation menu
   - ✅ Filter persistence
   - ✅ Icons (FontAwesome)

4. **Data Management**
   - ✅ HTTP client integration
   - ✅ RxJS observables
   - ✅ Error handling in services
   - ✅ Type-safe models

---

## Notes

1. **Angular Version**: Using Angular v21.0.0 (latest stable version)
2. **Material Design**: Fully integrated with Material components
3. **Standalone Architecture**: All components use standalone architecture (modern approach)
4. **Locale**: Configured for Portuguese (pt-PT) - date formatting, locale
5. **Currency**: EUR currency formatting used
6. **Backend**: Requires backend API running on `http://localhost:3000`

---

## Next Steps

See `NEXT_STEPS.md` for a detailed roadmap of remaining implementation tasks and enhancements.
