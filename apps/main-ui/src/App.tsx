import { lazy, Suspense } from "react";
import "./App.css";

const Button = lazy(() =>
  import("shared_ui/Button").then((module) => ({ default: module.Button })),
);

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Button />
      </Suspense>
    </div>
  );
};

export default App;
