export interface MoreMenuProps {
	items: MoreMenuItem[];
	onItemClick?: (data: MoreMenuItem) => void;
}

export interface MoreMenuItem {
	key: string;
	label: string;
}
