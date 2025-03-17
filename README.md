# github-actions-typescript-template

[![version](https://badgen.net/github/release/remarkablemark/github-actions-typescript-template)](https://github.com/remarkablemark/github-actions-typescript-template/releases)
[![build](https://github.com/remarkablemark/github-actions-typescript-template/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/github-actions-typescript-template/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/remarkablemark/github-actions-typescript-template/graph/badge.svg?token=G7QM7T166I)](https://codecov.io/gh/remarkablemark/github-actions-typescript-template)

⚙️ GitHub Actions TypeScript Template. Inspired by [actions/typescript-action](https://github.com/actions/typescript-action).

## Quick Start

```yaml
- name: GitHub Actions TypeScript Template
  uses: remarkablemark/github-actions-typescript-template@v1
```

## Usage

**Basic:**

```yaml
- uses: remarkablemark/github-actions-typescript-template@v1
```

See [action.yml](action.yml)

## Inputs

### `version`

**Optional**: The version. Defaults to `1.2.3`:

```yaml
- uses: remarkablemark/github-actions-typescript-template@v1
  with:
    version: 1.2.3
```

## License

[MIT](LICENSE)
