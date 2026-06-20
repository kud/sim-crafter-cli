<div align="center">

![TypeScript](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![npm](https://img.shields.io/npm/v/@kud/sim-crafter-cli?style=flat-square&color=CB3837)
![MIT](https://img.shields.io/badge/licence-MIT-22C55E?style=flat-square)

**A CLI tool to manage iOS simulators on macOS, simplifying testing and development workflows.**

<a href="https://kud.io/projects/sim-crafter-cli">Website</a> · <a href="https://kud.io/projects/sim-crafter-cli/docs">Documentation</a>

</div>

## Features

- **List simulators** — display all local simulator devices in a table with OS version, UDID, and boot state
- **Browse remote devices** — list all available device types from Xcode with their identifier and runtime range
- **Create simulators** — interactively pick a device type and runtime to spin up a new simulator
- **Delete simulators** — select and remove an existing simulator device via an interactive prompt
- **Boot on demand** — start a simulator device ready for use without opening Xcode
- **Take screenshots** — capture a screenshot from any running simulator straight to disk

## Install

```sh
npm install -g @kud/sim-crafter-cli
```

Requires macOS with Xcode installed. The tool wraps `xcrun simctl` and expects Node.js 18 or later.

## Usage

```console
$ sim-crafter list
┌──────────────────┬────────────┬──────────────────────────────────────┬────────┬───────────┐
│ Name             │ OS Version │ UDID                                 │ State  │ Available │
├──────────────────┼────────────┼──────────────────────────────────────┼────────┼───────────┤
│ iPhone 15 Pro    │ iOS 17.4   │ A1B2C3D4-…                           │ Booted │ Yes       │
│ iPhone SE (3rd)  │ iOS 17.4   │ E5F6G7H8-…                           │ Shutdown│ Yes      │
└──────────────────┴────────────┴──────────────────────────────────────┴────────┴───────────┘

$ sim-crafter create
$ sim-crafter boot
$ sim-crafter screenshot
$ sim-crafter delete
$ sim-crafter list-remote
```

## Development

```sh
git clone https://github.com/kud/sim-crafter-cli.git
cd sim-crafter-cli
npm install
./index.js list
```

📚 **Full documentation → [sim-crafter-cli/docs](https://kud.io/projects/sim-crafter-cli/docs)**
