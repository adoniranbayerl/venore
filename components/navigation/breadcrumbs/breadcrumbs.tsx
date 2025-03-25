import { HomeIcon } from "lucide-react";
import { BreadcrumbsItems } from "./breadcrumbs.data";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
export function NavigationBreadcrumbs() {
  const items = BreadcrumbsItems();
  const length = items.length;
  if (length <= 0) {
    return null;
  }
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbLink href="/dashboard">
          <HomeIcon className="h-4 w-4" />
        </BreadcrumbLink>
        <BreadcrumbSeparator />
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <BreadcrumbLink href={item.href} key={index}>
                {item.label}
              </BreadcrumbLink>
              {length !== index + 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
