import { Elysia } from 'elysia';
import { CloudflareAdapter } from 'elysia/adapter/cloudflare-worker';
import { openapi } from '@elysiajs/openapi';
import getCorsConfig from '@/api/config/cors';
import { ApiContainer } from '@/container/apiContainer';
import type { APIRoute } from 'astro';

const handle: APIRoute = (async (ctx) => {
    const app = new Elysia({ 
        prefix: '/api',
        adapter: CloudflareAdapter,
        aot: false,
        normalize: true, 
    })
    .use(openapi())
    .use(getCorsConfig());

    app.decorate({
        env: ctx.locals.runtime?.env,
        urlData: ctx.url,
        astroCookies: ctx.cookies,
    });
    
    ApiContainer(app as unknown as Elysia);
    return await app.handle(ctx.request);
});

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const DELETE = handle;
export const PATCH = handle;
export const HEAD = handle;
export const OPTIONS = handle;
export const TRACE = handle;
export const CONNECT = handle;
export const LINK = handle;
export const UNLINK = handle;