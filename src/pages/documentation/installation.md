---
title: Installation
---

There are multiple ways you can use [Pack11ty]{.pack11ty}, depending on where you want to host your site.

# Fast creation and deployment with online services

If you just want to try it and you're in a hurry, try one of these quick options to run [Pack11ty]{.pack11ty} for free:

[Deploy to **Netlify**](https://app.netlify.com/start/deploy?repository=https://github.com/nhoizey/pack11ty&stack=cms){.button}{.netlify} [Deploy to **Vercel**](https://vercel.com/new/clone?repository-url=https://github.com/nhoizey/pack11ty){.button}{.vercel} [Deploy to **StackBlitz**](https://stackblitz.com/github/nhoizey/pack11ty){.button}{.stackblitz}

Buttons above will:

1. Create a new repository in your own GitHub account with [Pack11ty]{.pack11ty} code
1. Deploy a copy of this new repository to your hosting platform account (you can create one during this process if you don't have one yet).

Each time you push changes to your GitHub repository (or add/modify files directly with GitHub's Web interface), the hosting platform will build the new version of your site.

::: info
There are multiple hosting options listed in [Eleventy's deployment documentation](https://www.11ty.dev/docs/deployment/).
:::

# Pack11ty template on GitHub

If you prefer to start without Netlify or Vercel hosting, you can [generate a new repository with the same directory structure and files](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) as the existing [Pack11ty]{.pack11ty} repository:

[Use this GitHub template](https://github.com/nhoizey/pack11ty/generate){.button}{.github}

# Local installation on a computer

You might need to configure a local development environment on your computer to be able to dive into [Pack11ty]{.pack11ty} code and make it your own.

1. (optional) If you don't have Node.js and `npm` yet, [install Node.js](https://nodejs.org/en/)[^lts]
1. Create your [Pack11ty]{.pack11ty} project and install its dependencies with this single command in your terminal: `npm create pack11ty@latest my-project-name`
1. Go into your new project folder (`cd my-project-name`) and start the project in development mode (`npm start`) or build the site (`npm run build`)

[^lts]: The LTS (Long Term Support) version should be enough.

You're ready to develop your new site and create content.
