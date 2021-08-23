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
          id: "60",
          name: "",
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
            text: data["tbyb_btn_text"],
            container: data["tbyb_btn_insert_container"],
          },
        },
        learnMoreModal: {
          title: "TRY AT HOME BEFORE YOU BUY",
          learnMoreLinkUrl: "http://www.luvostore.com.au/pages/about-blackcart",
          learnMoreLinkText: "Learn More",
          className: "blackcart_luvo_modal",
          tryBeforeYouBuyText: "Try Before You Buy",
          features: [
            {
              type: 0,
              title: "Pick a product",
              caption:
                "Add up to ${maxAmount} in unique items to your Try Before You Buy cart to try on at home for free.",
            },
            {
              type: 1,
              title: "Don't pay for items today, just try!",
              caption:
                "Make your living room a fitting room. Try at home within {tryDays} day{s:tryDays} of delivery with just a refundable deposit of ${deposit}.",
            },
            {
              type: 2,
              title: "If you love it, keep it!",
              caption:
                "If you love it, keep it. Your deposit goes towards items you keep",
            },
            {
              type: 3,
              title: "Need to make a return?",
              caption: "Shipping is prepaid with {carrier}",
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
          hiddenElements: [],
        },
        minicart: {
          targetSelector: ".cart_content",
          lineItem: {
            targetSelector: ".cart_content li.mini-cart__item",
            linePrice: { targetSelector: "strong.price" },
            tbybTag: {
              className: "bc-lineitem-learnmore testid-learn-more",
              insertPosition: "CONTAINER",
              targetSelector:
                ".cart_content li.mini-cart__item .mini-cart__item--content",
              container:
                ".cart_content li.mini-cart__item .mini-cart__item--content",
              size: "small",
              style: "outlined",
            },
            quantityControlsSelector: ".product-quantity-box ",
          },
          payNow: {
            targetSelector: "li.cart_subtotal",
            text: "span:not(.right, .money)",
            price: "span.right .money",
          },
          warningBanner: {
            className: "bc-mini-cart-warning testid-warning-banner",
            insertPosition: "AFTER",
            targetSelector:
              "header.search-enabled--true .cart_items.js-cart_items",
          },
        },
      },
    });
  }
})();
