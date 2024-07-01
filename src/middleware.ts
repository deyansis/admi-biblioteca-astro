import { defineMiddleware } from "astro:middleware";


export const onRequest = defineMiddleware(async (context, next) => {
    
    if (context.url.pathname === "/login") return next();

    if (!context.cookies.has("user")) {
        return new Response(null, {
            status: 302,
            headers: {
                Location: '/login'
            }
        });
    }

    return next();
});
