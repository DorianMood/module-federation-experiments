import { lazy, PureComponent, Suspense, type MouseEventHandler } from "react";

const ButtonRemote = lazy(() =>
  import("shared_ui/Button").then((module) => ({ default: module.Button })),
);

type State = {
  hasError: boolean;
};

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export class Button extends PureComponent<Props, State> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <>Button local fallback</>;
    }

    return (
      <Suspense fallback={<>Loading...</>}>
        <ButtonRemote {...this.props} />
      </Suspense>
    );
  }
}
