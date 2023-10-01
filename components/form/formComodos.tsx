import React, { useState, useEffect } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 function
import { ModalFooter } from "@nextui-org/react";

import {
  addDataToCompartment,
  editDataInCompartment,
} from "@/app/redux/slices/compartmentSlice";
import { useAppDispatch } from "@/app/redux/hooks";
import deviceOptions from "./devices";

// Define the common type
interface Values {
  id: string;
  comodo: string;
  outro: string;
  dispositivo: string;
  quantidade: number;
  tempoUso: number;
  potencia: number;
}

interface CompartmentData {
  id: string;
  comodo: string;
  dispositivo: string;
  quantidade: number;
  tempoUso: number;
  potencia: number;
}

export default function FormComodos(props: {
  onModalClose: () => void;
  clickedApplaince?: string;
  compartment: string;
  initialData?: CompartmentData | null; // Use the common type here
}) {
  const compartmentDevices = deviceOptions.filter((device) =>
    device.compartments.includes(props.compartment)
  );

  //Store the clicked appliance
  const clickedAppliance = props.clickedApplaince
    ? [props.clickedApplaince]
    : [];

  const [selectedDevice, setSelectedDevice] = useState(""); // State for selected device
  const [selectedDevicePotencia, setSelectedDevicePotencia] = useState(0); // State for selected device potencia

  const dispatch = useAppDispatch();
  const { initialData } = props;

  //Store the selected appliance
  const clickedDevice = initialData?.dispositivo
    ? [initialData?.dispositivo]
    : [];

  useEffect(() => {
    let selectedPotencia;
    if (selectedDevice.length !== 0) {
      selectedPotencia = deviceOptions.find(
        (device) => device.value === selectedDevice
      );
    } else if (clickedAppliance.length !== 0) {
      selectedPotencia = deviceOptions.find(
        (device) => device.value === clickedAppliance[0]
      );
    }

    if (selectedPotencia) {
      setSelectedDevicePotencia(selectedPotencia.potencia);
    }
  }, [selectedDevice, clickedAppliance]);

  const clickedAparelho = () => {
    if (clickedDevice.length !== 0) {
      return clickedDevice;
    }

    if (clickedAppliance.length !== 0) {
      return clickedAppliance;
    }
  };

  return (
    <Formik
      initialValues={{
        id: initialData ? initialData.id : "",
        comodo: props.compartment,
        dispositivo: initialData
          ? initialData.dispositivo
          : props.clickedApplaince
          ? props.clickedApplaince
          : "",
        outro: "",
        quantidade: initialData ? initialData.quantidade : 1,
        tempoUso: initialData ? initialData.tempoUso : 1,
        potencia: initialData ? initialData.potencia : 0,
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        if (props.initialData) {
          // Handle edit logic using initialData.id
          dispatch(
            editDataInCompartment({
              id: props.initialData.id,
              newData: values,
            })
          );
        } else {
          dispatch(
            addDataToCompartment({
              id: uuidv4(),
              comodo: props.compartment,
              dispositivo:
                values.dispositivo == "outros"
                  ? values.outro
                  : values.dispositivo,
              quantidade: values.quantidade,
              tempoUso: values.tempoUso,
              potencia: values.potencia
                ? values.potencia * values.quantidade
                : selectedDevicePotencia * values.quantidade,
            })
          );
        }

        setTimeout(() => {
          setSubmitting(false);
          props.onModalClose();
        }, 500);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        isSubmitting,
        handleSubmit,
        handleBlur,
      }) => (
        <Form>
          <Select
            items={compartmentDevices}
            label="Dispositivo"
            name="dispositivo"
            id="dispositivo"
            placeholder="Selecciona um dispositivo"
            labelPlacement="outside"
            defaultSelectedKeys={clickedAparelho()}
            onChange={(e) => {
              handleChange(e);
              setSelectedDevice(e.target.value);
            }}
          >
            {(deviceOptions) => (
              <SelectItem key={deviceOptions.value}>
                {deviceOptions.label}
              </SelectItem>
            )}
          </Select>

          {selectedDevice == "outros" && ( // Conditionally render input for "Outros"
            <Input
              id="outros"
              name="outro"
              type="text"
              label="Nome do dispositivo"
              placeholder="Digite o nome"
              labelPlacement="outside"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}

          <Input
            id="quantidade"
            name="quantidade"
            type="number"
            label="Quantidade"
            placeholder="1"
            labelPlacement="outside"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={initialData?.quantidade.toString() || "1"}
          />

          <Input
            id="tempoUso"
            name="tempoUso"
            type="number"
            label="Tempo de Uso(Horas)"
            placeholder="1"
            labelPlacement="outside"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={initialData?.tempoUso.toString() || "1"}
          />

          <Input
            key={
              initialData?.potencia.toString() ||
              selectedDevicePotencia.toString() ||
              "0"
            }
            id="potencia"
            name="potencia"
            type="number"
            label="Potência(W)"
            defaultValue={
              initialData?.potencia.toString() ||
              selectedDevicePotencia.toString() ||
              "0"
            }
            placeholder="0"
            labelPlacement="outside"
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={handleBlur}
          />
          <ModalFooter className="pr-0">
            <Button
              color="danger"
              variant="light"
              onClick={props.onModalClose}
              className="ml-2"
            >
              Close
            </Button>
            <Button
              type="submit"
              color="primary"
              isLoading={isSubmitting}
              className="text-white mr-0"
            >
              {initialData?.dispositivo ? "Editar" : "Adicionar"}
            </Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
}
