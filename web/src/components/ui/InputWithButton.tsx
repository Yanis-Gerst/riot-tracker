import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import { ArrowBigRight } from "lucide-react";

export const InputWithButton: React.FC<InputProps> = (props) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Email" {...props} />
      <Button type="submit">
        <ArrowBigRight />
      </Button>
    </div>
  );
};
