# zach-and-haley-2021

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
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
| `VUE_APP_EMAILJS_USER_ID`              | The ID of the EmailJS user                                      |
| `VUE_APP_EMAILJS_SERVICE_ID`           | The ID of the EmailJS service to use to send email              |
| `VUE_APP_EMAILJS_TEMPLATE_ID`          | The ID of the EmailJS template to use for the email             |
