---
title: Installation
---

There are multiple ways you can use [Pack11ty]{.pack11ty}, depending on where you want to host your site.

::: info
There are multiple hosting options listed in [Eleventy's deployment documentation](https://www.11ty.dev/docs/deployment/).
:::

# Repository creation

## Fast creation and deployment

If you just want to try it and you're in a hurry, try one of these quick options to run [Pack11ty]{.pack11ty} for free:

[Deploy to **Netlify**](https://app.netlify.com/start/deploy?repository=https://github.com/nhoizey/pack11ty&stack=cms){.button}{.netlify} [Deploy to **Vercel**](https://vercel.com/new/clone?repository-url=https://github.com/nhoizey/pack11ty){.button}{.vercel} [Deploy to **StackBlitz**](https://stackblitz.com/github/nhoizey/pack11ty){.button}{.stackblitz}

Buttons above will:

1. Create a new repository in your own GitHub account with [Pack11ty]{.pack11ty} code
1. Deploy a copy of this new repository to your hosting platform account (you can create one during this process if you don't have one yet).

Each time you push changes to your GitHub repository (or add/modify files directly with GitHub's Web interface), the hosting platform will build the new version of your site.

## Creation with Pack11ty template on GitHub

If you prefer to start without Netlify or Vercel hosting, you can [generate a new repository with the same directory structure and files](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) as the existing [Pack11ty]{.pack11ty} repository:

[Use this GitHub template](https://github.com/nhoizey/pack11ty/generate){.button}{.github}

# Local installation on a personal computer

You need to configure a local development environment on your computer to be able to dive into [Pack11ty]{.pack11ty} code and make it your own:

1. Clone or download the new repository to your local computer[^clone]
1. (optional) If you don't have Node.js and `npm` yet, [install Node.js](https://nodejs.org/en/)[^lts]
1. Install [Pack11ty]{.pack11ty} dependencies with this command in your terminal: `npm install`

[^clone]: You can read [cloning a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) in GitHub's help.
[^lts]: The LTS (Long Time Support) version should be enough.

You're ready to develop your new site and create content.
