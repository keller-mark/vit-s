import { Component } from './constants';
import { getPluginViewType, getPluginViewTypes } from './plugins';

import DescriptionSubscriber from '../components/description/DescriptionSubscriber';
import StatusSubscriber from '../components/status/StatusSubscriber';

const registry = {
  [Component.DESCRIPTION]: DescriptionSubscriber,
  [Component.STATUS]: StatusSubscriber,
};

export function getComponent(name) {
  let component = registry[name];
  if (component === undefined) {
    component = getPluginViewType(name);
    if (component === undefined) {
      throw new Error(`Could not find definition for "${name}" in the core registry nor the plugin registry.`);
    }
  }
  return component;
}

export function getViewTypes() {
  return [
    ...Object.keys(registry),
    ...getPluginViewTypes(),
  ];
}
