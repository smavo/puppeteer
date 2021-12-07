/**
 * Copyright 2021 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This script is needed because of https://github.com/microsoft/rushstack/issues/1709
const { promises: fs } = require('fs');
const { join } = require('path');

async function injctGlobalTypeStubs() {
  const typesPath = join(__dirname, 'lib', 'types.d.ts');
  const globalsPath = join(__dirname, 'lib', 'cjs', 'puppeteer', 'global.d.ts');
  const types = await fs.readFile(typesPath, 'utf-8');
  const globals = await fs.readFile(globalsPath, 'utf-8');
  await fs.writeFile(typesPath, `${types}\n${globals}`);
}

injctGlobalTypeStubs();
