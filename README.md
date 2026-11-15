# Intern Training: Week 1 (TypeScript → Next.js)

One folder per day. Work **only in your own branch**.

## First-time setup (Monday morning)
1. Install **Node.js 26 LTS** (https://nodejs.org), **VS Code** and **Git**.
2. Check: `node --version` (26.x) and `git --version`.
3. Clone this repo, then create your branch:
   ```bash
   git clone <repo-url>
   cd intern-training
   git checkout -b intern/<your-name>
   ```

## Every day
```bash
cd dayX-xxx
npm install        # first time in each day folder
npm test           # runs the checks for that day (Day 1 has no tests)
```
- Read the day's `README.md` first. It tells you the task and the "done when".
- Commit often with clear messages, e.g. `day2: grade calculator`.
- Push to **your branch** before the 16:30 check-in: `git push -u origin intern/<your-name>`
- Fill in `LOG.md` in the day folder before you go home.

## Rules
- AI tools (Claude) are allowed. **You must be able to explain every line you submit.** You will be asked to, every day.
- Use **fake data only**. Never use real names, real IC numbers or any real NIH data.
- Do not edit the files in `tests/`. Make the code pass the tests, not the other way round.
