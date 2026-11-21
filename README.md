# Masareef (مصاريف) — Unsigned iOS IPA via GitHub & Codemagic

Developed by **Al Hawari Al Naabi**.

## What is included
- `www/index.html`: Complete offline expense tracker & smart shopping checklist (Arabic/English RTL/LTR, Dark/Light mode, Privacy toggle, CSV/JSON backup & restore).
- `www/manifest.json` & `www/assets/icons/`: PWA manifest and PNG app icons (`180x180` and `512x512`).
- `capacitor.config.ts` & `capacitor.config.json` & `package.json`: Capacitor iOS wrapper configuration (`com.alhawari.masareef`).
- `codemagic.yaml`: Automated macOS build workflow that generates an **unsigned `.ipa`** (`build/Masareef-unsigned.ipa`) without requiring an Apple Developer account or App Store upload.

## How to build & install on iPhone
1. Push all files from this ZIP into a new GitHub repository.
2. Connect the repository to **Codemagic** and run workflow **`ios-unsigned-ipa`**.
3. Download **`Masareef-unsigned.ipa`** from the Codemagic build artifacts.
4. Sign and install the `.ipa` onto your iPhone using **Sideloadly**, **AltStore**, or **TrollStore** (if supported on your iOS version).
