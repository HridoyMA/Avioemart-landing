# Setup Guide

## Pre-commit Hooks Setup

This project uses **Husky** and **lint-staged** to automatically check code quality before commits.

### What happens on commit:

1. **Format code** - Automatically formats staged files with Prettier
2. **Lint check** - Runs ESLint and fixes auto-fixable issues
3. **Type check** - Validates TypeScript types
4. **Build check** - Ensures the project builds successfully

If any check fails, the commit will be **blocked** until you fix the errors.

### Initial Setup

After cloning the repository, run:

```bash
yarn install
```

The `prepare` script will automatically set up Husky hooks.

### Manual Setup (if needed)

If hooks aren't working, manually initialize Husky:

```bash
yarn prepare
```

### Bypassing Hooks (Not Recommended)

If you need to bypass hooks in an emergency (not recommended):

```bash
git commit --no-verify -m "your message"
```

**Warning:** Only use `--no-verify` in emergencies. It bypasses all quality checks.

### Troubleshooting

**Hooks not running?**
- Make sure you ran `yarn install` or `yarn prepare`
- Check that `.husky/pre-commit` file exists and is executable
- Verify Git is initialized: `git init`

**Build check too slow?**
- The build check ensures your code compiles
- If it's too slow, you can modify `.husky/pre-commit` to skip it (not recommended)

**Formatting conflicts?**
- Run `yarn format` to format all files
- Run `yarn lint:fix` to fix linting issues
- Commit the formatted files

