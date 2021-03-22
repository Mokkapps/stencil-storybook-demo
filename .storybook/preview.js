import {defineCustomElements} from '../dist/esm/loader';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
