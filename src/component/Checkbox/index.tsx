import type { CheckboxProps } from "./type";

function Checkbox(props: CheckboxProps) {
	return <input type="checkbox" {...props} className=" size-4" />;
}

export default Checkbox;
