"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { DATA } from "@/data/data";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  active?: boolean;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function WhatsApp() {
  const openNew = () => {
    window.open(DATA.WhatsApp.url, "__blank");
  };

  return (
    <div className="whatsapp-btn fixed right-0	bottom-0 z-50 flex justify-center content-center pb-3 pr-3">
      <div onClick={openNew}>
        <p>Hagamos contacto</p>
      </div>

      <img
        onClick={openNew}
        src="../assets/whatsapp.png"
        alt=""
        className="max-w-[80px]"
      />
    </div>
  );
}
