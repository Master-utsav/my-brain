import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function ShareableSelectButton({
  isShareable,
  OnShareable,
}: {
  isShareable: boolean;
  OnShareable: () => void;
}) {
  return (
    <div className="inline-flex items-center gap-2 w-full">
      <Switch
        id="switch-01"
        checked={isShareable} // Controls the switch state
        onChange={OnShareable} // Correct handler for toggling
      />
      <Label htmlFor="switch-01" className="sr-only">
        Simple switch
      </Label>
    </div>
  );
}
