/*
 * Copyright (c) 2022, FortunaBMC, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { EOL } from 'node:os';

/**
 * Functional method of splitting a string on `EOL`
 */
export function splitOnEOL(input: string): string[] {
  return input.split(EOL);
}
