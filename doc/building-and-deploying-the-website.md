## Building and Deploying (Automated)

GitHub Actions builds and deploys the website using Ruby 3.4.x and Node.js 24.x.

The [staging workflow](../.github/workflows/deploy-stage.yml) runs automatically on pushes to `master` and can also be started manually. The [production workflow](../.github/workflows/deploy-prod.yml) is started manually. Both check out `master`.

Each deployment workflow installs Ruby dependencies with Bundler, runs `npm install-ci-test` to install the locked Node.js dependencies and run the checks, then runs `npm run build:prod`.

The generated `build-prod` directory is committed to `asf-staging` for staging or `asf-site` for production. The existing `archive` directory is preserved during deployment.

The [PR workflow](../.github/workflows/ci.yml) runs the checks and a development build for pull requests.
