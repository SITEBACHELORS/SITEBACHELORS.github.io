
import React, { useState } from 'react';
import { Stepper, Step, Button } from '@material-tailwind/react';

export default function Donate() {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const [nextClicks, setNextClicks] = useState(0);
    const [formData, setFormData] = useState({
      fullname: '',
      studentNumber: '',
      email: '',
    });

  const handleNext = () => {
    if (activeStep < 2 && nextClicks < 2) {
      setActiveStep((cur) => cur + 1);
      setNextClicks((count) => count + 1);
    } else {
      // Handle maximum number of next clicks reached
      console.log('Maximum number of next clicks reached');
    }
  };

  const handlePrev = () => {
    setActiveStep((cur) => cur - 1);
    setNextClicks(0);
  };

  React.useEffect(() => {
    setIsFirstStep(activeStep === 0);
    setIsLastStep(activeStep === 2);
  }, [activeStep]);

  const renderStepContent = (step) => {
    switch (step) {
        case 0:
            return (
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                    value={formData.fullname}
                    onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  />
                </div>
      
                <label htmlFor="studentNumber" className="block mt-4 text-sm font-medium leading-6 text-gray-900">
                  Student Number
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="studentNumber"
                    id="studentNumber"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="123456789"
                    value={formData.studentNumber}
                    onChange={(e) => setFormData({ ...formData, studentNumber: e.target.value })}
                  />
                </div>
      
                <label htmlFor="email" className="block mt-4 text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="example@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
            );
      case 1:
        return <div>Step 2 Content</div>;
      case 2:
        return <div>Step 3 Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step
          className={`h-8 w-8 rounded-full cursor-pointer ${
            activeStep === 0 ? 'bg-customColor' : 'bg-gray-300'
          }`}
          onClick={() => setActiveStep(0)}
        />
        <div className="flex-1 h-2 bg-gray-300 mx-2 rounded-full">
          <div
            className="h-full bg-customColor rounded-full"
            style={{ width: `${(activeStep / 2) * 100}%` }}
          ></div>
        </div>
        <Step
          className={`h-8 w-8 rounded-full cursor-pointer ${
            activeStep === 1 ? 'bg-customColor' : 'bg-gray-300'
          }`}
          onClick={() => setActiveStep(1)}
        />
        <div className="flex-1 h-2 bg-gray-300 mx-2 rounded-full">
          <div
            className="h-full bg-customColor rounded-full"
            style={{ width: `${(activeStep / 2) * 100}%` }}
          ></div>
        </div>
        <Step
          className={`h-8 w-8 rounded-full cursor-pointer ${
            activeStep === 2 ? 'bg-customColor' : 'bg-gray-300'
          }`}
          onClick={() => setActiveStep(2)}
        />
      </Stepper>
      <div className="mt-16">{renderStepContent(activeStep)}</div>
      <div className="mt-16 flex justify-between">
        <Button
          onClick={handlePrev}
          disabled={isFirstStep}
          className="bg-customColor"
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          disabled={isLastStep || nextClicks >= 2}
          className="bg-customColor"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
