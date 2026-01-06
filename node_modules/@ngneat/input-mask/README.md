<h1 align="center">
  @ngneat/input-mask
</h1>

<p align="center">
  <img width="20%" height="20%" src="./logo.svg">
</p>

<br />

[![npm (scoped)](https://img.shields.io/npm/v/@ngneat/input-mask?style=flat-square)](https://www.npmjs.com/package/@ngneat/input-mask)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](https://github.com/ngneat/input-mask/blob/main/LICENSE)
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/ngneat/input-mask/pulls)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
[![ngneat-lib](https://img.shields.io/badge/made%20with-%40ngneat%2Flib-ad1fe3?logo=angular)](https://github.com/ngneat/lib)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)]()
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

> @ngneat/input-mask is an angular library that creates an input mask. Behind the scene, it uses [inputmask](https://github.com/RobinHerbots/Inputmask).

## Compatibility with Angular Versions

| @ngneat/input-mask | Angular        |
| ------------------ | -------------- |
| 4.x.x              | >= 11.2.7 < 13 |
| 5.x.x              | 13             |
| 6.x.x              | 14             |

## Features

- 🔡 **Support for form validation**
- 🎭 **Wrapper function to easily create input-masks**
- 🔁 **Helps you to convert final values to desired format**
- ☝️ **Single directive to handle everything**
- 🛠 **All the configurations of [inputmask](https://github.com/RobinHerbots/Inputmask) provided**

## Installation

### Angular

You can install it through **Angular CLI**, which is recommended:

```bash
ng add @ngneat/input-mask
```

or with **npm**

```bash
npm install @ngneat/input-mask inputmask@5
npm install -D @types/inputmask@5
```

When you install using **npm** or **yarn**, you will also need to import `InputMaskModule` in your `app.module`:

```typescript
import { InputMaskModule } from '@ngneat/input-mask';

@NgModule({
  imports: [InputMaskModule],
})
class AppModule {}
```

## Config

There few configuration options available with `InputMaskModule`:

```typescript
import { InputMaskModule } from '@ngneat/input-mask';

@NgModule({
  imports: [InputMaskModule.forRoot({ inputSelector: 'input', isAsync: true })],
})
class AppModule {}
```

| Option          | Type      | Description                                                                                                                                                                                   | Default Value |
| --------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `inputSelector` | `string`  | CSS selector, which will be used with `querySelector` to get the native input from host element. This is useful when you want to apply input-mask to child `<input>` of your custom-component | `input`       |
| `isAsync`       | `boolean` | If set `true`, `MutationObserver` will be used to look for changes until it finds input with `inputSelector`                                                                                  | `false`       |

## Usage examples

### 1. Date

![](./date.gif)

```typescript
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-root',
  template: `
    <input
      [inputMask]="dateInputMask"
      [formControl]="dateFC"
      placeholder="dd/mm/yyyy"
    />
  `,
})
export class AppComponent {
  dateInputMask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'dd/mm/yyyy',
    parser: (value: string) => {
      const values = value.split('/');
      const year = +values[2];
      const month = +values[1] - 1;
      const date = +values[0];
      return new Date(year, month, date);
    },
  });

  dateFC = new FormControl('');
}
```

### 2. IP Address

![](./ip.gif)

```typescript
@Component({
  template: `
    <input
      [inputMask]="ipAddressMask"
      [formControl]="ipFC"
      placeholder="_._._._"
    />
  `,
})
export class AppComponent {
  ipAddressMask = createMask({ alias: 'ip' });
  ipFC = new FormControl('');
}
```

### 3. Currency

![](./currency.gif)

```typescript
@Component({
  template: `
    <input
      [inputMask]="currencyInputMask"
      [formControl]="currencyFC"
      placeholder="$ 0.00"
    />
  `,
})
export class AppComponent {
  currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: ',',
    digits: 2,
    digitsOptional: false,
    prefix: '$ ',
    placeholder: '0',
  });
  currencyFC = new FormControl('');
}
```

### 4. License Plate

![](./license.gif)

```typescript
@Component({
  template: `
    <input
      [inputMask]="licenseInputMask"
      [formControl]="licenseFC"
      placeholder="___-___"
    />
  `,
})
export class AppComponent {
  licenseInputMask = createMask('[9-]AAA-999');
  licenseFC = new FormControl('');
}
```

### 5. Email

![](./email.gif)

```typescript
@Component({
  template: `
    <input
      [inputMask]="emailInputMask"
      [formControl]="emailFC"
      placeholder="_@_._"
    />
  `,
})
export class AppComponent {
  emailInputMask = createMask({ alias: 'email' });
  emailFC = new FormControl('');
}
```

### 6. Custom Component

If you have some component and you want to apply input-mask to the inner `<input>` element of that component, you can do that.

For example, let's assume you have a `CustomInputComponent`:

```typescript
@Component({
  selector: 'app-custom-input',
  template: `
    <input
      [formControl]="formControl"
      [inputMask]="inputMask"
      [placeholder]="placeholder"
    />
  `,
})
export class CustomInputComponent {
  @Input() formControl!: FormControl;
  @Input() inputMask!: InputmaskOptions<any>;
  @Input() placeholder: string | undefined;
}
```

And your `AppComponent` looks like this:

```typescript
@Component({
  selector: 'app-root',
  template: `
    <app-custom-input
      [formControl]="dateFCCustom"
      [inputMask]="dateInputMaskCustom"
      placeholder="Date"
    ></app-custom-input>
  `,
})
export class AppComponent {
  dateInputMaskCustom = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'dd/mm/yyyy',
    parser: (value: string) => {
      const values = value.split('/');
      const year = +values[2];
      const month = +values[1] - 1;
      const date = +values[0];
      return new Date(year, month, date);
    },
  });
  dateFCCustom = new FormControl('');
}
```

So to apply input-mask on `CustomInputComponent`, use configuration with `InputMaskModule` like below:

```typescript
import { InputMaskModule } from '@ngneat/input-mask';

@NgModule({
  imports: [
    InputMaskModule.forRoot({
      isAsync: false, // set to true if native input is lazy loaded
      inputSelector: 'input',
    }),
  ],
})
class AppModule {}
```

### More examples

All examples are available on [stackblitz](https://stackblitz.com/edit/angular-ivy-6greu1?file=src/app/app.component.ts).

You can create any type of input-mask which is supported by [InputMask plugin](https://github.com/RobinHerbots/inputmask).

## Validation

When `[inputMask]` is used with `[formControl]`, it adds validation out-of-the box. The validation works based on [`isValid`](https://github.com/RobinHerbots/Inputmask#isvalid) function.

If the validation fails, the form-control will have below error:

```json
{ "inputMask": true }
```

## `createMask` wrapper function

This library uses [inputmask](https://github.com/RobinHerbots/Inputmask) plugin to handle mask related tasks. So, you can use all the [options](https://github.com/RobinHerbots/Inputmask#options) available there.

The recommended way to create an inputmask is to use the `createMask` function provided with this library.

### `parser` function

Apart from inputmask options, we have added one more option called `parser`. This basically helps you to keep the value of form-control in pre-defined format, without updating UI.

For example, you want your users to enter date in `input[type=text]` with `dd/mm/yyyy` format and you want to store a `Date` value in the form-control:

```typescript
@Component({
  template: `
    <input
      [inputMask]="dateInputMask"
      [formControl]="dateFC"
      placeholder="dd/mm/yyyy"
    />
  `,
})
export class AppComponent {
  dateInputMask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'dd/mm/yyyy',
    parser: (value: string) => {
      const values = value.split('/');
      const year = +values[2];
      const month = +values[1] - 1;
      const date = +values[0];
      return new Date(year, month, date);
    },
  });

  dateFC = new FormControl('');
}
```

In above example, whenver you try to access `dateFC.value`, it won't be the string which user entered, but rather a `Date` created based on the `parser` function.

### `formatter` function

Apart from the parser function, we have added one more option called `formatter`. This helps you if you want to change the format of a date you receive from the Database.

For example, you receive a date from your database in the format 'yyyy-MM-dd' but you want to display it 'dd/MM/yyyy'.

```typescript
@Component({
  template: `
    <input
      [inputMask]="dateInputMask"
      [formControl]="dateFC"
      placeholder="dd/mm/yyyy"
    />
  `,
})
export class AppComponent {
  dateInputMask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'dd/MM/yyyy',
    formatter: (value: string) => {
      const values = value.split('-');
      const date = +values[2];
      const month = +values[1] - 1;
      const year = +values[0];
      return formatDate(new Date(year, month, date), 'dd/MM/yyyy', 'en-US');
    },
  });

  dateFC = new FormControl('1990-12-28');
}
```


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/shhdharmen"><img src="https://avatars.githubusercontent.com/u/6831283?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dharmen Shah</b></sub></a><br /><a href="https://github.com/ngneat/input-mask/commits?author=shhdharmen" title="Code">💻</a> <a href="#content-shhdharmen" title="Content">🖋</a> <a href="https://github.com/ngneat/input-mask/commits?author=shhdharmen" title="Documentation">📖</a> <a href="#example-shhdharmen" title="Examples">💡</a> <a href="#maintenance-shhdharmen" title="Maintenance">🚧</a> <a href="#platform-shhdharmen" title="Packaging/porting to new platform">📦</a></td>
    <td align="center"><a href="https://www.netbasal.com/"><img src="https://avatars.githubusercontent.com/u/6745730?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Netanel Basal</b></sub></a><br /><a href="https://github.com/ngneat/input-mask/issues?q=author%3ANetanelBasal" title="Bug reports">🐛</a> <a href="#business-NetanelBasal" title="Business development">💼</a> <a href="#ideas-NetanelBasal" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-NetanelBasal" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-NetanelBasal" title="Project Management">📆</a> <a href="https://github.com/ngneat/input-mask/pulls?q=is%3Apr+reviewed-by%3ANetanelBasal" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/RobinHerbots"><img src="https://avatars.githubusercontent.com/u/318447?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Robin Herbots</b></sub></a><br /><a href="#ideas-RobinHerbots" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/pzontrop"><img src="https://avatars.githubusercontent.com/u/7068447?v=4?s=100" width="100px;" alt=""/><br /><sub><b>P. Zontrop</b></sub></a><br /><a href="#platform-pzontrop" title="Packaging/porting to new platform">📦</a></td>
    <td align="center"><a href="https://medium.com/@overthesanity"><img src="https://avatars.githubusercontent.com/u/7337691?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Artur Androsovych</b></sub></a><br /><a href="#maintenance-arturovt" title="Maintenance">🚧</a> <a href="https://github.com/ngneat/input-mask/commits?author=arturovt" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/bogusweb"><img src="https://avatars.githubusercontent.com/u/5169399?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pawel Boguslawski</b></sub></a><br /><a href="#maintenance-bogusweb" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!!
