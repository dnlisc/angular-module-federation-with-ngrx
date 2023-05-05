# Angular microfrontends with Module Federation and shared state with NgRx

This project is an example of Angular micro frontends with module federation. It contains a host application (`projects/shell`) and a micro frontend (`projects/mfe1`). It has a root state set in the shell and a feature state set in the micro frontend.


## Instalation and usage

- Run `npm install` in the root folder
- Start micro frontend: `ng serve mfe1`
- Start shell: `ng serve shell`
- Navigate to `http://localhost:4200` to load the host
- Navigate to `http://localhost:4200/mfe1` to load the micro frontend application
- Use the `Toggle shell feature` and `Toggle mfe feature` to update the root state and the feature state booleans

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.
