import api from './api';

export const submitContactEnquiry = async (contactPayload) => {
  try {
    const res = await api.post('/contact', contactPayload);
    return res.data;
  } catch (err) {
    console.log('Backend API offline. Saving message in local demo storage.');
    const mockMessage = {
      id: 'MSG-' + Math.floor(1000 + Math.random() * 9000),
      createdAt: new Date().toISOString(),
      ...contactPayload,
    };
    const existing = JSON.parse(localStorage.getItem('parivara_messages') || '[]');
    existing.unshift(mockMessage);
    localStorage.setItem('parivara_messages', JSON.stringify(existing));
    return mockMessage;
  }
};
