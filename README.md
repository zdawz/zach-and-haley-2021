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

| Name                            | Description                                         |
| ------------------------------- | --------------------------------------------------- |
| `VUE_APP_GOOGLE_SPREADSHEET_ID` | The ID of the Google spreadsheet used for data      |
| `VUE_APP_GOOGLE_API_KEY`        | The key to gain access to the Google Sheets API     |
| `VUE_APP_EMAILJS_USER_ID`       | The ID of the EmailJS user                          |
| `VUE_APP_EMAILJS_SERVICE_ID`    | The ID of the EmailJS service to use to send email  |
| `VUE_APP_EMAILJS_TEMPLATE_ID`   | The ID of the EmailJS template to use for the email |
