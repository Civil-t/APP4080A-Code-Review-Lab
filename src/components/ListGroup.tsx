//import { Link } from "react-router-dom";

function ListGroup() {
  return (
    <div className="list-group">
      <h1>My Curriculum Vitae</h1>

      <button type="button" className="list-group-item list-group-item-action">
        <a
          href="src\components\PersonalDetails.html"
          className="list-group-item list-group-item-action active"
        >
          Personal Details and Photo
        </a>
      </button>

      <button type="button" className="list-group-item list-group-item-action">
        <a
          href="src\components\Hobbies.html"
          className="list-group-item list-group-item-action active"
        >
          Hobbies and Interests
        </a>
      </button>

      <button type="button" className="list-group-item list-group-item-action">
        <a
          href="src\components\EducationBackground.html"
          className="list-group-item list-group-item-action active"
        >
          Education Background
        </a>
      </button>

      <button type="button" className="list-group-item list-group-item-action">
        <a
          href="src\components\SpecialSkills.html"
          className="list-group-item list-group-item-action active"
        >
          Special Skills
        </a>
      </button>

      <button type="button" className="list-group-item list-group-item-action">
        <a
          href="src\components\ExtraCurriculum.html"
          className="list-group-item list-group-item-action active"
        >
          Extra Curriculum Activities
        </a>
      </button>
    </div>
  );
}

export default ListGroup;
