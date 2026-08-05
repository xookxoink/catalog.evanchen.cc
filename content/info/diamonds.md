+++
title = "Diamonds"
template = "info.html"
+++

In OTIS parlance, **diamonds** refer to secret codes hidden around the Internet
and even occasionally in real life.
Collecting diamonds can increase the level of a student in the OTIS platform.
(Specifically, collecting $n$ charisma grants $\lfloor \sqrt n \rfloor$
to the level of the student.)

## Anatomy

A diamond code is usually a hex string of length 24-26,
such as `4e6565644369746174696f6e`.
Often, the hex code produces an intelligible message when converted to ASCII.
On occasion, some diamonds are activated by special events rather than a code.

Diamonds also come with the following additional data:

- An image, which sometimes provides subtle clues at where it is hidden,
  usually revealed to others only after the first user discovers it.
- A title and humorous description, usually only revealed to users who find it.
- A Charisma value, often from 1 to 4 diamonds, but can be as high as 7
  or as low as -1 (not including the special Rizz Bomb diamond).

## Notable diamonds

Some notable diamonds include:

- **Unlocked "achievement unlocked"**: the first diamond most people find.
- Each [OPAL hunt](https://web.evanchen.cc/opal.html) rewards otters
  with a special diamond upon completion.
- **Citation needed**: a diamond on the OTIS Wiki.
- **Permission denied**: an unusual diamond worth -1 Charisma.
  Once redeemed, it cannot be normally removed.
  If a user redeems _only_ this diamond, their total Charisma becomes negative.
  This first happened in September 2021,
  [crashing the server until it was patched](https://github.com/vEnhance/otis-web/commit/8f1e8b6a).
  Starting in June 2024 the code was further updated so this would
  grant the user [an imaginary total level](https://github.com/vEnhance/otis-web/commit/568a3543dc23fc7a43cb5b2090b59f5aaead4395).
- **Rizz bomb**: a diamond worth -100 Charisma that cannot be obtained normally.
  It could be obtained during a one-time event by giving a hat to Evan.

## Wiki bug

Prior to the introduction of `catalog.evanchen.cc`,
there was a bug on the former internal OTIS Wiki
where the image of a diamond could be revealed
by entering its ID number into a wiki page with a special tag.
This bug was eventually patched inadvertently by the transition to
a public wiki managed by a static site generator.
