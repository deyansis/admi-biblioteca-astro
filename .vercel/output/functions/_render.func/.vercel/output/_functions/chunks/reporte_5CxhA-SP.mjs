/* empty css                         */
import { k as createComponent, l as renderTemplate, p as renderComponent, m as maybeRenderHead } from './astro/server_BEIqKSph.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_DWdQombZ.mjs';
import { $ as $$LayoutAdmin } from './LayoutAdmin_Dn3AhdMu.mjs';

const $$Reporte = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reporte Biblioteca Digital" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LayoutAdmin", $$LayoutAdmin, { "pageName": "reporte" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Reporte</h1> ` })} ` })}`;
}, "C:/Users/SOPORTE/OneDrive/Desktop/proyecto/biblioteca-digital/admin-biblioteca/src/pages/reporte.astro", void 0);

const $$file = "C:/Users/SOPORTE/OneDrive/Desktop/proyecto/biblioteca-digital/admin-biblioteca/src/pages/reporte.astro";
const $$url = "/reporte";

export { $$Reporte as default, $$file as file, $$url as url };
