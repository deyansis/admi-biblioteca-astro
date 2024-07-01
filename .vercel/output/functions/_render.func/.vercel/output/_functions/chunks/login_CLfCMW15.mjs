/* empty css                         */
import { k as createComponent, l as renderTemplate, p as renderComponent, m as maybeRenderHead } from './astro/server_BEIqKSph.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_DWdQombZ.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio de Sesion Admin Biblioteca UCV" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style="background-image:url('/campus.webp')"> <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8"> <div class="text-white"> <div class="mb-8 flex flex-col items-center"> <img src="/Mocv.gif" alt="gif-ucv" class="w-24 mb-4"> <h1 class="mb-2 text-4xl">Bienvenido</h1> <span class="text-gray-300 text-xl">Inicia sesion con tu cuenta</span> </div> </div> <div x-data="loginData"> <form> <div class="mb-4 text-lg"> <input class="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200/20 shadow-lg outline-none backdrop-blur-md" type="text" name="email" placeholder="id@email.com" x-model="email"> </div> <div class="mb-4 text-lg"> <input class="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200/20 shadow-lg outline-none backdrop-blur-md" type="password" name="password" placeholder="*********" x-model="password"> </div> <div class="mt-8 flex justify-center text-lg text-black"> <button @click="send" class="rounded-3xl bg-white bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-[#ff396c]">Iniciar Sesion</button> </div> </form> </div> </div> </div> ` })} `;
}, "C:/Users/SOPORTE/OneDrive/Desktop/proyecto/biblioteca-digital/admin-biblioteca/src/pages/login.astro", void 0);

const $$file = "C:/Users/SOPORTE/OneDrive/Desktop/proyecto/biblioteca-digital/admin-biblioteca/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
