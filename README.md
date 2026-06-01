
## 📚 React Router Learning Summary

### 🔹 Basic Routing Setup

Learned how to configure basic routing in a React application using React Router. Defined multiple routes to render different pages based on the URL path.

---

### 🔹 Nested Routing

Understood the concept of nested routes, where child routes are rendered inside a parent layout component using `<Outlet />`. This allows shared layouts (like headers or sidebars) while dynamically switching page content.

---

### 🔹 Router Setup in `main.jsx`

Configured routing using `createBrowserRouter` and connected it to the application using `RouterProvider`. This setup serves as the central routing configuration for the entire app.

---

### 🔹 Important Key Insight

Instead of using `Component`, React Router requires `element` when defining routes in `createBrowserRouter`.

```js
// Correct
{
  path: "/",
  element: <Home />
}
```

```js
// Incorrect
{
  path: "/",
  Component: Home
}
```

---

### 🔹 Key Takeaways

* Use `createBrowserRouter` for route configuration
* Use `RouterProvider` to enable routing
* Use `<Outlet />` for nested route rendering
* Always use `element: <Component />` instead of `Component`
