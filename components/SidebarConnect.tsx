import React from "react";
import { Icons } from "@/shared/Icons";
import { SidebarItem } from "@/components/SidebarItem";
import { SidebarSection } from "@/components/SidebarSection";

export function SidebarConnect() {
  return (
    <SidebarSection label="Connect">
      <SidebarItem isExternal href="mailto:jchpetty@gmail.com" label="Email" />
      <SidebarItem
        isExternal
        href="https:www.instagram.com/juwanpetty/"
        label="Instagram"
        trailingAction={<Icons.External size={16} />}
      />
      <SidebarItem
        isExternal
        href="https:twitter.com/juwanpetty"
        label="Twitter"
        trailingAction={<Icons.External size={16} />}
      />
      <SidebarItem
        isExternal
        href="https:github.com/juwanpetty"
        label="GitHub"
        trailingAction={<Icons.External size={16} />}
      />
    </SidebarSection>
  );
}
