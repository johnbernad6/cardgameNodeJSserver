const API_URL = "https://johnbernad6server-b837q.ondigitalocean.app/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(order) {
  try {
    const res = await fetch(`${API_URL}/order/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: order.cart }),
    });

    if (!res.ok) throw new Error("Failed to create order");

    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error("Error in createOrder:", err);
    throw new Error("Failed creating your order");
  }
}


export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
