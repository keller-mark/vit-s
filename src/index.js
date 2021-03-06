import {
  Vitessce as Vit,
  encodeConfInUrl,
  decodeURLParamsToConf,
  registerPluginViewType,
  registerPluginCoordinationType,
  registerPluginFileType,
} from './app';
import {
  VitessceConfig as VitConfig,
  hconcat,
  vconcat,
} from './api';
import {
  Component,
  DataType,
  FileType,
  CoordinationType,
} from './app/constants-merged';
// For plugin view types:
import TitleInfo from './components/TitleInfo';
import { useReady, useUrls } from './components/hooks';
import {
  useDescription,
} from './components/data-hooks';
import {
  useCoordination,
  useComplexCoordination,
  useMultiDatasetCoordination,
  useDatasetUids,
  useLoaders,
  useMatchingLoader,
  useViewConfigStore,
  useViewConfigStoreApi,
  useComponentHover,
  useSetComponentHover,
  useComponentViewInfo,
  useSetComponentViewInfo,
  useWarning,
  useSetWarning,
} from './app/state/hooks';
// For plugin file type:
import {
  JsonLoader,
  LoaderResult,
  AbstractTwoStepLoader,
} from './loaders';
import {
  JsonSource,
} from './loaders/data-sources';


export {
  Vit,
  encodeConfInUrl,
  decodeURLParamsToConf,
  VitConfig,
  hconcat,
  vconcat,
  Component,
  DataType,
  FileType,
  CoordinationType,
  // Plugin registration functions
  registerPluginCoordinationType,
  registerPluginViewType,
  registerPluginFileType,
  // Exports for plugins
  // (not guaranteed to be compatible across different Vitessce versions)
  TitleInfo,
  useReady,
  useUrls,
  useCoordination,
  useComplexCoordination,
  useMultiDatasetCoordination,
  useDatasetUids,
  useLoaders,
  useMatchingLoader,
  useViewConfigStore,
  useViewConfigStoreApi,
  useComponentHover,
  useSetComponentHover,
  useComponentViewInfo,
  useSetComponentViewInfo,
  useWarning,
  useSetWarning,
  useDescription,
  JsonLoader,
  LoaderResult,
  AbstractTwoStepLoader,
  JsonSource,
};
