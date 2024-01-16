"use client";
import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";
import "tailwindcss/tailwind.css";

const BmiCalculator = () => {
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);
  const [bmi, setBmi] = useState(0);

  useEffect(() => {
    calculateBMI();
  }, [age, gender, height, weight]);

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    }
  };
  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return { label: "Underweight", color: "bg-blue-200" };
    if (bmi >= 18.5 && bmi < 24.9)
      return { label: "Normal", color: "bg-green-200" };
    if (bmi >= 25 && bmi < 29.9)
      return { label: "Overweight", color: "bg-yellow-200" };
    return { label: "Obesity", color: "bg-red-200" };
  };

  const bmiCategory = getBmiCategory(bmi);

  return (
    <div className="px-12 xl:px-16 lg:px-16 py-12">
      {" "}
      <div className="my-8 ">
        <h1 className="text-3xl font-semibold mb-4">NHS BMI Calculator UK</h1>
        <p className="text-gray-700 text-sm leading-relaxed">
          Are you looking to achieve your health goals and maintain a healthy
          weight? Look no further than the NHS BMI Calculator & Guide in the UK.
          This comprehensive tool enables you to calculate your Body Mass Index
          (BMI), an essential indicator of your overall health and weight
          status. Using your height and weight, the calculator generates your
          BMI score and categorizes it into different ranges, such as
          underweight, normal weight, overweight, and obesity. Trust the NHS BMI
          Calculator & Guide to support you on your journey to better health and
          well-being.
        </p>
      </div>
      <div className="max-w-5xl p-8 shadow-sm rounded-lg mx-auto flex flex-col items-center justify-center border border-solid border-#505050">
        <h1 className="text-3xl font-semibold text-gray-600 mb-6">
          Calculate your BMI
        </h1>
        <div className="flex flex-col sm:flex-row mx-auto  bg-gray-50 w-full  overflow-hidden ">
          <div className="flex-1 border-r border-gray-300 p-6 rounded-l-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="age"
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="height"
              >
                Height
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="height"
                type="number"
                placeholder="Height in cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="weight"
              >
                Weight
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="weight"
                type="number"
                placeholder="Weight in kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 p-6 bg-white rounded-r-lg">
            <GaugeChart
              id="gauge-chart"
              nrOfLevels={30}
              percent={bmi / 40} // Assuming 40 as the maximum BMI to display
              textColor="#000000"
              colors={["#bfdbfe", "#bbf7d0", "#fef08a", "#fecaca"]}
              arcsLength={[0.4625, 0.13125, 0.125, 0.28125]}
              needleColor={"#DEEAE2"}
            />
            <p className="text-xl font-semibold text-center mt-4">
              {bmiCategory.label}
            </p>
            <div className={`${bmiCategory.color} p-2 text-center rounded-lg`}>
              {bmi}
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-3xl font-semibold mb-4">
          Use Your NHS BMI Calculator & Guide to Achieve Your Health Goals
        </h1>
        <p className="text-gray-700 text-sm leading-relaxed">
          Are you looking to achieve your health goals and maintain a healthy
          weight? Look no further than the NHS BMI Calculator & Guide. This
          comprehensive tool enables you to calculate your Body Mass Index
          (BMI), an essential indicator of your overall health and weight
          status. Using your height and weight, the calculator generates your
          BMI score and categorizes it into different ranges, such as
          underweight, normal weight, overweight, and obesity. By utilizing the
          NHS BMI Calculator, you gain valuable insight into your current health
          status and can take appropriate steps towards achieving your desired
          weight and overall well-being. Whether you want to lose weight, track
          your progress, or maintain a healthy lifestyle, this guide is your
          go-to resource. The calculator provides personalized recommendations
          based on your BMI score, including advice on healthy eating, physical
          activity, and medical consultations if needed. Trust the NHS BMI
          Calculator & Guide to support you on your journey to better health and
          well-being. Start using this valuable tool today and take control of
          your weight and overall health.
        </p>
      </div>
      <div className="my-8">
        <h1 className="text-3xl font-semibold mb-4">
          How to calculate your BMI using the NHS BMI calculator
        </h1>
        <p className="text-gray-700 text-sm leading-relaxed">
          Calculating your BMI using the NHS BMI calculator is quick and easy.
          Here is a step-by-step guide to help you get started: Step 1: Gather
          the necessary information Before using the NHS BMI calculator, you
          will need to know your height and weight in either metric or imperial
          units. If you are unsure about your weight, you can use a bathroom
          scale to measure it accurately. For your height, stand against a wall
          and use a measuring tape to determine your height in either
          centimeters or feet and inches. Step 2: Access the NHS BMI calculator
          Once you have your height and weight measurements, visit the official
          NHS website and search for the BMI calculator. The calculator is
          usually easily accessible from the homepage or the health and
          well-being section. Step 3: Input your measurements Enter your height
          and weight into the appropriate fields on the BMI calculator. Make
          sure to select the correct unit of measurement for each category.
          Double-check your entries to ensure accuracy. Step 4: Calculate your
          BMI Click on the Calculate button to generate your BMI score. The
          calculator will instantly display your BMI and categorize it into
          underweight, normal weight, overweight, or obese. Step 5: Interpret
          your BMI result Once you receive your BMI score, it is important to
          understand what it means. Let us take a closer look at the different
          BMI categories and their implications for your health.
        </p>
      </div>
      <div className="my-8 ">
        <h1 className="text-3xl font-semibold mb-4">
          Setting health goals based on your BMI
        </h1>
        <p className="text-gray-700 text-sm leading-relaxed">
          Now that you have calculated your BMI and understood its implications,
          it is time to set achievable health goals based on your current weight
          status. The NHS BMI Calculator & Guide offers personalized
          recommendations to help you achieve and maintain a healthy weight.
          Here are some tips to get you started: 1. Consult with a healthcare
          professional If your BMI falls outside the normal weight range, it is
          advisable to consult with a healthcare professional. They can assess
          your overall health, identify any underlying medical conditions, and
          provide personalized guidance on weight management. 2. Set realistic
          goals When setting health goals, it iss essential to be realistic and
          avoid drastic measures. Aim for gradual, sustainable weight loss or
          weight maintenance if you are already within the normal weight range.
          Small changes, such as incorporating more fruits and vegetables into
          your diet or increasing your daily physical activity, can make a
          significant impact over time. 3. Focus on overall well-being Remember
          that achieving a healthy weight is not just about the numbers on the
          scale. It is crucial to prioritize overall well-being, including
          mental health, emotional well-being, and body confidence. Cultivate a
          positive relationship with your body and celebrate non-scale
          victories, such as increased energy levels, improved fitness, and
          enhanced self-esteem.
        </p>
      </div>
    </div>
  );
};

export default BmiCalculator;
