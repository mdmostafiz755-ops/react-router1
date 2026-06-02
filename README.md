
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

## React Router Params

Route params allow you to create dynamic URLs and access values from the URL.

### Define a Dynamic Route

```jsx
{
  path: "/users/:id",
  element: <UserDetails />
}
```

Here, `:id` is a route parameter.

Examples:

```text
/users/1
/users/2
/users/100
```

---

### Access Params with `useParams()`

```jsx
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
};
```

If the URL is:

```text
/users/5
```

Output:

```text
User ID: 5
```

---

### Use Params in a Loader

```jsx
{
  path: "/users/:id",
  loader: ({ params }) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
  element: <UserDetails />
}
```

For the URL:

```text
/users/3
```

`params.id` will be:

```js
"3"
```

---

### Access Loader Data

```jsx
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();

  return <h1>{user.name}</h1>;
};
```

---

### Flow

```text
/users/5
    ↓
:id = 5
    ↓
useParams() → { id: "5" }
    ↓
loader uses params.id
    ↓
fetches user data
    ↓
useLoaderData() receives data
    ↓
renders UserDetails component
```

### Common Use Cases

* User Profiles → `/users/:id`
* Product Details → `/products/:id`
* Blog Posts → `/blogs/:slug`
* Course Pages → `/courses/:courseId`
