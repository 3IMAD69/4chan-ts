# 4chan-ts

A modern and typed 4chan API wrapper written in TypeScript.

This package provides simple access to [4chan's public JSON API](https://github.com/4chan/4chan-API), supporting boards, threads, and posts with full type safety.

## ✨ Features

- 🌀 Supports all public endpoints of the 4chan API
- ⚡ Built in TypeScript for type safety and modern dev experience
- 🧪 Lightweight
- 🚀 Bun-first, Node/npm-compatible

---

## 📦 Installation

### Using [Bun](https://bun.sh)

```bash
bun add 4chan-ts
```
### Using [NPM]
```bash
npm install 4chan-ts
```

### Quick Start

```
import { FourChanClient } from "4chan-ts";


(async ()=>{
  const chan = new FourChanClient();

  const {data , error} = await chan.getBoards();
  if (error)
  {
    console.error(error);
    return ;
  }
  console.log(data); // const data: BoardList
})()
```