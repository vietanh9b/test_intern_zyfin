function updateGlobals(event) {
  const formWrapper =
    event.target.closest(".form-wrapper") ||
    event.target.querySelector(".form-wrapper");
  if (formWrapper) {
    const formNameInput = formWrapper.querySelector('input[name="formName"]');
    if (formNameInput) {
      window.form_name = formNameInput.value.trim();
      window.eventFormName =
        form_name[0] + form_name.substr(1).toLowerCase().split(" ").join("_");
      window.form_name = window.form_name
        .trim()
        .toLowerCase()
        .split(" ")
        .join("_");
    }
  }
}
function customTranslate(e) {
  const t = {
      "de-DE": {
        "all industries": "Alle Branchen",
        "all technology domains": "Alle Technologie-Bereiche",
        "search case studies": "Fallstudien suchen",
        "clear all filters": "Alle Filter löschen",
      },
    },
    n = {
      "de-DE": [
        "span.filter-reset-btn",
        ".selected-taxonomy.technology-domain-selected-taxonomy",
        ".selected-taxonomy.industry-selected-taxonomy",
        ".filter-taxonomy-container .dropdown-container ul.taxonomy-list li",
      ],
    };
  function a(e, t, n) {
    let a = e.innerText.trim().toLowerCase();
    n[t] && n[t][a] && (e.innerText = n[t][a]);
  }
  if (t.hasOwnProperty(e) && n.hasOwnProperty(e)) {
    const r = n[e];
    r.forEach((n) => {
      document.querySelectorAll(n).forEach((n) => {
        a(n, e, t);
      });
    });
    let o = document.querySelector("form.search_form input");
    if (o) {
      let n = o.placeholder.toLowerCase().trim();
      t[e] && t[e][n] && (o.placeholder = t[e][n]);
    }
    const s = new MutationObserver((n) => {
        for (let o of n)
          ("childList" !== o.type && "characterData" !== o.type) ||
            r.forEach((n) => {
              document.querySelectorAll(n).forEach((n) => {
                a(n, e, t);
              });
            });
      }),
      i = {
        characterData: !0,
        childList: !0,
        subtree: !0,
      };
    r.forEach((e) => {
      document.querySelectorAll(e).forEach((e) => {
        s.observe(e, i);
      });
    });
  }
}
jQuery(document).ready(function (e) {
  if (window.matchMedia("(min-width: 1025px)").matches) {
    document.querySelectorAll("li.menu-item").forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        let t = e.querySelector(".elementskit-megamenu-panel");
        t &&
          (t.hasAttribute("style") ||
            ((t.style.left = "calc(50% + 58px)"),
            (t.style.marginLeft = "-50vw")));
      });
    });
  }
  function t() {
    let e = jQuery(".searchOuterWrap .elementor-widget-container").html();
    window.matchMedia("(max-width: 1024px)").matches
      ? (jQuery(".searchOuterWrap").removeClass("active"),
        jQuery(
          "#ekit-megamenu-primary-menu #menu-primary-menu .hfe-search-form__container"
        ).length < 1 &&
          jQuery("#ekit-megamenu-primary-menu #menu-primary-menu").prepend(e))
      : (jQuery(
          "#ekit-megamenu-primary-menu #menu-primary-menu .hfe-search-form__container"
        ).remove(),
        jQuery(".searchOuterWrap .elementor-widget-container").length < 1 &&
          jQuery(".searchOuterWrap").prepend(e));
  }
  jQuery(".hfe-search-form__input").attr("autocomplete", "off"),
    jQuery(".searchOuterWrap").prepend(
      "<button class='close'><img src='/wp-content/uploads/2023/08/red-arrow.svg' width='20'></button>"
    ),
    jQuery(".searchOuterWrap .close").click(function () {
      jQuery(".searchOuterWrap").removeClass("active"),
        jQuery("html").removeClass("searchactive");
    }),
    jQuery(".searchOuterWrap").mouseleave(function () {
      jQuery(".searchOuterWrap").removeClass("active"),
        jQuery("html").removeClass("searchactive");
    }),
    jQuery(".headerSection .searchIcon").click(function () {
      jQuery(".searchOuterWrap").addClass("active"),
        jQuery("html").addClass("searchactive");
    }),
    window.addEventListener("resize", function () {
      t();
    }),
    jQuery(".elementskit-submenu-indicator.icon").click(function (e) {}),
    document
      .querySelectorAll(".elementskit-submenu-indicator.icon")
      .forEach(function (e) {
        e.addEventListener("click", function (e) {
          e.preventDefault();
          var t = jQuery(this).closest("li.elementskit-megamenu-has"),
            n = t.find(".elementskit-megamenu-panel").eq(0);
          jQuery(".elementskit-dropdown-open")
            .not(n)
            .removeClass("elementskit-dropdown-open"),
            jQuery(".elementskit-megamenu-has.open").not(t).removeClass("open"),
            n.toggleClass("elementskit-dropdown-open"),
            n.hasClass("elementskit-dropdown-open")
              ? t.addClass("open")
              : t.removeClass("open");
        });
      }),
    t(),
    jQuery("button.hfe-search-submit").each(function (e) {
      jQuery(this).click(function () {
        let t = jQuery("input[type='search']")[e].value.trim();
        if ("" === t)
          return (
            jQuery("input[type='search'].hfe-search-form__input").attr(
              "placeholder",
              "Search Valid Keyword.."
            ),
            jQuery("input[type='search'].hfe-search-form__input").val(""),
            !1
          );
        {
          let e = JSON.parse(localStorage.getItem("searchQueries")) || [];
          e.includes(t) ||
            (e.unshift(t),
            localStorage.setItem("searchQueries", JSON.stringify(e))),
            jQuery("input[type='search'].hfe-search-form__input").attr(
              "placeholder",
              t
            ),
            jQuery("input[type='search'].hfe-search-form__input").val(t);
        }
      });
    });
  let n = JSON.parse(localStorage.getItem("searchQueries")),
    a = jQuery("<ul>").addClass("searchList");
  jQuery.each(n, function (e, t) {
    if (e < 5) {
      let e = jQuery("<li>").text(t).addClass("searchTerm");
      a.append(e[0]);
    }
  }),
    jQuery(".hfe-search-button-wrapper").append(a),
    jQuery("ul.searchList").each(function (e) {
      jQuery(this)
        .find("li")
        .click(function () {
          let t = jQuery(this).text();
          jQuery("input.hfe-search-form__input").eq(e).val(t),
            jQuery(".hfe-search-button-wrapper").eq(e).submit();
        });
    }),
    jQuery(".hfe-search-button-wrapper").click(function () {
      window.matchMedia("(max-width: 1024px)").matches &&
        jQuery(this).addClass("focused");
    }),
    jQuery(".hfe-search-button-wrapper").mouseleave(function () {
      window.matchMedia("(max-width: 1024px)").matches &&
        jQuery(this).removeClass("focused");
    }),
    document
      .querySelectorAll("button[type = 'reset']#clear-with-button")
      .forEach((e, t) => {
        e &&
          e.addEventListener("mousedown", () => {
            const e = document.querySelectorAll("input.hfe-search-form__input")[
              t
            ];
            e && e.setAttribute("value", "");
          });
      }),
    void 0 !== jQuery("#cmplz-cookiebanner-container") &&
      jQuery("button.cmplz-btn.cmplz-view-preferences").click(function () {
        jQuery("button.cmplz-btn.cmplz-accept")[0].innerText = "Accept All";
      }),
    jQuery(function () {
      var e = 0;
      jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 112) {
          var t = jQuery(this).scrollTop();
          Math.abs(e - t) >= 5 &&
            (t > e
              ? (jQuery("header#masthead").addClass("unStickyHeader"),
                jQuery("header#masthead").removeClass("stickyHeader"))
              : (jQuery("header#masthead").addClass("stickyHeader"),
                jQuery("header#masthead").removeClass("unStickyHeader")),
            (e = t));
        } else jQuery("header#masthead").removeClass("stickyHeader"), jQuery("header#masthead").removeClass("unStickyHeader");
      });
    }),
    1 == jQuery('#breadcrumbs span span:contains("Uncategorized")').length &&
      (jQuery('#breadcrumbs span span:contains("Uncategorized")').remove(),
      jQuery("#breadcrumbs > span").contents()[1].remove()),
    (function () {
      if (jQuery("body").hasClass("single"))
        for (let e = 0; jQuery("#breadcrumbs span span").length > e; e++) {
          let t = jQuery("#breadcrumbs span span")[e].innerText.toLowerCase();
          "our thinking" == t
            ? (jQuery("#breadcrumbs span span").eq(e).find("a")[0].href =
                "our-thinking/index.html")
            : "news" == t
            ? (jQuery("#breadcrumbs span span").eq(e).find("a")[0].href =
                "our-thinking/news/index.html")
            : "insights" == t
            ? (jQuery("#breadcrumbs span span").eq(e).find("a")[0].href =
                "our-thinking/insights/index.html")
            : "resources" == t
            ? (jQuery("#breadcrumbs span span").eq(e).find("a")[0].href =
                "our-thinking/resources/index.html")
            : "panel discussion" == t
            ? (jQuery("#breadcrumbs span span").eq(e).find("a")[0].href =
                "our-thinking/panel-discussion/index.html")
            : "events" == t &&
              (jQuery("#breadcrumbs span span").eq(e).find("a")[0].href =
                "our-thinking/events/index.html");
        }
    })(),
    (function () {
      let e = jQuery("a"),
        t = location.hostname;
      for (let n = 0; e.length > n; n++)
        e.eq(n)[0].href.includes(t) ||
          e.eq(n)[0].href.includes("our-thinking.nashtechglobal.com") ||
          (e.eq(n)[0].target = "_blank");
    })();
  let r = setInterval(function () {
    void 0 !== jQuery(".selected-flag").attr("title") &&
      jQuery("[name='countryDropdown']").val(
        jQuery(".selected-flag").attr("title")
      );
  }, 1e3);
  if (
    (setTimeout(function () {
      clearInterval(r);
    }, 8e3),
    jQuery("article.post.type-post").hasClass("category-case-studies") ||
      jQuery("article.post.type-post").hasClass("category-news") ||
      jQuery("article.post.type-post").hasClass("category-insights"))
  ) {
    jQuery(
      "section.elementor-top-section  .elementor-widget-wrap > .textGradient h1"
    )
      .parents(".elementor-widget-container")
      .prepend('<div id="csbreadcrumbs"></div>'),
      (function () {
        for (
          var e,
            t,
            n,
            a = window.location.pathname.split("index.html").filter(Boolean),
            r = '<a href="/" class="home">Home</a>',
            o = "",
            s = 0;
          s < a.length;
          s++
        ) {
          var i =
              (n = a[s].replace(/-/g, " ")).charAt(0).toUpperCase() +
              n.slice(1).toLowerCase(),
            l = s === a.length - 1 ? "current-page" : "path";
          if (s === a.length - 1) {
            var c = document.title.replace(/(-|\|) NashTech/g, "").trim();
            (t = 50),
              (r +=
                ' / <span class="' +
                l +
                '">' +
                (c = (e = c).length > t ? e.substring(0, t) + "..." : e) +
                "</span>");
          } else
            r +=
              ' / <a href="' +
              (o += "/" + a[s]) +
              '" class="' +
              l +
              '">' +
              i +
              "</a>";
        }
        const u = document.getElementById("csbreadcrumbs");
        u && (u.innerHTML = r);
      })();
  }
  if (
    (window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth) <= 1024
  ) {
    const t = document.querySelector(
      "section.headerSection .mob-tab-lang-switcher"
    );
    e(".elementskit-submenu-indicator").on("click", function () {
      let t = e(this).parent(".ekit-menu-nav-link").text().trim(),
        n = e(this).closest("li.menu-item");
      n && n.addClass("selected");
      var a = e(this)
        .parent(".ekit-menu-nav-link")
        .siblings(".elementskit-megamenu-panel");
      0 === a.length &&
        (a = e(this)
          .parent(".ekit-menu-nav-link")
          .siblings(".elementskit-submenu-panel")),
        a.addClass("ntg-selected-megamenu");
      const r = e(
        ".headerSection .elementskit-nav-identity-panel .ntg-selected-menu-title"
      );
      r.length && r.text(t),
        e(".headerSection").addClass("ntg-menu-item-selected");
    }),
      (function () {
        let t = document.createElement("div");
        t.classList.add("ntg-selected-menu-head");
        let n = document.createElement("h5");
        n.classList.add("ntg-selected-menu-title");
        let a = document.createElement("button");
        a.setAttribute("type", "button"),
          a.classList.add("ntg-menu-back-btn"),
          a.addEventListener("click", () => {
            e(".headerSection .ntg-selected-megamenu").removeClass(
              "ntg-selected-megamenu"
            ),
              e(".headerSection").removeClass("ntg-menu-item-selected");
          }),
          t.appendChild(a),
          t.appendChild(n),
          e(
            ".headerSection #ekit-megamenu-primary-menu .elementskit-nav-identity-panel .elementskit-site-title"
          ).append(t);
      })(),
      t && t.classList.add("showMobTabLangBar");
  } else
    !(function () {
      var e = document.querySelector(
        ".ntgheaderSection-inner .wpml-ls-current-language"
      );
      if (e) {
        var t = e.querySelector("a.ekit-menu-dropdown-toggle");
        if (t) {
          t.className = "selected-lang";
          const r = t.querySelector(".elementskit-submenu-indicator");
          t.removeChild(r);
          const o = document.createElement("a");
          o.classList.add("lang-icon-globe");
          const s = t.querySelector(".wpml-ls-native");
          s && "日本語" === s.innerText && o.classList.add("icon-black-jap"),
            o.classList.add("elementskit-submenu-indicator"),
            e.insertBefore(o, t),
            e.removeChild(t);
          var n = e.querySelector(".elementskit-submenu-panel"),
            a = document.createElement("li");
          const i = t.cloneNode(!0);
          if (
            (a.appendChild(i),
            a.classList.add("wpml-ls-item"),
            a.setAttribute("data-vertical-menu", "750px"),
            n)
          )
            n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a);
          else {
            const t = document.createElement("ul");
            t.classList.add("elementskit-dropdown"),
              t.classList.add("elementskit-submenu-panel"),
              t.appendChild(a),
              e.appendChild(t);
          }
          e.style.opacity = "1";
        }
      }
    })();
  if (void 0 !== jQuery(".elementor-posts article .elementor-post__badge")) {
    let e = jQuery(".elementor-posts article .elementor-post__badge");
    for (let t = 0; e.length > t; t++)
      "news" == e[t].innerText.toLowerCase()
        ? e.eq(t).addClass("news")
        : "insights" == e[t].innerText.toLowerCase() &&
          e.eq(t).addClass("insights");
  }
  if (
    ((function () {
      let e = jQuery(".post-grid .grid-items .title_link");
      for (let t = 0; e.length > t; t++)
        e[t].innerText.length > 60 &&
          (e[t].innerText = e[t].innerText.substring(0, 60) + "..");
    })(),
    (function () {
      let e = jQuery(".catBadge a");
      if (void 0 !== e) {
        for (let t = 0; e.length > t; t++) {
          let n = e[t].innerText.toLowerCase();
          "news" == n
            ? e.eq(t).addClass("news")
            : "insights" == n && e.eq(t).addClass("insights");
        }
        for (let t = 0; e.length > t; t++)
          ("" != e[t].innerText && "Our thinking" != e[t].innerText) ||
            e[t].remove();
      }
      if (void 0 !== jQuery(".themePostGridCard")) {
        let e = jQuery(
          ".themePostGridCard span.elementor-post-info__terms-list"
        );
        for (let t = 0; e.length > t; t++)
          for (let n = 0; e.eq(t).contents().length > n; n++)
            void 0 !== e.eq(t).contents().eq(n)[0] &&
              ("#text" == e.eq(t).contents().eq(n)[0].nodeName &&
                e.eq(t).contents().eq(n).remove(),
              "Our Thinking" == e.eq(t).contents().eq(n)[0].innerText
                ? e.eq(t).contents().eq(n).remove()
                : "News" == e.eq(t).contents().eq(n)[0].innerText
                ? e.eq(t).contents().eq(n).addClass("news")
                : "Insights" == e.eq(t).contents().eq(n)[0].innerText &&
                  e.eq(t).contents().eq(n).addClass("insights"));
      }
    })(),
    (function () {
      if (void 0 !== jQuery("#breadcrumbs")) {
        let e = jQuery("#breadcrumbs a");
        for (let t = 0; e.length > t; t++)
          "case studies" == e[t].innerText.toLowerCase() &&
            (e[t].href = "case-studies/index.html");
      }
    })(),
    jQuery("li.elementskit-megamenu-has").click(function () {
      jQuery(this)
        .find(".elementskit-megamenu-panel")
        .eq(0)
        .hasClass("elementskit-dropdown-open")
        ? jQuery(this).removeClass("open")
        : jQuery(this).addClass("open");
    }),
    jQuery(".customPostGrid .grid-item").each(function () {}),
    jQuery("input[name='s']").change(function () {
      jQuery(this).length > 0
        ? jQuery("span.filter-reset-btn").removeClass("disabled")
        : jQuery("span.filter-reset-btn").addClass("disabled");
    }),
    jQuery(".customPostslider").each(function () {
      var e,
        t = jQuery(this),
        n = (t.data("slider-id"), 0),
        a = t.find(".customPostSlideGrid").length,
        r = t.width();
      function o() {
        (r = t.width()),
          t.find(".customPostSlideGrid").css("width", r),
          t.find(".post-slider-container").css("width", a * r),
          s(n);
      }
      function s(e) {
        var n = -e * r;
        t
          .find(".post-slider-container")
          .css("transform", "translateX(" + n + "px)"),
          (function (e) {
            t.find(".slider-dots span").removeClass("active"),
              t.find(".slider-dots span:eq(" + e + ")").addClass("active");
          })(e);
      }
      function i() {
        ++n >= a && (n = 0), s(n);
      }
      t.find(".prev-button").click(function () {
        --n < 0 && (n = a - 1), s(n);
      }),
        t.find(".next-button").click(function () {
          i();
        }),
        jQuery(window).on("resize", function () {
          clearTimeout(window.resizedFinished),
            (window.resizedFinished = setTimeout(function () {
              o();
            }, 250));
        });
      for (var l = 0; l < a; l++)
        t.find(".slider-dots").append("<span></span>");
      function c() {
        e = setInterval(function () {
          i();
        }, 3e3);
      }
      t.find(".slider-dots span").click(function () {
        s(jQuery(this).index());
      }),
        c(),
        t.hover(
          function () {
            clearInterval(e);
          },
          function () {
            c();
          }
        ),
        t
          .find(".post-slider-container")
          .css("transition", "transform 0.5s ease"),
        o();
    }),
    jQuery(".resourceType .resource").length > 0)
  ) {
    let e = jQuery(".resourceType .resource");
    for (let t = 0; e.length > t; t++) e.eq(t).addClass("downloadable");
  }
  function o(e) {
    let t = "",
      n = "",
      a = "",
      r = "",
      o = e.target.closest("a"),
      s = o.href;
    if (s) {
      let e = s.split("index.html");
      t = e[e.length - 1];
    }
    window.location.href && (r = location.pathname);
    let i = o.getAttribute("data-type");
    if (i) {
      const e = i.trim().toLowerCase().replace(/-pdf$/, "");
      if ("resource" === e) {
        n = o
          .querySelector("span.elementor-button-text")
          .innerHTML.split("Download")[1]
          .trim()
          .toLowerCase();
      } else n = e;
    } else {
      let e = o.closest(".cr-grid-item");
      if (e) {
        const t = e.querySelector("div.resourceType span.resource");
        t && (n = t.innerText.trim().toLowerCase());
      }
    }
    if (
      (("case study" !== n &&
        "casestudy" !== n &&
        "caseStudy" !== n &&
        "CaseStudy" !== n &&
        "Casestudy" !== n) ||
        (n = "case-study"),
      document.querySelector(
        "[data-elementor-type='single-post'].downloadables-heavyweight"
      ))
    )
      a = "heavyweight";
    else {
      let e = o.closest(".cr-grid-item");
      e && e.classList.contains("lightweight") && (a = "lightweight");
    }
    dataLayer.push({
      event: "Download_resource",
      resource_name: t,
      resource_type: n,
      download_type: a,
      node_name: r,
    });
  }
  jQuery(".cr-grid-item.lightweight").length > 0 &&
    jQuery(".cr-grid-item.lightweight a").click(function () {
      let e = jQuery(this)
          .parent()
          .find(".resourceType")[0]
          .innerText.toLowerCase(),
        t = jQuery(this)[0].href.split("index.html").pop().toLowerCase();
      if ("brochure" == e)
        dataLayer.push({
          event: "Download_brochure",
          brochure_name: t,
        });
      else if ("ebook" == e)
        dataLayer.push({
          event: "Download_ebook",
          ebook_name: t,
        });
      else if ("case study" == e)
        dataLayer.push({
          event: "Download_case_study",
          case_study_name: t,
        });
      else {
        let n = "Download_" + e;
        dataLayer.push({
          event: n,
          resourceName: t,
        });
      }
    }),
    document.querySelectorAll('a[href*=".pdf"]').forEach((e) => {
      e.addEventListener("click", o);
    }),
    (function () {
      let e = {
          ctaName: "",
          ctaLabel: "",
          lastPage: "",
          lastURL: "",
        },
        t = sessionStorage.ctaToForm;
      function n(e, n) {
        let a = e[0].href,
          r = e[0].innerText,
          o = jQuery("title").eq(0).text().split(" | ")[0],
          s = location.href;
        if (
          void 0 !== sessionStorage.ctaToForm ||
          null != sessionStorage.ctaToForm
        ) {
          let e = JSON.parse(sessionStorage.getItem("ctaToForm"));
          (e.ctaName = n),
            (e.ctaLabel = r),
            (e.lastPage = o),
            (e.lastURL = s),
            sessionStorage.setItem("ctaToForm", JSON.stringify(e));
        }
        location.href = a;
      }
      (void 0 !== sessionStorage.ctaToForm &&
        null != sessionStorage.ctaToForm) ||
        sessionStorage.setItem("ctaToForm", JSON.stringify(e)),
        jQuery(".beforeFooterCTA a").click(function (e) {
          e.stopPropagation();
          n(jQuery(this), "beforeFooterCTA");
        }),
        jQuery("#mainNavGetInTouch a").click(function (e) {
          e.stopPropagation();
          n(jQuery(this), "getintouch");
        }),
        jQuery(".solidRedCTA a").click(function (e) {
          e.stopPropagation();
          window.ntg_buttonLabel = e.target.textContent;
          if (jQuery(this).closest(".beforeFooterCTA").length > 0) {
            window.button_position = "beforeFooterCTA";
          } else if (jQuery(this).closest("#mainNavGetInTouch").length > 0) {
            window.button_position = "headerCTA";
          } else {
            window.button_position = jQuery(this).attr("button-position") ?? "";
          }
        });
    })(),
    jQuery("a.elementor-button-link.elementor-button").click(function (e) {
      dataLayer.push({
        event: "Button_click",
        button_label: e.currentTarget.innerText,
      });
    }),
    (function () {
      for (let e = 0; jQuery("a").length > e; e++) {
        if (
          (jQuery("a")[e].href.includes("pdf") &&
            jQuery("a")[e].href.includes("introduction-to-nashtech")) ||
          "brochure-pdf" == jQuery("a")[e].dataset.type
        ) {
          jQuery("a").eq(e).addClass("brochureCustomCTA"),
            jQuery("a").eq(e).attr("data-type", "brochure-pdf");
          let t = jQuery("a")
            .eq(e)[0]
            .href.split("index.html")
            [jQuery("a").eq(e)[0].href.split("index.html").length - 1].split(".")[0]
            .toLowerCase();
          jQuery("a").eq(e).attr("data-pdf", t),
            jQuery("a")
              .eq(e)
              .click(function () {
                dataLayer.push({
                  event: "Download_brochure",
                  brochure_name: t,
                });
              });
        }
        if (
          (location.pathname.includes("case-studies/index.html") &&
            jQuery("a")[e].href.includes("pdf")) ||
          "case-study-pdf" == jQuery("a")[e].dataset.type
        ) {
          jQuery("a").eq(e).addClass("caseStudyCustomCTA"),
            jQuery("a").eq(e).attr("data-type", "case-study-pdf");
          let t = jQuery("a")
            .eq(e)[0]
            .href.split("index.html")
            [jQuery("a").eq(e)[0].href.split("index.html").length - 1].split(".")[0]
            .toLowerCase();
          jQuery("a").eq(e).attr("data-pdf", t),
            jQuery("a")
              .eq(e)
              .click(function () {
                dataLayer.push({
                  event: "Download_case_study",
                  case_study_name: t,
                });
              });
        }
        if (
          (location.pathname.includes("e-book") &&
            jQuery("a")[e].href.includes("pdf")) ||
          "ebook-pdf" == jQuery("a")[e].dataset.type
        ) {
          jQuery("a").eq(e).addClass("ebookCustomCTA"),
            jQuery("a").eq(e).attr("data-type", "ebook-pdf");
          let t = jQuery("a")
            .eq(e)[0]
            .href.split("index.html")
            [jQuery("a").eq(e)[0].href.split("index.html").length - 1].split(".")[0]
            .toLowerCase();
          jQuery("a").eq(e).attr("data-pdf", t),
            jQuery("a")
              .eq(e)
              .click(function () {
                dataLayer.push({
                  event: "Download_ebook",
                  ebook_name: t,
                });
              });
        }
        if (
          location.pathname.includes("whitepaper") &&
          jQuery("a")[e].href.includes("pdf")
        ) {
          jQuery("a").eq(e).addClass("whitepaperCustomCTA"),
            jQuery("a").eq(e).attr("data-type", "whitepaper-pdf");
          let t = jQuery("a")
            .eq(e)[0]
            .href.split("index.html")
            [jQuery("a").eq(e)[0].href.split("index.html").length - 1].split(".")[0]
            .toLowerCase();
          jQuery("a").eq(e).attr("data-pdf", t),
            jQuery("a")
              .eq(e)
              .click(function () {
                dataLayer.push({
                  event: "Download_whitepaper",
                  whitepaper_name: t,
                });
              });
        }
      }
    })(),
    setTimeout(function () {
      jQuery("a[target='_blank']").click(function (e) {
        let t = "";
        let href = e.currentTarget.href;
        let linkTitle = e.currentTarget.innerText;
        let baseDomain = window.location.hostname;
        let cleanedUrl = href.replace(/^https?:\/\//, "");
        if (href.includes("nashsquared.com")) {
          t = "Nashsquared website";
        } else if (href.includes("nashtechglobal.jp")) {
          t = "Japan website";
        } else if (href.includes("virtualvietnam")) {
          t = "Virtual Vietnam site";
        } else if (href.includes("careers." + baseDomain)) {
          t = "Career website";
        } else if (
          !cleanedUrl.startsWith("www." + baseDomain) &&
          !cleanedUrl.startsWith(baseDomain)
        ) {
          t = linkTitle;
        }
        if (t.length > 1) {
          dataLayer.push({
            event: "Link_click",
            Link_title: t,
          });
        }
      });
    }, 5e3),
    (function () {
      let e = {
          firstPage: "",
          firstURL: "",
          currentPage: "",
          currentURL: "",
          lastPage: "",
          lastURL: "",
        },
        t = sessionStorage.userJourney;
      (void 0 !== t && null != t) ||
        sessionStorage.setItem("userJourney", JSON.stringify(e));
      let n = window.location.href,
        a =
          jQuery("title").eq(0).text().split(" | ")[0] ||
          jQuery("title").eq(0).text().split(" - ")[0];
      if (((t = sessionStorage.userJourney), void 0 !== t || null != t)) {
        let e = JSON.parse(sessionStorage.getItem("userJourney"));
        0 == e.firstPage.length && ((e.firstPage = a), (e.firstURL = n)),
          (e.currentPage = a),
          (e.currentURL = n),
          sessionStorage.setItem("userJourney", JSON.stringify(e));
      }
    })(),
    jQuery("a:not([target='_blank'])").click(function () {
      let e = window.location.href,
        t =
          jQuery("title").eq(0).text().split(" | ")[0] ||
          jQuery("title").eq(0).text().split(" - ")[0];
      if (
        ((ret_userJourney = sessionStorage.userJourney),
        "undefined" != typeof ret_userJourney || null != ret_userJourney)
      ) {
        let n = JSON.parse(sessionStorage.getItem("userJourney"));
        (n.lastPage = t),
          (n.lastURL = e),
          sessionStorage.setItem("userJourney", JSON.stringify(n));
      }
    }),
    jQuery("form.wpcf7-form").length > 0 &&
      (function () {
        let e = JSON.parse(sessionStorage.getItem("userJourney"));
        jQuery('input[name="enter_url"]').val(e.firstURL),
          jQuery('input[name="last_url"]').val(e.lastURL),
          jQuery('input[name="reference_url"]').val(e.currentURL);
      })();
  let s = setInterval(function () {
    void 0 !== jQuery(".country-select") &&
      jQuery(".country-select input[type=text]").keypress(function (e) {
        return e.preventDefault(), clearInterval(s), !1;
      });
  }, 1e3);
  let i = jQuery(
    ".landingpageForm input:not(.wpcf7-hidden):not(.wpcf7-submit)"
  );
  if (
    (i.change(function () {
      setTimeout(function () {
        i.hasClass("wpcf7-not-valid") ||
        1 != jQuery("[name='acceptance']")[0].checked
          ? jQuery(".landingpageForm input.wpcf7-submit").attr("disabled", !0)
          : jQuery(".landingpageForm input.wpcf7-submit").attr("disabled", !1);
      }, 500);
    }),
    jQuery("form.wpcf7-form").length > 0)
  ) {
    !(function () {
      jQuery("input[type='tel']").keypress(function (e) {
        if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return !1;
      });
      const e = document.querySelectorAll(".form-with-animated-labels"),
        t = "focused";
      for (const n of e) {
        const e = n.querySelectorAll(
          'select, [type="text"]:not([name="countryDropdown"]), [type="email"], [type="tel"], textarea'
        );
        for (const n of e)
          n.addEventListener("focus", function () {
            if (this.parentElement.nextElementSibling)
              this.parentElement.nextElementSibling.classList.add(t);
          }),
            n.addEventListener("blur", function () {
              this.value ||
                this.parentElement.nextElementSibling.classList.remove(t);
            });
        n.parentElement.addEventListener("wpcf7mailsent", function () {
          const e = document.querySelectorAll(".focused");
          for (const n of e) n.classList.remove(t);
        });
      }
    })(),
      (window.ntg_buttonLabel = ""),
      (window.button_position = ""),
      (window.node_name = document.querySelector("title").innerText),
      (window.node_url = window.location.href);
    let e = 0;
    let changeInSub = 0;
    sessionStorage.setItem("fieldchange", JSON.stringify([])),
      jQuery(".wpcf7-form-control").on("input change", function (event) {
        updateGlobals(event);
        let fieldChanges = JSON.parse(sessionStorage.getItem("fieldchange"));
        let formIndex = fieldChanges.findIndex(
          (item) => item.form_name === form_name
        );
        if (formIndex === -1) {
          fieldChanges.push({ form_name: form_name, change_count: 0 });
          formIndex = fieldChanges.length - 1;
        }
        fieldChanges[formIndex].change_count++;
        sessionStorage.setItem("fieldchange", JSON.stringify(fieldChanges));
        if (fieldChanges[formIndex].change_count === 1) {
          dataLayer.push({
            event: "Form_tracking",
            Form_name: window.eventFormName,
			node_name: node_name,
            node_URL: node_url,
          });
        }
      }),
      jQuery("a:not([target='_blank'])")
        .filter(function () {
          var href = jQuery(this).attr("href");
          return (
            href &&
            href !== "" &&
            href !== "#" &&
            href !== "javascript:void(0);"
          );
        })
        .click(function (e) {
          e.stopPropagation();
          function hasAnyFieldChange() {
            const fieldChanges = JSON.parse(
              sessionStorage.getItem("fieldchange") || "[]"
            );
            return fieldChanges.some((form) => form.change_count >= 1);
          }
          if (sessionStorage.getItem("isFormsubmitted") != 1) {
            if (hasAnyFieldChange()) {
              window.event_name = `Unsuccessful_${form_name}`;
              dataLayer.push({
                event: event_name,
                node_name: node_name,
                node_URL: node_url,
                Form_name: eventFormName,
                button_label: window.ntg_buttonLabel,
                button_position: button_position,
              });
            }
          }
        });
  }
  function l(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }
  function c() {
    var e = JSON.parse(localStorage.getItem("nashtechVisitor"));
    function t(selector, value, name) {
      if (value !== "" && value !== undefined) {
        var element = jQuery(selector);
        element.val(value);
        element
          .closest(`span[data-name='${name}']`)
          .next("label")
          .addClass("focused");
      }
    }
    t(
      "input.wpcf7-form-control[name='first_name']",
      e.first_name,
      "first_name"
    );
    t("input.wpcf7-form-control[name='last_name']", e.last_name, "last_name");
    t("input.wpcf7-form-control[name='fullname']", e.fullname, "fullname");
    t("input.wpcf7-form-control[name='email']", e.email, "email");
    t("input.wpcf7-form-control[name='jobtitle']", e.jobtitle, "jobtitle");
    t("input.wpcf7-form-control[name='company']", e.company, "company");
    t(
      "input.wpcf7-form-control[name='clientname']",
      e.clientname,
      "clientname"
    );
    t(
      "input.wpcf7-form-control[name='companyname']",
      e.companyname,
      "companyname"
    );
    t(
      "input.wpcf7-form-control[name='clientemail']",
      e.clientemail,
      "clientemail"
    );
    t(
      "input.wpcf7-form-control[name='consultantname']",
      e.consultantname,
      "consultantname"
    );
    t(
      "input.wpcf7-form-control[name='consultantlocation']",
      e.consultantlocation,
      "consultantlocation"
    );
    t("textarea.wpcf7-form-control[name='Message']", e.message, "Message");
    t("input.wpcf7-form-control[name='jobTitle']", e.jobTitle, "jobTitle");
    t("input.wpcf7-form-control[name='phone']", e.phone, "phone");
    t("select[name='choose_support']", e.choose_support, "choose_support");
  }
  sessionStorage.setItem("isFormsubmitted", !1),
    document.addEventListener(
      "wpcf7mailsent",
      function (e) {
        updateGlobals(e);
        !(function () {
          window.event_name = `Successful_submission_${window.form_name}`;
          if (
            form_name.includes("download") &&
            jQuery("[name='eBookPdfURL']").length > 0 &&
            jQuery("[name='eBookPdfURL']").val()
          ) {
            let ebookURL = jQuery("[name='eBookPdfURL']").val();
            let ebookName = ebookURL.split("index.html").pop();
            dataLayer.push({
              event: "Download_ebook",
              ebook_name: ebookName[0].toUpperCase() + ebookName.substring(1),
            });
          } else {
            dataLayer.push({
              event: window.event_name,
              node_name: node_name,
              node_URL: node_url,
              Form_name: eventFormName,
              button_label: ntg_buttonLabel,
              button_position: window.button_position ?? "",
            });
          }
        })(),
          sessionStorage.setItem("isFormsubmitted", !0);
      },
      !1
    ),
    (function () {
      if (window.localStorage.nashtechVisitor) setTimeout(c, 5e3);
      else {
        localStorage.setItem(
          "nashtechVisitor",
          JSON.stringify({
            first_name: "",
            last_name: "",
            fullname: "",
            email: "",
            jobtitle: "",
            company: "",
            clientname: "",
            companyname: "",
            clientemail: "",
            consultantname: "",
            consultantlocation: "",
            message: "",
            jobTitle: "",
            phone: "",
            countryDropdown: "",
            flagClasses: "",
            choose_support: "",
          })
        );
      }
    })(),
    jQuery(".wpcf7-form-control").on("input change", function (event) {
      updateGlobals(event);
      var e = JSON.parse(localStorage.getItem("nashtechVisitor"));
      switch (this.name) {
        case "first_name":
          e.first_name =
            jQuery(this).val().length > 0 ? jQuery(this).val() : e.first_name;
          break;
        case "last_name":
          e.last_name =
            jQuery(this).val().length > 0 ? jQuery(this).val() : e.last_name;
          break;
        case "fullname":
          e.fullname =
            jQuery(this).val().length > 0 ? jQuery(this).val() : e.fullname;
          break;
        case "email":
          e.email =
            jQuery(this).val().length > 0 && l(jQuery(this).val())
              ? jQuery(this).val()
              : e.email;
          break;
        case "jobtitle":
          e.jobtitle =
            jQuery(this).val().length > 0 ? jQuery(this).val() : e.jobtitle;
          break;
        case "company":
          e.company =
            jQuery(this).val().length > 0 ? jQuery(this).val() : e.company;
          break;
        case "clientname":
          e.clientname =
            jQuery(this).val().length > 0 ? jQuery(this).val() : e.clientname;
          break;
        case "companyname":
          e.companyname =
            jQuery(this).val().length > 0 ? jQuery(this).val() : e.companyname;
          break;
        case "clientemail":
          e.clientemail =
            jQuery(this).val().length > 0 && l(jQuery(this).val())
              ? jQuery(this).val()
              : e.clientemail;
          break;
        case "consultantname":
          e.consultantname =
            jQuery(this).val().length > 0
              ? jQuery(this).val()
              : e.consultantname;
          break;
        case "consultantlocation":
          e.consultantlocation =
            jQuery(this).val().length > 0
              ? jQuery(this).val()
              : e.consultantlocation;
          break;
        case "Message":
          e.message =
            jQuery(this).val().length > 0 ? jQuery(this).val() : e.message;
          break;
        case "jobTitle":
          e.jobTitle =
            jQuery(this).val().length > 0 ? jQuery(this).val() : e.jobTitle;
          break;
        case "phone":
          e.phone =
            jQuery(this).val().length >= 10 ? jQuery(this).val() : e.phone;
          break;
        case "choose_support":
          e.choose_support =
            jQuery(this).val().length > 0
              ? jQuery(this).val()
              : e.choose_support;
          break;
        case "countryDropdown":
          e.countryDropdown = jQuery(this).val();
          var t = jQuery(this).parent().find("div.flag-dropdown");
          if (t.length > 0) {
            var n = t.find("div.selected-flag > div.flag");
            e.flagClasses = n.attr("class");
          }
      }
      localStorage.setItem("nashtechVisitor", JSON.stringify(e));
    });
}),
  document.addEventListener("DOMContentLoaded", function () {
    const supportWrapper = document.querySelector(
      'span.wpcf7-form-control-wrap[data-name="choose_support"]'
    );
    if (supportWrapper) {
      const supportSelect = supportWrapper.querySelector(
        'select.form-control[name="choose_support"]'
      );
      const supportLabel = document.querySelector("label.choose-support-label");
      let optionClicked = !1;
      if (supportWrapper && supportSelect && supportLabel) {
        supportSelect.addEventListener("click", () => {
          if (!optionClicked) {
            supportWrapper.classList.toggle("active");
          }
          optionClicked = !1;
        });
        document.addEventListener("click", (event) => {
          if (!supportWrapper.contains(event.target)) {
            supportWrapper.classList.remove("active");
          }
        });
        supportSelect.addEventListener("change", () => {
          optionClicked = !0;
          supportWrapper.classList.remove("active");
          if (supportLabel) {
            supportLabel.classList.add("focused");
          }
        });
      }
    }
    const e = document.querySelector("body");
    if (!e.classList.contains("scroll-animation-applied")) {
      const n = window.innerWidth || document.documentElement.clientWidth;
      function t() {
        document
          .querySelectorAll(
            ".customPostslider:not(.animationExcludedSlider) .customPostSlideGrid"
          )
          .forEach((e) => {
            const t = e.querySelector(".slideThumbWrap"),
              a = e.querySelector(".postSlideDescOuter");
            if (t && a)
              if (n > 1366)
                if (e.getBoundingClientRect().top > window.innerHeight / 2) {
                  a.style.opacity = 0;
                  const e = t.getBoundingClientRect().top;
                  let n =
                    0.8 +
                    0.25 *
                      (1 -
                        Math.abs(e - window.innerHeight / 2) /
                          (window.innerHeight / 2));
                  (n = Math.max(0.8, Math.min(1, n))),
                    (t.style.transform = `scale(${n})`),
                    (a.style.opacity = 0);
                } else (t.style.transform = "scale(1)"), (a.style.opacity = 1);
              else if (
                (function (e) {
                  const t = e.getBoundingClientRect();
                  return t.top + t.height <= window.innerHeight;
                })(t)
              )
                (t.style.transform = "scale(1)"), (a.style.opacity = 1);
              else {
                a.style.opacity = 0;
                const e = t.getBoundingClientRect(),
                  n = e.top + e.height / 2;
                let r =
                  0.8 +
                  0.2 *
                    (1 -
                      Math.abs(n - window.innerHeight / 2) /
                        (window.innerHeight / 2));
                (r = Math.max(0.8, Math.min(1, r))),
                  (t.style.transform = `scale(${r})`),
                  (a.style.opacity = 0);
              }
          });
      }
      e.classList.add("scroll-animation-applied"),
        window.addEventListener("scroll", t),
        t();
    }
  }),
  document.addEventListener("DOMContentLoaded", () => {
    if (
      window.location.search.includes("elementor-preview") &&
      window.parent.document.querySelector("#elementor-editor-wrapper")
    ) {
      const a = window.parent.document.querySelector("aside#elementor-panel");
      var e = null;
      function t(e) {
        var t = e.style.backgroundImage.match(/url\(["'](.+?)["']\)/);
        return t.length >= 2 ? t[1].split("/").pop() : null;
      }
      function n(e) {
        var t = setInterval(function () {
          var n = window.parent.document.querySelector(
            '.media-modal[role="dialog"] .media-toolbar-primary input#media-search-input.search'
          );
          if (n) {
            n.value = e;
            var a = new Event("input", {
              bubbles: !0,
            });
            n.dispatchEvent(a), clearInterval(t);
          }
        }, 100);
      }
      a.addEventListener("click", function (a) {
        if (a.target.classList.contains("elementor-control-media-area")) {
          const r = a.target.querySelector(".elementor-control-media__preview");
          r && (e = t(r)) && n(e);
        } else if (
          a.target.classList.contains("elementor-control-media__preview")
        ) {
          const r = a.target;
          r && (e = t(r)) && n(e);
        } else if (
          a.target.classList.contains("elementor-control-media__replace")
        ) {
          const r = a.target
            .closest(".elementor-control-media__content")
            .querySelector(".elementor-control-media__preview");
          r && (e = t(r)) && n(e);
        }
      });
    }
  }),
  jQuery("html[lang='en-US']").length > 0
    ? jQuery(".wpcf7-form input[type='submit']")
        .parents(".form-group")
        .append(
          '<div class=\'recaptchaDisclaimer\'>This site is protected by reCAPTCHA and the Google\n    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a> and\n    <a href="https://policies.google.com/terms" target="_blank" rel="noopener">Terms of Service</a> apply.</div><style>.recaptchaDisclaimer {\n    font-size: 12px; line-height: 150%; margin-top: 10px;  display: block; text-align: center; }</style>'
        )
    : jQuery("html[lang='ja']").length > 0
    ? jQuery(".wpcf7-form input[type='submit']")
        .parents(".form-group")
        .append(
          '<div class=\'recaptchaDisclaimer\'>\n\t当サイトはreCAPTCHAによって保護されており、Google<a href="https://policies.google.com/privacy" target="_blank" rel="noopener">プライバシーポリシー</a>と<a href="https://policies.google.com/terms" target="_blank" rel="noopener">利用規約</a>が適用されます</div><style>.recaptchaDisclaimer {\n    font-size: 12px; line-height: 150%; margin-top: 10px;  display: block; text-align: center; }</style>'
        )
    : jQuery("html[lang='de-DE']").length > 0 &&
      jQuery(".wpcf7-form input[type='submit']")
        .parents(".form-group")
        .append(
          '<div class=\'recaptchaDisclaimer\'>Diese Website ist durch reCAPTCHA und die Google\n    <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener">Datenschutzrichtlinie</a> und \n    <a href="https://policies.google.com/terms?hl=de" target="_blank" rel="noopener">Servicebedingungen</a> anwenden.</div><style>.recaptchaDisclaimer {\n    font-size: 12px; line-height: 150%; margin-top: 10px;  display: block; text-align: center; }</style>'
        ),
  customTranslate(document.documentElement.lang);
const sliderContList = document.querySelectorAll("#customPostslider");
sliderContList.length > 0 &&
  sliderContList.forEach((e) => {
    const t = e.querySelectorAll(".customPostSlideGrid");
    t.length < 2 &&
      t.forEach((e) => {
        e.querySelectorAll(".postSlideNav button").forEach((e) => {
          e.style.display = "none";
        });
      });
  });
jQuery(document).ready(function () {
  (function fixGetInTouch() {
    jQuery("a.triggerContactusForm, .triggerContactusForm a")
      .attr("href", "javascript:void(0);")
      .removeAttr("target");
  })();
});
