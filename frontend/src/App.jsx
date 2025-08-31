import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Index";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#111827",
            color: "#fff",
            borderRadius: "12px",
            padding: "12px 16px",
          },
          success: { style: { background: "#16a34a" } },
          error: { style: { background: "#dc2626" } },
        }}
      />
    </>
  );
}
