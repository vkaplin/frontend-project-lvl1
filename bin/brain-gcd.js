#!/usr/bin/env node
import { games } from '../src/games-type.js';
import startGame from '../src/index.js';

startGame(games.gcd);
