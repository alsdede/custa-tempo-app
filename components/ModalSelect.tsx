import { Modal, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/Themed";

type ModalSelectProps = {
  isVisible: boolean;
  onClose: () => void;
  onSelectItem: (item: string) => void;
  data: { value: string; label: string }[];
  selected: string;
};

const ModalSelect = ({
  isVisible = false,
  onClose,
  onSelectItem,
  data,
  selected,
}: ModalSelectProps) => {
  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={onClose}>
      {/* Overlay escuro centralizado */}
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.3)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Conteúdo do modal */}
        <View
          style={{
            height: 200,
            width: "90%",
            backgroundColor: "#FFF",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data.map((item) => (
            <TouchableOpacity
              key={item.value}
              onPress={() => {
                onSelectItem(item.value); // passa o valor pro pai
                onClose(); // fecha o modal
              }}
              style={{
                width: "100%",
                padding: 12,
                backgroundColor:
                  item.value === selected ? "#d6d6d6" : "#f9f9f9",
                alignItems: "center",
              }}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default ModalSelect;
