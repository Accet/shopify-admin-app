export class Config {
  static instance;
  _config;

  constructor(config) {
    this.primaryColor = config.primary_color;
    this.secondaryColor = config.secondary_color;
    this.tag_color = config.tag_color;
    this.variant = config.variant;
    this.tbyb_btn_insert_position = config.tbyb_btn_insert_position;
    this.tbyb_btn_insert_container = config.tbyb_btn_insert_container;
    this.tbyb_btn_style = config.tbyb_btn_style;
    this.tbyb_btn_text = config.tbyb_btn_text || "Try Before You Buy";
    this.tbyb_lmm_shop_title = config.tbyb_lmm_shop_title;
    this.tbyb_lmm_shop_caption = config.tbyb_lmm_shop_caption;
    this.tbyb_lmm_try_caption = config.tbyb_lmm_try_caption;
    this.tbyb_lmm_try_title = config.tbyb_lmm_try_title;
    this.tbyb_lmm_keep_title = config.tbyb_lmm_keep_title;
    this.tbyb_lmm_keep_caption = config.tbyb_lmm_keep_caption;
    this.tbyb_lmm_return_title = config.tbyb_lmm_return_title;
    this.tbyb_lmm_return_caption = config.tbyb_lmm_return_caption;

    this._config = {
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
            primary: this.primaryColor,
            secondary: this.secondaryColor,
          },
          variant: this.variant,
        },
        productDetailPage: {
          tbybBtn: {
            targetSelector: 'button[name="add"]',
            style: this.tbyb_btn_style,
            insertPosition: this.tbyb_btn_insert_position,
            container: this.tbyb_btn_insert_container,
            text: this.tbyb_btn_text,
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
              title: this.tbyb_lmm_shop_title,
              caption: this.tbyb_lmm_shop_caption,
            },
            {
              type: 1,
              title: this.tbyb_lmm_try_title,
              caption: this.tbyb_lmm_try_caption,
            },
            {
              type: 2,
              title: this.tbyb_lmm_keep_title,
              caption: this.tbyb_lmm_keep_caption,
            },
            {
              type: 3,
              title: this.tbyb_lmm_return_title,
              caption: this.tbyb_lmm_return_caption,
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
              color: this.tag_color,
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
          checkoutBtn: {
            targetSelector: "test some",
            insertPosition: "AFTER",
          },
        },
      },
    };
  }

  static getInstance = (config) => {
    if (!this.instance) {
      this.instance = new Config(config);
    }
    return this.instance;
  };

  get config() {
    return this._config;
  }
}
