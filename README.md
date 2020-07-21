<h1 align="center">financial-transactions-typeorm-upload 💰</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/gsgualbano/financial-transactions-nodejs#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A implementation of the [financial-transactions-nodejs](https://github.com/gsgualbano/financial-transactions-nodejs) with a Database and import of transactions via upload of CSVs files

### 🏠 [Homepage](https://github.com/gsgualbano/financial-transactions-typeorm-upload#readme)

## Install

```sh
yarn
```

## Usage

first run the migrations to create the tables on the database(postgres)
```sh
yarn typeorm migration:run
```

then
```sh
yarn dev:server
```
to start the server

## Run tests

```sh
yarn test
```

## Author

👤 **Gustavo Gualbano**

* Github: [@gsgualbano](https://github.com/gsgualbano)
* LinkedIn: [@gustavo-gualbano](https://www.linkedin.com/in/gustavo-gualbano-378074130/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/gsgualbano/financial-transactions-nodejs/issues).

## Show your support

Give a ⭐️ if this project helped you!
