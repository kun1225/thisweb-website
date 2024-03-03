import * as queryStore from "@sanity/react-loader";

import { client } from "./client";

export const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN

export const { loadQuery, setServerClient } = queryStore.createQueryStore({ client: false, ssr: true }); 
setServerClient(client.withConfig({ token }));
