// 1. Export the CSS so the consumer's bundler can extract it
import "./index.css";

// 2. Export our utility for consumers who want to use it
export { cn } from "./utils/cn";

// 3. We will export here next!
export { Button, type ButtonProps } from "@/components/button/Button";
