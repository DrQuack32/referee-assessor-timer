# Referee Assessor Timer

A simple web-based match and stoppage timer designed specifically for football referee assessors and observers.

> **Status: Beta / Field Testing**

The aim is deliberately simple: provide an easy-to-read match clock and a separate accumulated stoppage timer without the additional match-management functions found in referee apps.

## Launch the Timer

### [Open Referee Assessor Timer](https://drquack32.github.io/referee-assessor-timer/)

No App Store installation, account or login is required.

## Features

- Large continuous match clock
- First half runs from `00:00` through `45:00` and beyond
- Second half starts at `45:00` and runs through `90:00` and beyond
- Separate stoppage/delay timer
- Stoppage time can be started and stopped multiple times during each half
- Stoppages automatically accumulate into a total estimated lost time
- Manual adjustment of stoppage time by:
  - ±10 seconds
  - ±1 minute
- Stoppage timer automatically resets for the second half
- Protection against accidental match-clock resets
- Designed for use on a phone during a match
- Can be installed on an iPhone Home Screen as a web app
- Offline support after initial installation/loading

## How the Match Clock Works

At first-half kick-off, press **Start 1st Half**.

The match clock starts at:

`00:00`

It continues beyond 45 minutes rather than stopping or resetting.

For example, if the referee ends the first half after two minutes and 37 seconds of additional time, the clock will show:

`47:37`

Press **End 1st Half** when the half finishes.

At second-half kick-off, press **Start 2nd Half**.

The clock automatically starts again from:

`45:00`

It then continues through `90:00` and into any additional time.

## Stoppage / Delay Timer

The second clock is used to estimate time lost during the match.

When a significant stoppage begins, press:

**START DELAY**

The main match clock continues running normally while the stoppage timer accumulates.

When play resumes, press:

**STOP DELAY**

The recorded delay is retained.

For another stoppage, press **START DELAY** again. The new delay is added to the existing total.

For example, at the 45-minute mark you might have:

| | Time |
|---|---:|
| Match Time | `45:00` |
| Stoppage / Delay Time | `03:24` |

This gives the assessor an independent estimate of the amount of time lost during the half when considering the referee's management of additional time.

The accumulated stoppage time can also be adjusted manually using the **±10 second** and **±1 minute** controls.

When the second half starts, the stoppage timer automatically resets to `00:00`.

## Installing on an iPhone

The timer does not need to be downloaded from the App Store.

1. Open [Referee Assessor Timer](https://drquack32.github.io/referee-assessor-timer/) in **Safari** on your iPhone.
2. Tap the **Share** button.
3. Select **Add to Home Screen**.
4. Tap **Add**.
5. Open **Assessor Timer** from the new Home Screen icon.

This allows the timer to run in a standalone, app-like window rather than as a normal Safari tab.

## Typical Match Workflow

### First Half

1. Press **Start 1st Half** at kick-off.
2. Use **START DELAY** and **STOP DELAY** for significant stoppages.
3. Press **End 1st Half** when the referee ends the half.

### Second Half

1. Press **Start 2nd Half** at kick-off.
2. The match clock starts from `45:00`.
3. The stoppage timer resets to `00:00`.
4. Record stoppages as required.
5. Press **End Match** at full-time.

## Reset Protection

The manual **Reset to 00:00** and **Reset to 45:00** controls require confirmation with a second tap.

This reduces the risk of accidentally resetting the timer during a match.

## Purpose

This is intended as a **referee assessment/observation aid**, not as an official match timer.

It deliberately does not record:

- Goals
- Cards
- Substitutions
- Match incidents
- Player information
- Referee fitness/GPS data

The objective is to keep the interface simple enough that operating it does not distract the assessor from watching the referee and the match.

## Feedback

The timer is currently being field tested.

Feedback from referee assessors and observers is welcome, particularly around:

- Ease of use during a live match
- Readability outdoors
- Stoppage timer operation
- Additional-time assessment
- iPhone behaviour
- Features that would make the timer simpler or more useful

Issues and suggestions can be submitted through this GitHub repository.

## Disclaimer

This timer is an assessment aid only. Match timing and the determination of additional time remain the responsibility of the match referee.
