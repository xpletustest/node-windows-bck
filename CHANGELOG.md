
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
- added DotNetVersions to bin folder
- added README for DotNetVersions
- updated winsw (to v2.9.0 for .NET 4.6.1)
- fixed example code
- added README for winsw
- added this CHANGELOG file

## 1.0.0-beta.1
fork from https://github.com/coreybutler/node-windows