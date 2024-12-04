jQuery(document).ready(function ($) {
  if (jQuery("html[lang='ja']").length > 0) {
    if (jQuery("span.filter-reset-btn").length > 0) {
      jQuery("span.filter-reset-btn").text("すべてのフィルターをクリア");
      jQuery("span.filter-reset-btn").click(function () {
        setTimeout(function () {
          jQuery(".selected-taxonomy.industry-selected-taxonomy").text(
            "すべてのインダストリー"
          );
          jQuery(".selected-taxonomy.technology-domain-selected-taxonomy").text(
            "あらゆるテクノロジー領域"
          );
        }, 500);
      });
    }
    if (jQuery("input.blog-search").length > 0) {
      jQuery("input.blog-search").attr("placeholder", "事例を検索する");
    }
    if (jQuery("input[type='search']").length > 0) {
      jQuery("input[type='search']").attr("placeholder", "検索キーワード");
    }
    if (jQuery("div#loadMore a span").length > 0) {
      jQuery("div#loadMore a span").text("更に読み込む");
    }
    if (jQuery(".selected-taxonomy.industry-selected-taxonomy").length > 0) {
      jQuery(" .selected-taxonomy.industry-selected-taxonomy").text(
        "すべてのインダストリー"
      );
    }
    if (
      jQuery(".selected-taxonomy.technology-domain-selected-taxonomy").length >
      0
    ) {
      jQuery(".selected-taxonomy.technology-domain-selected-taxonomy").text(
        "あらゆるテクノロジー領域"
      );
    }
    //breadcrumb  trans
    if (jQuery("#csbreadcrumbs").length > 0) {
      let breadcrumbLink = jQuery("#csbreadcrumbs a");
      for (let i = 0; breadcrumbLink.length > i; i++) {
        if (breadcrumbLink[i].innerText.toLowerCase() == "home") {
          breadcrumbLink[i].innerText = "ホーム";
        }
        if (breadcrumbLink[i].innerText.toLowerCase() == "our thinking") {
          breadcrumbLink[i].innerText = "私たちの考え方";
        }
        if (breadcrumbLink[i].innerText.toLowerCase() == "case studies") {
          breadcrumbLink[i].innerText = "事例紹介";
        }
        if (breadcrumbLink[i].innerText.toLowerCase() == "news") {
          breadcrumbLink[i].innerText = "ニュース";
        }
        if (breadcrumbLink[i].innerText.toLowerCase() == "insights") {
          breadcrumbLink[i].innerText = "インサイト";
        }
      }
    }
    if (
      jQuery(
        "[data-elementor-type='archive'] .elementor-widget-theme-archive-title .elementor-heading-title"
      ).length > 0
    ) {
      let titleInner = jQuery(
        "[data-elementor-type='archive'] .elementor-widget-theme-archive-title .elementor-heading-title"
      )[0].innerText;
      let titleTrans = "";
      if (titleInner.includes("Technology")) {
        let titleTrans = titleInner.replace("Technology", "テクノロジー");
        jQuery(
          "[data-elementor-type='archive'] .elementor-widget-theme-archive-title .elementor-heading-title"
        )[0].innerText = titleTrans;
      } else if (titleInner.includes("Industry")) {
        let titleTrans = titleInner.replace("Industry", "インダストリー");
        jQuery(
          "[data-elementor-type='archive'] .elementor-widget-theme-archive-title .elementor-heading-title"
        )[0].innerText = titleTrans;
      }
    }
  }
  if (jQuery("html[lang='en']").length == 0) {
    const wpAdminBar = document.querySelector("#wpadminbar");

    if (wpAdminBar) {
      const siteNameSubWrapper = wpAdminBar.querySelector(
        "#wp-admin-bar-site-name .ab-sub-wrapper"
      );
      if (siteNameSubWrapper) {
        const dashboard = siteNameSubWrapper.querySelector(
          "li#wp-admin-bar-dashboard a"
        );
        if (dashboard) {
          dashboard.innerText = "Dashboard";
        }
        const themes = siteNameSubWrapper.querySelector(
          "li#wp-admin-bar-themes a"
        );
        if (themes) {
          themes.innerText = "Themes";
        }
        const widgets = siteNameSubWrapper.querySelector(
          "li#wp-admin-bar-widgets a"
        );
        if (widgets) {
          widgets.innerText = "Widgets";
        }
        const menus = siteNameSubWrapper.querySelector(
          "li#wp-admin-bar-menus a"
        );
        if (menus) {
          menus.innerText = "Menus";
        }
      }

      const customizeAdminBar = wpAdminBar.querySelector(
        "#wp-admin-bar-customize a"
      );
      if (customizeAdminBar) {
        customizeAdminBar.innerText = "Customize";
      }

      const newAdminBar = wpAdminBar.querySelector("#wp-admin-bar-new-content");
      if (newAdminBar) {
        const newAdminBarLabel = newAdminBar.querySelector(
          "a.ab-item span.ab-label"
        );
        if (newAdminBarLabel) {
          newAdminBarLabel.innerText = "New";
        }
        const newAdminBarSubWrapper =
          newAdminBar.querySelector(".ab-sub-wrapper");
        if (newAdminBarSubWrapper) {
          const post = newAdminBarSubWrapper.querySelector(
            "#wp-admin-bar-new-post a"
          );
          if (post) {
            post.innerText = "Post";
          }
          const media = newAdminBarSubWrapper.querySelector(
            "#wp-admin-bar-new-media a"
          );
          if (media) {
            media.innerText = "Media";
          }
          const page = newAdminBarSubWrapper.querySelector(
            "#wp-admin-bar-new-page a"
          );
          if (page) {
            page.innerText = "Page";
          }
          const landingPage = newAdminBarSubWrapper.querySelector(
            "#wp-admin-bar-new-e-landing-page a"
          );
          if (landingPage) {
            landingPage.innerText = "Landing Page";
          }
          const template = newAdminBarSubWrapper.querySelector(
            "#wp-admin-bar-new-elementor_library a"
          );
          if (template) {
            template.innerText = "Template";
          }
          const user = newAdminBarSubWrapper.querySelector(
            "#wp-admin-bar-new-user a"
          );
          if (user) {
            user.innerText = "User";
          }
        }
      }

      const editPageAdminBar = wpAdminBar.querySelector("#wp-admin-bar-edit");
      if (editPageAdminBar) {
        editPageAdminBar.querySelector(".ab-item").innerText = "Edit Page";
        const editPageAdminBarSubWrapper =
          editPageAdminBar.querySelector(".ab-sub-wrapper");
        if (editPageAdminBarSubWrapper) {
          editPageAdminBarSubWrapper.querySelector(
            "li#wp-admin-bar-duplicate_this a.ab-item"
          ).innerText = "Duplicate This as draft";
        }
      }

      const editElementorAdminBar = wpAdminBar.querySelector(
        "#wp-admin-bar-elementor_edit_page"
      );
      if (editElementorAdminBar) {
        editElementorAdminBar.querySelector(
          "a.ab-item span.elementor-edit-link-title"
        ).innerText = "Edit with Elementor";
      }

      const wpLogoAdminBarSubWrapper = wpAdminBar.querySelector(
        "#wp-admin-bar-wp-logo .ab-sub-wrapper"
      );

      if (wpLogoAdminBarSubWrapper) {
        const aboutWordpress = wpLogoAdminBarSubWrapper.querySelector(
          "#wp-admin-bar-about a.ab-item"
        );
        if (aboutWordpress) {
          aboutWordpress.innerText = "About Wordpresss";
        }

        const contribute = wpLogoAdminBarSubWrapper.querySelector(
          "#wp-admin-bar-contribute a.ab-item"
        );
        if (contribute) {
          contribute.innerText = "Get Involved";
        }

        const documentation = wpLogoAdminBarSubWrapper.querySelector(
          "#wp-admin-bar-documentation a.ab-item"
        );
        if (documentation) {
          documentation.innerText = "Documentation";
        }

        const support = wpLogoAdminBarSubWrapper.querySelector(
          "#wp-admin-bar-support-forums a.ab-item"
        );
        if (support) {
          support.innerText = "Support";
        }

        const feedback = wpLogoAdminBarSubWrapper.querySelector(
          "#wp-admin-bar-feedback a.ab-item"
        );
        if (feedback) {
          feedback.innerText = "Feedback";
        }
      }
    }
  }
  //Translation of categories.
  function translatePostCategoryNames() {
    var currentLanguage = document.documentElement.lang;
    var categoryTranslations = {
      ja: {
        News: "ニュース",
        Insights: "インサイト",
        "Case studies": "事例紹介",
        "Panel discussion": "パネルディスカッション",
        Resources: "資源",
      },
      "de-DE": {
        "Panel discussion": "Podiumsdiskussion",
        Resources: "Ressourcen",
      },
    };

    $(".customResourceGrid .cr-grid-item .cr-cat .category").each(function () {
      var categoryText = $(this).text().trim();
      var translatedCategoryName = categoryText;
      if (
        categoryTranslations[currentLanguage] &&
        categoryTranslations[currentLanguage][categoryText]
      ) {
        translatedCategoryName =
          categoryTranslations[currentLanguage][categoryText];
        console.log(categoryText, " got translate to ", translatedCategoryName);
      }
      $(this).text(translatedCategoryName);
    });
  }
  translatePostCategoryNames();
  function translateSliderCategoryNames() {
    var currentLanguage = document.documentElement.lang;
    var categoryTranslations = {
      ja: {
        News: "ニュース",
        Insights: "インサイト",
        "Case studies": "事例紹介",
        "Panel discussion": "パネルディスカッション",
        Resources: "資源",
      },
      "de-DE": {
        "Panel discussion": "Podiumsdiskussion",
        Resources: "Ressourcen",
      },
    };

    $(".customPostslider .postSlideDesc .cr-cat span").each(function () {
      var categoryText = $(this).text().trim();
      var translatedCategoryName = categoryText;
      if (
        categoryTranslations[currentLanguage] &&
        categoryTranslations[currentLanguage][categoryText]
      ) {
        translatedCategoryName =
          categoryTranslations[currentLanguage][categoryText];
      }
      $(this).text(translatedCategoryName);
    });
  }
  translateSliderCategoryNames();

  function translateReadmore() {
    const currentLanguage = document.documentElement.lang;
    if (currentLanguage == "ja") {
      $(".postSlideDescOuter .postReadmore span").each(function () {
        $(this).text("もっと読む");
      });
    } else if (currentLanguage == "de-DE") {
      $(".postSlideDescOuter .postReadmore span").each(function () {
        $(this).text("Mehr lesen");
      });
    }
  }
  translateReadmore();
  //End of document.ready
});
