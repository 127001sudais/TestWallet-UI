import ModalLayout from "../../containers/ModalLayout/ModalLayout";

// content
import Content from "../../components/CogBox/Content";
export default function CogBox({ isOpen, toggleModal }) {
  return (
    <ModalLayout title="Settings" isOpen={isOpen} toggleModal={toggleModal}>
      <Content />
    </ModalLayout>
  );
}
