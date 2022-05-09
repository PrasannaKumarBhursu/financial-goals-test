import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import ErrorMsgColorCompnent from "./ErrorMsgColorCompnent";
import * as Yup from "yup";
import aadhar from "./assests/aadhar.png";

const purposes = [
  {
    purpose: "Financial Priority",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Retirement Priority",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Education Funding",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Insurance Planning",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Tax Planning",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Debt Restructuring",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Review of existing plan",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Purchase a House",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Purchase a new vehicle",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Purchase a CommercialProperty",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Borrow money",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Expand business",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
  {
    purpose: "Others, Pl specify",
    priority: "",
    yearsToGoal: "",
    amountRequired: "",
  },
];

const prioritiesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const initialValues = {
  purposes: purposes,
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  purposes: Yup.array(
    Yup.object({
      priority: Yup.string().required("*Required--priority!"),
      yearsToGoal: Yup.string().required("*Required--years!"),
      amountRequired: Yup.string().required("*Required--amount!"),
    })
  ),
});

function FinancialGoals() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="form">
        <h1 className="text-success">Financial Goals</h1>

        <div className="container">
          <div className="row h-100">
            <div className="col-4 d-flex align-items-center border border-success rounded">
              <img className="w-100 " src={aadhar} alt="financial image" />
            </div>
            <div className="col-8 border border-success rounded  overflow-y-auto ">
              <div className="col-12 d-flex ">
                <h4 className="col-3">Purpose</h4>
                <h4 className="col-3">Priority*</h4>
                <h4 className="col-3">Years to goal</h4>
                <h4 className="col-3">Amount Required </h4>
              </div>
              <FieldArray name="purposes">
                {(props) => {
                  const { form } = props;
                  const { values } = form;
                  const { purposes } = values;

                  return (
                    <div>
                      {purposes.map((purpose, index) => (
                        <div key={index} className="d-flex col-12">
                          <p className="col-3 flex-shrink-1 text-left">
                            {purposes[index].purpose}
                          </p>
                          <div className="col-3 flex-shrink-1">
                            <Field
                              name={`purposes[${index}].priority`}
                              as="select"
                            >
                              <option value=""> "--select--"</option>
                              {prioritiesList.map((value, index) => (
                                <option key={index} value={value}>
                                  {value}
                                </option>
                              ))}
                            </Field>
                            <div>
                              <ErrorMessage
                                name={`purposes[${index}].priority`}
                              >
                                {(error) => (
                                  <div className="error">{error}</div>
                                )}
                              </ErrorMessage>
                            </div>
                          </div>
                          <div className="col-3 flex-shrink-1">
                            <Field
                              className="w-100"
                              name={`purposes[${index}].yearsToGoal`}
                              type="number"
                              placeholder="years to goal"
                            />
                            <div>
                              <ErrorMessage
                                name={`purposes[${index}].yearsToGoal`}
                              >
                                {(error) => (
                                  <div className="error">{error}</div>
                                )}
                              </ErrorMessage>
                            </div>
                          </div>
                          <div className="col-3 flex-shrink-1">
                            <Field
                              className="w-100"
                              name={`purposes[${index}].amountRequired`}
                              type="number"
                              placeholder="Amount required"
                            />
                            <div>
                              <ErrorMessage
                                name={`purposes[${index}].amountRequired`}
                              >
                                {(error) => (
                                  <div className="error">{error}</div>
                                )}
                              </ErrorMessage>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
          </div>
        </div>
        <button className="btn btn-warning mt-3" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default FinancialGoals;
