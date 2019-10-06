# gae-node-starter

Minimal boilerplate for a Node.js app running on AppEngine.


## Local development

First, install dependencies:

``` sh
yarn
```

Then run the development server:

``` sh
yarn run dev
```

## Deployment

After deploying, Google App Engine executes `npm run start`, so you need to be sure the `start` script in
[package.json](package.json) does what you want:

``` sh
npm run start
```

`yarn run start` should also work fine.

Then to deploy you'll need the `gcloud` command-line utility. Go to cloud.google.com/sdk/install to install it.

Next, you'll need a Project ID. If you don't already have a project, create one via the [GCP Console][gcp-console].

Then go into the [package.json](package.json) file and replace `<project-id>` with your project ID from the GCP Console
in the deploy scripts:

``` js
{
  // ...
  "scripts": {
    "deploy": "gcloud app deploy app.yaml --no-promote --project=<project-id>",
    "deploy:quiet": "gcloud app deploy app.yaml --quiet --no-promote --project=<project-id>"
  },
  // ...
}
```

Then run the `deploy` script:

``` sh
yarn run deploy
```

Or, to deploy without asking questions, run the quiet version: 

``` sh
yarn run deploy:quiet
```

[gcloud-install]: https://cloud.google.com/sdk/install
[gcp-console]: https://console.cloud.google.com
