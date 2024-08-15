import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewNotePage() {
  return (
    <div className="flex justify-center pt-4">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>
            <Input name="title" type="text" placeholder="Title" autoFocus />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            name="content"
            placeholder="Enter your note content here..."
            rows={10}
          />
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
