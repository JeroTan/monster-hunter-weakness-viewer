import type { SSRManifest } from "astro";
import { handle } from '@astrojs/cloudflare/handler';
import { ExampleDurableObject } from "./durable-objects/ExampleDurableObject";

export function createExports(manifest: SSRManifest) {
    return {
        default: {
            async fetch(request, env, ctx) {
                return handle(request, env, ctx);
            },
            async queue(batch, _env) {
                let messages = JSON.stringify(batch.messages);
                console.log(`consumed from our queue: ${messages}`);
            },
            async scheduled(event, env, ctx){
                // Do some time logic heere
            },
        } satisfies ExportedHandler<Env>,
        ExampleDurableObject:ExampleDurableObject
    };
}