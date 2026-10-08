import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { getOrders, updateOrderStatus } from '../services/orderService';
import {
  Sprout,
  ShoppingBag,
  Clock,
  CheckCircle2,
  Truck,
  XCircle,
  LogOut,
  RefreshCw,
  Search,
  Eye,
  Filter
} from 'lucide-react';

const AdminDashboardPage = () => {
  const { adminUser, logoutAdmin, isAdmin } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }
    fetchOrdersData();
  }, [isAdmin]);

  const fetchOrdersData = async () => {
    setLoading(true);
    const data = await getOrders();
    setOrders(data);
    setLoading(false);
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
      );
      addToast(`Order ${orderId} updated to ${newStatus}`, 'success');
    } catch (err) {
      addToast('Failed to update order status', 'error');
    }
  };

  // Metrics
  const totalOrdersCount = orders.length;
  const newOrdersCount = orders.filter((o) => o.status === 'NEW').length;
  const contactedOrdersCount = orders.filter((o) => o.status === 'CONTACTED').length;
  const confirmedOrdersCount = orders.filter((o) => o.status === 'CONFIRMED').length;
  const deliveredOrdersCount = orders.filter((o) => o.status === 'DELIVERED').length;
  const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);

  const filteredOrders = statusFilter === 'ALL'
    ? orders
    : orders.filter((o) => o.status === statusFilter);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'NEW':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'CONTACTED':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'CONFIRMED':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'OUT_FOR_DELIVERY':
        return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      case 'DELIVERED':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-300';
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-stone-900">
      
      {/* Admin Navbar */}
      <header className="bg-parivara-950 text-white border-b border-parivara-900 py-4 px-6 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-parivara-800 flex items-center justify-center text-amberGold-400">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wide block leading-none">PARIVARA Admin</span>
              <span className="text-[10px] text-stone-400 font-semibold">Business Order Management</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden sm:inline text-stone-300">Logged in as {adminUser?.email}</span>
            <button
              onClick={() => {
                logoutAdmin();
                navigate('/admin/login');
              }}
              className="bg-parivara-900 hover:bg-parivara-800 text-stone-200 px-3 py-2 rounded-lg flex items-center gap-1.5 border border-parivara-800"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
            <Link to="/" className="text-amberGold-400 hover:underline">
              View Website →
            </Link>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-soft">
            <span className="text-xs font-bold text-stone-500 uppercase block">Total Orders</span>
            <span className="text-2xl font-extrabold text-stone-900 mt-1 block">{totalOrdersCount}</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-blue-200 shadow-soft">
            <span className="text-xs font-bold text-blue-600 uppercase block">New Orders</span>
            <span className="text-2xl font-extrabold text-blue-900 mt-1 block">{newOrdersCount}</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-soft">
            <span className="text-xs font-bold text-amber-600 uppercase block">Contacted</span>
            <span className="text-2xl font-extrabold text-amber-900 mt-1 block">{contactedOrdersCount}</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-purple-200 shadow-soft">
            <span className="text-xs font-bold text-purple-600 uppercase block">Confirmed</span>
            <span className="text-2xl font-extrabold text-purple-900 mt-1 block">{confirmedOrdersCount}</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-soft">
            <span className="text-xs font-bold text-emerald-600 uppercase block">Delivered</span>
            <span className="text-2xl font-extrabold text-emerald-900 mt-1 block">{deliveredOrdersCount}</span>
          </div>

          <div className="bg-parivara-900 text-white p-4 rounded-2xl border border-parivara-800 shadow-soft col-span-2 sm:col-span-1">
            <span className="text-xs font-bold text-amberGold-400 uppercase block">Total Revenue</span>
            <span className="text-2xl font-extrabold text-white mt-1 block">₹{totalRevenue}</span>
          </div>
        </div>

        {/* Orders Table Container */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-soft overflow-hidden">
          
          {/* Controls Header */}
          <div className="p-6 border-b border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-stone-900 font-sans">Customer Orders</h2>
              <span className="text-xs text-stone-500">Manage order statuses and customer details</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchOrdersData}
                className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl"
                title="Refresh Orders"
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold">
                <Filter className="w-4 h-4 text-stone-400" />
                <span>Filter:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-stone-50 border border-stone-300 rounded-xl px-3 py-1.5 text-xs font-bold text-stone-800"
                >
                  <option value="ALL">All Statuses ({totalOrdersCount})</option>
                  <option value="NEW">NEW</option>
                  <option value="CONTACTED">CONTACTED</option>
                  <option value="CONFIRMED">CONFIRMED</option>
                  <option value="OUT_FOR_DELIVERY">OUT_FOR_DELIVERY</option>
                  <option value="DELIVERED">DELIVERED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 text-stone-600 font-bold border-b border-stone-200 uppercase">
                <tr>
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">City</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-medium">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="p-8 text-center text-stone-500 font-semibold">
                      No orders found matching status "{statusFilter}".
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-stone-50/80 transition">
                      <td className="p-4 font-extrabold text-parivara-900">{order.id}</td>
                      <td className="p-4 font-bold text-stone-800">{order.customerName}</td>
                      <td className="p-4">
                        <a href={`tel:${order.phone}`} className="text-parivara-700 hover:underline">
                          {order.phone}
                        </a>
                      </td>
                      <td className="p-4">{order.city}</td>
                      <td className="p-4 font-extrabold text-stone-900">₹{order.totalAmount}</td>
                      <td className="p-4 text-stone-500">
                        {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'Today'}
                      </td>
                      <td className="p-4">
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          className={`px-2.5 py-1 rounded-lg border text-xs font-bold focus:outline-none ${getStatusBadgeClass(order.status)}`}
                        >
                          <option value="NEW">NEW</option>
                          <option value="CONTACTED">CONTACTED</option>
                          <option value="CONFIRMED">CONFIRMED</option>
                          <option value="OUT_FOR_DELIVERY">OUT_FOR_DELIVERY</option>
                          <option value="DELIVERED">DELIVERED</option>
                          <option value="CANCELLED">CANCELLED</option>
                        </select>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="bg-stone-100 hover:bg-parivara-100 text-stone-700 hover:text-parivara-800 font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 ml-auto"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Details</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>

      </main>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-stone-100 pb-3">
              <h3 className="font-extrabold text-lg text-stone-900">Order {selectedOrder.id}</h3>
              <button onClick={() => setSelectedOrder(null)} className="text-stone-400 hover:text-stone-700 font-bold">
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs text-stone-700">
              <p><strong>Customer:</strong> {selectedOrder.customerName}</p>
              <p><strong>Phone:</strong> {selectedOrder.phone}</p>
              <p><strong>Email:</strong> {selectedOrder.email || 'N/A'}</p>
              <p><strong>Address:</strong> {selectedOrder.address}, {selectedOrder.city} - {selectedOrder.pincode}</p>
              {selectedOrder.notes && <p><strong>Notes:</strong> {selectedOrder.notes}</p>}
            </div>

            <div className="pt-3 border-t border-stone-200">
              <h4 className="font-bold text-stone-900 text-xs mb-2">Order Items:</h4>
              <div className="space-y-2 text-xs">
                {selectedOrder.items && selectedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between p-2 bg-stone-50 rounded-lg">
                    <span>{item.productName || item.name} ({item.weight || ''}) x {item.quantity}</span>
                    <strong className="text-stone-900">₹{item.itemTotal || (item.price * item.quantity)}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-stone-200 pt-3 text-sm font-extrabold">
              <span>Total:</span>
              <span className="text-parivara-900 text-base">₹{selectedOrder.totalAmount}</span>
            </div>

            <button
              onClick={() => setSelectedOrder(null)}
              className="w-full bg-stone-900 text-white font-bold py-2.5 rounded-xl text-xs"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboardPage;
