interface LinkProps {
	href: string;
	label: string;
	children?: React.ReactNode;
}

export function Link({ href, label, children }: LinkProps) {
	return (
		<a
			className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			aria-label={`${label} (opens in a new tab)`}
		>
			{children}
		</a>
	);
}
