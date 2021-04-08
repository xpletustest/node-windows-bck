## 1.0.13
- updated: WinSW to version 2.11.0.
- changed: now also using rmRetry to remove .xml & .log files

## 1.0.12
- updated: WinSW to version 2.10.3.
- added: rmRetry function to keep trying to remove a file for a specified amount of time
- changed: keep trying to remove .exe & .exe.config files for 2 minutes after uninstalling service 
          (Windows keeps them locked for some time)

## 1.0.11
(erroneous tag)

## 1.0.10
- rebased on 1.0.0-beta.5

## 1.0.9
- added: support for specifying executable name separately from service id
- updated: examples

## 1.0.8
- fixed: logOnAs was not initialized from config object
- updated: examples

## 1.0.7
- fixed: working directory was not set correctly 
- updated: example

## 1.0.6
- fixed: uninstall did not work when installed in non-default folder
- removed: unused callback from .install
- fixed: invalidinstallation check was incorrect
- updated: readme
- updated: examples

## 1.0.5
- fixed: _id & _name no longer writable
- fixed: invalid chars are removed from _id
- removed: name's setter
- fixed: .exe and .exe.config filenames now preserve casing

## 1.0.4
- added: support for completely unrelated service id (=config.id) and (display-) name (=config.name)

## 1.0.3
- fixed: start & stop functions still referred to this._exe  instead of this.id

## 1.0.2
- added: support for service recovery config (onFailure & resetFailure)
  (for specs see JSDoc comments in daemon.js)
- added: validation for onFailure & resetFailure params (throws when invalid)
- changed: all throw statements now use: new Error()
- updated: example code
- changed: service id no longer has ".exe" suffix appended

## 1.0.1
- added: DotNetVersions to bin folder
- added: README for DotNetVersions
- updated: winsw (to v2.9.0 for .NET 4.6.1)
- fixed: example code
- added: README for winsw
- added: this CHANGELOG file

## 1.0.0-beta.1
fork from https://github.com/coreybutler/node-windows