# Football Match Timer

A simple web-based football match, stoppage and review-marker timer for coaches, referees, referee assessors, observers and anyone who wants an independent view of match time.

> **Status: Beta / Field Testing**

## Launch the Timer

### [Open Football Match Timer](https://drquack32.github.io/referee-assessor-timer/)

No App Store installation, account or login is required.

## Current Version

**v0.5 Beta**

## Features

- Large continuous match clock
- Configurable half length
- Optional extra time and configurable extra-time period length
- Selectable starting period and starting match time
- Separate accumulated stoppage/delay timer
- Manual stoppage adjustment by ±10 seconds and ±1 minute
- Full-match suspension and resume
- Review markers: tap **MARK** to record the current match time
- Show/hide marker list, undo last marker, clear markers and copy marker list
- Markers persist locally on the device
- Multilingual interface: English, Spanish, French, Portuguese, German and Italian
- iPhone Home Screen / PWA support
- Offline support
- Network-first update behaviour for the main app files to reduce stale iOS caching

## Review Markers

The marker feature is intentionally simple. When something happens that you may want to review later, tap **MARK**.

The app records only the current match time and period, for example:

- `19:47 — First half`
- `43:12 — First half`
- `67:05 — Second half`

This is designed to make later video review quicker without turning the app into a full incident-recording system.

Markers are stored locally on the device and can be copied as a simple text list.

## Languages

v0.5 Beta includes best-effort interface translations for:

- English
- Spanish
- French
- Portuguese
- German
- Italian

These translations should be treated as beta. Native-speaker corrections are welcome, particularly for football-specific terminology.

## Match Setup

Before starting, configure:

- Language
- Half length
- Extra time
- Extra-time half length
- Starting period
- Starting match time (`MM:SS`)

## Stoppage / Delay Timer

Press **START DELAY** when a significant stoppage begins. The main match clock continues while the stoppage timer accumulates. Press **STOP DELAY** when play resumes.

The accumulated total can be adjusted with `−1 min`, `−10 sec`, `+10 sec` and `+1 min`.

The stoppage timer resets at the start of each new period.

## Suspend Match

Use **Suspend Match** when the match itself has been temporarily suspended and all timing should stop. This is different from ordinary stoppage time.

Suspension stops the match clock and any active stoppage timer. **Resume Match** continues from the stored match time.

## Installing on an iPhone

1. Open [Football Match Timer](https://drquack32.github.io/referee-assessor-timer/) in Safari.
2. Tap **Share**.
3. Select **Add to Home Screen**.
4. Tap **Add**.
5. Launch **Match Timer** from the Home Screen icon.

## Purpose

This is a simple football match-timing aid. It deliberately avoids becoming a full match-management app. It does not attempt to record goals, cards, substitutions, teams, player details or incident descriptions. Markers are deliberately timestamp-only.

## Feedback

The timer is currently being field tested. Feedback, bug reports and translation corrections are welcome through this GitHub repository.

## Disclaimer

This timer is an independent timing aid only. Official match timing and the determination of additional time remain the responsibility of the match referee.
