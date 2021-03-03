import { useState } from "react";

export function useTotal() {
  const [totalItem, settotalItem] = useState(0);

  return { totalItem, settotalItem };
}
