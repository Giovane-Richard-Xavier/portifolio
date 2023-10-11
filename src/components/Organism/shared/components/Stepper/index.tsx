import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper as SteppeSk,
  useSteps,
} from '@chakra-ui/react'
import { IExperienceAndEducation } from './types';
import React, { useState } from 'react';

interface IStepperProps {
  steps: IExperienceAndEducation[];
}

export const Stepper = ({ steps }: IStepperProps) => {
  const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(null);

  // const { activeStep } = useSteps({
  //   index: 3,
  //   count: steps.length,
  // })

  return (
    <SteppeSk size='sm' index={3} orientation='vertical' height='500px' gap='0'>
      {steps.map((step, index) => (
        <Step
          key={index}
          onMouseEnter={() => setHoveredStepIndex(index)}
          onMouseLeave={() => setHoveredStepIndex(null)}
        >
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
            // incomplete={<StepNumber />}
            // active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0' color="#fff">
            <StepTitle>
              <Box color={hoveredStepIndex === index ? "blue" : "#fec544"} fontSize="1.7rem">
                {step.title}
              </Box>
            </StepTitle>
            <Box mb={5}>{step.date}</Box>
            <Box
              maxW="500px"
              w="100%"
              css={{
                "& .chakra-step__icon": {
                  color: hoveredStepIndex === index ? "blue" : "#fec544"
                }
              }}
            >
              <StepDescription>{step.description}</StepDescription>
            </Box>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </SteppeSk>
  );
}
