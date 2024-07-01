import { k as createComponent, l as renderTemplate, n as addAttribute, t as renderHead, q as renderSlot, o as createAstro } from './astro/server_BEIqKSph.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body style="min-height: 100vh;"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/SOPORTE/OneDrive/Desktop/proyecto/biblioteca-digital/admin-biblioteca/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
