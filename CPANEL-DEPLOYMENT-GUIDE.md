# cPanel Deployment Guide - RCISA Johannesburg North Website

## 📦 Your Website Package

**File:** `rcisa-johannesburg-north-website.zip` (65KB)

This ZIP file contains your complete website ready for deployment to cPanel.

---

## 🚀 Step-by-Step Deployment Instructions

### Step 1: Access Your cPanel

1. Log in to your web hosting cPanel
2. Navigate to the **File Manager** section
3. Click on **File Manager** to open it

### Step 2: Navigate to the Correct Directory

1. In File Manager, go to the **public_html** folder
   - This is the root directory for your website
   - If you want the site in a subdirectory (e.g., `yoursite.com/church`), create a folder first

### Step 3: Upload the ZIP File

1. Click the **Upload** button at the top of File Manager
2. Click **Select File** and choose `rcisa-johannesburg-north-website.zip`
3. Wait for the upload to complete (should be quick - only 65KB)
4. Close the upload window when done

### Step 4: Extract the ZIP File

1. Go back to File Manager
2. Find the `rcisa-johannesburg-north-website.zip` file in public_html
3. **Right-click** on the ZIP file
4. Select **Extract**
5. Click **Extract Files** to confirm
6. Wait for extraction to complete

### Step 5: Move Files to Root (Important!)

After extraction, you'll have a folder structure. You need to move the files:

1. The extracted files will be in the current directory
2. You should see these files/folders:
   - `index.html`
   - `about.html`
   - `contact.html`
   - `donate.html`
   - `events.html`
   - `gallery.html`
   - `leadership.html`
   - `ministries.html`
   - `assets/` folder

3. **If they're in a subfolder**, select all files and move them to `public_html`

### Step 6: Delete the ZIP File

1. Select the `rcisa-johannesburg-north-website.zip` file
2. Click **Delete** to remove it (no longer needed)

### Step 7: Set Permissions (Usually automatic, but check)

1. Select the `assets` folder
2. Right-click and choose **Change Permissions**
3. Ensure it's set to **755** (usually default)
4. Check "Recurse into subdirectories"
5. Click **Change Permissions**

### Step 8: Test Your Website

1. Open your web browser
2. Go to your domain: `http://yourdomain.com`
3. Your RCISA Johannesburg North website should now be live!

---

## ✅ What's Included in the Package

- **8 HTML Pages:**
  - Home (index.html)
  - About
  - Leadership
  - Ministries
  - Events
  - Gallery
  - Donate
  - Contact

- **Assets Folder:**
  - CSS (style.css)
  - JavaScript (script.js)
  - Images (RCZ logo PNG)

---

## 🔧 Post-Deployment Checklist

After uploading, verify these features work:

- [ ] All pages load correctly
- [ ] Navigation menu works
- [ ] RCZ logo displays properly
- [ ] Google Maps shows on Contact page
- [ ] Donation page shows bank details
- [ ] All images load (leadership, council members)
- [ ] Mobile menu works on phones
- [ ] Forms are functional

---

## 📝 Important Notes

1. **Domain Name:** The website will be accessible at your domain (e.g., `www.rcisa-jnorth.org`)

2. **SSL Certificate:** Ask your hosting provider to enable SSL (HTTPS) for security

3. **Email Setup:** The website uses `info@rcisa-jnorth.org` - make sure to create this email in cPanel

4. **Backup:** Keep a copy of the ZIP file as backup

5. **Updates:** To update the website later, you can:
   - Edit files directly in cPanel File Manager
   - Or upload new files via FTP

---

## 🆘 Troubleshooting

**Problem:** Website shows "Index of /" or directory listing
- **Solution:** Make sure `index.html` is in the `public_html` folder

**Problem:** Images don't load
- **Solution:** Check that the `assets` folder is in the same directory as `index.html`

**Problem:** Pages show 404 errors
- **Solution:** Verify all HTML files are in the root directory

**Problem:** Logo doesn't display
- **Solution:** Check that `assets/images/rcz-logo.png` exists

---

## 📞 Need Help?

Contact your hosting provider's support if you encounter issues with:
- cPanel access
- File uploads
- Domain configuration
- SSL certificate setup

---

## 🎉 Congratulations!

Your RCISA Johannesburg North website is now live and ready to serve your congregation!

**Next Steps:**
1. Share the website URL with your church members
2. Create the Facebook and YouTube pages mentioned on the site
3. Update social media links when ready
4. Consider adding actual photos of your leadership team

