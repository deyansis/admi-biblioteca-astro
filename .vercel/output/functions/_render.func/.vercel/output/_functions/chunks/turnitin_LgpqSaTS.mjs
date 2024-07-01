/* empty css                         */
import { k as createComponent, l as renderTemplate, p as renderComponent, m as maybeRenderHead } from './astro/server_BEIqKSph.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_DWdQombZ.mjs';
import { $ as $$LayoutAdmin } from './LayoutAdmin_Dn3AhdMu.mjs';

const $$Turnitin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Turnitin Biblioteca Digital" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LayoutAdmin", $$LayoutAdmin, { "pageName": "turnitin" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Turnitin</h1> ` })} ` })}`;
}, "C:/Users/SOPORTE/OneDrive/Desktop/proyecto/biblioteca-digital/admin-biblioteca/src/pages/turnitin.astro", void 0);

const $$file = "C:/Users/SOPORTE/OneDrive/Desktop/proyecto/biblioteca-digital/admin-biblioteca/src/pages/turnitin.astro";
const $$url = "/turnitin";

export { $$Turnitin as default, $$file as file, $$url as url };
