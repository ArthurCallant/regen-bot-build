# Degeneration

A discord bot for the OldSchool Runescape clan "Regeneration". This is the "production" build hosted on repl. Development happens in the regen-bot repository.

## Running the app

- This app requires node `18.17.1` (tip: use n to manage node versions)
- `npm install`
- `npm run start`

## .ENV

The following are required:

- CLIENT_TOKEN= The bot's client token from discord API
- GROUP_ID= The group id from wise old man

If using Google Spreadsheet API to keep track of points, also use:

- POINTS_SPREADSHEET_ID= The spreadsheet in which points are being tracked
