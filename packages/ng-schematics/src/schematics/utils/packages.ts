/**
 * Copyright 2022 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {SchematicsException, Tree} from '@angular-devkit/schematics';
import {get} from 'https';
import {SchematicsOptions, TestingFramework} from './types.js';
import {getJsonFileAsObject, getObjectAsJson} from './json.js';
export interface NodePackage {
  name: string;
  version: string;
}
export interface NodeScripts {
  name: string;
  script: string;
}

export enum DependencyType {
  Default = 'dependencies',
  Dev = 'devDependencies',
  Peer = 'peerDependencies',
  Optional = 'optionalDependencies',
}

export function getPackageLatestNpmVersion(name: string): Promise<NodePackage> {
  return new Promise(resolve => {
    let version = 'latest';

    return get(`https://registry.npmjs.org/${name}`, res => {
      let data = '';

      res.on('data', (chunk: any) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          version = response?.['dist-tags']?.latest ?? version;
        } catch {
        } finally {
          resolve({
            name,
            version,
          });
        }
      });
    }).on('error', () => {
      resolve({
        name,
        version,
      });
    });
  });
}

function updateJsonValues(
  json: Record<string, any>,
  target: string,
  updates: Array<{name: string; value: string}>,
  overwrite = false
) {
  updates.forEach(({name, value}) => {
    if (!json[target][name] || overwrite) {
      json[target] = {
        ...json[target],
        [name]: value,
      };
    }
  });
}

export function addPackageJsonDependencies(
  tree: Tree,
  packages: NodePackage[],
  type: DependencyType,
  overwrite?: boolean,
  fileLocation = './package.json'
): Tree {
  const packageJson = getJsonFileAsObject(tree, fileLocation);

  updateJsonValues(
    packageJson,
    type,
    packages.map(({name, version}) => {
      return {name, value: version};
    }),
    overwrite
  );

  tree.overwrite(fileLocation, getObjectAsJson(packageJson));

  return tree;
}

export function getDependenciesFromOptions(
  options: SchematicsOptions
): string[] {
  const dependencies = ['puppeteer'];
  switch (options.testingFramework) {
    case TestingFramework.Jasmine:
      dependencies.push(
        'jasmine',
        '@babel/core',
        '@babel/register',
        '@babel/preset-env',
        '@babel/preset-typescript'
      );
      break;
    default:
      throw new SchematicsException(`Testing framework not supported.`);
  }

  return dependencies;
}

export function addPackageJsonScripts(
  tree: Tree,
  scripts: NodeScripts[],
  overwrite?: boolean,
  fileLocation = './package.json'
): Tree {
  const packageJson = getJsonFileAsObject(tree, fileLocation);

  updateJsonValues(
    packageJson,
    'scripts',
    scripts.map(({name, script}) => {
      return {name, value: script};
    }),
    overwrite
  );

  tree.overwrite(fileLocation, getObjectAsJson(packageJson));

  return tree;
}
