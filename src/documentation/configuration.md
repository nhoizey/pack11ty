---
title: Configuration
---

Some of Pack11ty features can be configured from a single location, in the `pack11ty.config.js` file.

```javascript
module.exports = {
  dir: {
    src: 'src',
    dist: '_site',
  },
  defaultLang: 'en',
  permalinkFolders: true,
  limitCollectionSizeInDevMode: 10,
};
```
