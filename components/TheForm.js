import { observer } from "mobx-react";
import styled from "styled-components";
import DataStorage from "../store/index.js";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";

const StyledH1 = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
`;

const StyleFormDiv = styled.div`
  margin-bottom: 20px;
`;

const StyleInput = styled.input`
  float: right;
  font-size: 22px;
  width: 200px;
  border: 6px;
  height: 30px;
  margin: 5px;
`;

const StyledSelect = styled.select`
  float: right;
  font-size: 22px;
  width: 203px;
  height: 30px;
  margin: 5px;
`;

const StyledLabel = styled.label`
  padding-top: 2px;
  display: inline-block;
  font-size: 22px;
  height: 30px;
  width: 160px;
  margin: 5px;
`;

const StyledButton = styled.button`
  background: #1997bf;
  display: block;
  width: 200px;
  padding: 10px;
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: 16px;

  :hover {
    background: #ff97bf;
  }
`;

const StyledError = styled.div`
  display: block;
  justify-content: center;
  color: red;
  font-size: 14px;
  float: right;
`;

const TheForm = () => {
  const NameInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <div>
        <StyleFormDiv>
          <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
          <StyleInput className="text-input" {...field} {...props}></StyleInput>
          {meta.touched && meta.error ? (
            <StyledError className="error">{meta.error}</StyledError>
          ) : null}
        </StyleFormDiv>
      </div>
    );
  };

  const ColorInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <div>
        <StyleFormDiv>
          <StyledLabel htmlFor={props.id || props.color}>{label}</StyledLabel>
          <StyledSelect
            className="select-input"
            {...field}
            {...props}
          ></StyledSelect>
          {meta.touched && meta.error ? (
            <StyledError className="error">{meta.error}</StyledError>
          ) : null}
        </StyleFormDiv>
      </div>
    );
  };

  const NumberInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <div>
        <StyleFormDiv>
          <StyledLabel htmlFor={props.id || props.number}>{label}</StyledLabel>
          <StyleInput
            className="number-input"
            {...field}
            {...props}
          ></StyleInput>
          {meta.touched && meta.error ? (
            <StyledError className="error">{meta.error}</StyledError>
          ) : null}
        </StyleFormDiv>
      </div>
    );
  };

  return (
    <Formik
      initialValues={{
        name: "",
        color: "",
        numberOfFacts: 1,
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(3, "Need 3 chars or more!").required(),
        color: Yup.string().min(3, "Need 3 chars or more!").required(),
        numberOfFacts: Yup.number()
          .min(1, "Need atleast one fact...")
          .max(10, "No more than ten")
          .positive("Must be a positive number!")
          .required(),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          let newCatPerson = {};

          newCatPerson.name = values.name;
          newCatPerson.color = values.color;
          newCatPerson.number = values.numberOfFacts;
          newCatPerson.id = DataStorage.catPersonId;

          DataStorage.catPersons.push(newCatPerson);
          DataStorage.catPersonId = DataStorage.catPersonId + 1;

          resetForm();
          setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <div>
          <StyleDiv>
            <StyledH1>Add CatPerson!</StyledH1>
            <Form>
              <NameInput
                label="Name"
                name="name"
                type="text"
                placeholder="Enter name here"
              />
              <ColorInput label="Color" name="color">
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="pink">Pink</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </ColorInput>
              <NumberInput
                label="Number of facts?"
                name="numberOfFacts"
                type="number"
              />
              <StyledButton type="submit">
                {props.isSubmitting ? "Saving..." : "Submit"}{" "}
              </StyledButton>
            </Form>
          </StyleDiv>
        </div>
      )}
    </Formik>
  );
};
export default observer(TheForm);
