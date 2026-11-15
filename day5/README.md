# Day 5 (Fri): First Next.js page

Build a page that **lists the projects** and has a form to **add a project** with validation.
(This is a small version of what the real portal does with e-forms.)

## Learn (morning)
- Next.js Learn course, first chapters: https://nextjs.org/learn
- Components and props; `"use client"`; `useState`; handling a form `onSubmit`
- Git: create a branch, open a **pull request** (PR)

## Run
```bash
npm install
npm run dev        # open http://localhost:3000
```

## Task
1. `lib/validate.ts`: copy your `validateProject` from Day 4 (it is the same rules).
2. `components/ProjectsView.tsx`: follow the TODOs:
   - Table of **valid** projects: ID, Title, Unit, Status, Budget (RM), Start date. Show "Showing N projects".
   - Form "Add project": Title (text), Unit (select), Status (select), Budget (number), Start date (date).
   - On submit: validate. If errors → show them in red and **do not** add. If OK → add to the top of the table, give it the next ID (e.g. `P051`) and clear the form.
3. Work on a branch `intern/<name>-day5`, then open a PR to your own `intern/<name>` branch.

## Done when
- Page runs locally with no errors in the browser console.
- Invalid input shows errors; valid input appears in the table.
- PR is open with a short description of what you built.
