**💰 Budget Manager – Chrome Extension**

A simple and effective Chrome extension to help you track your daily spending and manage your budget effortlessly.

**📌 Overview**

Budget Manager is a lightweight Chrome extension designed to help users track their expenses directly from their browser. With a clean popup interface, automatic storage, and optional notifications, this extension allows you to record, update, and manage your spending in one place.

This project demonstrates the fundamentals of Chrome Extension development, including browser actions, background scripts, storage API usage, and options pages.

**🧩 Features**

1. ✅ Track your daily spendings

2. 📊 Stores data using Chrome Storage API

3. 🔔 Shows helpful notifications (if enabled)

4. ⚙️ Options page for customizing settings

5. 🖱️ Right-click support using context menus

6. 🪶 Lightweight and easy to use

7. 📦 Offline support through background scripts



<img width="1166" height="1204" alt="image" src="https://github.com/user-attachments/assets/71975cbd-5d1b-4c91-b1ae-e0ff81fa8c3e" />


**▶️ How to Install the Extension (Developer Mode)**

1. Download the project folder to your computer.

2. Open Chrome → Go to **chrome://extensions/**

3. Enable Developer Mode (top-right toggle).

4. Click Load unpacked.

5. Select the **Budget-Manager** folder.

6. The extension will appear in your toolbar.


**🚀 How to Use**

1. Click the extension icon in your Chrome toolbar.

2. Enter your spending amount, description, category, etc. (as implemented in your popup).

3. The data is saved automatically using Chrome Storage.

4. Use the Options Page to customize:

    a. Daily/Monthly budget
    
    b. Notification preferences
    
    c. Reset or clear history

5. Right-click anywhere in Chrome to access added context menu features (if implemented).


**🧠 Technologies Used**

1. HTML, CSS and JavaScript

2. Chrome Extension API

3. Chrome Storage API

4. Notifications API

5. Event Page (background script)
   

**🧪 Development Notes**

1. This extension uses Manifest V2, which Chrome supports in limited ways; upgrading to Manifest V3 in the future is recommended.

2. The background script is non-persistent, helping reduce memory usage.

3. All icons follow standard Chrome extension sizes (16, 48, 128 pixels).
