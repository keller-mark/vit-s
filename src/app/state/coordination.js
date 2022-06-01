import { CoordinationType, Component } from '../constants';

/**
 * Coordination types may have default values,
 * which can be defined here, and used by the
 * auto initialization strategy.
 */
export const DEFAULT_COORDINATION_VALUES = {
  [CoordinationType.OBS_TYPE]: 'cell',
  [CoordinationType.FEATURE_TYPE]: 'gene',
  [CoordinationType.FEATURE_VALUE_TYPE]: 'expression',
};

// The following coordination types should be
// initialized to independent scopes when
// initialized automatically.
// These make the resulting view config
// (after auto-initialization) behave
// like "legacy" Vitessce (pre-coordination model).
export const AUTO_INDEPENDENT_COORDINATION_TYPES = [];

/**
   * Mapping from component type to
   * supported coordination object types.
   * This mapping can be used to determine
   * which pieces of state that a component will
   * need to get/set.
   * Keys here are the component registry keys.
   */
export const COMPONENT_COORDINATION_TYPES = {
  [Component.STATUS]: [
    CoordinationType.DATASET,
  ],
  [Component.DESCRIPTION]: [
    CoordinationType.DATASET,
  ],
};
