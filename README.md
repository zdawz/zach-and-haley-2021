# zach-and-haley-2021

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Environment setup

### First time configuration

```bash
cp .env.example .env.local
```

### Variables

| Name                                   | Description                                                     |
| -------------------------------------- | --------------------------------------------------------------- |
| `VUE_APP_GOOGLE_SPREADSHEET_ID`        | The ID of the Google spreadsheet used for data                  |
| `VUE_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL` | The service account email address for Google API authentication |
| `VUE_APP_GOOGLE_PRIVATE_KEY`           | The private key for the service account                         |
