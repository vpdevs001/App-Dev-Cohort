import { View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

interface ProgressCircleProps {
  value: number;
  radius: number;
  activeStrokeWidth: number;
  inActiveStrokeWidth: number;
  inActiveStrokeColor?: string;
  activeStrokeColor?: string;
  progressValueColor: string;
}

const ProgressCircle = ({
  value,
  radius,
  activeStrokeWidth,
  inActiveStrokeWidth,
  progressValueColor,
  inActiveStrokeColor,
  activeStrokeColor,
}: ProgressCircleProps) => {
  return (
    <View>
      <CircularProgress
        value={value}
        radius={radius}
        duration={500}
        activeStrokeWidth={activeStrokeWidth}
        activeStrokeColor={activeStrokeColor}
        inActiveStrokeColor={inActiveStrokeColor}
        inActiveStrokeOpacity={0.5}
        inActiveStrokeWidth={inActiveStrokeWidth}
        valueSuffix="%"
        progressValueColor={progressValueColor}
        maxValue={100}
      />
    </View>
  );
};

export default ProgressCircle;
