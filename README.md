# typescript-playground

## Table of Contents

## Getting Start

> **IMPORTANT**
> Where is the entry points
>
> ```txt
> ./src/index.ts
> ```

> **NOTE**
> How to build
>
> ```shell
> npm run build
> ```

> **NOTE**
> How to watch change and output automatically
>
> ```shell
> npm run watch
> ```

## build process

```mermaid

---
title: Build Process
---
flowchart TB
    source-code["source code entry [ ./src/index.ts ]"] ----> webpack
    subgraph webpack
        ts-loader["ts-loader"] --> babel-loader["babel-loader"]
    end
    babel-loader --> output["output [ .dist/main.js ]"]

```
