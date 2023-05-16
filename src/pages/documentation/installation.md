---
title: Installation
---

There are multiple ways you can use [Pack11ty]{.pack11ty}, depending on where you want to host your site.

# Repository creation

## Fast creation and deployment

If you just want to try it and you're in a hurry, try one of these quick options to run [Pack11ty]{.pack11ty} for free:

[Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/nhoizey/pack11ty&stack=cms){.button}{.netlify}

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nhoizey/pack11ty)

Buttons above will:

1. Create a new repository in your own GitHub account with [Pack11ty]{.pack11ty} code
1. Deploy a copy of this new repository to your Netlify or Vercel account (you can create one during this process if you don't have one yet).

Each time you push changes to your GitHub repository (or add/modify files directly with GitHub's Web interface), Netlify or Vercel will build the new version of your site.

## Creation with Pack11ty template on GitHub

If you prefer to start without Netlify hosting, create your own repository on GitHub from this template:

[Use this GitHub template](https://github.com/nhoizey/pack11ty/generate){.button}{.github}

# Local installation on a personal computer

You need to configure a local development environment on your computer to be able to dive into [Pack11ty]{.pack11ty} code and make it your own:

1. Clone or download the new repository to your local computer[^clone]
1. (optional) If you don't have Node.js and `npm` yet, [install Node.js](https://nodejs.org/en/)[^lts]
1. Install [Pack11ty]{.pack11ty} dependencies with this command in your terminal: `npm install`

[^clone]: You can read [cloning a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) in GitHub's help.
[^lts]: The LTS (Long Time Support) version should be enough.

You're ready to develop your new site and create content.
