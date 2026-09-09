const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getToken = () => {
  return localStorage.getItem("adminToken");
};

const request = async (endpoint, options = {}) => {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let response;

  try {
    response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });
  } catch (error) {
    throw new Error(
      "Unable to connect to the server. Please make sure the backend is running.",
    );
  }

  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error("The server returned an invalid response.");
  }

  if (!response.ok) {
    throw new Error(data?.message || data?.error || "Something went wrong.");
  }

  return data;
};

/* =========================================================
   PUBLIC LEADS
========================================================= */

export const submitLead = async (data) => {
  return request("/leads", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

/* =========================================================
   ADMIN AUTH
========================================================= */

export const adminLogin = async (email, password) => {
  return request("/admin/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

/* =========================================================
   ADMIN LEADS
========================================================= */

export const getLeads = async ({
  search = "",
  status = "",
  page = 1,
  limit = 20,
} = {}) => {
  const params = new URLSearchParams();

  if (search.trim()) {
    params.set("search", search.trim());
  }

  if (status) {
    params.set("status", status);
  }

  params.set("page", page);
  params.set("limit", limit);

  return request(`/leads?${params.toString()}`);
};

export const getLeadStats = async () => {
  return request("/leads/stats");
};

export const getLead = async (id) => {
  return request(`/leads/${id}`);
};

export const updateLead = async (id, data) => {
  return request(`/leads/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};

export const deleteLead = async (id) => {
  return request(`/leads/${id}`, {
    method: "DELETE",
  });
};
