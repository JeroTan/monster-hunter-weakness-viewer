import { DurableObject } from "cloudflare:workers";

export class ExampleDurableObject extends DurableObject<Env> {

    constructor(state: DurableObjectState, env: Cloudflare.Env) {
        super(state, env);  
    }
    async fetch(request: Request): Promise<Response> {
        // Return websocket or response here
        return new Response("Hello from Durable Object");
    }
}