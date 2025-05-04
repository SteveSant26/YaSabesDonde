import type { Schema, Struct } from '@strapi/strapi';

export interface OrderOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_order_order_items';
  info: {
    displayName: 'order-item';
  };
  attributes: {
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    quantity: Schema.Attribute.Integer;
  };
}

export interface ProductAmountProducts extends Struct.ComponentSchema {
  collectionName: 'components_product_amount_products';
  info: {
    displayName: 'products';
  };
  attributes: {};
}

export interface SiteHero extends Struct.ComponentSchema {
  collectionName: 'components_site_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'monitor';
  };
  attributes: {
    btnText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'files' | 'images' | 'videos'> &
      Schema.Attribute.Required;
    poster: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'order.order-item': OrderOrderItem;
      'product-amount.products': ProductAmountProducts;
      'site.hero': SiteHero;
    }
  }
}
