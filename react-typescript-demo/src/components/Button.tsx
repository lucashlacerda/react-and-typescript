import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void; //When the click passes the event
  // handleClick: () => void; When the click doesn't passes the event
};

function Button(props: ButtonProps) {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
}

export default Button;
