---
title: Windows Setup Guide
subtitle: Get your laptop ready for the 1-week TypeScript → Next.js training
repo_url: https://github.com/miznan/training-repo.git
mentor: MENTOR NAME on CHANNEL (e.g. Teams / WhatsApp)
versions: Checked on 15 Nov 2026
---

# 1. Purpose and checklist

This guide helps you prepare your Windows laptop **on your own**, before the training starts. It takes about 45 minutes. You do not need any work experience. Follow the steps in order. Do not skip steps.

**At the end you will have:**

- [ ] A GitHub account
- [ ] Git for Windows installed
- [ ] Node.js 26 LTS installed (npm comes with it)
- [ ] VS Code installed with 3 extensions
- [ ] Git set up with your name and email
- [ ] The training code in `C:\dev\training-repo`, on your own branch
- [ ] The Day 1 check running with no errors

::: tip
**Tip:** Stuck for more than 15 minutes? Look at the Troubleshooting table (Step 13). Still stuck? Message your mentor: **{{mentor}}**. Send a screenshot of the error.
:::

# 2. Requirements

| You need | Details |
|---|---|
| Windows | Windows 10 or 11, **64-bit** (Settings → System → About → "System type") |
| Admin rights | You must be able to install software. If Windows asks for an admin password and you do not have one, ask your mentor. |
| Internet | Stable connection. You will download about 500 MB. |
| Disk space | About 5 GB free |
| GitHub account | Free. See the box below. |

## Create a GitHub account

1. Open <https://github.com/signup> in your browser.
2. Use the **same email** you will use for Git in Step 7.
3. Choose a **professional username**, for example `aisyah-rahman` or `ahmad.farid`. Do not use nicknames or jokes.
4. Confirm your email address when GitHub sends you a message.
5. Send your **GitHub username** to your mentor.
6. Your mentor will invite you to the training repository, so you can push your own branch. Open your email, click **View invitation**, then click **Accept invitation**. Do this **before** Step 8.

::: ok
**Expected result:** You can sign in at <https://github.com>. You see the invitation for `training-repo` accepted.
:::

# 3. Install Git for Windows

Git saves your work and sends it to GitHub.

1. Open <https://git-scm.com/downloads/win>.
2. Click **Git for Windows/x64 Setup** (the 64-bit installer). Version at the time of writing: **2.56.1**. Newer is fine.
3. Run the installer. Click **Yes** if Windows asks for permission.
4. Click **Next** on every screen, **except** the five screens below. Set them exactly like this:

| Installer screen | Choose |
|---|---|
| Choosing the default editor used by Git | **Visual Studio Code** (if it is not in the list, finish this step, install VS Code in Step 5, then run `git config --global core.editor "code --wait"`) |
| Adjusting your PATH environment | **Git from the command line and also from 3rd-party software** |
| Choosing HTTPS transport backend | Use the default |
| Configuring the line ending conversions | **Checkout Windows-style, commit Unix-style line endings** |
| Configuring extra options | Keep **Enable Git Credential Manager** ticked (ON) |

5. Click **Install**, then **Finish**.

::: warn
**Warning:** Do not change the other options. Do not untick Git Credential Manager. You need it to sign in to GitHub.
:::

::: ok
**Expected result:** The installer closes. You can find "Git Bash" in the Start menu. You will check the version in Step 6.
:::

# 4. Install Node.js (LTS)

Node.js runs your TypeScript code. It also installs **npm**, which downloads libraries.

1. Open <https://nodejs.org/en/download>.
2. Choose **Windows**, **x64**, and the **LTS** version. Download the **.msi** installer. Version at the time of writing: **26.13.1 (LTS "Lithium")**. Any **26.x** is fine.
3. Run the installer. Click **Next** and accept the defaults. Keep "Add to PATH" ticked.
4. On the screen **"Tools for Native Modules"**, **do not tick** the box "Automatically install the necessary tools". Just click **Next**.
5. Click **Install**, then **Finish**.

::: warn
**Warning:** Do **not** install Chocolatey, Python, Visual Studio Build Tools or any other extra tool. You do not need them. If a black window opens and starts installing things, close it.
:::

::: ok
**Expected result:** The installer closes with no errors. You will check the version in Step 6.
:::

# 5. Install VS Code and extensions

VS Code is the editor where you will write your code.

1. Open <https://code.visualstudio.com/Download>.
2. Download the **Windows** installer (**User Installer, x64**). Version at the time of writing: **1.146**. Newer is fine.
3. Run the installer and accept the agreement.
4. On the **Select Additional Tasks** screen, tick these boxes:
    - **Add "Open with Code" action to Windows Explorer file context menu**
    - **Add "Open with Code" action to Windows Explorer directory context menu**
    - **Add to PATH (requires shell restart)**
