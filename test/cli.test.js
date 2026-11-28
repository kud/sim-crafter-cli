import { test } from "node:test"
import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"

const require = createRequire(import.meta.url)
const { version, bin } = require("../package.json")
const entry = fileURLToPath(new URL("../index.js", import.meta.url))

const run = (...args) =>
  spawnSync(process.execPath, [entry, ...args], {
    encoding: "utf8",
    env: { ...process.env, FORCE_COLOR: "0" },
  })

test("--version prints the package version", () => {
  const result = run("--version")
  assert.equal(result.status, 0)
  assert.equal(result.stdout.trim(), version)
})

test("--help lists every command", () => {
  const result = run("--help")
  assert.equal(result.status, 0)
  for (const command of [
    "list-remote",
    "list",
    "create",
    "delete",
    "boot",
    "screenshot",
  ]) {
    assert.match(result.stdout, new RegExp(`index\\.js ${command}\\b`))
  }
})

test("running without a command fails with a hint", () => {
  const result = run()
  assert.equal(result.status, 1)
  assert.match(result.stderr, /Please specify a command\./)
})

test("package.json declares the sim-crafter binary", () => {
  assert.equal(bin["sim-crafter"], "./index.js")
})
