import "../../assets/styles/catalog/categoryFilter.css";

export function CategoryFilter({ setSelectedFilter }) {
  function handleChange(event) {
    setSelectedFilter(event.target.value);
  }
  return (
    <div id="select-wrapper">
      <select className="roboto-white" name="option" onChange={handleChange}>
        <option value="default" defaultValue>
          Select a genre
        </option>
        <option value="/books?bookCategory=Classic">Classics</option>
        <option value="/books?bookCategory=Fantasy">Fantasy</option>
        <option value="/books?bookCategory=Horror">Horror</option>
        <option value="/books?bookCategory=Romance">Romance</option>
      </select>
    </div>
  );
}
