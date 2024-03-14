// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  // this is the KV binding you defined in the wrangler.toml file
  const myKv = getRequestContext().env.MY_KV
  console.log(getRequestContext().env)
  // get a value from the namespace
  const kvValue = await myKv.get(`kvTest`) || false

  return new Response(`The value of kvTest in MY_KV is: ${kvValue}`)
}

