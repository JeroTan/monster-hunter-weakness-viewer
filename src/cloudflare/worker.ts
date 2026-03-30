import { handle } from '@astrojs/cloudflare/handler';
export * from "./durable-objects/ExampleDurableObject";

export default {
  async fetch(request, env, ctx) {
    return handle(request, env, ctx);
  },
  async queue(batch, _env) {
    let messages = JSON.stringify(batch.messages);
    console.log(`consumed from our queue: ${messages}`);
  },
} satisfies ExportedHandler<Env>;