import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import FormComodos from "../form/formComodos";

// Define a common type for your data
interface CompartmentData {
  id: string;
  comodo: string;
  dispositivo: string;
  quantidade: number;
  tempoUso: number;
  potencia: number;
}

interface Props {
  modalIsOpen: boolean;
  clickedAppliance?: string;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  compartment: string;
  initialData?: CompartmentData | null;
}

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export default function ModalComodos(props: Props) {
  const { onOpenChange } = useDisclosure();

  let isOpen = props.modalIsOpen;

  let clickedAppliance = props.clickedAppliance;

  let compartment = props.compartment;

  const onClose = () => {
    props.setModalIsOpen(false);
    clickedAppliance = "";
  };

  return (
    <Modal
      backdrop={"blur"}
      isOpen={isOpen}
      onClose={onClose}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-6">
              {props.initialData
                ? "Editar dispositivo"
                : "Adicionar dispositivo"}
            </ModalHeader>
            <ModalBody>
              <FormComodos
                onModalClose={onClose}
                clickedApplaince={clickedAppliance}
                compartment={compartment}
                initialData={props.initialData}
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
