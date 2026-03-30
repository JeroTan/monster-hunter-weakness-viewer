import type { Elysia } from 'elysia';

export function SampleRoutes({ app }: { app: Elysia }) {
    app.get('/sample', () => {
        return { message: "Hello from Elysia API!" };
    });
}