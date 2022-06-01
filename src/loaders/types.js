import {
  getLoaderClassesForPluginFileType,
} from '../app/plugins';

import JsonLoader from './JsonLoader';
import { JsonSource } from './data-sources';

export const fileTypeToLoaderAndSource = {};

export function getSourceAndLoaderFromFileType(type) {
  if (fileTypeToLoaderAndSource[type]) {
    return fileTypeToLoaderAndSource[type];
  }
  const pluginFileType = getLoaderClassesForPluginFileType(type);
  if (pluginFileType) {
    return pluginFileType;
  }
  // Fallback to JSON.
  return [JsonSource, JsonLoader];
}
