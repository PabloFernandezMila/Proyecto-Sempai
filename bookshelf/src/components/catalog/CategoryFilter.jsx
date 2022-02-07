import "../../assets/styles/catalog/categoryFilter.css";

export function CategoryFilter({ setSelctedFilter }) {
  function handleChange(event) {
    setSelctedFilter(event.target.value);
  }
  return (
    <div id="select-wrapper">
      <select className="roboto-white" name="option" onChange={handleChange}>
        <option value="default" defaultValue>
          Select a genre
        </option>
        <option value="/books?bookcategory=Classics">Classics</option>
        <option value="/books?bookcategory=Fantasy">Fantasy</option>
        <option value="/books?bookcategory=Horror">Horror</option>
      </select>
    </div>
  );
}
