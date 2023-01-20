type GreetProps = {
  name: string;
  messageCount?: number; //Removes the need of this props
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props; //Default value
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome, ${props.name}. You have ${props.messageCount} unread messages.`
          : "Welcome Guest!"}
      </h2>
    </div>
  );
};

export default Greet;
