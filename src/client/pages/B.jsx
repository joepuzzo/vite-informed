import { Form, Input, Debug } from "informed";

const B = () => {
  return (
    <div>
      <h3>Welcome to page B</h3>
      <Form>
        <Input name="name" label="Name" initialValue="Joe" />
        <button type="submit">Submit</button>
        <Debug values />
      </Form>
    </div>
  );
};

export default B;
