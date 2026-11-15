"""Build Windows_Setup_Guide.pdf from the .md file using headless Chrome.
Needs: pip install markdown ; Google Chrome installed.
Run: python3 build_setup_guide.py   (set CHROME=... if Chrome is elsewhere)"""
import os, re, subprocess, sys, tempfile, html
import markdown

here = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(here, "Windows_Setup_Guide.md"), encoding="utf-8").read()
meta = dict(re.findall(r"^(\w+): (.*)$", re.match(r"---\n(.*?)\n---\n", src, re.S).group(1), re.M))
body = re.sub(r"^---\n.*?\n---\n", "", src, count=1, flags=re.S)
for k, v in meta.items():
    body = body.replace("{{%s}}" % k, v)

# ::: tip|warn|ok ... :::  ->  styled box
body = re.sub(r"^::: (\w+)\n(.*?)\n:::$", lambda m: '<div class="box %s" markdown="1">\n\n%s\n\n</div>' % (m.group(1), m.group(2)), body, flags=re.S | re.M)
out = markdown.markdown(body, extensions=["tables", "fenced_code", "sane_lists", "md_in_html"])
out = out.replace("<h1>", "<h1>")  # each H1 is a step heading

# checkbox lists
out = out.replace("<li>[ ] ", '<li class="chk">')

css = open(os.path.join(here, "guide.css"), encoding="utf-8").read() if os.path.exists(os.path.join(here, "guide.css")) else ""
page = f"""<!doctype html><html><head><meta charset="utf-8"><title>{meta['title']}</title>
<style>{css}</style></head><body>
<section class="cover"><div class="band"></div>
<p class="kicker">Intern Training · Week 1</p>
<h1 class="ctitle">{html.escape(meta['title'])}</h1>
<p class="csub">{html.escape(meta['subtitle'])}</p>
<table class="cmeta"><tr><td>For</td><td>Interns (no experience needed)</td></tr>
<tr><td>Time needed</td><td>About 45 minutes</td></tr>
<tr><td>Versions</td><td>{html.escape(meta['versions'])}: Git 2.56, Node.js 26 LTS, VS Code 1.146</td></tr>
<tr><td>Help</td><td>{html.escape(meta['mentor'])}</td></tr></table></section>
<main>{out}</main></body></html>"""
tmp = tempfile.mkdtemp()
h = os.path.join(tmp, "g.html"); open(h, "w", encoding="utf-8").write(page)
chrome = os.environ.get("CHROME", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")
pdf = os.path.join(here, "Windows_Setup_Guide.pdf")
subprocess.run([chrome, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                f"--print-to-pdf={pdf}", "file://" + h], check=True, stderr=subprocess.DEVNULL)
print("wrote", pdf)
