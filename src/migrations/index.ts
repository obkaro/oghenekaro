import * as migration_20250106_090534 from './20250106_090534';
import * as migration_20250108_004212 from './20250108_004212';

export const migrations = [
  {
    up: migration_20250106_090534.up,
    down: migration_20250106_090534.down,
    name: '20250106_090534',
  },
  {
    up: migration_20250108_004212.up,
    down: migration_20250108_004212.down,
    name: '20250108_004212'
  },
];
