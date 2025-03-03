import { useEffect, useState } from "react";

type TAction = "banking" | "cod" | null;
const listeners = new Set<(T: TAction) => void>();

const setShowDialog = (props: TAction) => {
  listeners.forEach((listener) => listener(props));
};

const setHideDialog = () => {
  listeners.forEach((listener) => listener(null));
};

function useActionDialog() {
  const [data, setData] = useState<TAction>(null);
  useEffect(() => {
    listeners.add(setData);
    return () => {
      listeners.delete(setData);
    };
  }, []);

  return data;
}

export { setHideDialog, setShowDialog, useActionDialog };
