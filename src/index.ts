// 1. Export the CSS so the consumer's bundler can extract it
import "./index.css";

// 2. Export our utility for consumers who want to use it
export { cn } from "./utils/cn";

// 3. We will export here next!
export { Button, type ButtonProps } from "@/components/button/Button";
export { Input, type InputProps } from "@/components/input/Input";
export { Textarea, type TextareaProps } from "@/components/textarea/Textarea";
export { Label, type LabelProps } from "@/components/label/Label";
export {
  FileInput,
  type FileInputProps,
} from "@/components/fileInput/FileInput";

export { Spinner, type SpinnerProps } from "@/components/spinner/Spinner";
