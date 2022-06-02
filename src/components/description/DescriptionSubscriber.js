import React, { useEffect, useMemo } from 'react';
import { useReady } from '../hooks';
import { useDescription, useRasterData } from '../data-hooks';
import { useCoordination, useLoaders } from '../../app/state/hooks';
import { COMPONENT_COORDINATION_TYPES } from '../../app/state/coordination';
import TitleInfo from '../TitleInfo';
import Description from './Description';

const DESCRIPTION_DATA_TYPES = [];

/**
 * A subscriber component for a text description component.
 * Also renders a table containing image metadata.
 * @param {object} props
 * @param {string} props.theme The current theme name.
 * @param {object} props.coordinationScopes The mapping from coordination types to coordination
 * scopes.
 * @param {function} props.removeGridComponent The callback function to pass to TitleInfo,
 * to call when the component has been removed from the grid.
 * @param {string} props.title The component title.
 */
export default function DescriptionSubscriber(props) {
  const {
    coordinationScopes,
    description: descriptionOverride,
    removeGridComponent,
    theme,
    title = 'Description',
  } = props;

  const loaders = useLoaders();

  // Get "props" from the coordination space.
  const [{
    dataset,
  }] = useCoordination(COMPONENT_COORDINATION_TYPES.description, coordinationScopes);

  const [
    isReady,
    setItemIsReady,
    setItemIsNotReady, // eslint-disable-line no-unused-vars
    resetReadyItems,
  ] = useReady(
    DESCRIPTION_DATA_TYPES,
  );

  // Reset loader progress when the dataset has changed.
  useEffect(() => {
    resetReadyItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaders, dataset]);

  // Get data from loaders using the data hooks.
  const [description] = useDescription(loaders, dataset);

  return (
    <TitleInfo
      title={title}
      removeGridComponent={removeGridComponent}
      isScroll
      theme={theme}
      isReady={isReady}
    >
      <Description
        description={descriptionOverride || description}
      />
    </TitleInfo>
  );
}
