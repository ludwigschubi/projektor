import { StyleSheet } from "react-native";

export enum TextSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export enum TextVariant {
  Regular = "Regular",
  Medium = "Medium",
  Bold = "Bold",
}

export const TextStyleSheet = StyleSheet.create({
  container: {
    width: "100%",
  },
  [TextSize.Large]: {
    fontSize: 20,
  },
  [TextSize.Medium]: {
    fontSize: 16,
  },
  [TextSize.Small]: {
    fontSize: 12,
  },
  [TextVariant.Regular]: {
    fontFamily: "HelveticaNeue-Regular",
  },
  [TextVariant.Medium]: {
    fontFamily: "HelveticaNeue-Medium",
  },
  [TextVariant.Bold]: {
    fontFamily: "HelveticaNeue-Bold",
  },
});
