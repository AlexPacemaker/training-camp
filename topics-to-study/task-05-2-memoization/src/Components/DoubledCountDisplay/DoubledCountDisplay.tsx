import { useMemo, memo } from "react";

type DoubledCountDisplayProps = { readonly count: number };

function DoubledCountDisplay({ count }: DoubledCountDisplayProps) {
  console.log("DoubledCountDisplay re-rendered");

  const doubledCount = useMemo(() => {
    console.log("Recalculating doubled count...");
    return count * 2;
  }, [count]);

  return <p>Doubled Count: {doubledCount}</p>;
}

export default memo(DoubledCountDisplay);
