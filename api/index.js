"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix = require("@clerk/remix");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-FZSUJ7JW.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), meta = () => ({ title: "Smooth Jazz Remix Stack" }), links = () => [{ rel: "stylesheet", href: tailwind_default }], loader = (args) => (0, import_ssr.rootAuthLoader)(
  args,
  ({ request }) => {
    let { userId, sessionId, getToken } = request.auth;
    return console.log("Root loader auth:", { userId, sessionId, getToken }), { message: "Hello from the root loader :)" };
  },
  { loadUser: !0 }
);
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}
var root_default = (0, import_remix.ClerkApp)(App), CatchBoundary = (0, import_remix.ClerkCatchBoundary)();

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInPage
});
var import_remix2 = require("@clerk/remix");

// app/components/WrapperFull.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function WrapperFull({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("main", { className: "flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[url('/images/jazz.jpg')] bg-cover", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex h-full w-full flex-col items-center justify-center backdrop-blur-sm", children }) });
}

// app/routes/sign-in/$.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function SignInPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WrapperFull, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_remix2.SignIn, { path: "/sign-in", routing: "path", signUpUrl: "/sign-up" }) });
}

// app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpPage
});
var import_remix3 = require("@clerk/remix");
var import_jsx_runtime5 = require("react/jsx-runtime");
function SignUpPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(WrapperFull, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_remix3.SignUp, { path: "/sign-up", routing: "path", signInUrl: "/sign-in" }) });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_remix4 = require("@clerk/remix"), import_react3 = require("@remix-run/react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(WrapperFull, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "pb-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { className: "text-shadow-lg text-center text-8xl font-bold uppercase text-slate-50", children: "Smooth Jazz Stack" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-shadow-lg mt-6 text-center text-xl font-bold text-slate-100", children: "Minor friction, major performance, diminished complexity, augmented productivity" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_remix4.SignedOut, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-6 flex flex-row items-center justify-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react3.Link,
        {
          to: "/sign-in",
          className: "inline-block rounded bg-white px-7 py-3 text-center text-lg font-medium leading-snug text-blue-600 shadow-md transition duration-150 ease-in-out hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg",
          children: "Sign in"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react3.Link,
        {
          to: "/sign-up",
          className: "inline-block rounded bg-blue-600 px-7 py-3 text-center text-lg font-medium leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg",
          children: "Sign up"
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_remix4.SignedIn, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mt-6 flex flex-row items-center justify-center space-x-4", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "px-7 py-3 text-center text-lg font-medium leading-snug text-slate-100", children: "Signed in. Ya dig?" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-shadow-lg mt-6 text-center text-lg font-bold text-slate-100", children: "Built with Remix, Tailwind, Clerk, and TypeScript. Deployed on Vercel." })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "e1670cfc", entry: { module: "/build/entry.client-A2FLMD22.js", imports: ["/build/_shared/chunk-KAIURR3G.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BHWHUJB2.js", imports: ["/build/_shared/chunk-RBFA6463.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-PMB5B4TD.js", imports: ["/build/_shared/chunk-3EVDZLQD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-77HATLGR.js", imports: ["/build/_shared/chunk-3EVDZLQD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-2JK6B53N.js", imports: ["/build/_shared/chunk-3EVDZLQD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-E1670CFC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sign-in/$": {
    id: "routes/sign-in/$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/sign-up/$": {
    id: "routes/sign-up/$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
