interface LinkProps {
    href: string;
    label: string;
}

export function Link({ href, label }: LinkProps) {
    return (
        <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${label} (opens in a new tab)`}
        >
            {label}
        </a>
    );
}
