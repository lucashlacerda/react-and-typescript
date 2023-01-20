type OscarProps = {
  children: React.ReactNode; //React element
};
const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
