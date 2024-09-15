import React from "react";
import { Chip } from "@nextui-org/react";

export default function Chips({ title }) {
  return (
    <div className="cursor-pointer">
      <Chip
        variant="shadow"
        classNames={{
          base: "bg-gradient-to-br from-green-500 to-yellow-500 border-small border-white/50 shadow-green-500/30",
          content: "drop-shadow shadow-black text-white",
        }}
      >
        {title}
      </Chip>
    </div>
  );
}
