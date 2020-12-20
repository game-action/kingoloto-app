# GameAction/kingoloto-app

This repository created to play on kingoloto website and play grids

## 💻 Usage

### TypeScript

```typescript
import { KingolotoApp } from "@game-action/kingoloto-app";

// to connect
const king = await KingolotoApp.init("email", "password");

// fetch summary information
const summary = await king.summary();
console.log(summary); // Summary { euros: 1.01, usedeuros: 0, points: 7800, usedpoints: 1950 }

// play grid, max of 10 per day
const grid = await king.playGrid();
console.log(grid); // true or false
```

## 📄 License

- Code: [MIT](./LICENSE) © [Rémy BRUYERE](https://remy.ovh)

<p align="center">
  <sub>An open source project by <a href="https://remy.ovh">rem42</a></sub>
</p>
