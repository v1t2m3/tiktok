import Button from "../../Button";

function MenuItem({ data }) {
  return (
    <Button to={data.to} leftIcon={data.icon}>
      {data.title}
    </Button>
  );
}
export default MenuItem;
