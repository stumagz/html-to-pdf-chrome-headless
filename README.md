# html-to-pdf-chrome-headless


## How to Run a Chrome Headless app to convert your HTML files to PDF on a Ubuntu Machine

---

- #### Install Chrome Headless
  1. `wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`
  2. `sudo apt install ./google-chrome-stable_current_amd64.deb`
- #### Install node and html-pdf-chrome package
  - https://www.npmjs.com/package/html-pdf-chrome
- #### Run index.js and chrome
  - 
    ```
    google-chrome-stable \
    --interpreter none \
    -- \
    --headless \
    --disable-gpu \
    --disable-translate \
    --disable-extensions \
    --disable-background-networking \
    --safebrowsing-disable-auto-update \
    --disable-sync \
    --metrics-recording-only \
    --disable-default-apps \
    --no-first-run \
    --mute-audio \
    --hide-scrollbars \
    --remote-debugging-port=<port goes here>
    ```
   - `node index.js`
- #### Setup pm2 to manage processes (Optional)
  - https://pm2.keymetrics.io/
