import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

// statically set the type of this object so that InputField can take in any props that a regular input field would take
type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	name: string;
	textarea?: boolean;
};

// InputField is a generic wrapper that we can use for all input forms that we want to create
// we set all the values to generics, we can add as many input fields as we want
export const InputField: React.FC<InputFieldProps> = ({
	// here we take in everything as props but label bc we want to create a FormLabel and not attach it to the inputform
	// for everything else we can just throw it into the input tag by just doing ...props but we don't want label to go in there as well
	// basically, what we get is an object with properties of HTMLInputElement which is a huge list of properties, we want to strip off what we don't need and ones that might get confused with others
	// size is a property that the compiler didn't like but we're not using anyway so we can ignore that value by destructure size from props and set it to a value of __ which we wont uses
	// ... is the spread operator which takes the rest of the object and puts it into the var specified minus the one we destructured ie. the size
	label,
	textarea,
	size: _,
	...props
}) => {
	let InputOrTextArea;

	if (textarea) {
		InputOrTextArea = Textarea;
	} else {
		InputOrTextArea = Input;
	}
	// custom hook from Formik takes in our props which is all of our inputs into the InputField we want to create and generates the
	// values it can stick onto the InputField object
	const [field, { error }] = useField(props);
	return (
		// isInvalid takes in a boolean but error is a string which we can manipulate into a boolean bc an empty string is false
		// so we can cast it to false by doing !!

		<FormControl isInvalid={!!error}>
			<FormLabel htmlFor={field.name}>{label}</FormLabel>
			<InputOrTextArea {...field} {...props} id={field.name} />
			{error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
		</FormControl>
	);
};
