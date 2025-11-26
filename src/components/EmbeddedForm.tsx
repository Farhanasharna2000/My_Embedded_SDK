import * as React from "react";
import { useEffect, useState, CSSProperties } from "react";

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

interface SafeStyles {
  button: React.CSSProperties;
  form: React.CSSProperties;
  label: React.CSSProperties;
  input: {
    text: React.CSSProperties;
    select: React.CSSProperties;
  };
}

const EmbeddedForm: React.FC<EmbeddedFormProps> = ({ dataKey, styles }) => {
  const [apiData, setApiData] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Safe styles
  const safeStyles: SafeStyles = {
    button: styles?.button || {},
    form: styles?.form || {},
    label: styles?.label || {},
    input: {
      text: styles?.input?.text || {},
      select: styles?.input?.select || {},
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData, "key", dataKey);
  };

  return (
    <div
      className="max-w-xl mx-auto p-6 rounded-2xl shadow-lg bg-white"
      style={safeStyles.form}
    >
      <h2 className="text-2xl font-semibold mb-4">Embedded Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium"
            style={{ ...safeStyles.label }}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={safeStyles.input.text}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ ...safeStyles.label }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={safeStyles.input.text}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ ...safeStyles.label }}
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={safeStyles.input.text}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium"
            style={{ ...safeStyles.label }}
          >
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            style={safeStyles.input.text}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          style={safeStyles.button}
          className="w-full py-2 rounded-xl transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmbeddedForm;
export { EmbeddedForm };