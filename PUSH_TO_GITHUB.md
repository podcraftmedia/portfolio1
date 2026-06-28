# 📤 Push Netlify Files to GitHub

## Quick Guide

Since the files are committed locally, you just need to push them to GitHub.

---

## ✅ **On Your Computer:**

Open PowerShell in your portfolio folder and run:

```powershell
# Make sure you're in the right folder
cd Desktop\portfolio

# Push to GitHub
git push origin main
```

If prompted for credentials, enter your GitHub username and password (or personal access token).

---

## 🔐 **If It Asks for Authentication:**

GitHub now requires a **Personal Access Token** instead of password.

### Get a Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "Portfolio Deploy"
4. Check the **repo** checkbox
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)

### Use the Token:
When git asks for password, paste the token instead.

---

## 🎯 **Alternative: Push from GitHub Desktop**

If you have GitHub Desktop:
1. Open GitHub Desktop
2. Add your portfolio folder
3. It will show the new commits
4. Click "Push origin"

---

## 🌐 **Or Upload Directly on GitHub:**

1. Go to https://github.com/podcraftmedia/portfolio
2. Click "Add file" → "Upload files"
3. Drag these two files:
   - `netlify.toml`
   - `NETLIFY_DEPLOY.md`
4. Commit directly to main

---

## ✅ **After Pushing:**

Go to https://github.com/podcraftmedia/portfolio

You should see:
- ✅ netlify.toml
- ✅ NETLIFY_DEPLOY.md

Then you can download them or deploy directly from GitHub!

---

**Easiest way: Just run `git push origin main` from your portfolio folder!** 🚀
