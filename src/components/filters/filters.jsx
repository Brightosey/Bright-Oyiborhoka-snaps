import "../filters/filters.scss";
import Data from "../../Data/tags.json";
function Filter() {
  return (
    <>
      <section className="filter">
        <h3 className="filter__header">Filters</h3>
        <div className="filter__list">
          {Data.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </section>
    </>
  );
}
export default Filter;
