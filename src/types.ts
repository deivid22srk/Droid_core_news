/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Category = 'Emuladores' | 'Jogos' | 'Hardware' | 'Tutoriais' | 'Reviews';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  author: string;
  date: string;
  imageUrl: string;
  readTime: string;
  isFeatured?: boolean;
}

export interface AdZone {
  id: string;
  label: string;
  size: 'banner' | 'rectangle' | 'native';
}
