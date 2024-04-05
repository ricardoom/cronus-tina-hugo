import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/4496e30c-f25c-415f-adab-f1ae7b59e18e/github/main', token: '9bf7aa787c519b117c4f7c4cf94f4d957d39a6b2', queries,  });
export default client;
  