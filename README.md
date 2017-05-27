# Parity WebRTC dapp.

## Installation

```sh
npm install
```

## Usage

```sh
npm run build # build app for production
npm start # run dev environment
```

Files will be build into `dist/`. Just symlink that dir into your dapps path.



To play with contracts use `truffle`.

`npm install -g truffle`
`npm install -g testrpc`

Use `testrpc` to test locally. Otherwise parity will pick up `truffle migrate`
