import { Terminal, AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDemo() {
  return (
    <div>
      <div className="space-y-5">
        <Alert className="w-[600px] bg-black text-white border border-gray-500">
          <Terminal className="h-4 w-4 accent-white" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive" className="w-[600px]">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
