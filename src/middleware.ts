import { defineMiddleware } from "astro:middleware";


export const onRequest = defineMiddleware(async (context, next) => {

    if(context.cookies.has("user") && context.url.pathname === "/login") {
        return new Response(null, {
            status: 307,
            headers: {
                Location: '/'
            }
        });
    }
    
    if (context.url.pathname === "/login") return next();


    if (!context.cookies.has("user")) {
        return new Response(null, {
            status: 307,
            headers: {
                Location: '/login'
            }
        });
    }




    return next();
});
