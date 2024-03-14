// <define:__ROUTES__>
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.10.0.", include: ["/*"], exclude: ["/_next/static/*"] };

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/home/veloxious/sketchpad/homepage/.wrangler/tmp/pages-B1OoR9/bundledWorker-0.1709454203465144.mjs";
import { isRoutingRuleMatch } from "/home/veloxious/sketchpad/homepage/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/home/veloxious/sketchpad/homepage/.wrangler/tmp/pages-B1OoR9/bundledWorker-0.1709454203465144.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=zi1s2rmqru.js.map
