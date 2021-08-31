// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IArticleFields {
  /** title */
  title: string;

  /** slug */
  slug: string;

  /** metaKeywords */
  keyword: string;

  /** body */
  body: string;

  /** image */
  image: Asset;

  /** publishDate */
  publishDate: string;

  /** category */
  type: ITypes;

  /** tag */
  tag: ITags[];

  /** isLock */
  isLock?: boolean | undefined;

  /** metaDescription */
  description?: string | undefined;
}

/** ブログのコンテンツ */

export interface IArticle extends Entry<IArticleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'article';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IBookFields {
  /** title */
  title: string;

  /** description */
  description: string;

  /** image */
  image: Asset;

  /** link */
  link: string;

  /** tags */
  tags?: ITags[] | undefined;
}

/** 読んだ本 */

export interface IBook extends Entry<IBookFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'book';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ITagsFields {
  /** name */
  name: string;

  /** slug */
  slug: string;

  /** category */
  type: ITypes;
}

/** ブログのタグ */

export interface ITags extends Entry<ITagsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'tags';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ITypesFields {
  /** name */
  name: string;

  /** slug */
  slug?: string | undefined;
}

/** ブログのカテゴリ */

export interface ITypes extends Entry<ITypesFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'types';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IWorkFields {
  /** name */
  name: string;

  /** link */
  link: string;

  /** description */
  description: string;

  /** image */
  image: Asset;
}

/** 開発物 */

export interface IWork extends Entry<IWorkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'work';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE = 'article' | 'book' | 'tags' | 'types' | 'work';

export type LOCALE_CODE = 'ja';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'ja';
