# CodeQL Postgres SQL Injection

- [Research Paper](PAPER.md)

## Setup

Pull in CodeQL JavaScript container

```sh
docker pull ghcr.io/nealfennimore/codeql:javascript
```

Setup the database container

```sh
. scripts/build.sh
. scripts/run.sh
```

## Analyze
```sh
. scripts/codeql-create-db.sh
. scripts/codeql-analyze.sh
```