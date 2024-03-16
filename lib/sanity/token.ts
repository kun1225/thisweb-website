import 'server-only'

import { taintUniqueValue } from "next/dist/server/app-render/rsc/taint";


export const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN

if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}

taintUniqueValue(
  'Do not pass the sanity API read token to the client.',
  process,
  token,
)