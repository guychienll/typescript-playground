# typescript-playground

## Table of Contents

-   [typescript-playground](#typescript-playground)
    -   [Table of Contents](#table-of-contents)
    -   [Getting Start](#getting-start)
    -   [Build Process](#build-process)

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

## Build Process

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
