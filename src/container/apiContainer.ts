import type { Elysia } from 'elysia';
import { SampleRoutes } from '../api/routes/sample';

export function ApiContainer(app: Elysia){
    app.onError(({code, error})=>{
        if(code === 'VALIDATION') return new Response("Validation Error", { status: 400 });
        if(code == undefined && error != null && typeof error === 'object') return new Response("Server Error", { status: 500 });
    });
    
    SampleRoutes({ app });
    
    return app;
}