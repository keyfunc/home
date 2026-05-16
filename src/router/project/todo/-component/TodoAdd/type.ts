import type { ModalProps } from "@/component/Modal/type";
import type { CreateTodoReq } from "@/service/generated/model";

export interface TodoAddProps extends ModalProps {
	onAddClick?: (data: CreateTodoReq) => void;
}
