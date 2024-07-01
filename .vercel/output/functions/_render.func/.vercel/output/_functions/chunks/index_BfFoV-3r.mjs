/* empty css                         */
import { k as createComponent, l as renderTemplate, m as maybeRenderHead, n as addAttribute, p as renderComponent, o as createAstro } from './astro/server_BEIqKSph.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Icon, $ as $$LayoutAdmin } from './LayoutAdmin_Dn3AhdMu.mjs';
import { $ as $$Layout } from './Layout_DWdQombZ.mjs';

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    icon,
    title,
    info,
    detalle,
    porcentaje,
    color = "primary"
  } = Astro2.props;
  const COLOR_APP = {
    "primary": "from-biblio-primary to-biblio-primary/60",
    "secundary": "from-biblio-secundary to-biblio-secundary/60"
  };
  return renderTemplate`${maybeRenderHead()}<div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"> <div${addAttribute(`bg-clip-border
                mx-4
                rounded-xl
                overflow-hidden
                bg-gradient-to-tr
                ${COLOR_APP[color]}
                text-white
                shadow-blue-500/40
                shadow-lg
                absolute
                -mt-4
                grid
                h-16
                w-16
                place-items-center`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon })} </div> <div class="p-4 text-right h-[80%]"> <p class="block antialiased font-sans leading-normal text-blue-gray-600 text-2xl font-bold"> ${title} </p> <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900"> ${info} </h4> </div> <div class="border-t border-blue-gray-50 p-4"> <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600"> ${porcentaje && renderTemplate`<strong class="text-green-500">${porcentaje}</strong>`}
&nbsp;
${detalle} </p> </div> </div>`;
}, "C:/Users/SOPORTE/OneDrive/Desktop/proyecto/biblioteca-digital/admin-biblioteca/src/components/dashboard/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const cards = [
    {
      detalle: "Esta ultima semana.",
      icon: "user-card",
      info: "4,000",
      title: "Total de usuarios registrados",
      porcentaje: "+55%",
      color: "primary"
    },
    {
      detalle: "El dia de hoy.",
      icon: "user-card-add",
      info: "2,300",
      title: "Nuevos usuarios registrados",
      porcentaje: "+3%",
      color: "secundary"
    },
    {
      detalle: "En el mes.",
      icon: "user-card",
      info: "3,462",
      title: "Usuarios activos",
      porcentaje: "-2%",
      color: "primary"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LayoutAdmin", $$LayoutAdmin, { "pageName": "Home" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-12"> <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4"> ${cards.map((card) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "icon": card.icon, "detalle": card.detalle, "info": card.info, "title": card.title, "porcentaje": card.porcentaje, "color": card.color })}`)} </div> <div class="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3"> <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2"> <div class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6"> <div> <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
Projects
</h6> <p class="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-500"> <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path> </svg> <strong>30 done</strong> this month
</p> </div> <button aria-expanded="false" aria-haspopup="menu" id=":r5:" class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button"> <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"> <svg xmlns="http://www.w3.org/2000/svg" fill="currenColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" class="h-6 w-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path> </svg> </span> </button> </div> <div class="p-6 overflow-x-scroll px-0 pt-0 pb-2"> <table class="w-full min-w-[640px] table-auto"> <thead> <tr> <th class="border-b border-blue-gray-50 py-3 px-6 text-left"> <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
companies
</p> </th> <th class="border-b border-blue-gray-50 py-3 px-6 text-left"> <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
budget
</p> </th> <th class="border-b border-blue-gray-50 py-3 px-6 text-left"> <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
completion
</p> </th> </tr> </thead> <tbody> <tr> <td class="py-3 px-5 border-b border-blue-gray-50"> <div class="flex items-center gap-4"> <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
Material XD Version
</p> </div> </td> <td class="py-3 px-5 border-b border-blue-gray-50"> <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
$14,000
</p> </td> <td class="py-3 px-5 border-b border-blue-gray-50"> <div class="w-10/12"> <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
60%
</p> <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1"> <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style="width: 60%;"></div> </div> </div> </td> </tr> <tr> <td class="py-3 px-5 border-b border-blue-gray-50"> <div class="flex items-center gap-4"> <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
Add Progress Track
</p> </div> </td> <td class="py-3 px-5 border-b border-blue-gray-50"> <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
$3,000
</p> </td> <td class="py-3 px-5 border-b border-blue-gray-50"> <div class="w-10/12"> <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
10%
</p> <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1"> <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style="width: 10%;"></div> </div> </div> </td> </tr> <tr> <td class="py-3 px-5 border-b border-blue-gray-50"> <div class="flex items-center gap-4"> <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
Fix Platform Errors
</p> </div> </td> <td class="py-3 px-5 border-b border-blue-gray-50"> <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
Not set
</p> </td> <td class="py-3 px-5 border-b border-blue-gray-50"> <div class="w-10/12"> <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
100%
</p> <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1"> <div class="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style="width: 100%;"></div> </div> </div> </td> </tr> <tr> <td class="py-3 px-5 border-b border-blue-gray-50"> <div class="flex items-center gap-4"> <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
Launch our Mobile App
</p> </div> </td> <td class="py-3 px-5 border-b border-blue-gray-50"> <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
$20,500
</p> </td> <td class="py-3 px-5 border-b border-blue-gray-50"> <div class="w-10/12"> <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
100%
</p> <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1"> <div class="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style="width: 100%;"></div> </div> </div> </td> </tr> <tr> <td class="py-3 px-5 border-b border-blue-gray-50"> <div class="flex items-center gap-4"> <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
Add the New Pricing Page
</p> </div> </td> <td class="py-3 px-5 border-b border-blue-gray-50"> <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">
$500
</p> </td> <td class="py-3 px-5 border-b border-blue-gray-50"> <div class="w-10/12"> <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
25%
</p> <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1"> <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style="width: 25%;"></div> </div> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> ` })} ` })}`;
}, "C:/Users/SOPORTE/OneDrive/Desktop/proyecto/biblioteca-digital/admin-biblioteca/src/pages/index.astro", void 0);

const $$file = "C:/Users/SOPORTE/OneDrive/Desktop/proyecto/biblioteca-digital/admin-biblioteca/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
