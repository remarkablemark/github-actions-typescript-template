# github-actions-typescript-template

[![version](https://badgen.net/github/release/remarkablemark/github-actions-typescript-template)](https://github.com/remarkablemark/github-actions-typescript-template/releases)
[![build](https://github.com/remarkablemark/github-actions-typescript-template/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/github-actions-typescript-template/actions/workflows/build.yml)

:gear: GitHub Actions TypeScript Template. Inspired by [actions/typescript-action](https://github.com/actions/typescript-action).

## Quick Start

```yaml
- name: GitHub Actions TypeScript Template
  uses: remarkablemark/github-actions-typescript-template@v1
```

## Usage

See [action.yml](action.yml)

**Basic:**

```yaml
steps:
  - uses: remarkablemark/github-actions-typescript-template@v1
```

## Inputs

### `version`

**Optional**: The version. Defaults to `1.2.3`:

```yaml
- uses: remarkablemark/github-actions-typescript-template@v1
  with:
    version: 1.2.3
```

## Contributions

Contributions are welcome!

## License

[MIT](LICENSE)
