import React from "react";

import { cn } from "@/lib/utils";

interface RequiredIndicatorProps {
  className?: string;
}

export const RequiredIndicator: React.FC<RequiredIndicatorProps> = ({
  className,
}) => {
  return <span className={cn("text-text-brand-tertiary", className)}>*</span>;
};
