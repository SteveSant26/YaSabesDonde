import type { Schema, Struct } from '@strapi/strapi';

export interface SiteHero extends Struct.ComponentSchema {
  collectionName: 'components_site_heroes';
  info: {
    displayName: 'Hero';
    icon: 'monitor';
  };
  attributes: {
    btnText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'site.hero': SiteHero;
    }
  }
}
