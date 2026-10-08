import api from './api';

export const createOrder = async (orderPayload) => {
  try {
    const res = await api.post('/orders', orderPayload);
    return res.data;
  } catch (err) {
    console.log('Backend API offline. Storing order in local demo storage.');
    const mockOrder = {
      id: 'PAR-' + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
      status: 'NEW',
      ...orderPayload,
    };
    const existing = JSON.parse(localStorage.getItem('parivara_orders') || '[]');
    existing.unshift(mockOrder);
    localStorage.setItem('parivara_orders', JSON.stringify(existing));
    return mockOrder;
  }
};

export const getOrders = async () => {
  try {
    const res = await api.get('/admin/orders');
    return res.data;
  } catch (err) {
    return JSON.parse(localStorage.getItem('parivara_orders') || '[]');
  }
};

export const updateOrderStatus = async (orderId, status) => {
  try {
    const res = await api.put(`/admin/orders/${orderId}/status`, { status });
    return res.data;
  } catch (err) {
    const existing = JSON.parse(localStorage.getItem('parivara_orders') || '[]');
    const updated = existing.map((o) => (o.id === orderId ? { ...o, status } : o));
    localStorage.setItem('parivara_orders', JSON.stringify(updated));
    return { id: orderId, status };
  }
};
