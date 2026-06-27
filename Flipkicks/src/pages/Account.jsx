import { useState } from "react";
import {
  User,
  Package,
  ShoppingBag,
  Settings,
  Bell,
  Shield,
  Edit3,
  MapPin,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  ChevronRight,
  Camera,
  Star,
  TrendingUp,
  DollarSign,
} from "lucide-react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import "../pages-css/Account.css";

const avatar = "https://api.dicebear.com/9.x/adventurer/svg?seed=VaibhavKapoor&backgroundColor=dbeafe&skinColor=f2d3b1&hair=short01&hairColor=2c1503&eyes=variant07&mouth=variant26";

const tabs = [
  { id: "profile",   label: "Profile",          icon: <User size={18} /> },
  { id: "listings",  label: "My Listings",       icon: <Package size={18} /> },
  { id: "orders",    label: "Purchase History",  icon: <ShoppingBag size={18} /> },
  { id: "settings",  label: "Settings",          icon: <Settings size={18} /> },
];

const mockListings = [
  { id: 1, name: "Nike Air Jordan 1 Retro High OG", brand: "Nike", size: "UK 9", price: 320, condition: "Deadstock", status: "active",  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80" },
  { id: 2, name: "Adidas Yeezy Boost 350 V2",       brand: "Adidas", size: "UK 10", price: 280, condition: "Like New", status: "sold",    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&q=80" },
  { id: 3, name: "New Balance 550 White Green",     brand: "New Balance", size: "UK 9", price: 150, condition: "Good",     status: "active",  image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=300&q=80" },
  { id: 4, name: "Nike Dunk Low Panda",             brand: "Nike", size: "UK 8", price: 200, condition: "Deadstock", status: "pending", image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=300&q=80" },
];

const mockOrders = [
  { id: "#FK-10482", name: "Air Force 1 '07 White",          brand: "Nike",   size: "UK 9",  price: 110, date: "12 Jun 2026", status: "delivered" },
  { id: "#FK-10371", name: "Samba OG White Black",           brand: "Adidas", size: "UK 9",  price: 130, date: "4 May 2026",  status: "delivered" },
  { id: "#FK-10290", name: "Gel-Kayano 14 Silver Cream",     brand: "Asics",  size: "UK 9",  price: 190, date: "18 Apr 2026", status: "delivered" },
  { id: "#FK-10109", name: "Air Jordan 4 Retro Bred",        brand: "Nike",   size: "UK 9",  price: 380, date: "2 Mar 2026",  status: "delivered" },
];

const statusConfig = {
  active:   { label: "Active",   icon: <CheckCircle size={13} />, className: "status-active"   },
  sold:     { label: "Sold",     icon: <CheckCircle size={13} />, className: "status-sold"     },
  pending:  { label: "Pending",  icon: <Clock       size={13} />, className: "status-pending"  },
  delivered:{ label: "Delivered",icon: <CheckCircle size={13} />, className: "status-delivered"},
};

function ProfileTab() {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name:    "Vaibhav Kapoor",
    email:   "vaibhav@flipkicks.com",
    phone:   "+44 7911 123456",
    address: "12 Sneaker Lane, London, E1 6RF",
    bio:     "Lifelong sneakerhead. Collecting since 2018. Specialise in Nike and Adidas classics.",
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = (e) => {
    e.preventDefault();
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="acc-panel">
      <div className="acc-panel-header">
        <h2>Personal Information</h2>
        {!editing && (
          <button className="acc-edit-btn" onClick={() => setEditing(true)}>
            <Edit3 size={15} /> Edit Profile
          </button>
        )}
      </div>

      {saved && (
        <div className="acc-toast">
          <CheckCircle size={16} /> Profile saved successfully.
        </div>
      )}

      <form className="acc-form" onSubmit={handleSave}>
        <div className="acc-form-row">
          <div className="acc-field">
            <label><User size={14} /> Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} disabled={!editing} />
          </div>
          <div className="acc-field">
            <label><Mail size={14} /> Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} disabled={!editing} />
          </div>
        </div>
        <div className="acc-form-row">
          <div className="acc-field">
            <label><Phone size={14} /> Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} disabled={!editing} />
          </div>
          <div className="acc-field">
            <label><MapPin size={14} /> Address</label>
            <input name="address" value={form.address} onChange={handleChange} disabled={!editing} />
          </div>
        </div>
        <div className="acc-field">
          <label><User size={14} /> Bio</label>
          <textarea name="bio" value={form.bio} onChange={handleChange} disabled={!editing} rows={3} />
        </div>
        {editing && (
          <div className="acc-form-actions">
            <button type="button" className="acc-cancel-btn" onClick={() => setEditing(false)}>Cancel</button>
            <button type="submit" className="acc-save-btn">Save Changes</button>
          </div>
        )}
      </form>
    </div>
  );
}

function ListingsTab() {
  return (
    <div className="acc-panel">
      <div className="acc-panel-header">
        <h2>My Listings</h2>
        <span className="acc-count">{mockListings.length} pairs</span>
      </div>
      <div className="acc-listings-grid">
        {mockListings.map((item) => {
          const s = statusConfig[item.status];
          return (
            <div key={item.id} className="acc-listing-card">
              <div className="acc-listing-img">
                <img src={item.image} alt={item.name} />
                <span className={`acc-status-badge ${s.className}`}>{s.icon}{s.label}</span>
              </div>
              <div className="acc-listing-info">
                <span className="acc-listing-brand">{item.brand}</span>
                <h4>{item.name}</h4>
                <div className="acc-listing-meta">
                  <span>{item.size}</span>
                  <span>{item.condition}</span>
                </div>
                <div className="acc-listing-footer">
                  <strong>£{item.price}</strong>
                  <button className="acc-view-btn">Manage <ChevronRight size={14} /></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function OrdersTab() {
  return (
    <div className="acc-panel">
      <div className="acc-panel-header">
        <h2>Purchase History</h2>
        <span className="acc-count">{mockOrders.length} orders</span>
      </div>
      <div className="acc-orders-list">
        {mockOrders.map((order) => {
          const s = statusConfig[order.status];
          return (
            <div key={order.id} className="acc-order-row">
              <div className="acc-order-left">
                <span className="acc-order-id">{order.id}</span>
                <div>
                  <h4>{order.name}</h4>
                  <div className="acc-order-meta">
                    <span>{order.brand}</span>
                    <span>·</span>
                    <span>{order.size}</span>
                    <span>·</span>
                    <Calendar size={12} />
                    <span>{order.date}</span>
                  </div>
                </div>
              </div>
              <div className="acc-order-right">
                <strong>£{order.price}</strong>
                <span className={`acc-status-badge ${s.className}`}>{s.icon}{s.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SettingsTab() {
  const [notifications, setNotifications] = useState({
    orderUpdates:   true,
    newMessages:    true,
    priceDrops:     false,
    newsletter:     false,
    twoFactor:      true,
  });

  const toggle = (key) => setNotifications((p) => ({ ...p, [key]: !p[key] }));

  const rows = [
    { key: "orderUpdates", icon: <Bell size={18} />,    label: "Order Updates",    desc: "Get notified when your order status changes." },
    { key: "newMessages",  icon: <Mail size={18} />,    label: "New Messages",     desc: "Receive alerts for buyer and seller messages." },
    { key: "priceDrops",   icon: <TrendingUp size={18}/>,label: "Price Drops",    desc: "Alert me when a watchlisted pair drops in price." },
    { key: "newsletter",   icon: <Star size={18} />,    label: "Newsletter",       desc: "Weekly drops, releases, and community news." },
    { key: "twoFactor",    icon: <Shield size={18} />,  label: "Two-Factor Auth",  desc: "Add an extra layer of security to your account." },
  ];

  return (
    <div className="acc-panel">
      <div className="acc-panel-header">
        <h2>Settings</h2>
      </div>
      <div className="acc-settings-list">
        {rows.map(({ key, icon, label, desc }) => (
          <div key={key} className="acc-setting-row">
            <div className="acc-setting-icon">{icon}</div>
            <div className="acc-setting-text">
              <h4>{label}</h4>
              <p>{desc}</p>
            </div>
            <button
              className={`acc-toggle ${notifications[key] ? "on" : ""}`}
              onClick={() => toggle(key)}
              aria-label={label}
            >
              <span />
            </button>
          </div>
        ))}
      </div>

      <div className="acc-danger-zone">
        <h3>Danger Zone</h3>
        <button className="acc-danger-btn">Delete Account</button>
      </div>
    </div>
  );
}

function Account() {
  const [activeTab, setActiveTab] = useState("profile");

  const stats = [
    { icon: <Package size={20} />,    label: "Listings",    value: "4"     },
    { icon: <DollarSign size={20} />, label: "Total Sold",  value: "£890"  },
    { icon: <ShoppingBag size={20}/>, label: "Purchased",   value: "4"     },
    { icon: <Star size={20} />,       label: "Rating",      value: "4.9"   },
  ];

  return (
    <>
      <Navbar />

      <section className="account-page">

        {/* ── Profile Header ── */}
        <div className="acc-header-card">
          <div className="acc-avatar-wrap">
            <img src={avatar} alt="Vaibhav Kapoor" className="acc-avatar" />
            <button className="acc-avatar-edit" aria-label="Change photo">
              <Camera size={14} />
            </button>
          </div>
          <div className="acc-header-info">
            <h1>Vaibhav Kapoor</h1>
            <p>vaibhav@flipkicks.com</p>
            <div className="acc-header-badges">
              <span className="acc-badge-verified"><CheckCircle size={12} /> Verified Seller</span>
              <span className="acc-badge-member"><Calendar size={12} /> Member since Jan 2024</span>
            </div>
          </div>
          <div className="acc-header-stats">
            {stats.map((s, i) => (
              <div key={i} className="acc-header-stat">
                <div className="acc-header-stat-icon">{s.icon}</div>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Body ── */}
        <div className="acc-body">

          {/* Sidebar */}
          <aside className="acc-sidebar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`acc-tab ${activeTab === tab.id ? "acc-tab-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
                <ChevronRight size={15} className="acc-tab-arrow" />
              </button>
            ))}
          </aside>

          {/* Content */}
          <div className="acc-content">
            {activeTab === "profile"  && <ProfileTab />}
            {activeTab === "listings" && <ListingsTab />}
            {activeTab === "orders"   && <OrdersTab />}
            {activeTab === "settings" && <SettingsTab />}
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Account;
