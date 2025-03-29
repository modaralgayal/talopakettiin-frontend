import React, { useState } from "react";

export const ApplicationForm = () => {
  const [step, setStep] = useState(1);

  const steps = [
    { number: 1, title: "Perustiedot" },
    { number: 2, title: "Ulkopuoli" },
    { number: 3, title: "Sisäpuoli" },
    { number: 4, title: "Lämmitys" },
    { number: 5, title: "Talotekniikka" },
    { number: 6, title: "Omat Tiedot" },
  ];

  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="pt-10">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-semibold mb-6">Application</h1>

        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-6">
          {steps.map(({ number, title }) => (
            <div key={number} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition ${
                  step === number ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                {number}
              </div>
              <span className="text-sm mt-2">{title}</span>
            </div>
          ))}
        </div>

        {/* Form Content (Placeholder for each step) */}
        <div className="p-4 border rounded-md bg-gray-50">
          <p className="text-lg font-medium">
            Step {step}: {steps[step - 1].title}
          </p>
          <p className="text-gray-600 mt-2">
            Form fields for {steps[step - 1].title} go here.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-4 py-2 rounded-md text-white transition ${
              step === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            disabled={step === 6}
            className={`px-4 py-2 rounded-md text-white transition ${
              step === 6
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
