import Ionicons from "@expo/vector-icons/Ionicons";

export interface ITasks {
  id: number;
  task: string;
  place: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  progress: number;
  activeStrokeColor: string;
  inActiveStrokeColor: string;
}

export interface ITaskGroups {
  id: number;
  group: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  progress: number;
  totalTasks: number;
  activeStrokeColor: string;
  inActiveStrokeColor: string;
}
