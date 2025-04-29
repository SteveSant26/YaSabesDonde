import type { Schema, Struct } from '@strapi/strapi';

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
      'site.hero': SiteHero;
    }
  }
}
