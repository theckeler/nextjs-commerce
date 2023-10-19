"use client";
import Button from "@/components/buttons/";

export default function InputButton({
  id = "",
  className,
  input,
  button,
  padding = "p-3",
  icon = null,
  onClick
}) {
  return (
    <ul className={`flex ${className}`} id={id}>
      <li className="grow">
        <input
          required=""
          type="text"
          className={`${padding} h-full w-full rounded-l rounded-r-none ${input.className}`}
          id={input.id}
          placeholder={input.placeholder}
          name={input.name}
        />
      </li>
      <li className="shrink">
        <Button
          aria-label={button.ariaLabel}
          title={button.title}
          onClick={onClick}
          className={`h-full w-full whitespace-nowrap rounded-r border-0 font-bold uppercase outline-0 ${button.className} ${padding}`}
          icon={icon}
        />
      </li>
    </ul>
  );
}
