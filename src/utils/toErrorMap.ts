import { MessageField } from "../generated/graphql";

export const toErrorMap = (errors: MessageField[]) => {
	const errorMap: Record<string, string> = {};
	// we know that the error message we get back from graphql is an object of the form
	// [{field: "username", message: "error message"}]
	// so we can just destructure the elements from our FieldError object and create an errorMap
	errors.forEach(({ field, message }) => {
		errorMap[field] = message;
	});
	return errorMap;
};
