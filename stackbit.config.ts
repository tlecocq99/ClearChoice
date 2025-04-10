import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "nextjs",
    "contentSources": [],
    "postInstallCommand": "npm i --no-save @stackbit/types"
})
// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    // ...
  ],
  modelExtensions: [{ name: "page", type: "page", urlPath: "/{slug}" }]
});