5. Click **Install**, then **Finish**. Open VS Code.
6. Install the extensions. Click the **Extensions** icon on the left (four squares), or press `Ctrl+Shift+X`. Search for each name and click **Install**:

| Extension | Publisher | Needed? |
|---|---|---|
| **ESLint** | Microsoft | Yes |
| **Prettier - Code formatter** | Prettier | Yes |
| **Error Lens** | Alexander | Optional (shows errors next to your code) |

::: tip
**Tip:** Check the publisher name. Many extensions have similar names. Pick the one with the most downloads.
:::

::: ok
**Expected result:** VS Code opens. The three extensions appear under "Installed" in the Extensions panel.
:::

# 6. Check your installs

Close **all** terminal and VS Code windows first. Then open a **new** PowerShell window:

1. Press the **Windows key**.
2. Type `PowerShell`.
3. Press **Enter**.

Type these three commands. Press **Enter** after each one.

```powershell
git --version
node --version
npm --version
```

::: ok
**Expected result:** You see version numbers like this. Your numbers may be a little different. That is fine.

```
git version 2.56.1.windows.1
v26.13.1
11.20.0
```

`node` must start with **v26**. If `git` or `node` is "not recognized", see Troubleshooting (Step 13).
:::

::: tip
**Tip:** Take a screenshot of this window in case your mentor asks for it.
:::

# 7. One-time Git setup

Tell Git who you are. Use your **real name** and the **same email as your GitHub account**. Replace the text inside the quotes.

```powershell
git config --global user.name "Your Full Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

Check that it worked:

```powershell
git config --global --list
```

::: ok
**Expected result:** The list includes these three lines (and maybe a few more):

```
user.name=Your Full Name
user.email=you@example.com
init.defaultBranch=main
```
:::

# 8. Get the training code

## 8.1 Create a folder and clone

Keep the training code in a short path like `C:\dev`. Do not use OneDrive or Desktop. Run:

```powershell
mkdir C:\dev
cd C:\dev
git clone {{repo_url}}
```

A browser window opens from **Git Credential Manager**. Click **Sign in with your browser**, sign in to GitHub, and click **Authorize**. Then go back to PowerShell.

::: warn
**Warning:** Never type your GitHub password in the terminal. GitHub does not accept it. Always sign in through the browser pop-up.
:::

::: ok
**Expected result:** PowerShell shows lines like `Cloning into 'training-repo'...` and ends with `Resolving deltas: 100%`. A folder `C:\dev\training-repo` now exists.
:::

## 8.2 Create your own branch

A branch is your own copy of the work. The command below creates it from `main` of the training repository. You work **only** on your branch. Everything you commit and push stays on your branch. You do **not** make a Pull Request and you do **not** merge into `main`. Your mentor checks each intern's branch. Use your first name in lower case, for example `intern/aisyah`.

```powershell
cd training-repo
git checkout -b intern/<your-name>
```

::: ok
**Expected result:** `Switched to a new branch 'intern/<your-name>'`
:::

## 8.3 First push

```powershell
git push -u origin intern/<your-name>
```

::: ok
**Expected result:** The last lines say `* [new branch]      intern/<your-name> -> intern/<your-name>` and `branch 'intern/<your-name>' set up to track 'origin/intern/<your-name>'`. Open the repo on GitHub and select your branch to see it.
:::

::: warn
**Warning:** Replace `<your-name>` with your real name and remove the `<` `>` signs. Example: `git checkout -b intern/aisyah`.
:::

# 9. Open the code and run the Day 1 check

1. In PowerShell (inside `training-repo`) run:

```powershell
code .
```

2. VS Code opens. If it asks **"Do you trust the authors of the files in this folder?"**, click **Yes, I trust the authors**.
3. Open the terminal inside VS Code: press ``Ctrl+` `` (the key above Tab) or use the menu **Terminal → New Terminal**.
4. Run these commands, one at a time:

```powershell
cd day1
npm install
npm start
```

`npm install` downloads the libraries. It needs internet and takes about 1 minute.

::: ok
**Expected result for `npm install`:** It ends with a line like `added 5 packages` and `found 0 vulnerabilities`. A new folder `node_modules` appears. This is normal.
:::

::: ok
**Expected result for `npm start`:** You see this output. The text `YOUR NAME` is normal now. On Day 1 you will change it to your own details.

