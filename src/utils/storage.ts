export type Category = {
  id: string;
  name: string;
  order: number;
};

export type MenuItem = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  available: boolean;
  vegetarian: boolean;
  spicy: boolean;
  order: number;
};

export type RestaurantData = {
  version?: number;
  restaurant: {
    name: string;
    tagline: string;
    whatsapp: string;
    address: string;
    hours: string;
    instagram: string;
    facebook: string;
  };
  categories: Category[];
  items: MenuItem[];
};

export type OrderItem = {
  id: string; // id of the menu item
  name: string;
  qty: number;
  unitPrice: number;
  price: number;
};

export type OrderStatus = "pending" | "preparing" | "ready" | "served";

export type Order = {
  id: string;
  tableNumber: string;
  items: OrderItem[];
  note: string;
  total: number;
  status: OrderStatus;
  timestamp: number;
  statusUpdatedAt: number;
};

const DEFAULT_DATA: RestaurantData = {
  version: 2,
  restaurant: {
    name: "Maharaja Lounge & Fine Dining",
    tagline: "Voyage en Inde au cœur de Lomé",
    whatsapp: "+22891910101",
    address: "1er étage, Immeuble RAMCO, Avenue du 24 Janvier, Assivito, Lomé",
    hours: "7j/7 · 11h00–15h00 & 18h00–23h00",
    instagram: "https://instagram.com/maharajalome",
    facebook: "https://facebook.com/maharajalome"
  },
  categories: [
    { id: "cat_1", name: "Entrées", order: 0 },
    { id: "cat_2", name: "Currys", order: 1 },
    { id: "cat_3", name: "Biryani", order: 2 },
    { id: "cat_4", name: "Végétarien", order: 3 },
    { id: "cat_5", name: "Naan & Pain", order: 4 },
    { id: "cat_6", name: "Thali Spéciaux", order: 5 },
    { id: "cat_7", name: "Desserts", order: 6 },
    { id: "cat_8", name: "Boissons", order: 7 }
  ],
  items: [
    { id: "item_1", categoryId: "cat_2", name: "Butter Chicken", description: "Poulet mariné aux épices, sauce tomate crémeuse, beurre clarifié, coriandre fraîche.", price: 8500, imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400", available: true, vegetarian: false, spicy: true, order: 0 },
    { id: "item_2", categoryId: "cat_3", name: "Biryani Royal", description: "Riz basmati parfumé au safran, viande tendre marinée, épices entières, oignon frit.", price: 9500, imageUrl: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400", available: true, vegetarian: false, spicy: false, order: 0 },
    { id: "item_3", categoryId: "cat_5", name: "Cheese Naan", description: "Pain tandoor au fromage fondu, beurre clarifié, herbes fraîches.", price: 2500, imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", available: true, vegetarian: true, spicy: false, order: 0 },
    { id: "item_4", categoryId: "cat_5", name: "Garlic Naan", description: "Pain tandoor à l'ail confit, coriandre, beurre de buffle.", price: 2000, imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400", available: true, vegetarian: true, spicy: false, order: 1 },
    { id: "item_5", categoryId: "cat_6", name: "Thali Maharaja", description: "Plateau royal : curry du jour, riz basmati, naan, dhal, raita, chutney et dessert.", price: 13500, imageUrl: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400", available: true, vegetarian: false, spicy: false, order: 0 },
    { id: "item_6", categoryId: "cat_4", name: "Palak Paneer", description: "Fromage frais maison dans une sauce épinards aux épices douces.", price: 7500, imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", available: true, vegetarian: true, spicy: false, order: 0 },
    { id: "item_7", categoryId: "cat_2", name: "Gambas Masala", description: "Gambas royales sautées en sauce masala rouge, tomate, gingembre, piment vert.", price: 13000, imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", available: true, vegetarian: false, spicy: true, order: 1 }
  ]
};

export function getRestaurantData(): RestaurantData {
  try {
    const stored = localStorage.getItem("restaurantData");
    if (!stored) return DEFAULT_DATA;
    const parsed = JSON.parse(stored);
    if (!parsed || !parsed.restaurant || parsed.version !== 2) return DEFAULT_DATA;
    return parsed;
  } catch {
    return DEFAULT_DATA;
  }
}

export function saveRestaurantData(data: RestaurantData) {
  localStorage.setItem("restaurantData", JSON.stringify(data));
  window.dispatchEvent(new Event("storage"));
}

export function getOrders(): Order[] {
  try {
    return JSON.parse(localStorage.getItem("legrm_orders") || "[]");
  } catch {
    return [];
  }
}

export function saveOrders(orders: Order[]) {
  localStorage.setItem("legrm_orders", JSON.stringify(orders));
  window.dispatchEvent(new Event("storage"));
}

export function updateOrderStatus(orderId: string, newStatus: OrderStatus) {
  const orders = getOrders();
  const idx = orders.findIndex(o => o.id === orderId);
  if (idx !== -1) {
    orders[idx].status = newStatus;
    orders[idx].statusUpdatedAt = Date.now();
    saveOrders(orders);
  }
}

export function archiveServedOrders() {
  const cutoff = Date.now() - 2 * 60 * 60 * 1000;
  saveOrders(getOrders().filter(
    o => !(o.status === "served" && o.statusUpdatedAt < cutoff)
  ));
}

export function getCart(): OrderItem[] {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
}

export function saveCart(cart: OrderItem[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cart_updated"));
}

export function clearCart() {
  localStorage.removeItem("cart");
  window.dispatchEvent(new Event("cart_updated"));
}
