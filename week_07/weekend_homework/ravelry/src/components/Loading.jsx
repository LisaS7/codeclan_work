import { usePromiseTracker } from "react-promise-tracker";

export default function Loading() {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <h2>Page is loading....</h2>;
}
