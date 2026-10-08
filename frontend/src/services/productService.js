import api from './api';
import { INITIAL_PRODUCTS } from '../data/products';

export const getProducts = async () => {
  try {
    const res = await api.get('/products');
    return res.data;
  } catch (err) {
    console.log('Backend API offline/unreachable. Using local fallback product dataset.');
    return INITIAL_PRODUCTS;
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const res = await api.get(`/products/${slug}`);
    return res.data;
  } catch (err) {
    const local = INITIAL_PRODUCTS.find((p) => p.slug === slug);
    if (local) return local;
    throw new Error('Product not found');
  }
};

export const searchProducts = async (query) => {
  try {
    const res = await api.get(`/products/search?query=${encodeURIComponent(query)}`);
    return res.data;
  } catch (err) {
    const q = query.toLowerCase();
    return INITIAL_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }
};
