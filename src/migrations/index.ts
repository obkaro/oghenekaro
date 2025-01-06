import * as migration_20250106_090534 from './20250106_090534';

export const migrations = [
  {
    up: migration_20250106_090534.up,
    down: migration_20250106_090534.down,
    name: '20250106_090534'
  },
];
