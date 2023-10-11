import { VStack, Text, Box, Textarea, Button } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { initiationValues } from './types/interface'
import { validateSchema } from './schema'
import { mainLayoutSpacingX, mainLayoutSpacingY } from '@/components/Layout/Main/constants'
import { InputControl } from '@/components/FormItems/InputControl'

export const FormContact = () => {
  return (
    <VStack w="100%" align="start">
      <Text fontSize="2rem" mb="1.5rem">Entrar em contato</Text>
      <Box>
        <Formik
          initialValues={initiationValues}
          validationSchema={validateSchema}
          onSubmit={(values) => { console.log(values) }}
        >
          {({ values, setFieldValue, errors, handleChange }) => (
            <Form autoComplete="off">
              <VStack spacing={7} mb="2rem">
                <InputControl
                  name="name"
                  inputProps={{
                    placeholder: "Seu nome",
                  }}
                  onChange={handleChange}
                />
                <InputControl
                  name="email"
                  inputProps={{
                    placeholder: "Seu e-mail",
                    type: "email",
                  }}
                  onChange={handleChange}
                />

                <InputControl
                  name="subject"
                  inputProps={{
                    placeholder: "Assunto",
                  }}
                  onChange={handleChange}
                />

                <Textarea
                  isInvalid={!!errors.message}
                  name="message"
                  onChange={handleChange}
                  placeholder='Mensagem'
                  size='lg'
                  h="150px"
                  resize="none"
                  border="1px solid #595e6b"
                  bg="#111725"
                  _hover={{
                    borderColor: "#fec544"
                  }}
                />
              </VStack>
              <Button
                type='submit'
                bg="#fec544"
                size="lg"
                borderRadius="3xl"
                _hover={{
                  bg: "#fec544",
                  opacity: 0.9,
                }}
              >
                Enviar Mensagem
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </VStack>
  )
}
