import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '9bf7aa787c519b117c4f7c4cf94f4d957d39a6b2', queries,  });
export default client;
  