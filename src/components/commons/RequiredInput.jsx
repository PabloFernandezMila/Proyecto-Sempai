export function RequiredInput(props) {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      required
      autoComplete={props.autoComplete}
      value={props.inputName}
      onChange={props.onChange}
    ></input>
  );
}
