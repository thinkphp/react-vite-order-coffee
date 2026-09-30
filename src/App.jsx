import { useEffect, useMemo, useRef, useState } from "react";

const products = [
  {
    id: 1,
    name: "Espresso No. 1",
    category: "Espresso",
    description: "Dark chocolate, hazelnut, and a hint of caramel.",
    price: 14,
    size: "30 ml",
    tag: "House classic",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85",
    tone: "espresso",
  },
  {
    id: 2,
    name: "Oat Milk Latte",
    category: "With milk",
    description: "Smooth espresso, oat milk, and notes of biscuit.",
    price: 22,
    size: "250 ml",
    tag: "Your favorite",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    tone: "latte",
  },
  {
    id: 3,
    name: "Flat White",
    category: "With milk",
    description: "Double espresso, silky microfoam, and a bold taste.",
    price: 20,
    size: "180 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85",
    tone: "flat",
  },
  {
    id: 4,
    name: "Cold Brew Tonic",
    category: "Iced",
    description: "18-hour cold brew, floral tonic, and fresh orange.",
    price: 24,
    size: "300 ml",
    tag: "New on the menu",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
    tone: "cold",
  },
  {
    id: 5,
    name: "Cappuccino",
    category: "With milk",
    description: "The perfect balance of espresso and silky foam.",
    price: 19,
    size: "200 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85",
    tone: "cappuccino",
  },
  {
    id: 6,
    name: "Matcha Cloud",
    category: "Specialties",
    description: "Ceremonial-grade matcha, cold milk, and natural vanilla.",
    price: 25,
    size: "280 ml",
    tag: "Coffee-free",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85",
    tone: "matcha",
  },
  {
    id: 7,
    name: "Caramel Macchiato",
    category: "With milk",
    description: "Velvety milk, rich espresso, and house-made caramel.",
    price: 23,
    size: "250 ml",
    tag: "Guest favorite",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85",
    tone: "macchiato",
  },
  {
    id: 8,
    name: "Vanilla Cappuccino",
    category: "With milk",
    description: "Classic cappuccino with a touch of fragrant vanilla.",
    price: 21,
    size: "200 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85",
    tone: "vanilla",
  },
  {
    id: 9,
    name: "Caramel Latte",
    category: "With milk",
    description: "A mellow latte finished with buttery caramel.",
    price: 24,
    size: "280 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    tone: "caramel",
  },
  {
    id: 10,
    name: "Mocha",
    category: "With milk",
    description: "Double espresso, dark chocolate, and steamed milk.",
    price: 24,
    size: "250 ml",
    tag: "Chocolate lover",
    image:
      "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=900&q=85",
    tone: "mocha",
  },
  {
    id: 11,
    name: "Cortado",
    category: "With milk",
    description: "Equal parts espresso and warm, silky milk.",
    price: 17,
    size: "120 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85",
    tone: "cortado",
  },
  {
    id: 12,
    name: "Ristretto",
    category: "Espresso",
    description: "A short, concentrated shot with a sweet finish.",
    price: 14,
    size: "20 ml",
    tag: "Bold & bright",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85",
    tone: "ristretto",
  },
  {
    id: 13,
    name: "Americano",
    category: "Espresso",
    description: "Espresso topped with hot water for a smooth finish.",
    price: 16,
    size: "220 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=900&q=85",
    tone: "americano",
  },
  {
    id: 14,
    name: "Honey Cinnamon Latte",
    category: "With milk",
    description: "Espresso, steamed milk, local honey, and cinnamon.",
    price: 24,
    size: "250 ml",
    tag: "Seasonal",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    tone: "honey",
  },
  {
    id: 15,
    name: "Iced Vanilla Latte",
    category: "Iced",
    description: "Chilled espresso, fresh milk, and natural vanilla.",
    price: 23,
    size: "300 ml",
    tag: "Cool favorite",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
    tone: "iced-vanilla",
  },
  {
    id: 16,
    name: "Espresso on Ice",
    category: "Iced",
    description: "A double shot poured over ice. Crisp and refreshing.",
    price: 18,
    size: "200 ml",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
    tone: "iced-espresso",
  },
  {
    id: 17,
    name: "Iced Matcha Latte",
    category: "Iced",
    description: "Stone-ground matcha shaken with cold, creamy milk.",
    price: 25,
    size: "300 ml",
    tag: "Plant-powered",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85",
    tone: "iced-matcha",
  },
  {
    id: 18,
    name: "Dirty Chai",
    category: "Specialties",
    description: "Spiced chai and a shot of espresso, served over ice.",
    price: 26,
    size: "280 ml",
    tag: "Barista's pick",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
    tone: "chai",
  },
];

