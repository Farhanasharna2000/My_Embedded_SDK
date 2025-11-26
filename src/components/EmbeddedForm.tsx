import React, { useState } from "react";

interface EmbeddedFormProps {
  dataKey: string;
  styles?: {
    button?: React.CSSProperties;
    form?: React.CSSProperties;
    label?: React.CSSProperties;
    input?: {
      text?: React.CSSProperties;
      select?: React.CSSProperties;
    };
  };
}

const EmbeddedForm: React.FC<EmbeddedFormProps> = ({ dataKey, styles }) => {
  const safe = {
    button: styles?.button || {},
    form: styles?.form || {},
    label: styles?.label || {},
    input: {
      text: styles?.input?.text || {},
      select: styles?.input?.select || {}
    }
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  return (
    <div style={safe.form}>
      <h2>Embedded Form</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit:", form, "key", dataKey);
        }}
      >
        {Object.keys(form).map((field) => (
          <div key={field}>
            <label style={safe.label}>{field}</label>
            <input
              name={field}
              value={(form as any)[field]}
              style={safe.input.text}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </div>
        ))}

        <button style={safe.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmbeddedForm;
