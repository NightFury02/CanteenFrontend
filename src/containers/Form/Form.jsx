import { background } from "../../assets/imgs";
import { Login, Register } from "../../components";
import PropTypes from "prop-types";

const typeForm = {
  login: Login,
  register: Register,
};

const Form = ({ type = "login" }) => {
  const Element = typeForm[type];

  return (
    <main className="w-full h-[100vh] flex">
      <div className="hidden md:block md:basis-[50%] lg:basis-[60%] md:h-full md:bg-black">
        <img
          src={background}
          alt="school_hcmus"
          className="h-full object-cover w-full rounded-tr-[40px] rounded-br-[40px]"
        />
      </div>
      <div className="bg-black w-full md:basis-[50%] lg:basis-[40%] h-full flex">
        <Element />
      </div>
    </main>
  );
};

Form.propTypes = {
  type: PropTypes.string,
};

export default Form;