const categories = ["All", "Espresso", "With milk", "Iced", "Specialties"];
const FREE_DELIVERY_THRESHOLD = 50;
const DELIVERY_FEE = 5;
const formatPrice = (amount) =>
  new Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "RON",
    maximumFractionDigits: 0,
  }).format(amount);

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36" fill="none">
        <path
          d="M7 15h19l-2 15H9L7 15Z"
          fill="currentColor"
        />
        <path
          d="M26 18h2.5a3.5 3.5 0 0 1 0 7H25M12 11V7h4v8m2-4V4h5v11m-14 4h16M11 33h14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function App() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [notice, setNotice] = useState("");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [fulfillment, setFulfillment] = useState("pickup");
  const [orderConfirmation, setOrderConfirmation] = useState(null);
  const notificationTimer = useRef(null);

  const visibleProducts = useMemo(
    () =>
      category === "All"
        ? products
        : products.filter((product) => product.category === category),
    [category],
  );
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee =
    fulfillment === "delivery" && total < FREE_DELIVERY_THRESHOLD
      ? DELIVERY_FEE
      : 0;

  useEffect(
    () => () => {
      window.clearTimeout(notificationTimer.current);
    },
    [],
  );

  useEffect(() => {
    if (!checkoutOpen) return undefined;
    function closeOnEscape(event) {
      if (event.key === "Escape") setCheckoutOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [checkoutOpen]);

  function showNotice(message) {
    setNotice(message);
    window.clearTimeout(notificationTimer.current);
    notificationTimer.current = window.setTimeout(() => setNotice(""), 2600);
  }

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      return existing
        ? current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...current, { ...product, quantity: 1 }];
    });
    showNotice(`${product.name} added to your cart`);
  }

  function changeQuantity(id, amount) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function checkout(event) {
    event.preventDefault();
    if (!cart.length) return;
    const formData = new FormData(event.currentTarget);
    const orderItems = cart.map((item) => ({ ...item }));
    const subtotal = total;
    const orderFulfillment = formData.get("fulfillment");
    const orderDeliveryFee =
      orderFulfillment === "delivery" && subtotal < FREE_DELIVERY_THRESHOLD
        ? DELIVERY_FEE
        : 0;
    setOrderConfirmation({
      number: `FNB-${Date.now().toString().slice(-6)}`,
      customerName: formData.get("name").trim(),
      fulfillment: orderFulfillment,
      address: formData.get("address")?.trim() ?? "",
      items: orderItems,
      subtotal,
      deliveryFee: orderDeliveryFee,
      total: subtotal + orderDeliveryFee,
    });
    setCart([]);
    setFulfillment("pickup");
  }

  function openCheckout() {
    setOrderConfirmation(null);
    setCheckoutOpen(true);
  }

  function closeCheckout() {
    setCheckoutOpen(false);
    setOrderConfirmation(null);
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#acasa" aria-label="Fifth and Bean, home">
          <BrandMark />
          <span className="brand-wordmark">
            FIFTH &amp; BEAN<span className="brand-dot">.</span>
            <small>NEW YORK COFFEE</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-link active" href="#meniu">Menu</a>
          <a className="nav-link" href="#poveste">Our story</a>
        </nav>
        <a className="nav-cart" href="#cos">
          <span>Your order</span>
          <span className="cart-count">{itemCount}</span>
        </a>
      </header>

      <main id="acasa">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span /> SPECIALTY COFFEE · NEW YORK</div>
            <h1>A good moment<br />starts with <em>coffee.</em></h1>
            <p>
              Carefully sourced beans. Slowly roasted. Poured with heart.
              Your favorite coffee, just a click away.
            </p>
            <a className="hero-button" href="#meniu">
              Explore the menu <span aria-hidden="true">↗</span>
            </a>
            <div className="hero-note">
              <span className="note-stars">★★★★★</span>
              <span>4.9 / 5 <i>from 280+ coffee lovers</i></span>
            </div>
          </div>
          <div className="hero-visual" role="img" aria-label="Freshly brewed coffee in a ceramic cup">
            <div className="hero-image" />
            <div className="hero-stamp">
              <span>Roasted</span>
              <strong>with care</strong>
              <span>every day</span>
            </div>
            <div className="hero-caption">
              <span>01 / 06</span><span>Your everyday ritual</span>
            </div>
          </div>
          <div className="hero-number" aria-hidden="true">01</div>
        </section>

        <section className="menu-layout" id="meniu">
          <div className="menu-main">
            <div className="section-heading">
              <div>
                <div className="eyebrow dark-eyebrow">MADE WITH INTENTION</div>
                <h2>Our <em>menu</em></h2>
              </div>
              <p>Good ingredients. Simple recipes.<br />Never rushed.</p>
            </div>

            <div className="menu-toolbar">
              <div className="category-tabs" role="group" aria-label="Filter by category">
                {categories.map((item) => (
                  <button
                    className={`category-tab${category === item ? " selected" : ""}`}
                    key={item}
                    onClick={() => setCategory(item)}
                    type="button"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <span className="menu-count">{visibleProducts.length} drinks</span>
            </div>

            <div className="product-grid">
              {visibleProducts.map((product, index) => (
                <article className="product-card" key={product.id} style={{ "--card-index": index }}>
                  <div className={`product-photo ${product.tone}`}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                    {product.tag && <span className="product-tag">{product.tag}</span>}
                    <span className="product-size">{product.size}</span>
                  </div>
                  <div className="product-content">
                    <div className="product-meta">{product.category}</div>
                    <div className="product-title-row">
                      <h3>{product.name}</h3>
                      <strong>{formatPrice(product.price)}</strong>
                    </div>
                    <p>{product.description}</p>
                    <button
                      className="add-button"
                      onClick={() => addToCart(product)}
                      type="button"
                    >
                      <span>Add to cart</span>
                      <span className="add-icon" aria-hidden="true">+</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="cart-panel" id="cos">
            <div className="cart-heading">
              <div>
                <div className="eyebrow dark-eyebrow">SOMETHING GOOD IS NEXT</div>
                <h2>Your <em>cart</em></h2>
              </div>
              <span className="cart-count panel-count">{itemCount}</span>
            </div>
            {cart.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cup" aria-hidden="true">☕</div>
                <strong>A cart full of potential.</strong>
                <p>Choose something delicious and we’ll make it with care.</p>
                <a href="#meniu">Browse the menu <span aria-hidden="true">→</span></a>
              </div>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt="" />
                    <div className="cart-item-info">
                      <strong>{item.name}</strong>
                      <span>{formatPrice(item.price)}</span>
                      <div className="quantity-control" aria-label={`Cantitate ${item.name}`}>
                        <button
                          aria-label={`Decrease ${item.name}`}
                          onClick={() => changeQuantity(item.id, -1)}
                          type="button"
                        >−</button>
                        <span>{item.quantity}</span>
                        <button
                          aria-label={`Add ${item.name}`}
                          onClick={() => changeQuantity(item.id, 1)}
                          type="button"
                        >+</button>
                      </div>
                    </div>
                    <strong className="line-total">{formatPrice(item.price * item.quantity)}</strong>
                  </div>
                ))}
              </div>
            )}
            <div className="cart-summary">
              <div className="delivery-note">
                <span aria-hidden="true">✳</span>
                {total >= FREE_DELIVERY_THRESHOLD ? "Free delivery unlocked!" : `Add ${formatPrice(FREE_DELIVERY_THRESHOLD - total)} more for free delivery`}
              </div>
              <div className="delivery-progress">
                <span style={{ width: `${Math.min((total / 50) * 100, 100)}%` }} />
              </div>
              <div className="subtotal"><span>Subtotal</span><strong>{formatPrice(total)}</strong></div>
              <p className="shipping-copy">Delivery is calculated at the next step.</p>
              <button className="checkout-button" disabled={!cart.length} onClick={openCheckout} type="button">
                <span>Proceed to checkout</span><span aria-hidden="true">↗</span>
              </button>
              {cart.length > 0 && (
                <button
                  className="clear-cart-button"
                  onClick={() => setCart([])}
                  type="button"
                >
                  Empty cart
                </button>
              )}
              <div className="secure-note"><span aria-hidden="true">◇</span> Secure payment · Pick up in store</div>
            </div>
          </aside>
        </section>
        <section className="story-section" id="poveste">
          <div className="story-image" role="img" aria-label="A cozy New York coffee shop at sunrise">
            <span className="story-image-note">A little corner of New York</span>
          </div>
          <div className="story-copy">
            <div className="eyebrow dark-eyebrow"><span /> THE STORY BEHIND EVERY CUP</div>
            <h2>Born from a love<br />of <em>good coffee.</em></h2>
            <p>
              Fifth &amp; Bean began with a borrowed espresso machine, a tiny
              counter, and one big idea: even in a city that never slows down,
              everyone deserves a moment to pause.
            </p>
            <p>
              Our first cups were poured before sunrise for neighbors on their
              way to work. They came back for the coffee, stayed for the
              conversation, and soon our little corner felt like a community.
              That feeling is still at the heart of everything we make.
            </p>
            <div className="story-signoff">
              <span className="story-rule" />
              <span>Good coffee. Good people. Always room for one more.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#acasa">
          <BrandMark />
          <span className="brand-wordmark">
            FIFTH &amp; BEAN<span className="brand-dot">.</span>
            <small>NEW YORK COFFEE</small>
          </span>
        </a>
        <p>Good coffee changes the rhythm of your day.</p>
        <span>© 2026 Fifth &amp; Bean. Made with care in New York City Adrian Statescu</span>
      </footer>

      {checkoutOpen && (
        <div
          className="checkout-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeCheckout();
          }}
        >
          <section
            className="checkout-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-title"
          >
            <button
              className="checkout-close"
              type="button"
              onClick={closeCheckout}
              aria-label="Close checkout"
            >
              ×
            </button>
            {orderConfirmation ? (
              <div className="order-success">
                <span className="success-icon" aria-hidden="true">✓</span>
                <div className="eyebrow dark-eyebrow">THANK YOU, {orderConfirmation.customerName.toUpperCase()}</div>
                <h2 id="checkout-title">Your order is <em>in.</em></h2>
                <p className="confirmation-number">Order {orderConfirmation.number}</p>
                <p className="confirmation-message">
                  {orderConfirmation.fulfillment === "pickup"
                    ? "We’ll have your coffee freshly made and ready for pickup shortly."
                    : `We’ll deliver your coffee to ${orderConfirmation.address}.`}
                </p>
                <div className="order-summary confirmation-summary">
                  {orderConfirmation.items.map((item) => (
                    <div className="summary-line" key={item.id}>
                      <span>{item.quantity} × {item.name}</span>
                      <strong>{formatPrice(item.price * item.quantity)}</strong>
                    </div>
                  ))}
                  {orderConfirmation.deliveryFee > 0 && (
                    <div className="summary-line">
                      <span>Delivery</span>
                      <strong>{formatPrice(orderConfirmation.deliveryFee)}</strong>
                    </div>
                  )}
                  <div className="summary-line summary-total">
                    <span>Total</span>
                    <strong>{formatPrice(orderConfirmation.total)}</strong>
                  </div>
                </div>
                <p className="demo-disclaimer">Demo checkout — no payment has been processed.</p>
                <button className="checkout-button success-done" onClick={closeCheckout} type="button">
                  Back to the menu <span aria-hidden="true">↗</span>
                </button>
              </div>
            ) : (
              <>
                <div className="eyebrow dark-eyebrow">ALMOST TIME FOR COFFEE</div>
                <h2 id="checkout-title">Complete your <em>order.</em></h2>
                <p className="checkout-intro">Add your details and choose how you’d like to enjoy it.</p>
                <form className="checkout-form" onSubmit={checkout}>
                  <label className="form-field">
                    <span>Your name</span>
                    <input autoComplete="name" name="name" placeholder="Alex Morgan" required />
                  </label>
                  <label className="form-field">
                    <span>Email address</span>
                    <input autoComplete="email" name="email" placeholder="alex@example.com" required type="email" />
                  </label>
                  <fieldset className="fulfillment-options">
                    <legend>How would you like your order?</legend>
                    <label className={fulfillment === "pickup" ? "fulfillment-option chosen" : "fulfillment-option"}>
                      <input
                        checked={fulfillment === "pickup"}
                        name="fulfillment"
                        onChange={() => setFulfillment("pickup")}
                        type="radio"
                        value="pickup"
                      />
                      <span><strong>Pick up</strong><small>Ready at Fifth &amp; Bean</small></span>
                    </label>
                    <label className={fulfillment === "delivery" ? "fulfillment-option chosen" : "fulfillment-option"}>
                      <input
                        checked={fulfillment === "delivery"}
                        name="fulfillment"
                        onChange={() => setFulfillment("delivery")}
                        type="radio"
                        value="delivery"
                      />
                      <span><strong>Delivery</strong><small>{total >= FREE_DELIVERY_THRESHOLD ? "Free delivery" : `${formatPrice(DELIVERY_FEE)} delivery`}</small></span>
                    </label>
                  </fieldset>
                  {fulfillment === "delivery" && (
                    <label className="form-field">
                      <span>Delivery address</span>
                      <input
                        autoComplete="street-address"
                        name="address"
                        placeholder="Street address, New York, NY"
                        required
                      />
                    </label>
                  )}
                  <div className="order-summary">
                    <div className="summary-heading">Your order</div>
                    {cart.map((item) => (
                      <div className="summary-line" key={item.id}>
                        <span>{item.quantity} × {item.name}</span>
                        <strong>{formatPrice(item.price * item.quantity)}</strong>
                      </div>
                    ))}
                    {fulfillment === "delivery" && (
                      <div className="summary-line">
                        <span>Delivery</span>
                        <strong>{deliveryFee ? formatPrice(deliveryFee) : "Free"}</strong>
                      </div>
                    )}
                    <div className="summary-line summary-total">
                      <span>Total</span>
                      <strong>{formatPrice(total + deliveryFee)}</strong>
                    </div>
                  </div>
                  <p className="demo-disclaimer">Demo checkout — no payment is processed.</p>
                  <button className="checkout-button" type="submit">
                    <span>Place demo order</span><span aria-hidden="true">↗</span>
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      )}

      <div className={`toast${notice ? " visible" : ""}`} role="status" aria-live="polite">
        <span aria-hidden="true">✓</span>{notice}
      </div>
    </div>
  );
}

export default App;
