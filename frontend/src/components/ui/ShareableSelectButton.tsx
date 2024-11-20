import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function ShareableSelectButton({ OnShareable} : { OnShareable: () => void}) {
  return (
    <div className="inline-flex items-center gap-2 w-full">
      <Switch id="switch-01"  onClick={OnShareable}/>
      <Label htmlFor="switch-01" className="sr-only">
        Simple switch
      </Label>
    </div>
  );
}
