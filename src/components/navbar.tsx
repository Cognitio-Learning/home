'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/ace/navbar";
import { cn } from "@/utils/cn";

export default function NavBar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 opacity-90", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Programs">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/programs/python">Python for AI</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Info">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/about">About Us</HoveredLink>
                        <HoveredLink href="/contact">Contact</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
{/*                         <HoveredLink href="/donations">Donations</HoveredLink>
 */}                    </div>
                </MenuItem>
            </Menu>
        </div>

    );
}