import { useForm, Input, Debug } from "informed";

const CustomForm = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm({
    ...rest,
    adapter: {
      input: Input,
    },
  });

  /* --- DONT FORGET TO CALL THE RENDER METHOD FROM THE HOOK! --- */
  return render(
    <form
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}
    >
      {children}
    </form>
  );
};

const schema = {
  type: "object",
  required: ["age", "bio", "authorize", "color", "model", "cars"],
  properties: {
    name: {
      type: "string",
      title: "First name",
      "ui:control": "input",
      "ui:props": {
        validate: (v) => (v == null ? "Required" : undefined),
      },
    },
  },
};

export default () => {
  return (
    <div>
      <h3>Welcome to page A</h3>
      <CustomForm>
        <Input name="name" label="Name" />
        <button type="submit">Submit</button>
        <Debug values />
      </CustomForm>
    </div>
  );
};
