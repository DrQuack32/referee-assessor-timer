# Football Match Timer

A simple web-based match and stoppage timer designed specifically for football referee assessors and observers.

> **Status: Beta / Field Testing**

## Launch the Timer

### [Open Football Match Timer](https://drquack32.github.io/referee-assessor-timer/)

No App Store installation, account or login is required.

## Current Version

**v0.4 Beta**

## Features

- Large continuous match clock
- Configurable half length for youth and other competitions
- Optional extra time with configurable extra-time period length
- Continuous match-minute display across periods
- Selectable starting period and starting match time
- Separate accumulated stoppage/delay timer
- Manual stoppage adjustment by ±10 seconds and ±1 minute
- Protected end-of-period controls
- Protected match suspension control
- Full match suspension stops all clocks
- Resume continues from the exact suspended match time
- Stoppage timer resets at the start of each new period
- iPhone Home Screen / PWA support
- Offline support after initial loading

## Match Setup

Before starting, configure the half length, optional extra time, extra-time period length, starting period and starting match time.

Examples:

- 45-minute halves: `00:00 → 45:00 → 90:00`
- 40-minute halves: `00:00 → 40:00 → 80:00`
- Standard extra time: `90:00 → 105:00 → 120:00`

## Starting From a Specific Match Time

The timer can begin from any entered `MM:SS` value. This is useful if an abandoned or suspended match is resumed later, an assessor joins a match already in progress, or a particular period needs to be tested.

Select the correct starting period and enter the required match time, for example `63:17`.

## Stoppage / Delay Timer

Press **START DELAY** when a significant stoppage begins. The main match clock continues running normally while the stoppage timer accumulates. Press **STOP DELAY** when play resumes.

The total can be adjusted by `−1 min`, `−10 sec`, `+10 sec` and `+1 min`.

The stoppage timer resets whenever a new period begins.

## Suspend Match

**Suspend Match** is different from the stoppage timer. Use the stoppage timer when play has stopped but normal match time continues. Use **Suspend Match** when the match itself has been temporarily suspended and all timing should stop.

Suspension requires confirmation with a second tap. While suspended, both clocks stop. **RESUME MATCH** continues from the exact stored match time.

## Installing on an iPhone

1. Open [Referee Assessor Timer](https://drquack32.github.io/referee-assessor-timer/) in **Safari**.
2. Tap the **Share** button.
3. Select **Add to Home Screen**.
4. Tap **Add**.
5. Launch **Assessor Timer** from the Home Screen icon.

## Purpose

This is intended as a **referee assessment/observation aid**, not as an official match timer. It deliberately avoids goals, cards, substitutions, teams and incident logging so the interface remains quick to operate.

## Feedback

The timer is currently being field tested. Feedback and issue reports are welcome through this GitHub repository.

## Disclaimer

This timer is an assessment aid only. Match timing and the determination of additional time remain the responsibility of the match referee.