```
> day1@1.0.0 start
> tsx hello.ts

Hello, my name is YOUR NAME
I study YOUR COURSE
```
:::

::: tip
**Tip:** Take a screenshot of this output in case your mentor asks for it.
:::

# 10. Open a JavaScript Debug Terminal (needed on Day 3)

The debugger lets you stop your program and look inside it. You use it on Day 3. Try it now so it is ready:

1. Open the VS Code terminal (``Ctrl+` ``).
2. Click the small arrow **˅** next to the **+** at the top right of the terminal panel.
3. Click **JavaScript Debug Terminal**.

Or: press `Ctrl+Shift+P`, type `JavaScript Debug Terminal`, and press **Enter**.

::: ok
**Expected result:** A new terminal opens. Its name says "JavaScript Debug Terminal". Run `npm start` inside it. It prints the same output as before. Later, any breakpoint (red dot left of a line number) will stop the program.
:::

# 11. Daily routine

Do this every day. Replace `dayX` with the folder of the day (`day1`, `day2`, `day3`, `day4`, `day5`).

| When | What | Command |
|---|---|---|
| **Morning** | Get the latest files | `git pull` |
| | Read the day's `README.md` | |
| | Go to the day folder, install once | `cd dayX` then `npm install` |
| **During the day** | Run your code or tests | `npm start` or `npm test` (Day 5: `npm run dev`) |
| | **Commit often** after each small step | `git add .` then `git commit -m "day2: grade calculator"` |
| **Before 16:30** | Push to your branch | `git push` |
| **Before you go home** | Fill in `LOG.md` in the day folder, commit and push again | |

::: tip
**Tip:** Write clear commit messages, for example `day2: ex03 fizzbuzz`. Not `update` or `asdf`.
:::

::: warn
**Warning:** Always check that you are on **your** branch: run `git branch`. The name with `*` is the current one. It must be `intern/<your-name>`. Never push to `main`.
:::

# 12. Rules

1. **Fake data only.** Never use real names, real IC numbers or any real NIH data. Make up the data.
2. **AI tools are allowed, but you must be able to explain every line.** Your mentor will ask you every day.
3. **Never edit files in the `tests/` folders.** Make your code pass the tests, not the other way round.
4. Work **only on your own branch**.

# 13. Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| `npm : File ...npm.ps1 cannot be loaded because running scripts is disabled on this system` | PowerShell blocks scripts by default | Run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`. Type `Y` and press Enter. Then try `npm` again. No admin needed. |
| `'node' is not recognized...` or `'git' is not recognized...` | The terminal started before the install, so it does not know the new PATH | Close all terminals and VS Code. Open a **new** PowerShell. If it still fails, restart the laptop. If it still fails, run the installer again and keep "Add to PATH" ticked. |
| `code .` says `'code' is not recognized` | VS Code "Add to PATH" was not ticked | Restart the laptop. If it still fails, re-run the VS Code installer and tick **Add to PATH**. |
| `git push` asks for a password, or shows `403` / `Permission denied` / `Repository not found` | You have not accepted the GitHub invitation, or you signed in with the wrong GitHub account | 1. Accept the invitation in your email. 2. Open Windows Start, search **Credential Manager → Windows Credentials**, remove any `git:https://github.com` entry. 3. Run `git push` again and sign in through the **browser** pop-up with the correct account. **Never** type your GitHub password in the terminal. |
| `npm install` fails or hangs: `ETIMEDOUT`, `ECONNREFUSED`, `SELF_SIGNED_CERT_IN_CHAIN` | A company proxy or antivirus is blocking npm | Do **not** turn off the antivirus. Ask your mentor or IT for the proxy address, then run `npm config set proxy http://PROXY:PORT` and `npm config set https-proxy http://PROXY:PORT`. Ask IT to allow `registry.npmjs.org`. Try again on another network (for example, a phone hotspot). |
| `Error: listen EADDRINUSE: address already in use :::3000` or "Port 3000 is in use" (Day 5) | Another program, or an old `npm run dev`, is using port 3000 | Close the old terminal that runs `npm run dev` (press `Ctrl+C` in it). Or use another port: `npm run dev -- -p 3001` and open `http://localhost:3001`. To find the program: `netstat -ano \| findstr :3000`, then `taskkill /PID <number> /F`. |
| `warning: LF will be replaced by CRLF` | Normal line-ending message from Git on Windows | Ignore it. Nothing is wrong. |
| `fatal: not a git repository` | You are in the wrong folder | Run `cd C:\dev\training-repo`. |
| `npm error enoent Could not read package.json` | You are not inside a day folder | Run `cd day1` (or the right day), then try again. |
