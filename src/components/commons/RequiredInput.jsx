export function RequiredInput(props) {
  return (
    <input
      className={props.className}
      type={props.text}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      required
      autoComplete={props.autoComplete}
    ></input>
  );
}
