// import BlackCartShopify from "@blackcart/shopify";

(function () {
  if (!window.tbyb) {
    let data = {};
    try {
      const storage = JSON.parse(localStorage.getItem(`tbyb`));
      if (storage) {
        data = storage;
      }
    } catch (e) {
      console.error(
        "Error is occurred while retrieving data from storage: ",
        e
      );
    }
    // localStorage.setItem("tbyb", JSON.stringify({}));
    window.tbyb = new BlackCartShopify({
      rules: {
        minAmount: 10000,
        maxAmount: 100000,
        minCount: 1,
        deposit: 2000,
        restockingFee: 0,
        tryDays: 10,
        maxCountPerItem: 1,
      },
      implementation: {
        merchantDetails: {
          id: "1",
          name: "Dawn",
        },
        autoOptIn: false,
        useCustomPricing: false,
        priceFormat: "MINOR",
        currency: "CAD",
      },
      elements: {
        theme: {
          brandColors: {
            primary: data["primaryColor"],
            secondary: data["secondaryColor"],
          },
          variant: data["variant"],
        },
        productDetailPage: {
          tbybBtn: {
            targetSelector: 'button[name="add"]',
            style: data["tbyb_btn_style"],
            insertPosition: data["tbyb_btn_insert_position"],
            container: data["tbyb_btn_insert_container"],
            text: data["tbyb_btn_text"],
          },
        },
        learnMoreModal: {
          title: "TRY AT HOME BEFORE YOU BUY",
          learnMoreLinkUrl: "https://blackcart.com",
          learnMoreLinkText: "Learn More",
          className: "blackcart_luvo_modal",
          tryBeforeYouBuyText: "Try Before You Buy",
          features: [
            {
              type: 0,
              title: data["tbyb_lmm_shop_title"],
              caption: data["tbyb_lmm_shop_caption"],
            },
            {
              type: 1,
              title: data["tbyb_lmm_try_title"],
              caption: data["tbyb_lmm_try_caption"],
            },
            {
              type: 2,
              title: data["tbyb_lmm_keep_title"],
              caption: data["tbyb_lmm_keep_caption"],
            },
            {
              type: 3,
              title: data["tbyb_lmm_return_title"],
              caption: data["tbyb_lmm_return_caption"],
            },
          ],
        },
        cartPage: {
          targetSelector: "#MainContent",
          lineItem: {
            targetSelector: ".cart-item",
            linePrice: { targetSelector: ".cart-item__prices span.price" },
            tbybTag: {
              insertPosition: "AFTER",
              targetSelector: ".cart-item__name",
              style: "outlined",
              size: "regular",
            },
            lineTotal: {
              targetSelector: ".cart-item__totals span.price",
            },
            quantityControlsSelector: 'button[name="plus"]',
          },
          payNow: {
            price: ".totals__subtotal-value",
            targetSelector: ".totals",
            text: ".totals__subtotal",
          },
          warningBanner: {
            className: "bc-cart-warning",
            insertPosition: "BEFORE",
            targetSelector: ".medium-down--one-whole",
          },
          hiddenElements: [
            ".cart_savings",
            ".blackcart__cartPage-lineItem .price_total",
          ],
        },
      },
    });
  }
})();
