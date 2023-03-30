import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";

export function BackButton() {
    const { goBack } = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={goBack}
        >
            <Ionicons name="chevron-back-sharp" size={40} color={colors.indigo[400]} />
        </TouchableOpacity>
    )
}